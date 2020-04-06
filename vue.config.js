// eslint-disable-next-line no-unused-vars
const formHtml = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><head><title>Return and Earn Container Search</title><script src="/static/111213/js/perf/stub.js" type="text/javascript"></script><script src="/jslibrary/1579646332224/ui-sfdc-javascript-impl/SfdcCore.js" type="text/javascript"></script><script src="/static/111213/js/picklist4.js" type="text/javascript"></script><script src="/jslibrary/1581015810224/sfdc/VFState.js" type="text/javascript"></script><link class="user" href="/apexpages/slds/latest/assets/styles/salesforce-lightning-design-system-vf.min.css" rel="stylesheet" type="text/css" /><script src="/jslibrary/1581015810224/sfdc/NetworkTracking.js" type="text/javascript"></script><script>try{ NetworkTracking.init('/_ui/networks/tracking/NetworkTrackingServlet', 'network', '0667F0000093G5A'); }catch(x){}try{ NetworkTracking.logPageView();}catch(x){}</script><script>(function(UITheme) {
    UITheme.getUITheme = function() {
        return UserContext.uiTheme;
    };
}(window.UITheme = window.UITheme || {}));</script></head><body class="slds-scope">
    <style type="text/css">

            .slds-scope hr {
                margin:0;
            }

            .search-margin{
                margin-left:10%;
                margin-right:10%;
                margin-top:2%;
            }

    </style>


        <div style="margin-left:10%;margin-right:10%; margin-top: 2%">
          <div class="slds-media">
            <div class="slds-media__figure">
              <span class="slds-icon_container"><img src="/resource/1533521252000/NSWLogo" style="height:70px;" />
              </span>
            </div>


            <div class="slds-text-heading_large slds-text-align_center slds-text-color_default" style="margin-left:10%;margin-right:10%;">
                <br />
                  <b> Return and Earn Container Search <br /> </b>
                <br />
            </div>

          </div>
        </div>



        <div class="slds-grid slds-wrap slds-grid_align-center" style="margin-left:10%; margin-right:10%; margin-top: 2%;">

            <div>
<form id="j_id0:j_id5" name="j_id0:j_id5" method="post" action="/CDSContainerSearchPage" enctype="application/x-www-form-urlencoded">
<input type="hidden" name="j_id0:j_id5" value="j_id0:j_id5" />

                    <div>

                        <br />

                        <div class="slds-form-element slds-align_absolute-left ">
                            <p>
                                Use the Return and Earn Container Search to find information about containers registered with the Environment Protection Authority (EPA) for approval. <br /><br />

                                If you have any queries, please email container.approval@epa.nsw.gov.au.
                            </p>
                            <br />
                        </div>

                    </div>



                    <div class="slds-form-element slds-align_absolute-center">

                      <div>
                      <article class="slds-tile">
                        <h3 class="slds-truncate"><b>Registration status</b></h3>
                        <br />
                        <div class="slds-tile__detail slds-text-body_small" style="margin-left: 2%">
                          <dl class="slds-list_horizontal slds-wrap">
                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Pending payment </dt>
                            <dd class="slds-item_detail">Container approval application awaiting fee payment before EPA review.</dd>
                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Pending approval </dt>
                            <dd class="slds-item_detail">Container approval application awaiting EPA decision.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Active </dt>
                            <dd class="slds-item_detail">Container approved by the EPA.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Rejected </dt>
                            <dd class="slds-item_detail">Container approval application rejected by the EPA.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Expired </dt>
                            <dd class="slds-item_detail">Container approval expired.</dd>

                             <dt class="slds-item_label slds-text-color_weak slds-truncate">Revoked </dt>
                             <dd class="slds-item_detail">Container approval has been revoked by the EPA.</dd>

                          </dl>
                        </div>
                      </article>
                    </div>
                    </div>


                    <br />



                    <table class="slds-table ">
                        <thead>

                            <b> Search Criteria </b>

                        </thead>

                        <tbody>
                            <tr>
                              <td data-label="Pending payment">
                                 <div>
                                    <label class="slds-form-element__label">Product Name</label>
                                    <div class="slds-form-element__control"><input type="text" name="j_id0:j_id5:j_id7" class="slds-input" />
                                    </div>
                                  </div>
                              </td>
                              <td>
                                  <div>
                                  <label class="slds-form-element__label">Product Group</label>
                                      <div class="slds-form-element__control">
                                          <div class="slds-select_container"><select name="j_id0:j_id5:j_id9" class="slds-select" size="1">	<option value="--None--">--None--</option>
	<option value="Beer">Beer</option>
	<option value="Cider/fruit based alcohol">Cider/fruit based alcohol</option>
	<option value="Energy drinks (carbonated or non-carbonated)">Energy drinks (carbonated or non-carbonated)</option>
	<option value="Flavoured milk">Flavoured milk</option>
	<option value="Flavoured water/soft drink (carbonated)">Flavoured water/soft drink (carbonated)</option>
	<option value="Flavoured water/soft drink/ sports drink (non-carb)">Flavoured water/soft drink/ sports drink (non-carb)</option>
	<option value="Fruit juice">Fruit juice</option>
	<option value="Plain water (carbonated or non-carbonated)">Plain water (carbonated or non-carbonated)</option>
	<option value="Premixed alcoholic beverages">Premixed alcoholic beverages</option>
	<option value="Spirit">Spirit</option>
	<option value="Wine">Wine</option>
	<option value="Other">Other</option>
