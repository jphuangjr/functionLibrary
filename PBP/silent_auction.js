/**
 * SILENT AUCTION HTML GEN
 *
 * Replace the donations array with object with keys donor (string), link (string), facebook (string), image (string), and received (boolean)
 *
 * Ex.
 * donations = [
 *    {
 *      donor: "New Delhi Restuarant",
 *      link: "http://www.newdelhirestaurant.com",
 *      facebook: "https://www.facebook.com/NewDelhiRestaurant",
 *      image: "",
 *      received: true
 *    },{
 *      donor: "Farallon",
 *      link: "http://www.farallonrestaurant.com",
 *      facebook:"https://www.facebook.com/FarallonSF/",
 *      image: "",
 *      received: false
 *    }
 *  ]
 */

var donations = [
	{
		donor: "New Delhi Restuarant",
		link: "http://www.newdelhirestaurant.com",
		facebook: "https://www.facebook.com/NewDelhiRestaurant",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/NewDelhi-e1502784026810.png",
		received: true
	},{
		donor: "Farallon",
		link: "http://www.farallonrestaurant.com",
		facebook:"https://www.facebook.com/FarallonSF/",
		image: "https://platebyplate.org/wp-content/uploads/2014/09/Farallon.png",
		received: true
	},{
		donor: "Peju Winery",
		link: "http://www.peju.com",
		facebook:"https://www.facebook.com/PEJUWinery/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/peju-e1502784630692.png",
		received: true
	},{
		donor: "SF Symphony",
		link: "http://www.sfsymphony.org",
		facebook:"https://www.facebook.com/sfsymphony/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/sfsymphony.png",
		received: true
	},{
		donor: "SF Opera",
		link: "https://sfopera.com",
		facebook:"https://www.facebook.com/SFOpera/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/sfOpera.png",
		received: true
	},{
		donor: "Hillside Supper Club",
		link: "http://www.hillsidesupperclub.com",
		facebook:"https://www.facebook.com/HillsideSupperClub",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/hillside.jpeg",
		received: true
	},{
		donor: "Planet Granite San Francisco",
		link: "https://planetgranite.com/sf/",
		facebook:"https://www.facebook.com/planetgranitesanfrancisco/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/planetGranite.png",
		received: true
	},{
		donor: "Drakes",
		link: "https://drinkdrakes.com",
		facebook:"https://www.facebook.com/DrakesBeer/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/drakes.png",
		received: true
	},{
		donor: "SF Moma",
		link: "https://www.sfmoma.org",
		facebook:"https://www.facebook.com/sfmoma/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/SFMoma.jpg",
		received: true
	},{
		donor: "Dumpling Time",
		link: "https://www.dumplingtimesf.com",
		facebook:"https://www.facebook.com/DumplingTime/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/dumpling-time.png",
		received: true
	},{
		donor: "Dog Patch Boulders",
		link: "https://touchstoneclimbing.com/dogpatch-boulders/",
		facebook:"https://www.facebook.com/DogpatchBoulders/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/dogpatch.jpg",
		received: true
	},{
		donor: "Paint the Town",
		link: "https://www.paintthetownsf.com",
		facebook:"https://www.facebook.com/paintthetownsf/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/wineAndCanvas.png",
		received: true
	},{
		donor: "Soul Cycle",
		link: "https://www.soul-cycle.com",
		facebook:"https://www.facebook.com/SoulCycleInc/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/soulcycle.jpg",
		received: true
	},{
		donor: "Lucky Strike",
		link: "http://www.bowlluckystrike.com/locations/san-francisco/",
		facebook:"https://www.facebook.com/LuckyStrikeSan/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/luckyStrike.png",
		received: true
	},{
		donor: "PrP Wine International ",
		link: "https://www.prpwine.com/index.asp",
		facebook:"https://www.facebook.com/PRP-Wine-International-200759643299287/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/prpWine.png",
		received: true
	},{
		donor: "Walt Disney Museum",
		link: "http://www.waltdisney.org",
		facebook:"https://www.facebook.com/WDFMuseum/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/walkDisneyMuseum.jpg",
		received: true
	},{
		donor: "Urban Putt",
		link: "http://urbanputt.com",
		facebook:"https://www.facebook.com/UrbanPutt/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/urbanPutt-e1502785543832.png",
		received: true
	},{
		donor: "SF Ballet",
		link: "https://www.sfballet.org",
		facebook:"https://www.facebook.com/sfballet/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/sfBallet.jpg",
		received: true
	},{
		donor: "ACT Theater",
		link: "http://www.act-sf.org",
		facebook:"https://www.facebook.com/ACTSanFrancisco/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/actTheater.jpg",
		received: true
	},{
		donor: "Edible Excursions",
		link: "http://www.edibleexcursions.net",
		facebook:"https://www.facebook.com/ediblexcursions/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/Edible-Excursions.jpg",
		received: true
	},{
		donor: "Wine and Canvas San Francisco",
		link: "http://www.wineandcanvas.com/san-francisco-ca.html",
		facebook:"https://www.facebook.com/wineandcanvasSF/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/wineAndCanvas-e1502785324758.png",
		received: true
	},{
		donor: "St. George",
		link: "http://www.stgeorgespirits.com",
		facebook:"https://www.facebook.com/StGeorgeSpirits/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/stGeorge.png",
		received: true
	},{
		donor: "Macarons By Natalie",
		link: "https://www.macaronsbynatalie.com",
		facebook:"https://www.facebook.com/macaronsbynatalie/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/macaronsByNatalie.jpeg",
		received: true
	},{
		donor: "SMAart Gallery & Studio",
		link: "http://www.smaartgallery.com",
		facebook:"https://www.facebook.com/SMAartGallery/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/smaartGallery.png",
		received: true
	},{
		donor: "Cool Haus",
		link: "https://cool.haus",
		facebook:"https://www.facebook.com/Coolhaus/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/coolHaus.png",
		received: true
	},{
		donor: "Palio d'Asti Restaurant",
		link: "https://www.paliodasti.com",
		facebook:"https://www.facebook.com/paliosf/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/palio.png",
		received: true
	},{
		donor: "Martins West",
		link: "https://www.martinswestgp.com",
		facebook:"https://www.facebook.com/martinswest/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/martinsWest.png",
		received: true
	},{
		donor: "Phat Matt's BBQ",
		link: "http://www.phatmattsbbq.com",
		facebook:"https://www.facebook.com/phatmattsbbq/",
		image: "https://platebyplate.org/wp-content/uploads/2017/06/phat_matts_bbq-e1498800238306.jpg",
		received: true
	},{
		donor: "Studio Mix",
		link: "http://www.studiomix.com",
		facebook:"https://www.facebook.com/studiomixsf/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/studioMix.png",
		received: true
	},{
		donor: "Yoga Garden",
		link: "https://www.yogagardensf.com",
		facebook:"https://www.facebook.com/yogagardensf",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/yogaGarden.jpeg",
		received: true
	},{
		donor: "Rock Wall Wine Company",
		link: "https://www.rockwallwines.com",
		facebook:"https://www.facebook.com/RockWallWines",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/rockWall-e1502786956365.jpg",
		received: true
	},{
		donor: "Dandelion Chocolate",
		link: "http://www.dandelionchocolate.com",
		facebook:"https://www.facebook.com/DandelionChocolate/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/dandelion.jpg",
		received: true
	},{
		donor: "Lazy Dog",
		link: "https://www.lazydogrestaurants.com",
		facebook:"https://www.facebook.com/LazyDogRestaurants",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/lazy_dog.png",
		received: true
	},{
		donor: "McKahn Family Cellars",
		link: "http://mckahnfamilycellars.com",
		facebook:"https://www.facebook.com/mckahnfamilycellars/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/mckahn-1.jpg",
		received: true
	},{
		donor: "Moone Tsai Wines",
		link: "http://www.moonetsai.com",
		facebook:"https://www.facebook.com/Moonetsai/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/moone.jpg",
		received: true
	},{
		donor: "SF Delta",
		link: "http://www.sfdeltas.com",
		facebook:"https://www.facebook.com/sfdeltas/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/sfdeltas.jpg",
		received: true
	},{
		donor: "SF Giants",
		link: "https://www.mlb.com/giants",
		facebook:"https://www.facebook.com/Giants/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/sfgiants.jpg",
		received: true
	},{
		donor: "Smuin Ballet",
		link: "http://www.smuinballet.org",
		facebook:"https://www.facebook.com/smuinballet/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/smuin.jpg",
		received: true
	},{
		donor: "Steins Beer Garden",
		link: "http://steinsbeergarden.com",
		facebook:"https://www.facebook.com/SteinsMountainView/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/steins.jpg",
		received: true
	},{
		donor: "Asian Box",
		link: "http://www.asianbox.com",
		facebook:"https://www.facebook.com/AsianBoxEats/",
		image: "https://platebyplate.org/wp-content/uploads/2015/07/asian_box_200.png",
		received: true
	},{
		donor: "Black Medicine",
		link: "http://www.blackmedicine.com",
		facebook:"https://www.facebook.com/BlackMedicineCoffee/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/black_medicine.jpg",
		received: true
	},{
		donor: "Breguet",
		link: "https://www.breguet.com/en",
		facebook:"https://www.facebook.com/MontresBreguet/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/breg.png",
		received: true
	},{
		donor: "Hillside Supper Club",
		link: "http://www.hillsidesupperclub.com",
		facebook:"https://www.facebook.com/HillsideSupperClub",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/brequet.png",
		received: true
	},{
		donor: "Kikori Whiskey",
		link: "http://www.kikoriwhiskey.com",
		facebook:"https://www.facebook.com/kikoriwhiskey/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/kikori.png",
		received: true
	},{
		donor: "Kokkari Estiatorio",
		link: "https://kokkari.com",
		facebook:"https://www.facebook.com/kokkaricookbook/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/kokkari.jpg",
		received: true
	},{
		donor: "Scoma's Restaurant & Bar",
		link: "http://scomas.com",
		facebook:"https://www.facebook.com/ScomasSF/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/scomas.jpg",
		received: true
	},{
		donor: "Sf Dental Care",
		link: "http://www.sanfranciscodentalcare.com",
		facebook:"https://www.facebook.com/sanfranciscodentalcare/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/sfDentalCare.jpg",
		received: true
	},{
		donor: "SMAart Gallery & Studio",
		link: "http://www.smaartgallery.com",
		facebook:"https://www.facebook.com/SMAartGallery/",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/smaart.jpg",
		received: true
	},{
		donor: "Yao Family Wines",
		link: "http://www.yaofamilywines.com",
		facebook:"https://www.facebook.com/YaoFamilyWines/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/yao.jpg",
		received: true
	},{
		donor: "Zola",
		link: "http://www.zolapaloalto.com",
		facebook:"https://www.facebook.com/zolapaloalto",
		image: "https://platebyplate.org/wp-content/uploads/2017/09/zola.jpg",
		received: true
	},{
		donor: "Hard Frescos Brewing Co.",
		link: "www.hardfrescos.com",
		facebook:"https://www.facebook.com/hardfrescos/",
		image: "https://platebyplate.org/wp-content/uploads/2017/07/hard_frescos-e1500368453835.png",
		received: true
	},{
		donor: "Le Colonial",
		link: "http://www.lecolonialsf.com",
		facebook:"https://www.facebook.com/LecolonailSF/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2015/07/le_colonial_200.png",
		received: true
	},{
		donor: "Raff Distillerie",
		link: "http://www.raffdistillerie.com",
		facebook:"https://www.facebook.com/raffdistillerie/",
		image: "https://platebyplate.org/wp-content/uploads/2017/07/raff-e1500368626428.png",
		received: true
	},{
		donor: "Seven Stills",
		link: "https://sevenstillsofsf.com",
		facebook:"https://www.facebook.com/sevenstillsofsf/?ref=br_rs",
		image: "https://platebyplate.org/wp-content/uploads/2017/07/Screenshot-2017-07-18-03.07.40-e1500372544780.png",
		received: true
	}
];

