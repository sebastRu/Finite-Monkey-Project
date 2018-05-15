var sonnet; 
var sonnetArr;
var print;
var printArr;
var manuscript = [];
var wordInQuestion = [];
var sonnetTitle;


function strToArr ( stringToSplit, seperator ) { //turns a string into an array
	var newArr = stringToSplit.split( seperator );
	return newArr;
}

function randNum( ceiling ) {
	var random = Math.floor(Math.random() * ceiling ) + 1;
	return random;
}

function randIndex( array ) { // selects a random index from an array
	var write = array[Math.floor(Math.random() * array.length)];
	return write;
}

function findVerse( x, y ) { // find a pattern of strings within a greater array of strings
	var z = []; //  for finding a string from one array in another array
	console.clear();
	for ( var i = 0; i < y.length; i++ ) {
		var a = []; // for seeing if two strings from one array appear in the same order in a second array
		z.push( x.indexOf( y[i] ));
		a.push( x.indexOf( y[i-1] ));
		if ( z.length > 1 ) {
			$('span').css('backgroundColor', '');
			if ( (z[i] - a[0]) === 1) {
				console.log('true');
			} else {
				console.log(z[i] - a[0]); 
			}
		} else {
			$('span').css('backgroundColor', 'tomato');
		}
	}
	console.log(a); // for seeing what the prog. is doing
	console.log(z); // as above
}

sonnet = "My mistress' eyes are nothing like the sun; Coral is far more red than her lips' red; If snow be white, why then her breasts are dun; If hairs be wires, black wires grow on her head. I have seen roses damask'd, red and white, But no such roses see I in her cheeks; And in some perfumes is there more delight Than in the breath that from my mistress reeks. I love to hear her speak, yet well I know That music hath a far more pleasing sound; I grant I never saw a goddess go; My mistress, when she walks, treads on the ground: And yet, by heaven, I think my love as rare As any she belied with false compare.";
sonnetArr = strToArr( sonnet, ' ' ); //make sonnet into an array

jQuery(document).ready(function( $ ) {
	$('#interactive').submit(function(e) { // stop page from reloading on keypress: 'enter'
		e.preventDefault();
	});
	
	$('#mash').keyup(function() {
		manuscript.push( randIndex( sonnetArr ) ); // collect random words from the sonnet array 
		print = manuscript.join( ' ' ); 
		$("#verse").html( "<span>" + print + "</span>" ); // print to page
		findVerse( sonnetArr, manuscript );
	});
	
	$('#submit').click(function() { 
		$('span').css('backgroundColor', 'tomato');
	});
	
});
// turns what is being printed into an array. Can I use a conditional and equation to find out if the words from the string are in the same order eg. for ... sonnetArr[i] + 1 === print[i] + 1 (do: highlight <span> +print+ </span>)


console.log( 'Complete' );