</select>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                              <div>
                                <label class="slds-form-element__label">Barcode</label>
                                <div class="slds-form-element__control"><input type="text" name="j_id0:j_id5:j_id12" class="slds-input" />
                                </div>
                              </div>
                              </td>

                              <td>
                                  <div>
                                  <label class="slds-form-element__label">Material Type</label>
                                  <div class="slds-form-element__control">
                                      <div class="slds-select_container"><select name="j_id0:j_id5:j_id14" class="slds-select" size="1">	<option value="--None--">--None--</option>
	<option value="Aluminium">Aluminium</option>
	<option value="Cask (cardboard, foil and/or plastic)">Cask (cardboard, foil and/or plastic)</option>
	<option value="Glass">Glass</option>
	<option value="HDPE">HDPE</option>
	<option value="LDPE">LDPE</option>
	<option value="LPB Aseptic (UHT or long life packs)">LPB Aseptic (UHT or long life packs)</option>
	<option value="LPB Gable top">LPB Gable top</option>
	<option value="PET">PET</option>
	<option value="PVC">PVC</option>
	<option value="PLA Bio Polymer">PLA Bio Polymer</option>
	<option value="Steel (cans)">Steel (cans)</option>
	<option value="Other">Other</option>
</select>
                                      </div>
                                  </div>
                                  </div>
                              </td>

                            </tr>
                        </tbody>
                    </table>



                    <div class="slds-p-horizontal--small slds-m-top--medium slds-size--1-of-1 slds-align--absolute-center"><input type="submit" name="j_id0:j_id5:j_id17" value="Return and Earn Container Search" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id18" value="Download List" disabled="disabled" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id19" value="Finish" class="slds-button slds-button--brand" />

                    </div>

                    <br />

                    <br />



                    <div>
                    </div>



                    <div class="slds-p-horizontal--small slds-m-top--medium slds-size--1-of-1 slds-align--absolute-center" style="display: none"><input type="submit" name="j_id0:j_id5:j_id53" value="Return and Earn Container Search" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id54" value="Download List" disabled="disabled" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id55" value="Finish" class="slds-button slds-button--brand" />
                    </div><div id="j_id0:j_id5:j_id58"></div>