var memorabilia = [
	{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Chan-Effect-Logo.png"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Breaking-Bad-11x14.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/49rs-Legends.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Star-Trek-16-X-20.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/The-Walking-Dead-.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Avengers-Age-Of-Ultron-Poster.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Hunger-Games-Mockingjay-Part-1.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Game-of-Thrones.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Notebook.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Michael-Phelps-A.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Barack-Obama-11-X-14.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Quarterback-Legends.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Muhammad-Ali-vs-Joe-Frazier.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Muhammad-Ali-vs-George-Foreman.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Michael-Jackson-11-X-14.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Ariana-Grande.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Taylor-Swift-Sheet.jpeg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/JT-and-JayZ-Sheet.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Katy-Perry-Sheet.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Adele-Hello-Sheet-Music.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Rolling-Stones-Guitar.jpg"
	}
];


var experiences = [
	{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Weekend-as-an-Astronaut_no-logo.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/boconcept-logo.png"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Casa-de-Campo-Choice-of-Summer-2018_-no-logo.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/2018-February-London-Fashion-Week_-no-logo.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Cabo-San-Lucas-Villa-for-6_-no-logo.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Montserrat-Villa-for-6_-no-logo.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Lady-gaga-2night_-no-logo.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Hamilton-Tix-Dinner_-no-logo.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/2017-AMA-Bronze_no-logo.jpg"
	}
];

