function createString(data) {
	var maps = data.maps ? '<div class="thumbnail-links">\n<a href="'+ data.maps +'">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/google_maps_logo.jpg" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	var facebook = data.facebook ? '\n<div class="thumbnail-links">\n<a href="'+ data.facebook +'" target="_blank">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/facebook_logo.png" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	var yelp = data.yelp ? '\n<div class="thumbnail-links">\n<a href="'+ data.yelp +'" target="_blank">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/yelp_logo.png" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	console.log('<div class="item">\n<a href="'+ data.link +'" target="_blank" rel="noopener">\n <img src=" '+ data.img +'" alt="'+ data.name +'" />\n</a>\n <p id="name"> '+ data.name +'</p>\n <p id="address-street"> '+ data.address +'</p>\n <p id="address-city"> ' + data.city +'</p>\n <p id="phone"> '+ data.phone +'</p>\n' + maps + facebook + yelp + '\n</div> \n\n');
}

var past = [
	{
		name: "APA Family Support Services",
		link: "http://www.apafss.org/",
		img: ""
	},{
		name: "Oakland Asian Student Education Services",
		link: "http://www.oases.org/",
		img: ""
	},{
		name: "Kearny Street Workshop",
		link: "http://i52611.wixsite.com/kearnystreet/about",
		img: ""
	},{
		name: "Asian Community Mental Health Services",
		link: "http://www.acmhs.org/",
		img: ""
	},{
		name: "",
		link: "",
		img: ""
	}
]