</form><span id="ajax-view-state-page-container" style="display: none"><span id="ajax-view-state" style="display: none"><input type="hidden"  id="com.salesforce.visualforce.ViewState" name="com.salesforce.visualforce.ViewState" value="i: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" /><input type="hidden"  id="com.salesforce.visualforce.ViewStateVersion" name="com.salesforce.visualforce.ViewStateVersion" value="202004021945180271" /><input type="hidden"  id="com.salesforce.visualforce.ViewStateMAC" name="com.salesforce.visualforce.ViewStateMAC" value="AGV5SnViMjVqWlNJNklsa3pPREo2TTA5clIzcHRRWFF6WVhoTE1pMXRUbU5PTW1zeVRtUTFkVVU1ZGtocFZHTm5helJJYmtGY2RUQXdNMlFpTENKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUlzSW10cFpDSTZJbnRjSW5SY0lqcGNJakF3UkRkR01EQXdNREF3Y0ROdVRGd2lMRndpZGx3aU9sd2lNREpITjBZd01EQXdNREJCU2psTFhDSXNYQ0poWENJNlhDSjJabk5wWjI1cGJtZHJaWGxjSWl4Y0luVmNJanBjSWpBd05UZEdNREF3TURBMFNGZGhXbHdpZlNJc0ltTnlhWFFpT2xzaWFXRjBJbDBzSW1saGRDSTZNVFU0TmpFM05EVXhOakUxTWl3aVpYaHdJam93ZlE9PS4uMS1KQWQ3WHFVelVSV09xb0QzSG9vNEZqaVp4LXNmTGRfUzJtLXBDbnN3UT0=" /></span></span>
            </div>
    </div><script type="text/javascript">Sfdc.onReady(function(){
	SfdcApp && SfdcApp.Visualforce && SfdcApp.Visualforce.VSManager && SfdcApp.Visualforce.VSManager.vfPrepareForms(["j_id0:j_id5"]);

});</script></body></html>`;

// eslint-disable-next-line no-unused-vars
const resultHtml = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><head><title>Return and Earn Container Search</title><script src="/static/111213/js/perf/stub.js" type="text/javascript"></script><script src="/jslibrary/1579646332224/ui-sfdc-javascript-impl/SfdcCore.js" type="text/javascript"></script><script src="/static/111213/js/picklist4.js" type="text/javascript"></script><script src="/jslibrary/1581015810224/sfdc/VFState.js" type="text/javascript"></script><link class="user" href="/apexpages/slds/latest/assets/styles/salesforce-lightning-design-system-vf.min.css" rel="stylesheet" type="text/css" /><script src="/jslibrary/1581015810224/sfdc/NetworkTracking.js" type="text/javascript"></script><script>try{ NetworkTracking.init('/_ui/networks/tracking/NetworkTrackingServlet', 'network', '0667F0000093G5A'); }catch(x){}try{ NetworkTracking.logPageView();}catch(x){}</script><script>(function(UITheme) {
    UITheme.getUITheme = function() {
        return UserContext.uiTheme;
    };
}(window.UITheme = window.UITheme || {}));</script></head><body class="slds-scope">
    <style type="text/css">

            .slds-scope hr {
                margin:0;
            }

            .search-margin{
                margin-left:10%;
                margin-right:10%;
                margin-top:2%;
            }

    </style>


        <div style="margin-left:10%;margin-right:10%; margin-top: 2%">
          <div class="slds-media">
            <div class="slds-media__figure">
              <span class="slds-icon_container"><img src="/resource/1533521252000/NSWLogo" style="height:70px;" />
              </span>
            </div>


            <div class="slds-text-heading_large slds-text-align_center slds-text-color_default" style="margin-left:10%;margin-right:10%;">
                <br />
                  <b> Return and Earn Container Search <br /> </b>
                <br />
            </div>

          </div>
        </div>



        <div class="slds-grid slds-wrap slds-grid_align-center" style="margin-left:10%; margin-right:10%; margin-top: 2%;">

            <div>
<form id="j_id0:j_id5" name="j_id0:j_id5" method="post" action="/CDSContainerSearchPage" enctype="application/x-www-form-urlencoded">
<input type="hidden" name="j_id0:j_id5" value="j_id0:j_id5" />

                    <div>

                        <br />

                        <div class="slds-form-element slds-align_absolute-left ">
                            <p>
                                Use the Return and Earn Container Search to find information about containers registered with the Environment Protection Authority (EPA) for approval. <br /><br />

                                If you have any queries, please email container.approval@epa.nsw.gov.au.
                            </p>
                            <br />
                        </div>

                    </div>



                    <div class="slds-form-element slds-align_absolute-center">

                      <div>
                      <article class="slds-tile">
                        <h3 class="slds-truncate"><b>Registration status</b></h3>
                        <br />
                        <div class="slds-tile__detail slds-text-body_small" style="margin-left: 2%">
                          <dl class="slds-list_horizontal slds-wrap">
                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Pending payment </dt>
                            <dd class="slds-item_detail">Container approval application awaiting fee payment before EPA review.</dd>
                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Pending approval </dt>
                            <dd class="slds-item_detail">Container approval application awaiting EPA decision.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Active </dt>
                            <dd class="slds-item_detail">Container approved by the EPA.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Rejected </dt>
                            <dd class="slds-item_detail">Container approval application rejected by the EPA.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Expired </dt>
                            <dd class="slds-item_detail">Container approval expired.</dd>

                             <dt class="slds-item_label slds-text-color_weak slds-truncate">Revoked </dt>
                             <dd class="slds-item_detail">Container approval has been revoked by the EPA.</dd>

                          </dl>
                        </div>
                      </article>
                    </div>
                    </div>


                    <br />



                    <table class="slds-table ">
                        <thead>

                            <b> Search Criteria </b>

                        </thead>

                        <tbody>
                            <tr>
                              <td data-label="Pending payment">
                                 <div>
                                    <label class="slds-form-element__label">Product Name</label>
                                    <div class="slds-form-element__control"><input type="text" name="j_id0:j_id5:j_id7" value="" class="slds-input" />
                                    </div>
                                  </div>
                              </td>
                              <td>
                                  <div>
                                  <label class="slds-form-element__label">Product Group</label>
                                      <div class="slds-form-element__control">
                                          <div class="slds-select_container"><select name="j_id0:j_id5:j_id9" class="slds-select" size="1">	<option value="--None--" selected="selected">--None--</option>
	<option value="Beer">Beer</option>
	<option value="Cider/fruit based alcohol">Cider/fruit based alcohol</option>
	<option value="Energy drinks (carbonated or non-carbonated)">Energy drinks (carbonated or non-carbonated)</option>
	<option value="Flavoured milk">Flavoured milk</option>
	<option value="Flavoured water/soft drink (carbonated)">Flavoured water/soft drink (carbonated)</option>
	<option value="Flavoured water/soft drink/ sports drink (non-carb)">Flavoured water/soft drink/ sports drink (non-carb)</option>
	<option value="Fruit juice">Fruit juice</option>
	<option value="Plain water (carbonated or non-carbonated)">Plain water (carbonated or non-carbonated)</option>
	<option value="Premixed alcoholic beverages">Premixed alcoholic beverages</option>
	<option value="Spirit">Spirit</option>
	<option value="Wine">Wine</option>
	<option value="Other">Other</option>
</select>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                              <div>
                                <label class="slds-form-element__label">Barcode</label>
                                <div class="slds-form-element__control"><input type="text" name="j_id0:j_id5:j_id12" value="9300605127272" class="slds-input" />
                                </div>
                              </div>
                              </td>

                              <td>
                                  <div>
                                  <label class="slds-form-element__label">Material Type</label>
                                  <div class="slds-form-element__control">
                                      <div class="slds-select_container"><select name="j_id0:j_id5:j_id14" class="slds-select" size="1">	<option value="--None--" selected="selected">--None--</option>
	<option value="Aluminium">Aluminium</option>
	<option value="Cask (cardboard, foil and/or plastic)">Cask (cardboard, foil and/or plastic)</option>
	<option value="Glass">Glass</option>
	<option value="HDPE">HDPE</option>
	<option value="LDPE">LDPE</option>
	<option value="LPB Aseptic (UHT or long life packs)">LPB Aseptic (UHT or long life packs)</option>
	<option value="LPB Gable top">LPB Gable top</option>
	<option value="PET">PET</option>
	<option value="PVC">PVC</option>
	<option value="PLA Bio Polymer">PLA Bio Polymer</option>
	<option value="Steel (cans)">Steel (cans)</option>
	<option value="Other">Other</option>
</select>
                                      </div>
                                  </div>
                                  </div>
                              </td>

                            </tr>
                        </tbody>
                    </table>



                    <div class="slds-p-horizontal--small slds-m-top--medium slds-size--1-of-1 slds-align--absolute-center"><input type="submit" name="j_id0:j_id5:j_id17" value="Return and Earn Container Search" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id18" value="Download List" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id19" value="Finish" class="slds-button slds-button--brand" />

                    </div>

                    <br />

                    <br />



                    <div><span id="j_id0:j_id5:containerTable" title="Search Results">
                            <div style="text-align: center">
                                  <p> Found 1 record(s) matching the search criteria.</p>
                                  <br />
                            </div>
                            <table class="slds-table slds-table_resizable-cols slds-table_fixed-layout slds-table_bordered" role="grid">
                                <thead>
                                <tr class="slds-line-height_reset">
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Product Name">Product Name</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Product Group">Product Group</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Barcode">Barcode</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Material Type">Material Type</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Designed Capacity (ml)">Designed Capacity (ml)</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Registration Status">Registration Status</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Beverage Registrations #">Beverage Registrations #</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="NSW Refund Logo">NSW Refund Logo</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                    <th class="slds-is-sortable slds-is-resizable slds-text-title_caps" scope="col">
                                    <a class="slds-th__action slds-text-link_reset" href="javascript:void(0);" tabindex="0">
                                    <span class="slds-assistive-text">Sort </span>
                                    <span class="slds-truncate" title="Removable Lid?">Removable Lid?</span>
                                    <div class="slds-icon_container">
                                    <svg aria-hidden="true" class="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                    </div>
                                    <span aria-atomic="true" aria-live="assertive" class="slds-assistive-text"></span>
                                    </a>
                                    <div class="slds-resizable">
                                    <input class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-101" max="1000" min="20" tabindex="0" type="range" />
                                    <span class="slds-resizable__handle">
                                    <span class="slds-resizable__divider"></span>
                                    </span>
                                    </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr class="slds-hint-parent">
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate"><a href="/CDSContainerDetailPage?id=a0K7F00000mxpgdUAA" target="_blank">
                                                        SUSTAGEN Vanilla 24x250ml N1 AU</a>
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">Flavoured milk
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">9300605127272
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">LPB Aseptic (UHT or long life packs)
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">250
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">Active
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">BR-0318882
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">No
                                                    </div>
                                            </td>
                                            <td class="slds-text-align_left" role="gridcell" style="width: 3.25rem;">
                                                    <div class="slds-truncate">
                                                    </div>
                                            </td>
                                    </tr>
                            </tbody>
                            </table></span>
                    </div>



                    <div class="slds-p-horizontal--small slds-m-top--medium slds-size--1-of-1 slds-align--absolute-center" style=""><input type="submit" name="j_id0:j_id5:j_id53" value="Return and Earn Container Search" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id54" value="Download List" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id55" value="Finish" class="slds-button slds-button--brand" />
                    </div><div id="j_id0:j_id5:j_id58"></div>
</form><span id="ajax-view-state-page-container" style="display: none"><span id="ajax-view-state" style="display: none"><input type="hidden"  id="com.salesforce.visualforce.ViewState" name="com.salesforce.visualforce.ViewState" value="i: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" /><input type="hidden"  id="com.salesforce.visualforce.ViewStateVersion" name="com.salesforce.visualforce.ViewStateVersion" value="202004021945180271" /><input type="hidden"  id="com.salesforce.visualforce.ViewStateMAC" name="com.salesforce.visualforce.ViewStateMAC" value="AGV5SnViMjVqWlNJNkltVndNMlYyYTFGU2NXWlpjVE5VY1RaQlF6WktkR1ZUWkZaRFNXaHRNVTl1YW05bVlXRk5ObE5rUm5OY2RUQXdNMlFpTENKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUlzSW10cFpDSTZJbnRjSW5SY0lqcGNJakF3UkRkR01EQXdNREF3Y0ROdVRGd2lMRndpZGx3aU9sd2lNREpITjBZd01EQXdNREJCU2psTFhDSXNYQ0poWENJNlhDSjJabk5wWjI1cGJtZHJaWGxjSWl4Y0luVmNJanBjSWpBd05UZEdNREF3TURBMFNGZGhXbHdpZlNJc0ltTnlhWFFpT2xzaWFXRjBJbDBzSW1saGRDSTZNVFU0TmpFM05UVTFORFV3TkN3aVpYaHdJam93ZlE9PS4uUldSTkNfWnMwTGxCV0JjcFNlU0lGX2Z4WEV1eHduOW1Sdk9iUF9QYjRlOD0=" /></span></span>
            </div>
    </div><script type="text/javascript">Sfdc.onReady(function(){
	SfdcApp && SfdcApp.Visualforce && SfdcApp.Visualforce.VSManager && SfdcApp.Visualforce.VSManager.vfPrepareForms(["j_id0:j_id5"]);

});</script></body></html>`;

