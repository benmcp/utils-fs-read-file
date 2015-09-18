'use strict';

var readFile = require( './../lib' );

// Sync:
var file = readFile.sync( __filename, 'utf8' );
// returns <string>

console.log( file instanceof Error );
// returns false

file = readFile.sync( 'beepboop', {
	'encoding': 'utf8'
});
// returns <error>

console.log( file instanceof Error );
// returns true


// Async:
readFile( __filename, onFile );
readFile( 'beepboop', onFile );

function onFile( error, data ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'File does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.log( 'Success!' );
	}
}



