
function createString(data) {
	var maps = data.maps ? '<div class="thumbnail-links">\n<a href="'+ data.maps +'">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/google_maps_logo.jpg" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	var facebook = data.facebook ? '\n<div class="thumbnail-links">\n<a href="'+ data.facebook +'" target="_blank">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/facebook_logo.png" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	var yelp = data.yelp ? '\n<div class="thumbnail-links">\n<a href="'+ data.yelp +'" target="_blank">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/yelp_logo.png" alt='+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	console.log('<div class="item">\n<a href="'+ data.link +'" target="_blank" rel="noopener">\n <img src=" '+ data.img +'" alt=" '+ data.name +'" />\n</a>\n <p id="name"> '+ data.name +'</p>\n <p id="address-street"> '+ data.address +'</p>\n <p id="address-city"> ' + data.city +'</p>\n <p id="phone"> '+ data.phone +'</p>\n' + maps + facebook + yelp + '\n</div> \n\n');

}

var rest = [
	{
		name: 'Le Colonial SF',
		link: 'www.lecolonialsf.com',
		address: '20 Cosmo Pl',
		city: 'San Francisco, California, CA 94109',
		phone: '(415) 931-3600',
		maps: 'https://www.google.com/maps/place/Le+Colonial/@37.7882142,-122.4146043,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808e03bdd16b:0x972565bc5854989!8m2!3d37.7882142!4d-122.4124156',
		facebook: 'https://www.facebook.com/LecolonailSF/',
		yelp: 'https://www.yelp.com/biz/le-colonial-san-francisco',
		img: 'http://platebyplate.org/wp-content/uploads/2017/06/leColonial-e1498800114347.jpeg'
	},{
		name: "Pa'ina Lounge & Restaurant",
		link: 'www.painasf.com',
		address: '1865 Post St',
		city: 'San Francisco, California, CA 94115',
		phone: '(415) 829-2642',
		maps: "https://www.google.com/maps/place/Pa'ina+Restaurant+%26+Lounge/@37.785132,-122.4345597,17z/data=!3m1!4b1!4m5!3m4!1s0x808580b8f8ffc6bf:0xda340023dd9c93ee!8m2!3d37.785132!4d-122.432371",
		facebook: "https://www.facebook.com/PainaSF/",
		yelp: 'https://www.yelp.com/biz/paina-lounge-and-restaurant-san-francisco?osq=paina+sf',
		img: "http://platebyplate.org/wp-content/uploads/2016/06/Paina-Logo.png"
	},{
		name: "Noelani's Bar and Grill",
		link: "www.noelanis.com",
		address: "1037 Laurel St",
		city: "San Carlos, CA 94070",
		phone: "(650) 394-8169",
		maps: "https://www.google.com/maps/place/Noelani's+Bar+and+Grill/@37.5008325,-122.2562082,17z/data=!3m1!4b1!4m5!3m4!1s0x808fa219d629d955:0x18d9c30477bf4649!8m2!3d37.5008325!4d-122.2540195",
		facebook: "https://www.facebook.com/noelanisbarandgrill/",
		yelp: "https://www.yelp.com/biz/noelanis-san-carlos-6?osq=Noelani%27s+Bar+and+Grill",
		img: "http://platebyplate.org/wp-content/uploads/2015/07/noelanis_200.jpg"
	},{
		name: "Pinoy Heritage",
		link: "www.pinoyheritage.com",
		address: "POP UP!",
		city: "San Francisco",
		phone: "(650) 392-9851",
		maps: "",
		facebook: "https://www.facebook.com/pinoyheritagepopup/",
		yelp: "",
		img: "http://platebyplate.org/wp-content/uploads/2014/07/Pinoy-Heritage.jpg"
	},{
		name: "Phat Matt's BBQ",
		link: "www.phatmattsbbq.com",
		address: "3415 Telegraph Ave",
		city: "Oakland, CA 94609",
		phone: "(510) 879-7294",
		maps: "https://www.google.com/maps/place/Phat+Matt's+BBQ/@37.8228081,-122.2685507,17z/data=!3m1!4b1!4m5!3m4!1s0x80857e00bd1fae45:0x8f922909d29f69e0!8m2!3d37.8228081!4d-122.266362",
		facebook: "https://www.facebook.com/phatmattsbbq/",
		yelp: "https://www.yelp.com/biz/phat-matts-bbq-oakland-2",
		img: "http://platebyplate.org/wp-content/uploads/2017/06/phat_matts_bbq-e1498800238306.jpg"
	},{
		name: "Frozen Kuhsterd",
		link: "http://www.frozenkuhsterd.com/",
		address: "Moving Target",
		city: '<a href="http://www.frozenkuhsterd.com/find-fk-2/" target="_blank">Find Frozen Kuhsterd</a>',
		phone: "(415) 371-9050",
		maps: "",
		facebook: "https://www.facebook.com/FrozenKuhsterd/",
		yelp: "https://www.yelp.com/biz/frozen-kuhsterd-san-francisco-3",
		img: "http://platebyplate.org/wp-content/uploads/2017/06/frozenKuhsterd.jpg"
	},{
		name: "Dakshin",
		link: "http://www.dakshin.restaurant/",
		address: "127 Polk St",
		city: "San Francisco, CA 94109",
		phone: "(415) 400-4906",
		maps: "https://www.google.com/maps/place/dakshin:+A+South+Indian+Canteen/@37.7963794,-122.4244749,17z/data=!3m1!4b1!4m5!3m4!1s0x808580e9bc2b4ca7:0x78569c3909fa9474!8m2!3d37.7963794!4d-122.4222862",
		facebook: "https://www.facebook.com/dakshincanteen/",
		yelp: "https://www.yelp.com/biz/dakshin-san-francisco-6",
		img: "http://platebyplate.org/wp-content/uploads/2017/06/dakshin.jpg"
	},{
		name: "Twenty Five Lusk",
		link: "www.twentyfivelusk.com",
		address: "25 Lusk St",
		city: "an Francisco, California, CA 94107",
		phone: "(415) 495-5875",
		maps: "https://www.google.com/maps/place/Twenty+Five+Lusk/@37.7784685,-122.3964995,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7fd640263903:0xf813d8d02ecda3b3!8m2!3d37.7784685!4d-122.3943108",
		facebook: "https://www.facebook.com/TwentyFiveLusk/",
		yelp: "https://www.yelp.com/biz/twenty-five-lusk-san-francisco",
		img: "http://platebyplate.org/wp-content/uploads/2015/07/25_lusk_200.png"
	}
];

var bev = [
	{
		name: "",
		link: "",
		address: "",
		city: "",
		phone: "",
		maps: "",
		facebook: "",
		yelp: "",
		img: ""
	}
];

rest.forEach(function(value) {
	createString(value);
});

//{
//	name: "",
//			link: "",
//		address: "",
//		city: "",
//		phone: "",
//		maps: "",
//		facebook: "",
//		yelp: "",
//		img: ""
//}