// eslint-disable-next-line no-unused-vars
const resultHtmlNotFound = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><head><title>Return and Earn Container Search</title><script src="/static/111213/js/perf/stub.js" type="text/javascript"></script><script src="/jslibrary/1579646332224/ui-sfdc-javascript-impl/SfdcCore.js" type="text/javascript"></script><script src="/static/111213/js/picklist4.js" type="text/javascript"></script><script src="/jslibrary/1581015810224/sfdc/VFState.js" type="text/javascript"></script><link class="user" href="/apexpages/slds/latest/assets/styles/salesforce-lightning-design-system-vf.min.css" rel="stylesheet" type="text/css" /><script src="/jslibrary/1581015810224/sfdc/NetworkTracking.js" type="text/javascript"></script><script>try{ NetworkTracking.init('/_ui/networks/tracking/NetworkTrackingServlet', 'network', '0667F0000093G5A'); }catch(x){}try{ NetworkTracking.logPageView();}catch(x){}</script><script>(function(UITheme) {
    UITheme.getUITheme = function() {
        return UserContext.uiTheme;
    };
}(window.UITheme = window.UITheme || {}));</script></head><body class="slds-scope">
    <style type="text/css">

            .slds-scope hr {
                margin:0;
            }

            .search-margin{
                margin-left:10%;
                margin-right:10%;
                margin-top:2%;
            }

    </style>


        <div style="margin-left:10%;margin-right:10%; margin-top: 2%">
          <div class="slds-media">
            <div class="slds-media__figure">
              <span class="slds-icon_container"><img src="/resource/1533521252000/NSWLogo" style="height:70px;" />
              </span>
            </div>


            <div class="slds-text-heading_large slds-text-align_center slds-text-color_default" style="margin-left:10%;margin-right:10%;">
                <br />
                  <b> Return and Earn Container Search <br /> </b>
                <br />
            </div>

          </div>
        </div>



        <div class="slds-grid slds-wrap slds-grid_align-center" style="margin-left:10%; margin-right:10%; margin-top: 2%;">

            <div>
