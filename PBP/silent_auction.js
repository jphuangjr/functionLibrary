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
		received: false
	},{
		donor: "Farallon",
		link: "http://www.farallonrestaurant.com",
		facebook:"https://www.facebook.com/FarallonSF/",
		image: "",
		received: false
	},{
		donor: "Peju Winery",
		link: "http://www.peju.com",
		facebook:"https://www.facebook.com/PEJUWinery/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/peju-e1502784630692.png",
		received: false
	},{
		donor: "SF Symphony",
		link: "http://www.sfsymphony.org",
		facebook:"https://www.facebook.com/sfsymphony/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/sfsymphony.png",
		received: false
	},{
		donor: "SF Opera",
		link: "https://sfopera.com",
		facebook:"https://www.facebook.com/SFOpera/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/sfOpera.png",
		received: false
	},{
		donor: "Hillside Supper Club",
		link: "http://www.hillsidesupperclub.com",
		facebook:"https://www.facebook.com/HillsideSupperClub",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/hillside.jpeg",
		received: false
	},{
		donor: "Planet Granite San Francisco",
		link: "https://planetgranite.com/sf/",
		facebook:"https://www.facebook.com/planetgranitesanfrancisco/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/planetGranite.png",
		received: false
	},{
		donor: "Drakes",
		link: "https://drinkdrakes.com",
		facebook:"https://www.facebook.com/DrakesBeer/",
		image: "https://platebyplate.org/wp-content/uploads/2017/08/drakes.png",
		received: false
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
		received: false
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
		received: false
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
		received: false
	}
];

var createBlob = function(data) {
	return '\n<!-- Donor: '+ data.donor +' -->\n<div class="item-container">\n<div class="logo-container">\n<a class="logo-link" href="'+ data.link +'"><img class="logo-wide" src="'+ data.image +'" alt="All Covered " /></a>\n</div>\n</div>\n';
}

donations.map(function(v){
	if(v.received) {
		console.log(createBlob(v));
	}
});

var confirmed = donations.filter(function(val){
	return val.received == true;
}).length;

console.log("\n----------[ Data ]----------\n|  Number of donations:", donations.length, "\n|  Confirmed:", confirmed , "\n|  Unconfirmed:", donations.length - confirmed, "\n----------------------------");