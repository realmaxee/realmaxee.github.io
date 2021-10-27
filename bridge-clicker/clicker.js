var money = 0;
document.getElementById('money').innerHTML = '$' + money;



function bridgeClick() {
	money++;
	document.getElementById('money').innerHTML = '$' + money;
}