var money = 1000.00;
var multiplier = 1;
var clicksPerSecond = 0;

/*stats
var tollBooths = 0;
var tollBoothPrice = 25;

var ads = 0;
var adPrice = 900;
*/
/*
	Objects for all the different buffs you can buy
	iPrice = initial price
	cPrice = current price
	amount = how many there are
	multiplier = how much to add

*/
var tollBooth = {iPrice:25, cPrice:25, amount:0, multiplier:0.7};
var doubleRoad = {iPrice:10000, cPrice:10000, amount:0, multiplier:69};

var ad = {iPrice:900, cPrice:900, amount:0, cps:1};
var monopoly = {iPrice:10000000000, cPrice:10000000000, amount:0, cps:69420};


updateMoney();
updateStats();
updateStore();



function bridgeClick(clicks) {
	money = money + (multiplier * clicks);
	updateMoney();
}

function updateMoney() {
	let rounded = Math.round(money * 100) / 100;
	document.getElementById('money').innerHTML = '$' + rounded;

}

function buyMultiplier(type, maxAmount) {
	if (maxAmount == false) {
		if (money >= type.cPrice) {
			money = money - type.cPrice;
			multiplier = multiplier + type.multiplier;
			type.amount++;
			type.cPrice = type.iPrice * Math.pow(1.1,type.amount);
		} else {
			document.getElementById('console').innerHTML = 'You do not have enough money.';
		}
	} else {
		while (money >= type.cPrice) {
			money = money - type.cPrice;
			multiplier = multiplier + type.multiplier;
			type.amount++;
			type.cPrice = type.iPrice * Math.pow(1.1,type.amount);
		}
	}
	updateStats();
	updateStore();
	updateMoney();
}

function buyCPS(type, maxAmount) {
	if (maxAmount == false) {
		if (money >= type.cPrice) {
			money = money - type.cPrice;
			clicksPerSecond = clicksPerSecond + type.cps;
			type.amount++;
			type.cPrice = type.iPrice * Math.pow(1.1,type.amount);
		} else {
			document.getElementById('console').innerHTML = 'You do not have enough money.';
		}
	} else {
		while (money >= type.cPrice) {
			money = money - type.cPrice;
			clicksPerSecond = clicksPerSecond + type.cps;
			type.amount++;
			type.cPrice = type.iPrice * Math.pow(1.1,type.amount);
		}
	}
	updateStats();
	updateStore();
	updateMoney();
}

function updateStats() {
	document.getElementById('tollBoothCount').innerHTML = tollBooth.amount + ' Toll Booths';
	document.getElementById('doubleRoadCount').innerHTML = doubleRoad.amount + ' Roads Doubled';
	document.getElementById('adCount').innerHTML = ad.amount + ' Ads';
	document.getElementById('monopolyCount').innerHTML = monopoly.amount + ' Monopolies';
}

function updateStore() {
	document.getElementById('tollBoothPrice').innerHTML = tollBooth.cPrice;
	document.getElementById('doubleRoadPrice').innerHTML = doubleRoad.cPrice;
	document.getElementById('adPrice').innerHTML = ad.cPrice;
	document.getElementById('monopolyPrice').innerHTML = monopoly.cPrice;

}

/*function buyTollBooth() {
	if (money >= tollBoothPrice) {
		money = money - tollBoothPrice;
		multiplier++;
		tollBooths++;
		tollBoothPrice = tollBoothPrice + 5;
		updateTollBooths(1);
	}
}

function buyAllTollBooths() {
	let amount = 0;
	while (money >= tollBoothPrice) {
		money = money - tollBoothPrice;
		multiplier++;
		tollBooths++;
		tollBoothPrice = tollBoothPrice + 5;
		amount++;
	}
	updateTollBooths(amount)
}

function updateTollBooths(amount) {
		updateMoney();
		document.getElementById('console').innerHTML = 'Bought ' + amount + ' Toll Booth(s)';
}

function buyAds() {
	if (money >= adPrice) {
		money = money - adPrice;
		clicksPerSecond++;
		ads++;
		adPrice = adPrice + 5;
		updateAds(1);
	}
}

function buyAllAds() {
	let amount = 0;
	while (money >= adPrice) {
		money = money - adPrice;
		clicksPerSecond++;
		ads++;
		adPrice = adPrice + 5;
		amount++;
	}
	updateAds(amount)
}

function updateAds(amount) {
		updateMoney();
		document.getElementById('console').innerHTML = 'Bought ' + amount + ' Ad(s)';
}
*/
function autoClick() {
	bridgeClick(clicksPerSecond/100);
}

setInterval(autoClick, 10);