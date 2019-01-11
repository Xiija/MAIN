chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://xiija.github.io/MAIN/matrix-codefall-1-1-0/index.html"
		});
	});
});
