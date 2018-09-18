
var ipAddress = '128.1';

var ranges = [];

var ipParts = ipAddress.split('.');
if(ipParts[ipParts.length - 1] == false) {
	ipParts = ipParts.slice(0, -1);
}

if(ipParts.length === 3) {
	for (var i = 1; i <= 255; i++) {
		var searchAddress = i + '.' + ipAddress;
		ranges.push([searchAddress, searchAddress]);
	}
}
else if(ipParts.length === 2) {
	for (var i = 1; i <= 255; i++) {
		for (var j = 1; j<= 255; j++) {
			var searchAddress = i + '.' + j + '.' + ipAddress;
			ranges.push([searchAddress, searchAddress]);
			var searchAddress = i + '.' + ipAddress + '.' + j;
			ranges.push([searchAddress, searchAddress]);
		}
	}
}
