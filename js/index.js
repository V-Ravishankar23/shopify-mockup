function checkEmail(email){
	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

$(document).ready(function(){
	$('#email-error').hide();
	$('#interest').css('color','#8e8e8e');
	$('#interest').change(function() {
		var current = $('#interest').val();
		if (current != 'null') {
			$('#interest').css('color','black');
		} else {
			$('#interest').css('color','#8e8e8e');
		}
	});
	
	$('#submit').on("click", function(){
		var email = $('#email').val();
		if(!checkEmail(email)) {
			$('#email-error').show();
			$('#email').val(""); // Clear input if email is invalid
		}
		else {
			$('#email-error').hide();
			var interestedIn = $('#interest').val();
			if (interestedIn == null) {
				interestedIn = "Everything"; // If they didn't specify what they're interested in, sign them up for everything
			}
			console.log("New Submission:" + "\n" + "Email Address: " + email + "\n" + "Interested In: " + interestedIn);
			$('#form-wrapper').slideUp("fast",function(){
				$('#thank-you').show("slow");
			});
		}
	});
	
});