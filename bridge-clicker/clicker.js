var money = 0.00;
var multiplier = 1;
var clicksPerSecond = 0;

/*stats*/
var tollBooths = 0;
var tollBoothPrice = 25;

var ads = 0;
var adPrice = 900;


updateMoney();
updateTollBooths();
updateAds();



function bridgeClick(clicks) {
	money = money + (multiplier * clicks);
	updateMoney();
}

function updateMoney() {
	let rounded = Math.round(money * 100) / 100;
	document.getElementById('money').innerHTML = '$' + rounded;

}

function buyTollBooth() {
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
		document.getElementById('tollBoothPrice').innerHTML = tollBoothPrice;
		document.getElementById('console').innerHTML = 'Bought ' + amount + ' Toll Booth(s)';
		document.getElementById('tollBoothCount').innerHTML = tollBooths + ' Toll Booths';
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
		document.getElementById('adPrice').innerHTML = adPrice;
		document.getElementById('console').innerHTML = 'Bought ' + amount + ' Ad(s)';
		document.getElementById('adCount').innerHTML = ads + ' Ads';
}

function autoClick() {
	bridgeClick(clicksPerSecond/100);
}

setInterval(autoClick, 10);