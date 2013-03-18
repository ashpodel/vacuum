/* Ashish, use only the first two functions: getPictureUrls and getMusicUrls.
They each return a list of strings corresponding to urls you can use in HTML 
tags "img" and "audio". See examples I joined.*/

function getPictureUrls(input){
	return getFlickrUrls();
};

function getMusicUrls(input){
	return getFMAUrls();
};

/* Ashish, don't use the rest of the functions. */

function getFlickrUrls(){
	// This retrieves some interesting (and recent) flickr urls with 1024p on the longest side.  
	pool = [
	"http://farm9.staticflickr.com/8518/8559510285_e7b7743978_b.jpg",
	"http://farm9.staticflickr.com/8107/8559379889_e6dfb2c7ea_b.jpg",
	"http://farm9.staticflickr.com/8100/8559210959_0119cbe50e_b.jpg",
	"http://farm9.staticflickr.com/8381/8559744010_3181f64744_b.jpg",
	"http://farm9.staticflickr.com/8245/8560482560_6d229ea0df_b.jpg",
	"http://farm9.staticflickr.com/8371/8558794173_05771443c7_b.jpg",
	"http://farm9.staticflickr.com/8089/8558999205_ba244d9aab_b.jpg",
	"http://farm9.staticflickr.com/8506/8558546677_30c181d61e_b.jpg",
	"http://farm9.staticflickr.com/8390/8561139968_0fe2f9f4d1_b.jpg",
	"http://farm9.staticflickr.com/8391/8561131560_dc93ea8202_b.jpg",
	"http://farm9.staticflickr.com/8367/8560785100_534a3831b6_b.jpg",
	"http://farm9.staticflickr.com/8099/8560715406_8f64952646_b.jpg",
	"http://farm9.staticflickr.com/8229/8560577532_47aefe1251_b.jpg",
	"http://farm9.staticflickr.com/8096/8560568202_e3eb660401_b.jpg",
	"http://farm9.staticflickr.com/8385/8560432970_9e69fdb0db_b.jpg",
	"http://farm9.staticflickr.com/8509/8560090884_2f565b848a_b.jpg"
	];
	return pool;
};

function getFMAUrls(){
	// This retrieves some music urls (for stream) from Free Music Archives
	pool = [
	"http://freemusicarchive.org/music/listen/a95422819f2a72bb04115d5da1152feccdf4aac6",
	"http://freemusicarchive.org/music/listen/37d1023a4f8c8505c2f39ef84a984aceb49df281"
	];
	return pool;
};

/* Emmanuel Charon Keys:
Free Music Archives API key: "JD5IH3QJWWQU7AYL"
Flickr API key: "b88f268b6afd40932818ac007a9c3f4b"
*/


