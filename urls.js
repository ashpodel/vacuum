function getPictureUrls(source,keywords,number){
    /* Gives image urls 
    - source: website to take pictures from, default is "Flickr"
    - keywords: list of keywords (strings) to specify types of pictures, default is [] (any interesting picture)
    - number: number of urls to give, default is 20  
    */

	// Assert default values to input:
	sources = typeof sources !== 'undefined' ? sources : "Flickr"; // default source is Flickr
	keywords = typeof keywords !== 'undefined' ? keywords : []; // default keywords is no tag at all
	number = typeof number !== 'undefined' ? number : 20; // default tag is no tag at all: any picture

    if(source=="Flickr"){
    	return getFlickrUrls(number,keywords);
    }
};

function writeMusicPlayer(input){
	// For FMA music:
	var track_id = getFMAtrackid(input);
	FMATrackEmbed(track_id);
};

/* Obsolete: */
function getMusicUrls(input){
	return ["sound/Eddie_Vedder-Society-Into_the_Wild_Soundtrack.ogg"];
};

/*************************************************************
The rest of the functions implement the first two functions. 
*************************************************************/

function response(RESTful_url){
    // returns the string (it should be in json or in xml format) returned by the RESTful url request
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

function getFlickrUrls(number,tags){
	tags = typeof tags !== 'undefined' ? tags : [];
	/* 
	This retrieves some interesting (and recent) flickr urls with 1024p on the longest side.
	- returns returns less than or equal to 'number' image urls.
	- tags is a list of tags to look for (in js, an array of strings is expected). 
	*/  
	var result=[];
	if(tags.length==0){
		// In this case just get interesting flickr images
		var request = "http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key="+FLICKR_API_KEY;
	} else {
		var request = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+FLICKR_API_KEY+"&tags="+tags;
	}
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
    	// Corresponsding flickr page is = flickrPhotoPage(photo_id,secret));
    };
    var cutoff = Math.min.apply(Math, [number,result.length]);
    return result.slice(0,cutoff);
};

function flickrPhotoPage(photo_id,secret){
	var request = "http://api.flickr.com/services/rest/?method=flickr.photos.getInfo&photo_id="+photo_id+"&secret="+secret+"&api_key="+FLICKR_API_KEY;
	var resp = response(request);
	var photoPage = jQuery(resp).find('url');
	return photoPage.text();
};

/*************************************************************
Functions to retrieve Free Music Archives urls 
*************************************************************/

var FMA_API_KEY="JD5IH3QJWWQU7AYL"; // EC's Free Music Archives api key

/*Abandoned attempt but may work in backend, goal was to use HTML5 audio tag 
function FMAStreamUrl(track_id){
	var request="http://freemusicarchive.org/services/playlists/embed/track/"+track_id+".xml?api_key="+FMA_API_KEY;
	var resp = response(request);
    return jQuery(resp).find('stream').text;
};
*/

