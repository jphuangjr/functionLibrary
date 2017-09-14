
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
		link: 'http://www.lecolonialsf.com',
		address: '20 Cosmo Pl',
		city: 'San Francisco, California, CA 94109',
		phone: '(415) 931-3600',
		maps: 'https://www.google.com/maps/place/Le+Colonial/@37.7882142,-122.4146043,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808e03bdd16b:0x972565bc5854989!8m2!3d37.7882142!4d-122.4124156',
		facebook: 'https://www.facebook.com/LecolonailSF/',
		yelp: 'https://www.yelp.com/biz/le-colonial-san-francisco',
		img: 'https://platebyplate.org/wp-content/uploads/2017/09/Logo-Le-Colonial.jpg'
	},{
		name: "Pa‘ina Lounge & Restaurant",
		link: 'http://www.painasf.com',
		address: '1865 Post St',
		city: 'San Francisco, California, CA 94115',
		phone: '(415) 829-2642',
		maps: "https://www.google.com/maps/place/Pa'ina+Restaurant+%26+Lounge/@37.785132,-122.4345597,17z/data=!3m1!4b1!4m5!3m4!1s0x808580b8f8ffc6bf:0xda340023dd9c93ee!8m2!3d37.785132!4d-122.432371",
		facebook: "https://www.facebook.com/PainaSF/",
		yelp: 'https://www.yelp.com/biz/paina-lounge-and-restaurant-san-francisco?osq=paina+sf',
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Paina.png"
	},{
		name: "Pinoy Heritage",
		link: "www.pinoyheritage.com",
		address: "POP UP!",
		city: "San Francisco",
		phone: "(650) 392-9851",
		maps: "",
		facebook: "https://www.facebook.com/pinoyheritagepopup/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Pinoy-Heritage.png"
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
		img: "https://platebyplate.org/wp-content/uploads/2014/07/dakshin.jpg"
	},{
		name: "Twenty Five Lusk",
		link: "http://www.twentyfivelusk.com",
		address: "25 Lusk St",
		city: "an Francisco, California, CA 94107",
		phone: "(415) 495-5875",
		maps: "https://www.google.com/maps/place/Twenty+Five+Lusk/@37.7784685,-122.3964995,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7fd640263903:0xf813d8d02ecda3b3!8m2!3d37.7784685!4d-122.3943108",
		facebook: "https://www.facebook.com/TwentyFiveLusk/",
		yelp: "https://www.yelp.com/biz/twenty-five-lusk-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2015/07/25_lusk_200.png"
	},{
	//	name: "Mozzeria",
	//	link: "http://www.mozzeria.com/",
	//	address: "3228 16th St",
	//	city: "San Francisco, California, CA 94103",
	//	phone: "(415) 489-0963",
	//	maps: "",
	//	facebook: "https://www.facebook.com/Mozzeria/",
	//	yelp: "https://www.yelp.com/biz/mozzeria-san-francisco",
	//	img: "https://platebyplate.org/wp-content/uploads/2017/07/Mozzeria.png"
	//},{
		name: "Asian Box",
		link: "http://www.asianbox.com/",
		address: "1401 Burlingame Ave",
		city: "Burlingame, CA 94010",
		phone: "(650) 391-9305",
		maps: "",
		facebook: "https://www.facebook.com/AsianBoxEats/",
		yelp: "https://www.yelp.com/biz/asian-box-burlingame-2?osq=Asian+box",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Asian-Box.jpg"
	},{
		name: "Tony's Slice House",
		link: "http://slicehouse.com/",
		address: "1535 Haight St",
		city: "San Francisco, CA 94117",
		phone: "Phone number (415) 552-2520",
		maps: "",
		facebook: "https://www.facebook.com/tonyscoalfired/",
		yelp: "https://www.yelp.com/biz/slice-house-by-tony-gemignani-san-francisco-2?osq=tonys+slice+house",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Slice-House.jpg"
	},{
		name: "Alexander's Steak House",
		link: "http://www.alexanderssteakhouse.com/",
		address: "448 Brannan St",
		city: "San Francsico, CA 94107",
		phone: "(415) 495-1111",
		maps: "",
		facebook: "https://www.facebook.com/alexanderssteakhousesf/",
		yelp: "https://www.yelp.com/biz/alexanders-steakhouse-san-francsico",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Alexanders-Steak-House.jpg"
	},{
		name: "Salt House",
		link: "https://salthousesf.com/",
		address: "545 Mission",
		city: "San Francisco, California, CA 94105",
		phone: "(415) 543-8900",
		maps: "",
		facebook: "https://www.facebook.com/salthousesf/",
		yelp: "https://www.yelp.com/biz/salt-house-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Salt-House.jpg"
	},{
		name: "Farallon",
		link: "http://www.farallonrestaurant.com",
		address: "450 Post St",
		city: "San Francisco, CA 94102",
		phone: "(415) 956-6969",
		maps: "",
		facebook: "https://www.facebook.com/FarallonSF/",
		yelp: "https://www.yelp.com/biz/farallon-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Farallon.jpg"
	},{
	//	name: "Waystone",
	//	link: "http://www.waystonesf.com",
	//	address: "992 Market St",
	//	city: "San Francisco, CA 94102",
	//	phone: "(628) 444-3323",
	//	maps: "",
	//	facebook: "https://www.facebook.com/waystonesf/",
	//	yelp: "https://www.yelp.com/biz/waystone-san-francisco-2",
	//	img: "https://platebyplate.org/wp-content/uploads/2017/07/waystone-e1500451668852.png"
	//},{
		name: "Akiko's",
		link: "http://akikosrestaurant.com/",
		address: "431 Bush St",
		city: "San Francisco, CA 94108",
		phone: "(415) 397-3218",
		maps: "",
		facebook: "https://www.facebook.com/akikosrestaurant/",
		yelp: "https://www.yelp.com/biz/akikos-restaurant-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/08/akikos-e1503916075719.jpg"
	},{
	//	name: "Milkbomb",
	//	link: "http://www.MilkbombIceCream.com",
	//	address: "1717 17TH STREET",
	//	city: "San Francisco, California, CA 94103",
	//	phone: "(415) 780-4429",
	//	maps: "",
	//	facebook: "https://www.facebook.com/milkbombicecream/",
	//	yelp: "https://www.yelp.com/biz/milkbomb-ice-cream-san-francisco-3",
	//	img: "https://platebyplate.org/wp-content/uploads/2017/09/milkbomb.jpg"
	//},{
		name: "Sno Crave",
		link: "https://www.facebook.com/snocravesf/",
		address: "1181 Ocean Ave",
		city: "San Francisco, CA 94112",
		phone: "(415) 859-5642",
		maps: "",
		facebook: "https://www.facebook.com/snocraveuc/",
		yelp: "https://www.yelp.com/biz/sno-crave-tea-house-sf-san-francisco-4",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Sno_crave_p_NG.png"
	},{
		name: "M.Y. China",
		link: "http://tastemychina.com",
		address: "845 Market St, Fl 4th",
		city: "San Francisco, California, CA 94103",
		phone: "(415) 580-3001",
		maps: "",
		facebook: "https://www.facebook.com/tastemychina/",
		yelp: "https://www.yelp.com/biz/m-y-china-san-francisco-2",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/mychina.jpg"
	}
];

