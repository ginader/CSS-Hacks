function getStyle(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}

function isVisible(id){
	return getStyle(document.getElementById(id), "display") == "block";
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

console.log(BrowserDetect.browser.toLowerCase());
console.log(BrowserDetect.version);

if(	BrowserDetect.browser.toLowerCase() == 'chrome' || BrowserDetect.browser.toLowerCase() == 'safari'){
	test( "webkit", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( isVisible("webkit") );
		ok( !isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'firefox' && BrowserDetect.version == 2){
	test( "firefox 2", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'firefox' && BrowserDetect.version == 3){
	test( "firefox 3", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( isVisible("firefox2") );
		ok( isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'firefox' && BrowserDetect.version == 3.5){
	test( "firefox 3.5", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( isVisible("firefox2") );
		ok( isVisible("firefox3") );
		ok( isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'firefox' && BrowserDetect.version == 3.6){
	test( "firefox 3.6", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( isVisible("firefox2") );
		ok( isVisible("firefox3") );
		ok( isVisible("firefox3_5") );
		ok( isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'firefox' && BrowserDetect.version >= 4){
	test( "firefox 4+", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( isVisible("firefox2") );
		ok( isVisible("firefox3") );
		ok( isVisible("firefox3_5") );
		ok( isVisible("firefox3_6") );
		ok( isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'explorer' && BrowserDetect.version == 6){
	test( "Internet Explorer 6", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( !isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( isVisible("ie6andie7") );
		ok( isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'explorer' && BrowserDetect.version == 7){
	test( "Internet Explorer 7", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( !isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( isVisible("ie7") );
		ok( isVisible("ie6andie7") );
		ok( isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'explorer' && BrowserDetect.version == 8){
	test( "Internet Explorer 8", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( !isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( isVisible("ie6andie7andie8andie9") );
		ok( isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'explorer' && BrowserDetect.version == 9){
	test( "Internet Explorer 9", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( !isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( isVisible("ie9") );
		ok( !isVisible("ie10") );
	});
}
if(	BrowserDetect.browser.toLowerCase() == 'explorer' && BrowserDetect.version == 10){
	test( "Internet Explorer 10", function() {
		ok( !isVisible("opera") );
		ok( !isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( !isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( isVisible("ie10") );
	});
}