<form id="j_id0:j_id5" name="j_id0:j_id5" method="post" action="/CDSContainerSearchPage" enctype="application/x-www-form-urlencoded">
<input type="hidden" name="j_id0:j_id5" value="j_id0:j_id5" />

                    <div>

                        <br />

                        <div class="slds-form-element slds-align_absolute-left ">
                            <p>
                                Use the Return and Earn Container Search to find information about containers registered with the Environment Protection Authority (EPA) for approval. <br /><br />

                                If you have any queries, please email container.approval@epa.nsw.gov.au.
                            </p>
                            <br />
                        </div>

                    </div>



                    <div class="slds-form-element slds-align_absolute-center">

                      <div>
                      <article class="slds-tile">
                        <h3 class="slds-truncate"><b>Registration status</b></h3>
                        <br />
                        <div class="slds-tile__detail slds-text-body_small" style="margin-left: 2%">
                          <dl class="slds-list_horizontal slds-wrap">
                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Pending payment </dt>
                            <dd class="slds-item_detail">Container approval application awaiting fee payment before EPA review.</dd>
                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Pending approval </dt>
                            <dd class="slds-item_detail">Container approval application awaiting EPA decision.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Active </dt>
                            <dd class="slds-item_detail">Container approved by the EPA.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Rejected </dt>
                            <dd class="slds-item_detail">Container approval application rejected by the EPA.</dd>

                            <dt class="slds-item_label slds-text-color_weak slds-truncate">Expired </dt>
                            <dd class="slds-item_detail">Container approval expired.</dd>

                             <dt class="slds-item_label slds-text-color_weak slds-truncate">Revoked </dt>
                             <dd class="slds-item_detail">Container approval has been revoked by the EPA.</dd>

                          </dl>
                        </div>
                      </article>
                    </div>
                    </div>


                    <br />



                    <table class="slds-table ">
                        <thead>

                            <b> Search Criteria </b>

                        </thead>

                        <tbody>
                            <tr>
                              <td data-label="Pending payment">
                                 <div>
                                    <label class="slds-form-element__label">Product Name</label>
                                    <div class="slds-form-element__control"><input type="text" name="j_id0:j_id5:j_id7" value="" class="slds-input" />
                                    </div>
                                  </div>
                              </td>
                              <td>
                                  <div>
                                  <label class="slds-form-element__label">Product Group</label>
                                      <div class="slds-form-element__control">
                                          <div class="slds-select_container"><select name="j_id0:j_id5:j_id9" class="slds-select" size="1">	<option value="--None--" selected="selected">--None--</option>
	<option value="Beer">Beer</option>
	<option value="Cider/fruit based alcohol">Cider/fruit based alcohol</option>
	<option value="Energy drinks (carbonated or non-carbonated)">Energy drinks (carbonated or non-carbonated)</option>
	<option value="Flavoured milk">Flavoured milk</option>
	<option value="Flavoured water/soft drink (carbonated)">Flavoured water/soft drink (carbonated)</option>
	<option value="Flavoured water/soft drink/ sports drink (non-carb)">Flavoured water/soft drink/ sports drink (non-carb)</option>
	<option value="Fruit juice">Fruit juice</option>
	<option value="Plain water (carbonated or non-carbonated)">Plain water (carbonated or non-carbonated)</option>
	<option value="Premixed alcoholic beverages">Premixed alcoholic beverages</option>
	<option value="Spirit">Spirit</option>
	<option value="Wine">Wine</option>
	<option value="Other">Other</option>