var IDS=[10778, 12283, 12672, 15322, 23161, 23505, 24425, 26651, 26652, 28550, 28552, 28553, 32009, 33850, 33936, 34498, 35033, 35150, 35970, 36234, 36257, 36435, 36630, 37834, 37909, 38956, 39354, 40865, 41602, 41961, 42019, 42377, 42827, 42881, 45174, 45574, 46577, 47214, 47260, 50582, 51042, 51195, 51922, 54144, 54159, 55718, 56190, 56874, 57118, 57804, 57843, 57908, 58341, 58634, 59541, 61011, 62419, 62460, 63807, 64569, 64632, 65418, 65484, 65840, 66049, 66302, 66326, 66903, 66905, 66906, 67617, 69191, 69194, 69342, 71606, 71723, 73470, 73789, 73806, 73836];  
/*
var IDS_long=[10, 182, 211, 236, 418, 459, 461, 462, 463, 464, 465, 1087, 1151, 1152, 1384, 1417, 1671, 1673, 1675, 1735, 1891, 3459, 3461, 3462, 3463, 3464, 3465, 3466, 3724, 3763, 3772, 4108, 4204, 4232, 4234, 4238, 4239, 4240, 4280, 4483, 4507, 4511, 4520, 4535, 4994, 5025, 5082, 5155, 5395, 5396, 5398, 5403, 6360, 6400, 6469, 6564, 6845, 6889, 7011, 7385, 7832, 8282, 8283, 8775, 8776, 8777, 8778, 8779, 8780, 8840, 8841, 8842, 8846, 8908, 8910, 8911, 9254, 9255, 9256, 9257, 9260, 9262, 9263, 9264, 9267, 9268, 9269, 9270, 9411, 9412, 9416, 9423, 9434, 9454, 9468, 9494, 9511, 9524, 9525, 9526, 9527, 9529, 9701, 9906, 9907, 10043, 10399, 10421, 10424, 10425, 10429, 10501, 10503, 10510, 10511, 10512, 10513, 10519, 10562, 10564, 10569, 10571, 10572, 10671, 10693, 10694, 10695, 10696, 10697, 10698, 10699, 10702, 10703, 10705, 10778, 11019, 11090, 11091, 11096, 11108, 11206, 11264, 11267, 11274, 11298, 11299, 11326, 11349, 11549, 11550, 11551, 11552, 11553, 11557, 11572, 11617, 11657, 11718, 11755, 11771, 11773, 11889, 11918, 11933, 11942, 11978, 11979, 11981, 11983, 11985, 12035, 12099, 12186, 12187, 12191, 12223, 12283, 12291, 12298, 12657, 12672, 12673, 12674, 12675, 12676, 12677, 12737, 12746, 12794, 12800, 12814, 12842, 13031, 13043, 13051, 13077, 13079, 13080, 13081, 13083, 13084, 13085, 13086, 13087, 13088, 13089, 13090, 13091, 13092, 13500, 13537, 13571, 13629, 13696, 13807, 13809, 13810, 13904, 13931, 13952, 13953, 13956, 13957, 13958, 13959, 13960, 13961, 13962, 13963, 13964, 14279, 14280, 14281, 14282, 14283, 14284, 14285, 14286, 14287, 14288, 14289, 14290, 14344, 14363, 14586, 14603, 14604, 14653, 14658, 14690, 15322, 15369, 15488, 15526, 15527, 15530, 15559, 15564, 15769, 15770, 15879, 15880, 16271, 16277, 16299, 16301, 16304, 16334, 16335, 16427, 16512, 16513, 16597, 16598, 16653, 16655, 16656, 16680, 16681, 16682, 16685, 16686, 16687, 16688, 16689, 16743, 16745, 16746, 16747, 16773, 16774, 16775, 16776, 16777, 16779, 16780, 16781, 16782, 16783, 16784, 16785, 16786, 16787, 16788, 16819, 16820, 16821, 16822, 16901, 16929, 16983, 17098, 17511, 17559, 17586, 17588, 17634, 17792, 17884, 18012, 18121, 18163, 18164, 18165, 18166, 18167, 18168, 18169, 18170, 18171, 18197, 18449, 18595, 18785, 18822, 18913, 19137, 19138, 19248, 19278, 19280, 19281, 19282, 19283, 19286, 19330, 19331, 19332, 19333, 19424, 19440, 19443, 19445, 19474, 19475, 19476, 19477, 19478, 19479, 19480, 19553, 19620, 19685, 19729, 19731, 19997, 20296, 20308, 20309, 20366, 20373, 20374, 20375, 20430, 20432, 20434, 20435, 20691, 20908, 20910, 20911, 20912, 20915, 21085, 21112, 21123, 21162, 21166, 21167, 21168, 21293, 21294, 21295, 21296, 21306, 21336, 21583, 21623, 21630, 21632, 21821, 21842, 21843, 21844, 21845, 21848, 21849, 21850, 21851, 21858, 22013, 22059, 22095, 22295, 22315, 22317, 22332, 22335, 22337, 22359, 22443, 22457, 22503, 22590, 22751, 22759, 22974, 23010, 23011, 23012, 23013, 23014, 23015, 23016, 23030, 23036, 23040, 23062, 23121, 23122, 23126, 23136, 23137, 23138, 23140, 23141, 23143, 23144, 23147, 23148, 23150, 23151, 23152, 23153, 23155, 23156, 23158, 23159, 23160, 23161, 23162, 23163, 23164, 23172, 23175, 23176, 23177, 23178, 23179, 23181, 23182, 23184, 23186, 23188, 23279, 23323, 23353, 23354, 23355, 23367, 23368, 23370, 23371, 23372, 23445, 23505, 23943, 24029, 24032, 24037, 24078, 24161, 24177, 24180, 24214, 24256, 24259, 24260, 24261, 24262, 24263, 24264, 24265, 24306, 24309, 24324, 24325, 24326, 24329, 24425, 24432, 24433, 24434, 24435, 24436, 24439, 24445, 24446, 24447, 24458, 24459, 24566, 24621, 24638, 24715, 24752, 24766, 24769, 24770, 24771, 24791, 24828, 24831, 24832, 24855, 24894, 24916, 24942, 25066, 25067, 25120, 25121, 25122, 25152, 25154, 25167, 25179, 25180, 25188, 25189, 25207, 25213, 25259, 25378, 25397, 25635, 25636, 25638, 25644, 25645, 25647, 25649, 25651, 25652, 25668, 25669, 25670, 25701, 25838, 25867, 25873, 26004, 26005, 26006, 26037, 26038, 26042, 26212, 26225, 26245, 26296, 26323, 26397, 26406, 26426, 26469, 26521, 26524, 26536, 26605, 26642, 26643, 26651, 26652, 26653, 26654, 26655, 26656, 26657, 26658, 26659, 26690, 26773, 26851, 26853, 26854, 26855, 26859, 26861, 26871, 26919, 26993, 27021, 27177, 27200, 27201, 27202, 27203, 27471, 27473, 27474, 27475, 27543, 27553, 27596, 27609, 27610, 27611, 27612, 27613, 27667, 27789, 27790, 27798, 27800, 27805, 27880, 27899, 27915, 27916, 27947, 27948, 27949, 27951, 27953, 27987, 28055, 28070, 28087, 28179, 28252, 28278, 28279, 28281, 28301, 28334, 28398, 28402, 28411, 28545, 28546, 28547, 28548, 28549, 28550, 28551, 28552, 28553, 28571, 28582, 28584, 28590, 28601, 28644, 28681, 28685, 28812, 28816, 28839, 28849, 28872, 28873, 28874, 28875, 28876, 28877, 29029, 29030, 29031, 29032, 29037, 29038, 29039, 29040, 29041, 29042, 29043, 29044, 29494, 29602, 29657, 29659, 29660, 29661, 29673, 29721, 29739, 29742, 29816, 29836, 29880, 29977, 29979, 29980, 29981, 29982, 30009, 30130, 30189, 30191, 30192, 30197, 30200, 30202, 30203, 30206, 30207, 30290, 30292, 30386, 30387, 30388, 30389, 30390, 30391, 30392, 30393, 30394, 30395, 30420, 30421, 30424, 30426, 30428, 30429, 30430, 30432, 30433, 30434, 30435, 30436, 30438, 30519, 30520, 30521, 30522, 30685, 30782, 30783, 30893, 30894, 30895, 30896, 30900, 30902, 30903, 30904, 30906, 30907, 30908, 30909, 30911, 30912, 30913, 30914, 30915, 30916, 30917, 30919, 30934, 31025, 31027, 31029, 31032, 31036, 31037, 31038, 31039, 31040, 31041, 31042, 31043, 31044, 31046, 31142, 31146, 31149, 31150, 31165, 31206, 31247, 31306, 31386, 31388, 31390, 31402, 31403, 31470, 31475, 31479, 31480, 31481, 31484, 31593, 31595, 31596, 31597, 31600, 31601, 31606, 31617, 31619, 31624, 31625, 31626, 31859, 31871, 31878, 31879, 31880, 31888, 31947, 31956, 31959, 31962, 31972, 31975, 31976, 31988, 31999, 32009, 32044, 32046, 32075, 32218, 32233, 32466, 32512, 32614, 32713, 32801, 32802, 32853, 32941, 32942, 32943, 32944, 32945, 32946, 32947, 32948, 32949, 32950, 32951, 32952, 33068, 33071, 33072, 33075, 33124, 33133, 33151, 33152, 33196, 33257, 33258, 33259, 33273, 33280, 33316, 33322, 33427, 33460, 33469, 33475, 33486, 33529, 33632, 33850, 33851, 33936, 33940, 33946, 33992, 34050, 34075, 34120, 34131, 34132, 34171, 34177, 34309, 34312, 34342, 34368, 34466, 34485, 34486, 34498, 34684, 34988, 35008, 35032, 35033, 35150, 35190, 35217, 35219, 35256, 35257, 35258, 35259, 35260, 35261, 35262, 35299, 35438, 35444, 35500, 35557, 35558, 35565, 35566, 35567, 35569, 35571, 35889, 35906, 35967, 35970, 35971, 36042, 36048, 36138, 36139, 36140, 36141, 36142, 36143, 36144, 36145, 36146, 36147, 36195, 36196, 36197, 36198, 36201, 36202, 36204, 36222, 36231, 36232, 36233, 36234, 36235, 36238, 36245, 36246, 36249, 36250, 36252, 36256, 36257, 36258, 36261, 36333, 36337, 36379, 36380, 36383, 36428, 36435, 36454, 36457, 36477, 36478, 36503, 36531, 36532, 36536, 36538, 36539, 36596, 36598, 36599, 36612, 36620, 36621, 36622, 36623, 36624, 36625, 36626, 36627, 36628, 36629, 36630, 36631, 36632, 36633, 36634, 36636, 36637, 36638, 36639, 36640, 36641, 36642, 37111, 37113, 37114, 37117, 37118, 37119, 37120, 37123, 37124, 37125, 37127, 37128, 37130, 37131, 37132, 37134, 37135, 37139, 37140, 37141, 37142, 37340, 37622, 37623, 37625, 37626, 37628, 37640, 37732, 37824, 37834, 37899, 37900, 37901, 37902, 37903, 37904, 37905, 37906, 37907, 37908, 37909, 37910, 37911, 37977, 37979, 37980, 37999, 38139, 38169, 38226, 38227, 38234, 38326, 38435, 38487, 38488, 38489, 38490, 38491, 38545, 38557, 38559, 38565, 38569, 38570, 38578, 38606, 38696, 38741, 38775, 38776, 38777, 38778, 38779, 38780, 38782, 38783, 38784, 38785, 38788, 38797, 38817, 38818, 38819, 38820, 38821, 38822, 38823, 38824, 38825, 38826, 38827, 38828, 38829, 38830, 38831, 38832, 38833, 38834, 38835, 38836, 38837, 38838, 38839, 38840, 38841, 38842, 38843, 38844, 38878, 38956, 38958, 38983, 39002, 39034, 39057, 39058, 39059, 39105, 39107, 39177, 39181, 39182, 39183, 39184, 39291, 39302, 39343, 39344, 39346, 39347, 39351, 39352, 39353, 39354, 39355, 39361, 39450, 39472, 39476, 39486, 39488, 39508, 39538, 39539, 39540, 39541, 39543, 39544, 39545, 39547, 39548, 39549, 39550, 39551, 39552, 39570, 39572, 39573, 39575, 39577, 39579, 39580, 39581, 39582, 39583, 39584, 39585, 39586, 39587, 39588, 39589, 39590, 39591, 39592, 39593, 39594, 39595, 39596, 39597, 39598, 39599, 39602, 39603, 39604, 39605, 39606, 39607, 39647, 39648, 39802, 39803, 39804, 39805, 39806, 39807, 39808, 39809, 39810, 39811, 39812, 39813, 39816, 39844, 39919, 40122, 40124, 40234, 40239, 40240, 40245, 40446, 40447, 40449, 40525, 40548, 40563, 40564, 40569, 40570, 40596, 40654, 40659, 40660, 40700, 40708, 40709, 40710, 40711, 40768, 40769, 40770, 40842, 40843, 40844, 40845, 40846, 40847, 40848, 40849, 40850, 40865, 40866, 40872, 40877, 40881, 40909, 40933, 40985, 40988, 41095, 41117, 41118, 41191, 41327, 41332, 41349, 41374, 41397, 41399, 41403, 41406, 41409, 41411, 41413, 41414, 41415, 41417, 41469, 41470, 41472, 41473, 41474, 41475, 41476, 41501, 41503, 41504, 41560, 41563, 41564, 41598, 41599, 41600, 41601, 41602, 41626, 41838, 41839, 41841, 41842, 41918, 41926, 41946, 41947, 41948, 41949, 41950, 41954, 41960, 41961, 41974, 41981, 41983, 41984, 41985, 41986, 41987, 41989, 41992, 42018, 42019, 42021, 42045, 42047, 42051, 42250, 42252, 42253, 42271, 42310, 42348, 42349, 42350, 42351, 42372, 42373, 42374, 42375, 42376, 42377, 42391, 42393, 42442, 42475, 42677, 42680, 42682, 42687, 42691, 42736, 42750, 42751, 42777, 42789, 42794, 42827, 42833, 42844, 42872, 42873, 42874, 42875, 42876, 42877, 42878, 42879, 42880, 42881, 42882, 43003, 43030, 43040, 43078, 43080, 43081, 43082, 43099, 43100, 43163, 43164, 43165, 43166, 43167, 43168, 43169, 43172, 43173, 43179, 43180, 43194, 43211, 43242, 43361, 43364, 43454, 43485, 43487, 43492, 43493, 43495, 43496, 43497, 43498, 43499, 43500, 43501, 43502, 43536, 43561, 43568, 43569, 43598, 43599, 43600, 43695, 43697, 43698, 43699, 43734, 43750, 43759, 43797, 43798, 43805, 43806, 44092, 44112, 44340, 44746, 44749, 44750, 44801, 44802, 44803, 44804, 44814, 44817, 44819, 44821, 44822, 44823, 44882, 44883, 44918, 44924, 44926, 44929, 44931, 44933, 44946, 44947, 44948, 44949, 44950, 44951, 44952, 44953, 45002, 45051, 45055, 45133, 45134, 45150, 45151, 45152, 45153, 45154, 45160, 45174, 45175, 45264, 45379, 45380, 45381, 45382, 45383, 45389, 45472, 45474, 45475, 45476, 45488, 45490, 45492, 45493, 45494, 45495, 45496, 45497, 45498, 45499, 45500, 45501, 45507, 45508, 45522, 45523, 45526, 45527, 45529, 45561, 45564, 45574, 45605, 45608, 45609, 46072, 46075, 46076, 46078, 46101, 46102, 46103, 46107, 46110, 46111, 46112, 46113, 46157, 46158, 46159, 46160, 46161, 46162, 46163, 46258, 46259, 46260, 46261, 46334, 46341, 46361, 46362, 46363, 46364, 46365, 46366, 46367, 46368, 46369, 46463, 46464, 46521, 46571, 46572, 46574, 46575, 46576, 46577, 46578, 46580, 46581, 46583, 46591, 46595, 46601, 46610, 46611, 46634, 46655, 46698, 46740, 46746, 46780, 46781, 46801, 47046, 47067, 47068, 47069, 47070, 47071, 47072, 47073, 47074, 47075, 47076, 47077, 47089, 47090, 47091, 47116, 47118, 47119, 47203, 47204, 47208, 47214, 47229, 47240, 47260, 47278, 47319, 47321, 47324, 47346, 47352, 47364, 47373, 47374, 47376, 47400, 47401, 47402, 47403, 47421, 47422, 47471, 47505, 47529, 47530, 47531, 47532, 47534, 47535, 47536, 47537, 47538, 47539, 47540, 47580, 47583, 47612, 47623, 47657, 47658, 47659, 47660, 47713, 47769, 47771, 47778, 47823, 47844, 47854, 47857, 47858, 47869, 47891, 47916, 47921, 47943, 47958, 47997, 48001, 48013, 48014, 48016, 48017, 48020, 48021, 48022, 48023, 48024, 48025, 48027, 48031, 48034, 48177, 48191, 48196, 48197, 48198, 48199, 48200, 48201, 48202, 48214, 48241, 48242, 48243, 48244, 48245, 48246, 48247, 48248, 48249, 48267, 48365, 48376, 48380, 48387, 48388, 48406, 48407, 48408, 48409, 48410, 48437, 48439, 48440, 48442, 48443, 48462, 48463, 48464, 48465, 48466, 48469, 48471, 48521, 48523, 48607, 48612, 48677, 48704, 48754, 48755, 48866, 48916, 48917, 48918, 49139, 49157, 49163, 49363, 49364, 49365, 49568, 49585, 49644, 49663, 49664, 49746, 49812, 49817, 49897, 50137, 50138, 50140, 50141, 50338, 50377, 50378, 50379, 50380, 50381, 50444, 50445, 50446, 50447, 50448, 50450, 50459, 50539, 50578, 50579, 50580, 50581, 50582, 50680, 50744, 50882, 50883, 50884, 50888, 50890, 50891, 50892, 50893, 50894, 50895, 50896, 50899, 50901, 50903, 50904, 50905, 50906, 50907, 50908, 50909, 50910, 50911, 50912, 50913, 50914, 50916, 50917, 50918, 50920, 50921, 50922, 50925, 50926, 50927, 50928, 50931, 50932, 50933, 50934, 50936, 50937, 50938, 50939, 50940, 50941, 50942, 50943, 50944, 50946, 50947, 50948, 50949, 50950, 50951, 50952, 50953, 50954, 50955, 50956, 50957, 50958, 50959, 50970, 50971, 50972, 50973, 50975, 50985, 50986, 50988, 50989, 50990, 50991, 50992, 50993, 50994, 50995, 50996, 51000, 51001, 51003, 51004, 51005, 51006, 51007, 51008, 51013, 51014, 51023, 51042, 51113, 51152, 51195, 51401, 51483, 51486, 51579, 51631, 51634, 51668, 51669, 51670, 51671, 51672, 51673, 51674, 51675, 51676, 51677, 51678, 51772, 51776, 51783, 51784, 51829, 51830, 51831, 51832, 51833, 51907, 51917, 51922, 51923, 51952, 51954, 51956, 52032, 52044, 52057, 52064, 52116, 52117, 52283, 52301, 52366, 52367, 52368, 52405, 52409, 52445, 52446, 52448, 52449, 52451, 52452, 52453, 52463, 52464, 52465, 52522, 52561, 52620, 52621, 52622, 52623, 52624, 52625, 52626, 52627, 52628, 52629, 52630, 52631, 52632, 52633, 52634, 52635, 52636, 52637, 52638, 52639, 52640, 52641, 52642, 52643, 52644, 52645, 52646, 52647, 52648, 52649, 52650, 52651, 52652, 52653, 52654, 52655, 52656, 52657, 52658, 52659, 52660, 52661, 52662, 52663, 52664, 52665, 52667, 52668, 52669, 52670, 52671, 52672, 52673, 52674, 52675, 52676, 52677, 52678, 52679, 52680, 52681, 52682, 52683, 52684, 52685, 52686, 52687, 52688, 52689, 52691, 52728, 52735, 52736, 52737, 52849, 52868, 52874, 52928, 52929, 52930, 52931, 52932, 52979, 52981, 52982, 52983, 52987, 53013, 53231, 53232, 53247, 53249, 53250, 53251, 53252, 53253, 53254, 53255, 53291, 53292, 53293, 53295, 53319, 53320, 53399, 53401, 53405, 53441, 53457, 53496, 53586, 53587, 53588, 53590, 53593, 53594, 53678, 53681, 53728, 53756, 53757, 53795, 53796, 53797, 53798, 53799, 53800, 53801, 53802, 53803, 53804, 53805, 53806, 53807, 53808, 53809, 53810, 53811, 53812, 53813, 53814, 53815, 53816, 53817, 53818, 53819, 53820, 53821, 53822, 53823, 53824, 53825, 53826, 53827, 53828, 53829, 53830, 53831, 53832, 53833, 53834, 53835, 53843, 53844, 53845, 53846, 53847, 53848, 53849, 53850, 53851, 53852, 53859, 53860, 53861, 53862, 53863, 53896, 53897, 53912, 53916, 53918, 53923, 53924, 53925, 53926, 53927, 53928, 53929, 53930, 53931, 53961, 54019, 54028, 54139, 54140, 54141, 54142, 54143, 54144, 54149, 54150, 54151, 54152, 54154, 54155, 54156, 54158, 54159, 54160, 54203, 54204, 54205, 54206, 54207, 54208, 54212, 54213, 54214, 54215, 54224, 54225, 54227, 54230, 54232, 54259, 54311, 54320, 54323, 54335, 54342, 54343, 54344, 54376, 54406, 54444, 54445, 54446, 54447, 54449, 54466, 54470, 54473, 54474, 54495, 54530, 54625, 54626, 54643, 54654, 54656, 54667, 54668, 54670, 54719, 54737, 54738, 54739, 54740, 54741, 54742, 54743, 54744, 54745, 54746, 54847, 54874, 54906, 54907, 54908, 54909, 54910, 54911, 54912, 54913, 55186, 55370, 55372, 55375, 55378, 55379, 55394, 55395, 55396, 55428, 55488, 55528, 55531, 55549, 55716, 55717, 55718, 55719, 55778, 55780, 55782, 55783, 55784, 55785, 55786, 55806, 55807, 55808, 55809, 55810, 55811, 55869, 55892, 55947, 55948, 55949, 55950, 55951, 55952, 55953, 55954, 55955, 55956, 55957, 55958, 55994, 56010, 56015, 56027, 56028, 56029, 56031, 56034, 56036, 56037, 56054, 56059, 56064, 56129, 56131, 56132, 56133, 56134, 56135, 56136, 56137, 56138, 56177, 56180, 56181, 56182, 56183, 56184, 56185, 56186, 56187, 56188, 56189, 56190, 56229, 56230, 56231, 56232, 56233, 56234, 56235, 56236, 56237, 56238, 56239, 56240, 56241, 56242, 56243, 56244, 56245, 56248, 56250, 56251, 56252, 56253, 56254, 56256, 56273, 56315, 56316, 56317, 56318, 56328, 56374, 56432, 56435, 56436, 56442, 56443, 56444, 56474, 56501, 56520, 56521, 56538, 56539, 56540, 56560, 56561, 56565, 56567, 56568, 56571, 56573, 56574, 56575, 56576, 56578, 56579, 56599, 56650, 56651, 56685, 56728, 56729, 56730, 56794, 56795, 56808, 56809, 56825, 56834, 56874, 56896, 56922, 56923, 56924, 56925, 56926, 56927, 56928, 56929, 56955, 56956, 56957, 56958, 56978, 56989, 56993, 56994, 57036, 57074, 57076, 57077, 57088, 57089, 57090, 57091, 57092, 57093, 57094, 57095, 57096, 57097, 57098, 57099, 57100, 57107, 57110, 57111, 57112, 57113, 57116, 57117, 57118, 57122, 57123, 57124, 57125, 57126, 57127, 57128, 57129, 57131, 57132, 57135, 57136, 57137, 57138, 57139, 57140, 57141, 57142, 57143, 57144, 57145, 57146, 57147, 57148, 57149, 57150, 57151, 57152, 57153, 57154, 57155, 57156, 57157, 57158, 57159, 57161, 57180, 57229, 57230, 57231, 57242, 57244, 57249, 57250, 57251, 57263, 57264, 57266, 57267, 57307, 57416, 57417, 57439, 57459, 57461, 57463, 57465, 57466, 57487, 57489, 57491, 57500, 57501, 57503, 57505, 57509, 57511, 57540, 57547, 57569, 57616, 57617, 57619, 57628, 57649, 57652, 57653, 57654, 57661, 57662, 57663, 57664, 57687, 57690, 57692, 57693, 57694, 57695, 57697, 57698, 57699, 57700, 57702, 57745, 57748, 57749, 57750, 57751, 57752, 57753, 57761, 57772, 57773, 57774, 57775, 57776, 57779, 57780, 57781, 57782, 57783, 57784, 57785, 57787, 57788, 57794, 57795, 57796, 57797, 57798, 57799, 57800, 57801, 57802, 57803, 57804, 57819, 57820, 57821, 57822, 57823, 57840, 57841, 57842, 57843, 57845, 57846, 57847, 57848, 57849, 57852, 57853, 57854, 57855, 57868, 57869, 57870, 57872, 57873, 57876, 57877, 57879, 57891, 57892, 57894, 57895, 57896, 57903, 57906, 57907, 57908, 57910, 57918, 57919, 57920, 57921, 57922, 57923, 57924, 57925, 57926, 57928, 57929, 57930, 57931, 57932, 57933, 57934, 57935, 57936, 57937, 57938, 57958, 57968, 58024, 58026, 58027, 58028, 58029, 58030, 58031, 58032, 58033, 58034, 58035, 58036, 58037, 58038, 58039, 58051, 58057, 58058, 58059, 58064, 58065, 58066, 58067, 58072, 58073, 58074, 58076, 58077, 58078, 58079, 58082, 58083, 58091, 58113, 58154, 58334, 58341, 58346, 58364, 58458, 58459, 58460, 58461, 58477, 58483, 58485, 58506, 58543, 58634, 58652, 59068, 59135, 59172, 59173, 59293, 59376, 59406, 59428, 59432, 59469, 59470, 59471, 59472, 59473, 59474, 59512, 59513, 59533, 59541, 59542, 59543, 59544, 59545, 59546, 59547, 59559, 59561, 59571, 59577, 59581, 59590, 59627, 59685, 59688, 59750, 59784, 59999, 60003, 60004, 60049, 60276, 60277, 60279, 60280, 60281, 60283, 60284, 60285, 60286, 60452, 60472, 60478, 60542, 60543, 60560, 60562, 60564, 60565, 60582, 60583, 60658, 60678, 60705, 60736, 60919, 60920, 60921, 61011, 61053, 61056, 61065, 61097, 61098, 61461, 61462, 61464, 61465, 61467, 61468, 61477, 61478, 61480, 61487, 61488, 61489, 61490, 61491, 61492, 61493, 61506, 61541, 61569, 61672, 61673, 61675, 61825, 61870, 61891, 61893, 61894, 61896, 61897, 61899, 61900, 61902, 61906, 61923, 61988, 62014, 62051, 62070, 62079, 62196, 62229, 62338, 62341, 62365, 62366, 62367, 62368, 62369, 62370, 62372, 62373, 62374, 62375, 62376, 62380, 62381, 62382, 62383, 62384, 62385, 62417, 62418, 62419, 62423, 62425, 62426, 62427, 62428, 62429, 62430, 62431, 62433, 62434, 62435, 62436, 62439, 62443, 62444, 62445, 62446, 62448, 62449, 62450, 62451, 62452, 62455, 62456, 62458, 62460, 62461, 62525, 62526, 62531, 62534, 62586, 62596, 62671, 62724, 62726, 62727, 62734, 62741, 62742, 62743, 62744, 62746, 62748, 62749, 62750, 62751, 62753, 62755, 62756, 62758, 62784, 62785, 62786, 62798, 62902, 62909, 62910, 62911, 62927, 62928, 62929, 62934, 63064, 63065, 63091, 63108, 63109, 63110, 63191, 63227, 63228, 63229, 63247, 63422, 63439, 63457, 63471, 63472, 63504, 63807, 63809, 63810, 63811, 63812, 63813, 63814, 63815, 63816, 63817, 63922, 63958, 63964, 63965, 63973, 63991, 64019, 64020, 64048, 64069, 64070, 64071, 64072, 64073, 64074, 64075, 64076, 64077, 64079, 64092, 64146, 64158, 64159, 64163, 64165, 64166, 64167, 64173, 64191, 64198, 64207, 64210, 64227, 64247, 64294, 64303, 64305, 64306, 64331, 64332, 64333, 64334, 64363, 64367, 64374, 64409, 64410, 64411, 64414, 64415, 64423, 64431, 64433, 64436, 64438, 64439, 64441, 64443, 64461, 64462, 64506, 64530, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64541, 64542, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64577, 64583, 64585, 64586, 64587, 64590, 64591, 64592, 64593, 64618, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64662, 64672, 64712, 64717, 64720, 64722, 64723, 64725, 64748, 64749, 64753, 64754, 64755, 64787, 64798, 64799, 64800, 64801, 64802, 64809, 64843, 64844, 64853, 64866, 64869, 64870, 64871, 64872, 64918, 64919, 64923, 64924, 64925, 64926, 64927, 64936, 64939, 64947, 64949, 64950, 64955, 64983, 64984, 64985, 64986, 64988, 64991, 64992, 64993, 64994, 64995, 65003, 65004, 65022, 65033, 65038, 65040, 65063, 65064, 65065, 65066, 65067, 65068, 65069, 65072, 65073, 65078, 65079, 65091, 65171, 65181, 65187, 65188, 65233, 65234, 65288, 65363, 65400, 65418, 65419, 65423, 65482, 65483, 65484, 65488, 65502, 65503, 65505, 65668, 65681, 65682, 65752, 65776, 65777, 65778, 65779, 65780, 65781, 65782, 65788, 65791, 65792, 65793, 65794, 65795, 65796, 65797, 65816, 65827, 65828, 65840, 65853, 65854, 65857, 65859, 65860, 65871, 65894, 65896, 65912, 65962, 65963, 65964, 65974, 65980, 66010, 66027, 66028, 66029, 66048, 66049, 66050, 66051, 66053, 66054, 66055, 66076, 66086, 66089, 66090, 66091, 66092, 66093, 66094, 66095, 66096, 66097, 66098, 66099, 66100, 66148, 66156, 66190, 66239, 66243, 66244, 66245, 66246, 66247, 66248, 66255, 66294, 66295, 66302, 66324, 66326, 66338, 66339, 66340, 66341, 66342, 66343, 66344, 66345, 66346, 66359, 66360, 66361, 66362, 66363, 66364, 66365, 66369, 66374, 66375, 66376, 66387, 66390, 66401, 66408, 66409, 66411, 66513, 66516, 66524, 66526, 66527, 66529, 66531, 66532, 66533, 66539, 66541, 66542, 66543, 66544, 66545, 66546, 66547, 66555, 66556, 66557, 66558, 66623, 66624, 66625, 66631, 66633, 66635, 66636, 66637, 66638, 66674, 66689, 66690, 66694, 66695, 66696, 66699, 66704, 66705, 66706, 66707, 66708, 66727, 66728, 66731, 66734, 66735, 66736, 66737, 66738, 66739, 66740, 66741, 66757, 66779, 66780, 66781, 66782, 66867, 66895, 66896, 66897, 66898, 66899, 66900, 66901, 66902, 66903, 66904, 66905, 66906, 66942, 67007, 67009, 67018, 67053, 67064, 67067, 67103, 67107, 67116, 67120, 67128, 67163, 67164, 67170, 67228, 67229, 67235, 67236, 67246, 67256, 67257, 67271, 67272, 67273, 67307, 67308, 67347, 67412, 67418, 67422, 67423, 67424, 67425, 67426, 67427, 67428, 67429, 67470, 67475, 67480, 67521, 67522, 67542, 67549, 67552, 67553, 67584, 67585, 67586, 67587, 67588, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67637, 67638, 67639, 67640, 67661, 67662, 67673, 67674, 67728, 67731, 67801, 67830, 67831, 67832, 67833, 67834, 67835, 67836, 67837, 67838, 67839, 67840, 67841, 67842, 67843, 68120, 68164, 68186, 68196, 68199, 68208, 68217, 68220, 68221, 68222, 68235, 68261, 68276, 68279, 68280, 68281, 68315, 68328, 68329, 68361, 68362, 68363, 68364, 68371, 68382, 68404, 68414, 68415, 68416, 68424, 68433, 68434, 68435, 68437, 68441, 68442, 68444, 68449, 68457, 68476, 68478, 68479, 68582, 68587, 68647, 68648, 68656, 68657, 68658, 68659, 68661, 68662, 68664, 68668, 68677, 68678, 68679, 68680, 68681, 68682, 68683, 68745, 68747, 68748, 68777, 68787, 68788, 68827, 68850, 68877, 68878, 68886, 68887, 68888, 68889, 68890, 68891, 68892, 68894, 68895, 68896, 68897, 68898, 68899, 68900, 68919, 68934, 68936, 68942, 68960, 68961, 68963, 68964, 68965, 68966, 68967, 68968, 68996, 68997, 69014, 69015, 69016, 69017, 69018, 69019, 69020, 69041, 69043, 69044, 69045, 69048, 69063, 69159, 69170, 69179, 69190, 69191, 69192, 69193, 69194, 69195, 69196, 69197, 69198, 69199, 69200, 69201, 69202, 69203, 69204, 69205, 69206, 69207, 69208, 69209, 69210, 69211, 69214, 69221, 69222, 69223, 69252, 69253, 69254, 69255, 69256, 69338, 69341, 69342, 69343, 69347, 69573, 69575, 69576, 69577, 69578, 69601, 69606, 69612, 69630, 69632, 69633, 69655, 69661, 69727, 69732, 69736, 69747, 69758, 69763, 69764, 69767, 69768, 69777, 69798, 69806, 69809, 69821, 69828, 69843, 69848, 69860, 69861, 69881, 69886, 69905, 69907, 69908, 69909, 69917, 69997, 69998, 70000, 70001, 70048, 70060, 70061, 70072, 70075, 70089, 70138, 70143, 70145, 70146, 70147, 70148, 70156, 70157, 70159, 70160, 70161, 70162, 70188, 70189, 70206, 70207, 70208, 70212, 70229, 70267, 70281, 70283, 70285, 70288, 70289, 70290, 70291, 70294, 70295, 70296, 70297, 70298, 70299, 70300, 70301, 70302, 70303, 70306, 70333, 70364, 70391, 70413, 70417, 70418, 70419, 70441, 70443, 70444, 70448, 70452, 70454, 70455, 70456, 70460, 70461, 70462, 70463, 70464, 70465, 70466, 70467, 70468, 70469, 70470, 70471, 70472, 70484, 70488, 70489, 70556, 70557, 70559, 70560, 70562, 70563, 70601, 70602, 70651, 70653, 70685, 70716, 70731, 70745, 70764, 70765, 70766, 70767, 70775, 70776, 70777, 70779, 70780, 70782, 70784, 70785, 70792, 70854, 70865, 70946, 70983, 70984, 70985, 71062, 71076, 71096, 71131, 71132, 71137, 71138, 71148, 71164, 71169, 71174, 71175, 71176, 71206, 71211, 71212, 71213, 71214, 71231, 71255, 71300, 71301, 71302, 71381, 71385, 71420, 71430, 71482, 71501, 71513, 71514, 71515, 71516, 71548, 71549, 71550, 71570, 71571, 71572, 71573, 71574, 71575, 71577, 71578, 71579, 71600, 71606, 71695, 71705, 71706, 71707, 71708, 71716, 71719, 71723, 71724, 71725, 71727, 71728, 71729, 71730, 71731, 71732, 71761, 71766, 71767, 71768, 71826, 71827, 71842, 71843, 71857, 71858, 71887, 71916, 71919, 71938, 71939, 71940, 72042, 72044, 72045, 72067, 72068, 72069, 72070, 72071, 72072, 72073, 72074, 72075, 72076, 72115, 72121, 72135, 72136, 72177, 72178, 72192, 72196, 72199, 72200, 72205, 72206, 72210, 72215, 72216, 72217, 72233, 72234, 72243, 72244, 72245, 72246, 72250, 72273, 72277, 72290, 72301, 72302, 72303, 72304, 72305, 72324, 72370, 72371, 72379, 72388, 72389, 72390, 72391, 72392, 72393, 72394, 72395, 72396, 72434, 72436, 72443, 72468, 72473, 72477, 72486, 72487, 72488, 72489, 72490, 72491, 72492, 72499, 72500, 72501, 72502, 72503, 72508, 72509, 72512, 72514, 72521, 72530, 72531, 72532, 72535, 72536, 72537, 72589, 72590, 72604, 72652, 72677, 72678, 72679, 72680, 72681, 72682, 72715, 72716, 72717, 72718, 72719, 72720, 72721, 72722, 72723, 72724, 72725, 72726, 72747, 72749, 72751, 72752, 72753, 72754, 72755, 72756, 72757, 72758, 72785, 72786, 72787, 72788, 72789, 72790, 72841, 72869, 72947, 72948, 72949, 72952, 73000, 73001, 73015, 73016, 73031, 73032, 73043, 73044, 73045, 73047, 73048, 73049, 73050, 73106, 73107, 73111, 73121, 73122, 73123, 73124, 73125, 73145, 73146, 73147, 73166, 73168, 73325, 73326, 73333, 73334, 73335, 73341, 73342, 73343, 73344, 73360, 73362, 73363, 73365, 73367, 73368, 73369, 73370, 73371, 73372, 73413, 73416, 73432, 73433, 73434, 73435, 73436, 73437, 73438, 73446, 73449, 73450, 73463, 73464, 73468, 73469, 73470, 73471, 73472, 73473, 73474, 73475, 73477, 73487, 73488, 73489, 73490, 73491, 73492, 73495, 73496, 73497, 73498, 73499, 73500, 73501, 73506, 73507, 73508, 73509, 73522, 73525, 73530, 73531, 73532, 73533, 73534, 73535, 73537, 73538, 73539, 73542, 73543, 73544, 73549, 73550, 73551, 73560, 73561, 73564, 73565, 73588, 73599, 73604, 73605, 73606, 73607, 73623, 73624, 73627, 73630, 73640, 73648, 73651, 73652, 73653, 73654, 73656, 73657, 73691, 73692, 73693, 73695, 73696, 73704, 73732, 73733, 73734, 73738, 73760, 73782, 73783, 73784, 73785, 73786, 73787, 73788, 73789, 73792, 73806, 73808, 73809, 73810, 73811, 73813, 73814, 73815, 73816, 73817, 73821, 73822, 73835, 73836, 73897, 74282, 74672, 74724, 74895, 75010, 75017, 75353, 75807, 75941, 76017, 76128, 76235, 77312, 77648, 78280, 78302];
*/   

function getFMAtrackid(input){
    return IDS[Math.floor(Math.random()*IDS.length)];
}

function FMATrackEmbed(track_id){
	// Writes in the document an audio plug for the track id in FMA.
	document.write('<object width="300" height="50" style="{background-color: rgba(0, 0, 0, 0.0);}">\
		<param name="movie" value="http://freemusicarchive.org/swf/trackplayer.swf"/>\
		<param name="flashvars" value="track=http://freemusicarchive.org/services/playlists/embed/track/'+track_id+'.xml"/>\
		<param name="allowscriptaccess" value="sameDomain"/>\
		<param name="play" value="true"/>\
		<param name="autoplay" value="true"/>\
		<param name="autostart" value="true"/>\
		<embed play="true" autoplay="true" autostart="true" type="application/x-shockwave-flash" src="http://freemusicarchive.org/swf/trackplayer.swf" width="300" height="50" flashvars="track=http://freemusicarchive.org/services/playlists/embed/track/'+track_id+'.xml;autostart=true" allowscriptaccess="sameDomain" /></object>');
};




