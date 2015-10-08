/* Saved for "posterity" I spent 4 fucking hours on it,
/  I'm not trashing it now, even if it didn't load the file correctly.
/
/  PS: This will load the file correctly from the command line:
/
/  mongoimport -h localhost:3001 --db meteor --collection deathdata --type csv --file duplicate.csv --headerline
/
/  Yes, localhost:3001 is correct.
*/


// if (Deathdata.find().count() === 0) {
// 	var filename = 'death.csv';

// 	// var csvFile = csv.readFile(filename);
// 	Papa.parse(filename, {
// 						// download: true,
// 						delimiter: ',',	// auto-detect
// 						newline: '\n',	// auto-detect
// 						// header: true,
// 						// dynamicTyping: true,
// 						// worker: true,
// 						preview: 10,
// 						step: function(results, parser){
// 							// Deathdata.insert(header: row.data)
// 							console.log("Row data: ", results.data);
// 							console.log("Row errors: ", results.errors);
// 						},
// 						complete: function(results) {
// 							console.log(results);
// 						}
// 					});

// }