function onSetupProProfile(googleUser) {
	// On the Pro Dashboard Page, you would like to see yourself logged in.
	// It gives you the pleasure and satisfaction of having an actual account... :D
	
	// Refer to Google using this variable. This is the base for the useful variables for code users.
	var profile = googleUser.getBasicProfile();
	// Name  Google User Variables for use in the HTML!
	var profileImg = profile.getImageUrl();
	var profileName = profile.getName();
	var profileEmail = profile.getEmail();
	// Set the profile picture to the actual profile picture of the signed in account
	document.getElementById("nh_profilepic").innerHTML='<img src="'+profileImg+'" class="w3-round">';
	// State the Name of the account underneath the profile image
	document.getElementById("nh_username").innerHTML=profileName;
	// State the email of the account undernath the name, in smaller text.
	document.getElementById("nh_email").innerHTML="Email: " + profileEmail;
	
	if (allAccounts.includes(profileEmail)===true){ 			//check if account actually exists
            if(proAccounts.includes(profileEmail)===true){      		//check if account is pro
		    //Everything is fine. No one is trying to bypass...
	    }else{
		// Execute this code if user is not pro!
                window.location="https://nhnet.github.io/overrideShutdownCode/bypassers.html";
	    }
    }else{
		// If the account doesn't exist in my "allAccounts" array at the top of the file then execute this code!
            document.body.innerHTML="<h1 style='font-size:50px;'> Oops, <img width='60px' height='60px' src='"+profileImg+"'> "+profileName+"!</h1><h1>You didn't have an account! Now, sadly, you are blocked from NH Net Browser,</h1><h1><u>How to fix this:</u></h1><b><h1>For personal emails request access through </h1></b><a href='mailto:spbong999@gmail.com'>this email.</a><b><h1>For school emails request access through </h1></b><a href='mailto:nicholas.hua@kcpupils.org'>this email.</a><button onclick='signOut();'>SignOut</button>";
    }
}
