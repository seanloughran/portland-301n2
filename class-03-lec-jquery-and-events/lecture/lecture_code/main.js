$(document).ready(function(){
	console.log("it works");

	// Events
	$('#example-1').on('click', function() {
		alert('Clicked');
	});

	$('.green-square').on('mouseenter', function() {
		$(this).toggleClass('red');
	});

	$('.blue-square').on({
		'click': function() { $(this).toggleClass('red'); },
		'mouseenter': function() { $(this).toggleClass('violet'); }
	});

	$('.yellow-square').on('click', function() {
		$(this).toggleClass('red');
	});

	// Shorthand version
	// $('#example-1').click(function() {
		// alert('Clicked');
	// });

	// $('.square').mouseover(function() {
		// alert('Hover yo!');
	// });


	// Example #2 - .on() Change Example
	$('#drop-down').on('change', function(){
		if($(this).val()) {
			var $selectedImage = $('img[alt="' + $(this).val() + '"]');

			// .not() => Remove elements from the set of matched elements.
			$('img.example-2').not($selectedImage).hide();
			$selectedImage.show();
		} else {
			$('img.example-2').show();
		}
	});

	// Example #3 - Dynamic rendering with jQuery
	$('#dynamic .hero').on('click', function() {
		var liDataStuff = $(this).attr('data-stuff');
		var selectedListItem = $('#'+liDataStuff);

		$('div.dynamic-content').hide();
		selectedListItem.show();

	});

	$('#dynamic .hero:first').click();


  // Example #4 Prevent Default - Link
  $('#cool-image .myLink').on('click', function(e) {
    e.preventDefault();

    var $myLink = $(e.target);

    $myLink.fadeOut();
  });


  //Example #4-2 Prevent Default - Link
  $('#my-textbox').on('keypress', function(e) {
    var charCode = e.charCode;
    if (charCode !== 0) {
        if (charCode < 97 || charCode > 122) {
            e.preventDefault();
            alert(
                "Please use lowercase letters only." + "\n" + "charCode: " + charCode + "\n"
            );
        }
    }
});



});