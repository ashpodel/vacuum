/* Ashish, use only the first two functions: getPictureUrls and getMusicUrls.
They each return a list of strings corresponding to urls you can use in HTML 
tags "img" and "audio". See examples I joined.*/

function getPictureUrls(input){
	return getFlickrUrls();
};

function getMusicUrls(input){
	return getFMAUrls();
};

/*************************************************************
The rest of the functions implement the first two functions. 
*************************************************************/

function response(RESTful_url){
    // returns the string (it should be in json or xml format) returned by the RESTful url request
    var options = { 
    	dataType:'json',
		async: false, // don't erase this line!
		type: 'GET',
		url: RESTful_url
	};
	var jqXHRObject =  jQuery.ajax(options);
	return jqXHRObject.responseText;
};


/*************************************************************
Functions to retrieve flickr urls 
*************************************************************/

var FLICKR_API_KEY="b88f268b6afd40932818ac007a9c3f4b"; // EC's flickr api key

function getFlickrUrls(){
	// This retrieves some interesting (and recent) flickr urls with 1024p on the longest side.
	result=[];
	var request = "http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key="+FLICKR_API_KEY;
	var resp = response(request);
	var photos = jQuery(resp).find('photo');
	for(var ph=0 ; ph<photos.length ; ph++){
		var photo = photos[ph];
		var photo_id = photo.attributes.getNamedItem("id").value;
    	//var owner = photos[ph]["owner"];
    	var farm = photo.attributes.getNamedItem("farm").value;
    	var server = photo.attributes.getNamedItem("server").value;
    	var secret = photo.attributes.getNamedItem("secret").value;
    	result.push("http://farm"+farm+".staticflickr.com/"+server+"/"+photo_id+"_"+secret+"_b.jpg");
    };
    return result;
};

/*************************************************************
Functions to retrieve Free Music Archives urls 
*************************************************************/

var FMA_API_KEY="JD5IH3QJWWQU7AYL"; // EC's Free Music Archives api key

/*
function FMAStreamUrl(track_id){
	var request="http://freemusicarchive.org/services/playlists/embed/track/"+track_id+".json"
	var resp = response(request);
    return jQuery(resp).find('stream').text;
};
console.log(FMAStreamUrl(23161));
*/



function getFMAUrls(){
	// This retrieves some music urls (for stream) from Free Music Archives

    var request="http://freemusicarchive.org/api/get/tracks.json?api_key="+FMA_API_KEY;
    var resp=response(request);

    //track_ids = jQuery(resp).find('track_id').text;
    //console.log(track_ids);
	pool = [
	"sound/Eddie_Vedder-Society-Into_the_Wild_Soundtrack.ogg",
	"http://freemusicarchive.org/music/listen/a95422819f2a72bb04115d5da1152feccdf4aac6",
	"http://freemusicarchive.org/music/listen/37d1023a4f8c8505c2f39ef84a984aceb49df281",
	"http://freemusicarchive.org/music/listen/c8b1c93de983ca19a50b3f76eca7bb7950a7b327"
	];
	return pool;
};


