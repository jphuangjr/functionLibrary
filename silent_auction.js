/**
 * Created by joshuahuang on 8/3/17.
 */

var donations = [
	{
		donor: "New Deli Restaurant",
		link: "http://www.newdelhirestaurant.com",
		faceboook: "https://www.facebook.com/NewDelhiRestaurant",
		image: "",
		confirmed: false
	},{
		donor: "Farallon",
		link: "http://www.farallonrestaurant.com",
		facebook:"https://www.facebook.com/FarallonSF/",
		image: "",
		confirmed: false
	},{
		donor: "Peju Winery",
		link: "http://www.peju.com",
		facebook:"https://www.facebook.com/PEJUWinery/",
		image: "",
		confirmed: false
	},{
		donor: "SF Symphony",
		link: "http://www.sfsymphony.org",
		facebook:"https://www.facebook.com/sfsymphony/",
		image: "",
		confirmed: false
	},{
		donor: "SF Opera",
		link: "https://sfopera.com",
		facebook:"https://www.facebook.com/SFOpera/",
		image: "",
		confirmed: false
	},{
		donor: "Hillside Supper Club",
		link: "http://www.hillsidesupperclub.com",
		facebook:"https://www.facebook.com/HillsideSupperClub",
		image: "",
		confirmed: false
	},{
		donor: "Planet Granite San Francisco",
		link: "https://planetgranite.com/sf/",
		facebook:"https://www.facebook.com/planetgranitesanfrancisco/",
		image: "",
		confirmed: false
	},{
		donor: "Drakes",
		link: "https://drinkdrakes.com",
		facebook:"https://www.facebook.com/DrakesBeer/",
		image: "",
		confirmed: false
	},{
		donor: "SF Moma",
		link: "https://www.sfmoma.org",
		facebook:"https://www.facebook.com/sfmoma/",
		image: "",
		confirmed: true
	},{
		donor: "Dumpling Time",
		link: "https://www.dumplingtimesf.com",
		facebook:"https://www.facebook.com/DumplingTime/",
		image: "",
		confirmed: true
	},{
		donor: "Dog Patch Boulders",
		link: "https://touchstoneclimbing.com/dogpatch-boulders/",
		facebook:"https://www.facebook.com/DogpatchBoulders/",
		image: "",
		confirmed: true
	},{
		donor: "Paint the Town",
		link: "https://www.paintthetownsf.com",
		facebook:"https://www.facebook.com/paintthetownsf/",
		image: "",
		confirmed: true
	},{
		donor: "Soul Cycle",
		link: "https://www.soul-cycle.com",
		facebook:"https://www.facebook.com/SoulCycleInc/",
		image: "",
		confirmed: true
	},{
		donor: "Lucky Strike",
		link: "http://www.bowlluckystrike.com/locations/san-francisco/",
		facebook:"https://www.facebook.com/LuckyStrikeSan/",
		image: "",
		confirmed: true
	},{
		donor: "PrP Wine International ",
		link: "https://www.prpwine.com/index.asp",
		facebook:"https://www.facebook.com/PRP-Wine-International-200759643299287/",
		image: "",
		confirmed: true
	},{
		donor: "Walt Disney Museum ",
		link: "http://www.waltdisney.org",
		facebook:"https://www.facebook.com/WDFMuseum/",
		image: "",
		confirmed: true
	},{
		donor: "Urban Putt",
		link: "http://urbanputt.com",
		facebook:"https://www.facebook.com/UrbanPutt/",
		image: "",
		confirmed: true
	},{
		donor: "SF Ballet",
		link: "https://www.sfballet.org",
		facebook:"https://www.facebook.com/sfballet/?ref=br_rs",
		image: "",
		confirmed: true
	},{
		donor: "ACT Theater",
		link: "http://www.act-sf.org",
		facebook:"https://www.facebook.com/ACTSanFrancisco/",
		image: "",
		confirmed: true
	},{
		donor: "Edible Excursions",
		link: "http://www.edibleexcursions.net",
		facebook:"https://www.facebook.com/ediblexcursions/",
		image: "",
		confirmed: true
	},{
		donor: "Wine and Canvas San Francisco",
		link: "http://www.wineandcanvas.com/san-francisco-ca.html",
		facebook:"https://www.facebook.com/wineandcanvasSF/",
		image: "",
		confirmed: true
	},{
		donor: "St. George",
		link: "http://www.stgeorgespirits.com",
		facebook:"https://www.facebook.com/StGeorgeSpirits/",
		image: "",
		confirmed: true
	},{
		donor: "Macarons By Natalie",
		link: "https://www.macaronsbynatalie.com",
		facebook:"https://www.facebook.com/macaronsbynatalie/",
		image: "",
		confirmed: true
	},{
		donor: "SMAart Gallery & Studio",
		link: "http://www.smaartgallery.com",
		facebook:"https://www.facebook.com/SMAartGallery/",
		image: "",
		confirmed: true
	},{
		donor: "Cool Haus",
		link: "https://cool.haus",
		facebook:"https://www.facebook.com/Coolhaus/",
		image: "",
		confirmed: true
	},{
		donor: "Palio d'Asti Restaurant",
		link: "https://www.paliodasti.com",
		facebook:"https://www.facebook.com/paliosf/",
		image: "",
		confirmed: false
	},{
		donor: "Martins West",
		link: "https://www.martinswestgp.com",
		facebook:"https://www.facebook.com/martinswest/",
		image: "",
		confirmed: true
	},{
		donor: "Phat Matt's BBQ",
		link: "http://www.phatmattsbbq.com",
		facebook:"https://www.facebook.com/phatmattsbbq/",
		image: "",
		confirmed: false
	},{
		donor: "Studio Mix",
		link: "http://www.studiomix.com",
		facebook:"https://www.facebook.com/studiomixsf/",
		image: "",
		confirmed: true
	},{
		donor: "Yoga Garden ",
		link: "https://www.yogagardensf.com",
		facebook:"https://www.facebook.com/yogagardensf",
		image: "",
		confirmed: true
	}
];

var createBlob = function(data) {
	return '\n<!-- Donor: '+ data.donor +' -->\n<div class="item-container">\n<div class="logo-container">\n<a class="logo-link" href="'+ data.link +'"><img class="logo-wide " src="'+ data.image +'" alt="All Covered " /></a>\n</div>\n</div>\n';
}

donations.map(function(v){
	if(v.confirmed) {
		console.log(createBlob(v));
	}
});