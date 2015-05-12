chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
{
    tabID       = sender.tab.id;
    currentURL  = sender.tab.url;
	var myid	= chrome.i18n.getMessage("@@extension_id");
    sendResponse(myid);

//chrome-extension://" + whatever_calls_the_ID + "/application.html";

});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    chrome.pageAction.setTitle({
        tabId: tab.id,
        title: 'url=' + tab.url
    });
});