
function createString(data) {
	var maps = data.maps ? '<div class="thumbnail-links">\n<a href="'+ data.maps +'">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/google_maps_logo.jpg" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	var facebook = data.facebook ? '\n<div class="thumbnail-links">\n<a href="'+ data.facebook +'" target="_blank">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/facebook_logo.png" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	var yelp = data.yelp ? '\n<div class="thumbnail-links">\n<a href="'+ data.yelp +'" target="_blank">\n <img src="http://platebyplate.org/wp-content/uploads/2015/04/yelp_logo.png" alt="'+ data.name +'" width="25" height="25" />\n</a>\n</div>' : "";
	console.log('<div class="item">\n<a href="'+ data.link +'" target="_blank" rel="noopener">\n <img src=" '+ data.img +'" alt="'+ data.name +'" />\n</a>\n <p id="name"> '+ data.name +'</p>\n <p id="address-street"> '+ data.address +'</p>\n <p id="address-city"> ' + data.city +'</p>\n <p id="phone"> '+ data.phone +'</p>\n' + maps + facebook + yelp + '\n</div> \n\n');
}

var emptyTemplate = {
	name: "",
	link: "",
	address: "",
	city: "",
	phone: "",
	maps: "",
	facebook: "",
	yelp: "",
	img: ""
};

var rest = [
	{
		name: "Le Colonial SF",
		link: 'www.lecolonialsf.com',
		address: '20 Cosmo Pl',
		city: 'San Francisco, California, CA 94109',
		phone: '(415) 931-3600',
		maps: 'https://www.google.com/maps/place/Le+Colonial/@37.7882142,-122.4146043,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808e03bdd16b:0x972565bc5854989!8m2!3d37.7882142!4d-122.4124156',
		facebook: 'https://www.facebook.com/LecolonailSF/',
		yelp: 'https://www.yelp.com/biz/le-colonial-san-francisco',
		img: 'http://platebyplate.org/wp-content/uploads/2017/06/leColonial-e1498800114347.jpeg'
	},{
		name: "Pa‘ina Lounge & Restaurant",
		link: 'www.painasf.com',
		address: '1865 Post St',
		city: 'San Francisco, California, CA 94115',
		phone: '(415) 829-2642',
		maps: "https://www.google.com/maps/place/Pa'ina+Restaurant+%26+Lounge/@37.785132,-122.4345597,17z/data=!3m1!4b1!4m5!3m4!1s0x808580b8f8ffc6bf:0xda340023dd9c93ee!8m2!3d37.785132!4d-122.432371",
		facebook: "https://www.facebook.com/PainaSF/",
		yelp: 'https://www.yelp.com/biz/paina-lounge-and-restaurant-san-francisco?osq=paina+sf',
		img: "http://platebyplate.org/wp-content/uploads/2016/06/Paina-Logo.png"
	},{
		name: "Noelani‘s Bar and Grill",
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
		name: "Phat Matt‘s BBQ",
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
		link: "http://www.twentyfivelusk.com",
		address: "25 Lusk St",
		city: "an Francisco, California, CA 94107",
		phone: "(415) 495-5875",
		maps: "https://www.google.com/maps/place/Twenty+Five+Lusk/@37.7784685,-122.3964995,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7fd640263903:0xf813d8d02ecda3b3!8m2!3d37.7784685!4d-122.3943108",
		facebook: "https://www.facebook.com/TwentyFiveLusk/",
		yelp: "https://www.yelp.com/biz/twenty-five-lusk-san-francisco",
		img: "http://platebyplate.org/wp-content/uploads/2015/07/25_lusk_200.png"
	},{
		name: "Mozzeria",
		link: "http://www.mozzeria.com/",
		address: "3228 16th St",
		city: "San Francisco, California, CA 94103",
		phone: "(415) 489-0963",
		maps: "",
		facebook: "https://www.facebook.com/Mozzeria/",
		yelp: "https://www.yelp.com/biz/mozzeria-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/Mozzeria.png"
	},{
		name: "Asian Box",
		link: "http://www.asianbox.com/",
		address: "1401 Burlingame Ave",
		city: "Burlingame, CA 94010",
		phone: "(650) 391-9305",
		maps: "",
		facebook: "https://www.facebook.com/AsianBoxEats/",
		yelp: "https://www.yelp.com/biz/asian-box-burlingame-2?osq=Asian+box",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/asian_box.png"
	},{
		name: "Tony's Slice House",
		link: "http://slicehouse.com/",
		address: "1535 Haight St",
		city: "San Francisco, CA 94117",
		phone: "Phone number (415) 552-2520",
		maps: "",
		facebook: "https://www.facebook.com/tonyscoalfired/",
		yelp: "https://www.yelp.com/biz/slice-house-by-tony-gemignani-san-francisco-2?osq=tonys+slice+house",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/sliceHouse-e1500451718619.png"
	},{
		name: "Manila Bowl",
		link: "http://manilabowl.com/",
		address: "1355 Market St",
		city: "San Francisco, CA 94103",
		phone: "(415) 528-1969",
		maps: "",
		facebook: "https://www.facebook.com/ManilaBowlSF/",
		yelp: "https://www.yelp.com/biz/manila-bowl-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/manila_bowl-e1500453054608.png"
	},{
		name: "Alexander's Steak House",
		link: "http://www.alexanderssteakhouse.com/",
		address: "448 Brannan St",
		city: "San Francsico, CA 94107",
		phone: "(415) 495-1111",
		maps: "",
		facebook: "https://www.facebook.com/alexanderssteakhousesf/",
		yelp: "https://www.yelp.com/biz/alexanders-steakhouse-san-francsico",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/Alexanders-logo.png"
	},{
		name: "Salt House",
		link: "https://salthousesf.com/",
		address: "545 Mission",
		city: "San Francisco, California, CA 94105",
		phone: "(415) 543-8900",
		maps: "",
		facebook: "https://www.facebook.com/salthousesf/",
		yelp: "https://www.yelp.com/biz/salt-house-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/salt_house.png"
	},{
		name: "Farallon",
		link: "http://www.farallonrestaurant.com",
		address: "450 Post St",
		city: "San Francisco, CA 94102",
		phone: "(415) 956-6969",
		maps: "",
		facebook: "https://www.facebook.com/FarallonSF/",
		yelp: "https://www.yelp.com/biz/farallon-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/Farallon-logo.png"
	},{
		name: "Waystone",
		link: "http://www.waystonesf.com",
		address: "992 Market St",
		city: "San Francisco, CA 94102",
		phone: "(628) 444-3323",
		maps: "",
		facebook: "https://www.facebook.com/waystonesf/",
		yelp: "https://www.yelp.com/biz/waystone-san-francisco-2",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/waystone-e1500451668852.png"
	}
];

