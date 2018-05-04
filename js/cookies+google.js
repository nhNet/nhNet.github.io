var Cookies = {

  /* Sets a cookie. The parameters are:
   *
   * name    - the name of the cookie
   * value   - the value of the cookie
   * options - an optional object which may have the following keys:
   *           domain - the domain for which the cookie should be set; if
   *                    omitted, the cookie is set for the current domain
   *           path   - the path for which the cookie should be set; if omitted,
   *                    the cookie is set for the current path
   *           expiry - the expiry date, as either an instance of Date or a
   *                    number of seconds; if omitted, the cookie expires at the
   *                    end of the browser session
   *           secure - true if the cookie should only be sent over encrypted
   *                    connections; if omitted or false, the cookie is sent
   *                    over both encrypted and unencrypted connections
   */
  set : function(name, value, options){

    // initialise the cookie data
    var data = [encodeURIComponent(name) + '=' + encodeURIComponent(value)];

    // check whether there are nay options
    if (options){

      // extend the data with the expiry date if necessary
      if ('expiry' in options){
        if (typeof options.expiry == 'number'){
          options.expiry = new Date(options.expiry * 1000 + +new Date);
        }
        data.push('expires=' + options.expiry.toGMTString());
      }

      // extend the data with the other options if necessary
      if ('domain' in options) data.push('domain=' + options.domain);
      if ('path'   in options) data.push('path='   + options.path);
      if ('secure' in options && options.secure) data.push('secure');

    }

    // set the cookie
    document.cookie = data.join('; ');

  },

  /* Returns the value of the specified cookie. If keepDuplicates is not set or
   * false then the return value is a string, or the value undefined if there is
   * no cookie with the specified name. If keepDuplucates is true then the
   * return value is an array of strings, which will be empty if there are no
   * cookies with the specified name. The parameters are:
   *
   * name           - the name of the cookie
   * keepDuplicates - true to return an array containing the values of all
   *                  cookies with the specified name; if omitted or false a
   *                  string (or the value undefined) will be returned
   */
  get : function(name, keepDuplicates){

    // initialise the list of values
    var values = [];

    // loop over the cookies
    var cookies = document.cookie.split(/; */);
    for (var i = 0; i < cookies.length; i ++){

      // if the cookie has the requested name, add its value to the list
      var details = cookies[i].split('=');
      if (details[0] == encodeURIComponent(name)){
        values.push(decodeURIComponent(details[1].replace(/\+/g, '%20')));
      }

    }

    // return the first value or all values as appropriate
    return (keepDuplicates ? values : values[0]);

  },

  /* Clears a cookie. The parameters are:
   *
   * name    - the name of the cookie
   * options - an optional object which may have the following keys:
   *           domain - the domain for which the cookie was set; if omitted, the
   *                    cookie is cleared for the current domain
   *           path   - the path for which the cookie was set; if omitted, the
   *                    cookie is cleared for the current path
   */
  clear : function(name, options){

    // clear the cookie
    if (!options) options = {};
    options.expiry = -86400;
    this.set(name, '', options);

  }

};
function onFail(){
	document.querySelector('.welcome').innerHTML="<h1 style='font-size:60px;'> You haven't signed in yet! <h1>";
}
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	document.querySelector('.welcome').innerHTML="<h1 style='font-size:60px;'> You signed out! <h1>";
	});
}
function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	var profileImg = profile.getImageUrl();
	var profileName = profile.getName();
	var profileEmail = profile.getEmail();
	switch (profileEmail){						//check if account exists
		case "spbong999@gmail.com":				//list of PRO accounts
		case "nicholashuaman@gmail.com":
		case "nicholas.hua@kcpupils.org":
		case "pedrotomas.cob.agu@kcpupils.org":	
		case "victor.arr.mar@kcpupils.org":
		case "patrickthomas.sch@kcpupils.org":
		case "lucasgabriel.sal.bev@kcpupils.org":
		case "antonio.sie.per@kcpupils.org":
		case "jorgegabriel.jof.vic@kcpupils.org":
		case "nathan.wal.san@kcpupils.org":
		case "gonzalo.agu.lag@kcpupils.org":
		case "ahmed.fte@kcpupils.org":
		case "rodrigo.par.rob@kcpupils.org":
		case "juanpablo.bis@kcpupils.org":
		case "alonso.cas@kcpupils.org":
		case "david.eze.zam@kcpupils.org":
		case "matan.kes@kcpupils.org":		//Add Matan	//list of BASIC accounts
		case "marts.vec@kcpupils.org":		//Add Marts	
		case "marcos.car.val@kcpupils.org":	//Add Marcos
		case "victor.arr.mar@kcpupils.org":	//Add Victor
		case "nicolas.oli.mon@kcpupils.org":	//Add Nico1
		case "pablo.sai.mon@kcpupils.org":	//Add Pablo
		case "nicolas.arr.gra@kcpupils.org":	//Add Nico2
		case "rodrigo.alv.bor@kcpupils.org":	//Add Rodrigo A
			if(profileEmail=="spbong999@gmail.com"|| profileEmail=="alonso.cas@kcpupils.org"||profileEmail=="david.eze.zam@kcpupils.org"|| profileEmail=="juanpablo.bis@kcpupils.org" || profileEmail=="gonzalo.agu.lag@kcpupils.org" || profileEmail=="ahmed.fte@kcpupils.org" || profileEmail=="pedrotomas.cob.agu@kcpupils.org" || profileEmail=="victor.arr.mar@kcpupils.org" || profileEmail=="rodrigo.par.rob@kcpupils.org" || profileEmail=="nicholas.hua@kcpupils.org" ||profileEmail=="patrickthomas.sch@kcpupils.org"||profileEmail=="antonio.sie.per@kcpupils.org" || profileEmail=="lucasgabriel.sal.bev@kcpupils.org" || profileEmail=="jorgegabriel.jof.vic@kcpupils.org"|| profileEmail=="nathan.wal.san@kcpupils.org"){	//check if account is pro
				setTimeout(function(){window.location="https://nhnet.github.io/pro/"},26000);
				document.body.innerHTML="<div id='box'><h1 style='text-align:right'>Welcome, <span id='img'></span> <span id='name'></span><div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#ffac38;font-size:10px;color:black;'>P R O</div><a href='https://nhnet.github.io/pro/'><div style='text-align:center;border:1px solid black;background:#FFFFFF;font-size:10px;'>Skip</div></a></h1></div><iframe width='100%' height='655px' src='https://nhnet.github.io/logincodeanimation/'></iframe>"
				document.getElementById('img').innerHTML="<img width='30px' height='30px' src='"+profileImg+"'>";
				document.getElementById('name').innerHTML= profileName;
				document.body.style.background="#111111";
			}else{
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
			break;
		default:
			document.body.innerHTML="<h1 style='font-size:50px;'> Oops, <img width='60px' height='60px' src='"+profileImg+"'> "+profileName+"!</h1><h1>You didn't have an account! Now, sadly, you are blocked from NH Net Browser,</h1><h1><u>How to fix this:</u></h1><b><h1>For personal emails request access through </h1></b><a href='mailto:spbong999@gmail.com'>this email.</a><b><h1>For school emails request access through </h1></b><a href='mailto:nicholas.hua@kcpupils.org'>this email.</a><button onclick='signOut();'>SignOut</button>";
	}
}
function onSetupProProfile(googleUser) {
	var profile = googleUser.getBasicProfile();
	var profileImg = profile.getImageUrl();
	var profileName = profile.getName();
	var profileEmail = profile.getEmail();
	document.getElementById("nh_profilepic").innerHTML='<img src="'+profileImg+'" class="w3-round">';
	document.getElementById("nh_username").innerHTML=profileName;
	document.getElementById("nh_email").innerHTML="Email: " + profileEmail;
}
