
chrome.tabs.getSelected(null, function(tab) {
	var	n = 3;
	var tablink = tab.url;
	var message = getImageURL(tab.url);
	
	//tab.url + "1"+"\n";
	
	
	for(var i =2 ; i<= n;i++){
		//message = message + (tablink + i +"\n");
	}
	
	 
	//print message
	document.getElementById('currentLink').innerHTML = message;	
});



function getImageURL(var url) {
   	try {return new XMLHttpRequest();}
	catch (error) {}
	try {return new ActiveXObject("Msxml2.XMLHTTP");}
	catch (error) {}
	try {return new ActiveXObject("Microsoft.XMLHTTP");}
	catch (error) {}

	throw new Error("Could not create HTTP request object.");
	
	request.open("GET", url, true);
	request.send(null);
	request.onreadystatechange = function() {
	 var html = request.responseText;
	 return request.responseText;
    //return html;
	if( html.search("image-container") != -1){
		return html.substring(html.search("image-container"));		
	}
	
}

