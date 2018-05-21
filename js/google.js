// Nicholas Huaman 2018

// Declare all account names by their email.
var allAccounts = ["spbong999@gmail.com","nicholashuaman@gmail.com","nicholas.hua@kcpupils.org","pedrotomas.cob.agu@kcpupils.org","victor.arr.mar@kcpupils.org","patrickthomas.sch@kcpupils.org","lucasgabriel.sal.bev@kcpupils.org","antonio.sie.per@kcpupils.org","jorgegabriel.jof.vic@kcpupils.org","nathan.wal.san@kcpupils.org","gonzalo.agu.lag@kcpupils.org","ahmed.fte@kcpupils.org","rodrigo.par.rob@kcpupils.org","nicolas.arr.gra@kcpupils.org","juanpablo.bis@kcpupils.org","alonso.cas@kcpupils.org","david.eze.zam@kcpupils.org","diego.mor.man@kcpupils.org","andrew.row@kcpupils.org","beatriz.tay.rod@kcpupils.org","constanza.par.hor@kcpupils.org","daniel.mar.her@kcpupils.org","pablo.sai.mon@kcpupils.org","borja.alf.vic@kcpupils.org","matan.kes@kcpupils.org","marts.vec@kcpupils.org","marcos.car.val@kcpupils.org","victor.arr.mar@kcpupils.org","mrpekka740@gmail.com","rodrigo.alv.bor@kcpupils.org"];

// This shall distinguish if the account is pro, or not.
// If you name all the Pro accounts the only ones remaining will be the basic. Get it?
var proAccounts = ["spbong999@gmail.com","antonio.sie.per@kcpupils.org","lucasgabriel.sal.bev@kcpupils.org","nathan.wal.san@kcpupils.org","jorgegabriel.jof.vic@kcpupils.org","daniel.mar.her@kcpupils.org", "constanza.par.hor@kcpupils.org", "beatriz.tay.rod@kcpupils.org", "gonzalo.agu.lag@kcpupils.org", "ahmed.fte@kcpupils.org", "pedrotomas.cob.agu@kcpupils.org", "juanpablo.bis@kcpupils.org", "nicolas.arr.gra@kcpupils.org","victor.arr.mar@kcpupils.org","rodrigo.par.rob@kcpupils.org","nicholas.hua@kcpupils.org","pablo.sai.mon@kcpupils.org","patrickthomas.sch@kcpupils.org","mrpekka740@gmail.com","andrew.row@kcpupils.org","borja.alf.vic@kcpupils.org","diego.mor.man@kcpupils.org","alonso.cas@kcpupils.org","david.eze.zam@kcpupils.org"];