</select>
                                          </div>
                                      </div>
                                  </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                              <div>
                                <label class="slds-form-element__label">Barcode</label>
                                <div class="slds-form-element__control"><input type="text" name="j_id0:j_id5:j_id12" value="93006051272729" class="slds-input" />
                                </div>
                              </div>
                              </td>

                              <td>
                                  <div>
                                  <label class="slds-form-element__label">Material Type</label>
                                  <div class="slds-form-element__control">
                                      <div class="slds-select_container"><select name="j_id0:j_id5:j_id14" class="slds-select" size="1">	<option value="--None--" selected="selected">--None--</option>
	<option value="Aluminium">Aluminium</option>
	<option value="Cask (cardboard, foil and/or plastic)">Cask (cardboard, foil and/or plastic)</option>
	<option value="Glass">Glass</option>
	<option value="HDPE">HDPE</option>
	<option value="LDPE">LDPE</option>
	<option value="LPB Aseptic (UHT or long life packs)">LPB Aseptic (UHT or long life packs)</option>
	<option value="LPB Gable top">LPB Gable top</option>
	<option value="PET">PET</option>
	<option value="PVC">PVC</option>
	<option value="PLA Bio Polymer">PLA Bio Polymer</option>
	<option value="Steel (cans)">Steel (cans)</option>
	<option value="Other">Other</option>