var bev = [
	{
		name: "Scoma's Restaurant & Bar",
		link: 'http://scomas.com',
		address: '1965 Al Scoma Way',
		city: 'San Francisco, California, CA 94133',
		phone: '(415) 771-4383',
		maps: "https://www.google.com/maps/place/Scoma's+Restaurant/@37.8089443,-122.4184597,15z/data=!4m5!3m4!1s0x0:0x976bca61020dcc34!8m2!3d37.8089443!4d-122.4184597",
		facebook: 'https://www.facebook.com/ScomasSF/?ref=br_rs',
		yelp: 'https://www.yelp.com/biz/scomas-restaurant-san-francisco-3',
		img: 'https://platebyplate.org/wp-content/uploads/2017/09/Logo-Scomas.jpg'
	},{
		name: "Holy Craft",
		link: "http://www.holycraftbrewery.com",
		address: "",
		city: "San Fransisco",
		phone: "(415) 269-0738",
		maps: "",
		facebook: "https://www.facebook.com/HolyCraftBrewCo/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Holy-Craft.jpg"
	},{
		name: "Asahi",
		link: "https://www.asahi.com/",
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
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Bruce-Cost-Ginger-Ale.jpg"
	},{
	//	name: "Tommy's Margaritas",
	//	link: "http://www.tommysmargarita.com",
	//	address: "",
	//	city: "San Fransisco",
	//	phone: "(415) 575-0800",
	//	maps: "",
	//	facebook: "https://www.facebook.com/TommysMargarita/",
	//	yelp: "",
	//	img: "https://platebyplate.org/wp-content/uploads/2017/07/tommy_margarita.png"
	//},{
		name: "Black Medicine Coffee",
		link: "http://www.blackmedicine.com/",
		address: "910 81st Ave",
		city: "Oakland, California, CA 94621",
		phone: "(510) 636-1350",
		maps: "",
		facebook: "https://www.facebook.com/BlackMedicineCoffee",
		yelp: "https://www.yelp.com/biz/black-medicine-oakland",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Black-Medicine.png"
	},{
	//	name: "Tsingtao Beer",
	//	link: "https://www.tsingtaobeer.com/",
	//	address: "",
	//	city: "",
	//	phone: "",
	//	maps: "",
	//	facebook: "https://www.facebook.com/tsingtaousa/",
	//	yelp: "",
	//	img: "https://platebyplate.org/wp-content/uploads/2017/07/Tsingtao.png"
	//},{
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
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Koval.png"
	},{
		name: "Seven Stills",
		link: "http://www.sevenstillsofsf.com",
		address: "1439 Egbert Ave, Unit c",
		city: "San Francisco, California, CA 94124",
		phone: "855-5-WHISKEY",
		maps: "",
		facebook: "https://www.facebook.com/sevenstillsofsf/",
		yelp: "https://www.yelp.com/biz/seven-stills-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Seven-Stills.jpg"
	},{
		name: "Raff Distillerie",
		link: "http://www.raffdistillerie.com",
		address: "990 12th St",
		city: "San Francisco, CA 94103",
		phone: "(415) 610-7486",
		maps: "",
		facebook: "https://www.facebook.com/raffdistillerie/",
		yelp: "https://www.yelp.com/biz/raff-distillerie-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Raff-Distillerie.png"
	},{
		name: "Kikori",
		link: "http://www.kikoriwhiskey.com/",
		address: "",
		city: "",
		phone: "",
		maps: "",
		facebook: "https://www.facebook.com/kikoriwhiskey",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/08/kikori.png"
	},{
		name: "Wither Hills Winery",
		link: "https://witherhills.co.nz/",
		address: "211 New Renwick Rd",
		city: "Burleigh, Fairhall 7272, New Zealand",
		phone: "+64 3-520 8284",
		maps: "",
		facebook: "https://www.facebook.com/witherhillswinery/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Wither-Hills-Logo.jpg"
	},{
	//	name: "Barebottle Brewing",
	//	link: "http://www.barebottle.com/",
	//	address: "1525 Cortland Ave",
	//	city: "San Francisco, California, CA 94110",
	//	phone: "(415) 926-8617",
	//	maps: "",
	//	facebook: "https://www.facebook.com/Barebottle/",
	//	yelp: "https://www.yelp.com/biz/barebottle-brewing-company-san-francisco",
	//	img: "https://platebyplate.org/wp-content/uploads/2017/08/barebottle.png"
	//},{
		name: "Quixote Winery",
		link: "http://www.quixotewinery.com/",
		address: "6126 Silverado Trl",
		city: "Napa, CA 94558",
		phone: "(707) 944-2659",
		maps: "",
		facebook: "https://www.facebook.com/QuixoteWinery/",
		yelp: "https://www.yelp.com/biz/quixote-winery-napa?osq=Quixote+Winery",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Quixote.jpg"
	},{
		name: "Hannah Nicole Winery",
		link: "http://www.hnvwines.com/",
		address: "6700 Balfour Rd",
		city: "Brentwood, CA 94513",
		phone: "(925) 240-9463",
		maps: "",
		facebook: "https://www.facebook.com/hnvwine/",
		yelp: "https://www.yelp.com/biz/hannah-nicole-vineyards-and-winery-brentwood",
		img: "https://platebyplate.org/wp-content/uploads/2017/08/Hannah_nicole.jpg"
	},{
		name: "Anchor Distilling",
		link: "http://www.anchordistilling.com/",
		address: "1705 Mariposa St",
		city: "San Francisco, CA 94107",
		phone: "(415) 863-8350",
		maps: "",
		facebook: "https://www.facebook.com/AnchorDistillingCompany/",
		yelp: "https://www.yelp.com/biz/anchor-distilling-san-francisco",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Anchor-Distilling.jpg"
	},{
		name: "Coca Cola",
		link: "https://us.coca-cola.com/",
		address: "",
		city: "",
		phone: "",
		maps: "",
		facebook: "https://www.facebook.com/CocaColaUnitedStates/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Coca-Cola.jpg"
	},{
		name: "Grgich Hills Estate",
		link: "https://www.grgich.com/",
		address: "1829 St Helena Hwy",
		city: "Rutherford, CA 94573",
		phone: "(707) 963-2784",
		maps: "",
		facebook: "https://www.facebook.com/GrgichHillsEstate/",
		yelp: "https://www.yelp.com/biz/grgich-hills-estate-rutherford?osq=Grgich+Hills+Estate",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-GHE-NV.jpg"
	},{
		name: "Kieu Hoang Winery",
		link: "http://www.kieuhoangwinery.com/",
		address: "1285 Dealy Ln",
		city: "Napa, CA 94559",
		phone: "(707) 253-1615",
		maps: "",
		facebook: "https://www.facebook.com/kieuhoangwinery/",
		yelp: "https://www.yelp.com/biz/kieu-hoang-winery-napa",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/KH-winery-logo_napavalley-1.png"
	},{
		name: "Riboli Family Wine Estates",
		link: "http://riboliwines.com/",
		address: "2017 Wisteria Lane",
		city: "Paso Robles, CA 93446",
		phone: "805-226-2600",
		maps: "",
		facebook: "https://www.facebook.com/Riboli-Family-Wine-Estates-1528101670816124/",
		yelp: "",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Riboli-Family.png"
	},{
		name: "Yao Family Wines",
		link: "http://yaofamilywines.com",
		address: "929 Main St",
		city: "Saint Helena, CA 94574",
		phone: "(707) 244-9949",
		maps: "",
		facebook: "https://www.facebook.com/YaoFamilyWines/",
		yelp: "https://www.yelp.com/biz/yao-family-wines-saint-helena?osq=yao+family+wines",
		img: "https://platebyplate.org/wp-content/uploads/2017/09/Logo-Yao-Family-Wines.png"
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

console.log("REST: ",rest.length);
console.log("BEV: ",bev.length);

//,{
//	name: "",
//			link: "",
//			address: "",
//			city: "",
//			phone: "",
//			maps: "",
//			facebook: "",
//			yelp: "",
//			img: ""
//}