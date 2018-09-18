
var ipAddress = '128.1';

var ranges = [];

var ipParts = ipAddress.split('.');
if(ipParts[ipParts.length - 1] == false) {
	ipParts = ipParts.slice(0, -1);
}

var maxIpAddress = ipAddress;
if(ipParts[ipParts.length-1].length === 1) {
	maxIpAddress += '99';
}
if(ipParts[ipParts.length-1].length === 2) {
	maxIpAddress += '9';
}

if(ipParts.length === 3) {
	for (var i = 1; i <= 255; i++) {
		var minRangeAddress = i + '.' + ipAddress;
		var maxRangeAddress = i + '.' + maxIpAddress;
		ranges.push([minRangeAddress, maxRangeAddress]);
	}
}
else if(ipParts.length === 2) {
	for (var i = 1; i <= 255; i++) {
		var minRangeAddress = i + '.' + ipAddress;
		var maxRangeAddress = i + '.' + maxIpAddress;
		ranges.push([minRangeAddress  + '.0', maxRangeAddress + '.255']);
		for (var j = 1; j<= 255; j++) {
			var minRangeAddress = i + '.' + j + '.' + ipAddress;
			var maxRangeAddress = i + '.' + j + '.' + maxIpAddress;
			ranges.push([minRangeAddress, maxRangeAddress]);
		}
	}
}