</select>
                                      </div>
                                  </div>
                                  </div>
                              </td>

                            </tr>
                        </tbody>
                    </table>



                    <div class="slds-p-horizontal--small slds-m-top--medium slds-size--1-of-1 slds-align--absolute-center"><input type="submit" name="j_id0:j_id5:j_id17" value="Return and Earn Container Search" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id18" value="Download List" disabled="disabled" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id19" value="Finish" class="slds-button slds-button--brand" />

                    </div><span id="j_id0:j_id5:j_id21">

                        <div class="slds-notify slds-theme_alert-texture slds-theme_error" role="alert" style="margin-left:10%;margin-top:2%;margin-right:10%;">
                              <span class="slds-assistive-text">error</span>
                              <span class="slds-icon_container slds-icon-utility-ban slds-m-right_x-small">
                                <svg aria-hidden="true" class="slds-icon slds-icon_x-small"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#ban" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                              </span>
                              <h2 style="text-align: center;">No container found. Please try a different search.</h2>
                              <button class="slds-button slds-button_icon slds-notify__close slds-button_icon-inverse" title="Close">
                                <svg aria-hidden="true" class="slds-button__icon"><use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>
                                <span class="slds-assistive-text">Close</span>
                              </button>
                        </div></span>

                    <br />

                    <br />



                    <div>
                    </div>



                    <div class="slds-p-horizontal--small slds-m-top--medium slds-size--1-of-1 slds-align--absolute-center" style="display: none"><input type="submit" name="j_id0:j_id5:j_id53" value="Return and Earn Container Search" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id54" value="Download List" disabled="disabled" class="slds-button slds-button--brand" /><input type="submit" name="j_id0:j_id5:j_id55" value="Finish" class="slds-button slds-button--brand" />
                    </div><div id="j_id0:j_id5:j_id58"></div>
