chrome.extension.sendRequest({
    requestType: 'getExtensionId',
}, function(response){
    extensionId = response;
});

var extensionId = null;
jQuery(document).ready(function()
{   
	if(extensionId == null) return;
	var js = '(function() {var po = document.createElement("script");po.type = "text/javascript";po.async = true;po.src = "chrome-extension://' + extensionId + '/js/injection.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po, s);})();';

	var scriptElem = jQuery('<script id="SkipInjection" class="' + extensionId + '" type="text/javascript"></script>');
	scriptElem.html(js);
	jQuery('body').append(scriptElem);
});