var bev = [
	{
		name: "Holy Craft",
		link: "http://www.holycraftbrewery.com",
		address: "",
		city: "San Fransisco",
		phone: "(415) 269-0738",
		maps: "",
		facebook: "https://www.facebook.com/HolyCraftBrewCo/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/08/holy_craft-e1501743612836.jpg"
	},{
		name: "Asahi",
		link: "",
		address: "3625 Del Amo Blvd, Suite 250",
		city: "Torrance, CA 90503",
		phone: "(310) 214-9051",
		maps: "",
		facebook: "",
		yelp: "",
		img: "http://platebyplate.org/wp-content/uploads/2015/04/asahi.png"
	},{
		name: "Bruce Cost Ginger Ale",
		link: "http://www.brucecostgingerale.com",
		address: "465 Johnson Ave",
		city: "Brooklyn, New York, NY 11237",
		phone: "(212) 488-0661",
		maps: "",
		facebook: "https://www.facebook.com/BCGingerAle/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/bruce_cost_ginger_ale.png"
	},{
		name: "Tommy's Margaritas",
		link: "http://www.tommysmargarita.com",
		address: "",
		city: "San Fransisco",
		phone: "(415) 575-0800",
		maps: "",
		facebook: "https://www.facebook.com/TommysMargarita/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/tommy_margarita.png"
	},{
		name: "Black Medicine Coffee",
		link: "http://www.blackmedicine.com/",
		address: "910 81st Ave",
		city: "Oakland, California, CA 94621",
		phone: "(510) 636-1350",
		maps: "",
		facebook: "https://www.facebook.com/BlackMedicineCoffee",
		yelp: "https://www.yelp.com/biz/black-medicine-oakland",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/Screenshot-2017-07-18-03.03.10-e1500372290902.png"
	},{
		name: "Tsingtao Beer",
		link: "https://www.tsingtaobeer.com/",
		address: "",
		city: "",
		phone: "",
		maps: "",
		facebook: "https://www.facebook.com/tsingtaousa/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/Tsingtao.png"
	},{
		name: "Hard Frescos Brewing",
		link: "http://www.hardfrescos.com/home/",
		address: "3645 Lawton Street",
		city: "San Francisco, CA 94122",
		phone: "",
		maps: "",
		facebook: "https://www.facebook.com/hardfrescos/",
		yelp: "https://www.yelp.com/biz/hard-frescos-brewing-san-francisco-2",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/hard_frescos.png"
	},{
		name: "Koval",
		link: "http://www.kovaldistillery.com",
		address: "5121 N Ravenswood Ave",
		city: "Chicago, Illinois, IL 60640",
		phone: "(312) 878-7988",
		maps: "",
		facebook: "https://www.facebook.com/kovaldistillery/",
		yelp: "https://www.yelp.com/biz/koval-distillery-chicago",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/koval.jpg"
	},{
		name: "Seven Stills",
		link: "http://www.sevenstillsofsf.com",
		address: "1439 Egbert Ave, Unit c",
		city: "San Francisco, California, CA 94124",
		phone: "855-5-WHISKEY",
		maps: "",
		facebook: "https://www.facebook.com/sevenstillsofsf/",
		yelp: "https://www.yelp.com/biz/seven-stills-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/Screenshot-2017-07-18-03.07.40.png"
	},{
		name: "Raff Distillerie",
		link: "http://www.raffdistillerie.com",
		address: "990 12th St",
		city: "San Francisco, CA 94103",
		phone: "(415) 610-7486",
		maps: "",
		facebook: "https://www.facebook.com/raffdistillerie/",
		yelp: "https://www.yelp.com/biz/raff-distillerie-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/07/raff-e1500368626428.png"
	}
];

var createSection = function(r, b) {
	var restaurant = '<div id="Restaurants">\n<h2 style="color: #00afef;">2017 Participating Restaurants</h2>\n&nbsp;\n<div class="vendor-body">\n<div class="vendor-wrapper">\n<div class="masonry">';
	var beverages = '<div id="Restaurants">\n<h2 style="color: #00afef;">2017 Participating Beverage Purveyors</h2>\n&nbsp;\n<div class="vendor-body">\n<div class="vendor-wrapper">\n<div class="masonry">';
	var end = '</div>\n</div>\n</div>\n</div>';
	console.log(restaurant);
	r.forEach(function(value) {
		createString(value);
	});
	console.log(end);
	console.log(beverages);
	b.forEach(function(value2) {
		createString(value2);
	});
	console.log(end);
};

createSection(rest, bev);