</form><span id="ajax-view-state-page-container" style="display: none"><span id="ajax-view-state" style="display: none"><input type="hidden"  id="com.salesforce.visualforce.ViewState" name="com.salesforce.visualforce.ViewState" value="i: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" /><input type="hidden"  id="com.salesforce.visualforce.ViewStateVersion" name="com.salesforce.visualforce.ViewStateVersion" value="202004021945180271" /><input type="hidden"  id="com.salesforce.visualforce.ViewStateMAC" name="com.salesforce.visualforce.ViewStateMAC" value="AGV5SnViMjVqWlNJNkltUndkMk5oYTFCVGFFNU9TVzVoWmxaZlZXbHhWa1JOWTBsWldEVkNhRkZKUldOVlJ6Qk5kMlpWZEdOY2RUQXdNMlFpTENKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUlzSW10cFpDSTZJbnRjSW5SY0lqcGNJakF3UkRkR01EQXdNREF3Y0ROdVRGd2lMRndpZGx3aU9sd2lNREpITjBZd01EQXdNREJCU2psTFhDSXNYQ0poWENJNlhDSjJabk5wWjI1cGJtZHJaWGxjSWl4Y0luVmNJanBjSWpBd05UZEdNREF3TURBMFNGZGhXbHdpZlNJc0ltTnlhWFFpT2xzaWFXRjBJbDBzSW1saGRDSTZNVFU0TmpFM056UXdNemMxTlN3aVpYaHdJam93ZlE9PS4uTmFKTTZXQ2d2VExwdEIwY0FSdm11dTVrT0xlTHRnY0ZfOXFzWUFpX2NDbz0=" /></span></span>
            </div>
    </div><script type="text/javascript">Sfdc.onReady(function(){
	SfdcApp && SfdcApp.Visualforce && SfdcApp.Visualforce.VSManager && SfdcApp.Visualforce.VSManager.vfPrepareForms(["j_id0:j_id5"]);

});</script></body></html>`;

module.exports = {
  devServer: {
    proxy: {
      // Proxies requests to /proxy/* to the proxy endpoint specified in .env, removing the /proxy prefix
      // So, if the proxy is https://cds.epa.nsw.gov.au, a request to /proxy/CDSContainerSearchPage
      // will be proxied to https://cds.epa.nsw.gov.au/CDSContainerSearchPage
      '^/proxy': {
        target: process.env.VUE_APP_PROXY_URL,
        changeOrigin: true,
        pathRewrite: function(path) {
          return path.replace('/proxy', '');
        },
        // Intercept and handle responses locally to avoid spamming the live search
        // form during development
        // selfHandleResponse: true,
        // onProxyReq(proxyReq, req, res) {
        //   console.dir(req.body, { colors: true });
        //   res.status(200).send(req.method === 'GET' ? formHtml : resultHtml);
        // },
      },
    },
  },
};