var gifts = [
	{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/Allstate_logo.png"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/boconcept-logo.png"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2016/10/bruce_cost_ginger_ale.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2014/07/fenwick-1.jpg"
	},{
		image: "https://platebyplate.org/wp-content/uploads/2017/09/opentabl.jpg"
	}
];


var createBlob = function(data) {
	return '\n<!-- Donor: '+ data.donor +' -->\n<div class="item-container">\n<div class="logo-container">\n<a class="logo-link" href="'+ data.link +'"><img class="logo-wide" src="'+ data.image +'" alt="'+ data.donor +'" /></a>\n</div>\n</div>\n';
};

var createMem = function(data) {
	return '\n<!-- Memorabilia: '+ data.image.slice(52, 100) +' -->\n<div class="item-container">\n<div class="logo-container">\n<img class="logo-wide" src="'+ data.image +'" alt="'+ data.image.slice(52,100) +'" />\n</div>\n</div>\n';
};

var createExp = function(data) {
	return '\n<!-- Experience: '+ data.image.slice(52, 100) +' -->\n<div class="item-container">\n<div class="logo-container">\n<img class="logo-wide" src="'+ data.image +'" alt="'+ data.image.slice(52,100) +'" />\n</div>\n</div>\n';
};
var createGifts = function(data) {
	return '\n<!-- Gifts: '+ data.image.slice(52, 100) +' -->\n<div class="item-container">\n<div class="logo-container">\n<img class="logo-wide" src="'+ data.image +'" alt="'+ data.image.slice(52,100) +'" />\n</div>\n</div>\n';
};

var sortFun = function(a, b) {
	var nameA = a.donor.toUpperCase(); // ignore upper and lowercase
	var nameB = b.donor.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}
	return 0;
};

donations.sort(sortFun).map(function(v){
	if(v.received) {
		console.log(createBlob(v));
	}
});

//memorabilia.map(function(v){
//	console.log(createMem(v));
//})

//experiences.map(function(v){
//	console.log(createExp(v));
//});

//gifts.map(function(v){
//	console.log(createGifts(v));
//});

//var confirmed = donations.filter(function(val){
//	return val.received == true;
//}).length;


//console.log("\n----------[ Data ]----------\n|  Number of donations:", donations.length, "\n|  Confirmed:", confirmed , "\n|  Unconfirmed:", donations.length - confirmed, "\n----------------------------");
