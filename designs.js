// Select color input
// Select size input

var height, width, color;

// When size is submitted by the user, call makeGrid()

$('.sizePicker').submit(function (event) {
	// To prevent the page from reloading.
	event.preventDefault();

	//recalls values enterd in the Height and width. 
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
})


// To remove the previous table created
function makeGrid(x, y) {
	$('tr').remove();

// Your code goes here!
	
//To create rows and Columns based on the entries
	for (var i=1; i<=x; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (var j=1; j<=y; j++) {
			$('#table' + i).append('<td></td>');
		}

	}

//To Add color to the table cells
	$('td').click (function addColor() {
		color = $('#colorPicker').val();
		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		}else {
			$(this).attr('style', 'background-color:' + color);
		}
	})
}

