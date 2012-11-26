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

var ua = $.browser;
var uav = parseInt(ua.version,10);

if( $.browser.opera ){
	test( "opera", function() {
		ok( isVisible("opera") );
		ok( isVisible("opera2") );
		ok( !isVisible("webkit") );
		ok( !isVisible("firefox2") );
		ok( !isVisible("firefox3") );
		ok( !isVisible("firefox3_5") );
		ok( !isVisible("firefox3_6") );
		ok( !isVisible("firefox4") );
		ok( !isVisible("ie6") );
		ok( !isVisible("ie7") );
		ok( !isVisible("ie6andie7") );
		ok( !isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( !isVisible("ie9andie10") );
	});
}
if( $.browser.webkit ){
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
		ok( !isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( !isVisible("ie9andie10") );
	});
}
// Browserstack doesn't have that version
// if ( ua.mozilla && ua.version.slice(0,3) == "1.9.2.17" ) {
// 	test( "firefox 2", function() {
// 		ok( !isVisible("opera") );
// 		ok( !isVisible("opera2") );
// 		ok( !isVisible("webkit") );
// 		ok( isVisible("firefox2") );
// 		ok( !isVisible("firefox3") );
// 		ok( !isVisible("firefox3_5") );
// 		ok( !isVisible("firefox3_6") );
// 		ok( !isVisible("firefox4") );
// 		ok( !isVisible("ie6") );
// 		ok( !isVisible("ie7") );
// 		ok( !isVisible("ie6andie7") );
// 		ok( !isVisible("ie6andie7andie8andie9andie10") );
// 		ok( !isVisible("ie8") );
// 		ok( !isVisible("ie9") );
// 		ok( !isVisible("ie10") );
//		ok( !isVisible("ie9andie10") );
// 	});
// }
if ( ua.mozilla && ua.version.slice(0,5) == "1.9.0" ) {
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
		ok( !isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );		
		ok( !isVisible("ie9andie10") );
	});
}
// Browserstack doesn't have that version
// if(	BrowserDetect.browser.toLowerCase() == 'firefox' && BrowserDetect.version == 3.5){
// 	test( "firefox 3.5", function() {
// 		ok( !isVisible("opera") );
// 		ok( !isVisible("opera2") );
// 		ok( !isVisible("webkit") );
// 		ok( isVisible("firefox2") );
// 		ok( isVisible("firefox3") );
// 		ok( isVisible("firefox3_5") );
// 		ok( !isVisible("firefox3_6") );
// 		ok( !isVisible("firefox4") );
// 		ok( !isVisible("ie6") );
// 		ok( !isVisible("ie7") );
// 		ok( !isVisible("ie6andie7") );
// 		ok( !isVisible("ie6andie7andie8andie9andie10") );
// 		ok( !isVisible("ie8") );
// 		ok( !isVisible("ie9") );
// 		ok( !isVisible("ie10") );
//		ok( !isVisible("ie9andie10") );
// 	});
// }
if ( ua.mozilla && ua.version.slice(0,5) == "1.9.2" ) {
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
		ok( !isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( !isVisible("ie9andie10") );
	});
}
if ( ua.mozilla && ua.version.slice(0,3) == "2.0" ) {
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
		ok( !isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( !isVisible("ie9andie10") );
	});
}
if ( ua.msie && ua.version == "6.0" ) {
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
		ok( isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( !isVisible("ie9andie10") );
	});
}
if ( ua.msie && ua.version == "7.0" ) {
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
		ok( isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( !isVisible("ie9andie10") );
	});
}
if ( ua.msie && ua.version == "8.0" ) {
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
		ok( isVisible("ie6andie7andie8andie9andie10") );
		ok( isVisible("ie8") );
		ok( !isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( !isVisible("ie9andie10") );
	});
}
if ( ua.msie && ua.version == "9.0" ) {
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
		ok( isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( isVisible("ie9") );
		ok( !isVisible("ie10") );
		ok( isVisible("ie9andie10") );
	});
}
if ( ua.msie && ua.version == "10.0" ) {
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
		ok( isVisible("ie6andie7andie8andie9andie10") );
		ok( !isVisible("ie8") );
		ok( isVisible("ie9") );
		ok( isVisible("ie10") );
		ok( isVisible("ie9andie10") );
	});
}