// If someone didn't complete the sign-in correctly, then something ought to happen!
// This code is then executed.
function onFail(){
	document.querySelector('.welcome').innerHTML="<h1 style='font-size:60px;'> You haven't signed in yet! <h1>";
}
// I haven't really tried out this one.
// It is supposed to sign u out and then complete your own functions
function signOut() {
	// Here is Google Signing you out
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		//Insert your own code below!
		document.querySelector('.welcome').innerHTML="<h1 style='font-size:60px;'> You signed out! <h1>";
	});
}
// Here is what happens when Google Signs u in correctly.
function onSignIn(googleUser) {
	// Refer to Google using this variable. This is the base for the useful variables for code users.
    var profile = googleUser.getBasicProfile();
	// Name  Google User Variables for future use!
    var profileImg = profile.getImageUrl();
    var profileName = profile.getName();
    var profileEmail = profile.getEmail();
	
    if (allAccounts.includes(profileEmail)===true){ 			//check if account actually exists
            if(proAccounts.includes(profileEmail)===true){      //check if account is pro
		// Execute this code if user is pro!
                setTimeout(function(){window.location="https://nhnet.github.io/pro/"},26000);
                document.body.innerHTML="<div id='box'><h1 style='text-align:right'>Welcome, <span id='img'></span> <span id='name'></span><div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#ffac38;font-size:10px;color:black;'>P R O</div><a href='https://nhnet.github.io/pro/'><div style='text-align:center;border:1px solid black;background:#FFFFFF;font-size:10px;'>Skip</div></a></h1></div><iframe width='100%' height='655px' src='https://nhnet.github.io/logincodeanimation/'></iframe>"
                document.getElementById('img').innerHTML="<img width='30px' height='30px' src='"+profileImg+"'>";
                document.getElementById('name').innerHTML= profileName;
                document.body.style.background="#111111";
            }else{
				// If a user is not pro (Basic), then execute this code.
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>7</h1>";},0);
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>6</h1>";},1000);
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>5</h1>";},2000);
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>4</h1>";},3000);
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>3</h1>";},4000);
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>2</h1>";},5000);
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>1</h1>";},6000);
				setTimeout(function(){document.body.innerHTML="<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='"+profileImg+"'> "+profileName+"<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>0</h1>";},7000);
				setTimeout(function(){document.body.style.background="#4c4c39";
				document.body.style.color="black";
				document.body.innerHTML='<span style="user-select:none;"><h1 style="font-size:50px;color:white;font-family: "Black Han Sans", sans-serif;">NH Net Browser</h1></span><a href="https://nhnet.github.io/google"><div style="margin-left:-7.4px;background:white;border:2px solid black;width:33.33333333333%;height:325px;"><img height="100%" width="100%" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></div></a><a href="https://nhnet.github.io/youtube"><div style="margin-left:33.33333333333333%;margin-top:-328.5px;background:white;border:2px solid black;width:33%;height:325px;"><img height="100%" width="100%" src="http://www.underconsideration.com/brandnew/archives/youtube_logo_detail.png"></div></a><a href="https://nhnet.github.io/twitch"><div style="margin-left:66.666666666666666666%;margin-top:-328.5px;background:white;border:2px solid black;width:33.33333333333333333333333%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"></div></a><a href="https://nhnet.github.io/WebDev"><div style="margin-left:-7.5px;background:#01a1bc;color:black;font-size:30px;border:2px solid black;width:33.333333333%;height:325px;"><br><img height="130px" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png"><img height="130px" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"><img height="130px" style="border-radius:52px;" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"><h1>NH WebDev</h1></div></div></a><div onclick="window.location='+"'https://nhnet.github.io/huaman_games'"+'" style="margin-left:33.33333333333333%;color:white;text-decoration:none currentcolor solid;margin-top:-328.5px;background:#01bc0d;border:2px solid black;width:33%;height:325px;"><h1 style="font-size:100px">Huaman</h1><h1 style="margin-top:-50px;">Games!</h1><h2>(Coming Soon for BASIC)</h2></div><div onclick="window.location='+"'https://nhnet.github.io/info'"+';" style="margin-left:66.66666666%;background:#c61501;border:2px solid black;margin-top:-328.5px;width:33.3333333333%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/en/5/54/Information.png"></div>';},7000);
			} 			
		// Users with an account are now logged in.
		// But what happens when a user doesn't have an account?
    }else{
		// If the account doesn't exist in my "allAccounts" array at the top of the file then execute this code!
            document.body.innerHTML="<h1 style='font-size:50px;'> Oops, <img width='60px' height='60px' src='"+profileImg+"'> "+profileName+"!</h1><h1>You didn't have an account! Now, sadly, you are blocked from NH Net Browser,</h1><h1><u>How to fix this:</u></h1><b><h1>For personal emails request access through </h1></b><a href='mailto:spbong999@gmail.com'>this email.</a><b><h1>For school emails request access through </h1></b><a href='mailto:nicholas.hua@kcpupils.org'>this email.</a><button onclick='signOut();'>SignOut</button>";
    }
}


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
}

// That's all folks!
// Thank you for looking at my code.
// It might even be of some use to you!
// Nicholas Huaman 2018
