import axios from 'axios';

export function checkContainer(barcode) {
  return axios
    .get('/proxy/CDSContainerSearchPage')
    .then(({ data }) => {
      return handleInitialGet(barcode, data);
    })
    .then(randomWait)
    .then(performSearch);
}

/**
 * Gets the search page to extract the required state data
 */
function handleInitialGet(barcode, searchPageHtml) {
  const barcodeInputName = 'j_id0:j_id5:j_id12';
  const form = extractFormData(searchPageHtml);

  form.set(barcodeInputName, barcode);

  return Promise.resolve(form);
}

/**
 * Extract the default form data and view state from the initial search page.
 */
function extractFormData(searchPageHtml) {
  const doc = new DOMParser().parseFromString(searchPageHtml, 'text/html');
  const formEl = doc.querySelector('form');

  if (formEl == null) {
    console.error('Form not found on search page', searchPageHtml);
    return {};
  }

  const fields = Array.from(
    formEl.querySelectorAll('input:not([type="submit"]), select')
  );

  fields.push(doc.querySelector('#com\\.salesforce\\.visualforce\\.ViewState'));
  fields.push(
    doc.querySelector('#com\\.salesforce\\.visualforce\\.ViewStateVersion')
  );
  fields.push(
    doc.querySelector('#com\\.salesforce\\.visualforce\\.ViewStateMAC')
  );
  fields.push(
    doc.querySelector('input[value="Return and Earn Container Search"]')
  );

  const form = new URLSearchParams();

  fields
    .filter(field => field !== null)
    .forEach(field => {
      form.append(field.getAttribute('name'), field.value);
    });

  return form;
}

/**
 * Wait for a random number of milliseconds between 300 and 500, then return the given data.
 */
function randomWait(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, randomInteger(300, 500));
  });
}

/**
 * Perform the search by posting the given form data to the search handler.
 */
function performSearch(form) {
  return axios.post('/proxy/CDSContainerSearchPage', form).then(({ data }) => {
    const products = extractResults(data);
    return products[0];
  });
}

/**
 * Extract the container data from the given search results page.
 */
function extractResults(searchResultsHtml) {
  const doc = new DOMParser().parseFromString(searchResultsHtml, 'text/html');
  const resultsTable = doc.querySelector('span[title="Search Results"] table');

  if (resultsTable === null) {
    return [];
  }

  const products = [];
  const columns = Array.from(resultsTable.querySelectorAll('thead th')).map(
    th => {
      const text = th.querySelector('a .slds-truncate'); // Holds the main <th> text
      return text ? text.textContent.trim() : null;
    }
  );

  Array.from(resultsTable.querySelectorAll('tbody tr')).forEach(tr => {
    const product = {};
    const data = Array.from(tr.querySelectorAll('td')).map(td => {
      const text = td.querySelector('.slds-truncate'); // Holds the main <td> text
      return text ? text.textContent.trim() : null;
    });

    const registrationStatusHelp = {
      'Pending Payment':
        'Container approval application awaiting fee payment before EPA review.',
      'Pending Approval':
        'Container approval application awaiting EPA decision.',
      Active: 'Container approved by the EPA.',
      Rejected: 'Container approval application rejected by the EPA.',
      Expired: 'Container approval expired.',
      Revoked: 'Container approval has been revoked by the EPA.',
      undefined: '',
    };

    columns.forEach((column, i) => {
      const value = data[i];

      product[column] = {
        label: column,
        value: value,
        help:
          column == 'Registration Status' ? registrationStatusHelp[value] : '',
      };

      if (typeof value === 'string' && value.trim().length === 0) {
        product[column].value = 'N/A';
      }
    });

    products.push(product);
  });

  return products;
}

/**
 * Get a random integer between the given min and max (inclusive).
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
