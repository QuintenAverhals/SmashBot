const fs = require('fs');

module.exports = {
	writeToLog: function(message) {
		let line = getTimestamp() + " " + message + "\r\n";

		fs.appendFile('log.txt', line, function (err) {
		  if (err) throw err;
		  console.log('Saved!');
		});
	},
	getRulesList: function() {
		let fullText = fs.readFileSync('rules.txt', 'UTF-8');
		let rulesList = fullText.split('\r\n');
		return rulesList;
	}
}

function getTimestamp() {
	//[dd/mm/yyyy - uu:mm:ss]
	let date = new Date();
	let msg = "[";
	msg += date.getDate();
	msg += "/";
	msg += date.getMonth() + 1;
	msg += "/";
	msg += date.getFullYear();
	msg += " - ";
	msg += date.getHours();
	msg += ":";
	msg += date.getMinutes();
	msg += ":";
	msg += date.getSeconds();
	msg += "]";

	return msg;
};
