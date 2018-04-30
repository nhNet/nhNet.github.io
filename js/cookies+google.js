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
		case "patrickthomas.sch@kcpupils.org":
		case "lucasgabriel.sal.bev@kcpupils.org":
		case "antonio.sie.per@kcpupils.org":
		case "jorgegabriel.jof.vic@kcpupils.org":
		case "nathan.wal.san@kcpupils.org":
		case "pedrotomas.cob.agu@kcpupils.org":	//Add Pedro	//list of BASIC accounts
		case "matan.kes@kcpupils.org":		//Add Matan
		case "marts.vec@kcpupils.org":		//Add Marts
		case "marcos.car.val@kcpupils.org":	//Add Marcos
		case "victor.arr.mar@kcpupils.org":	//Add Victor
		case "nicolas.oli.mon@kcpupils.org":	//Add Nico1
		case "pablo.sai.mon@kcpupils.org":	//Add Pablo
		case "ahmed.fte@kcpupils.org":		//Add Ahmed
		case "nicolas.arr.gra@kcpupils.org":	//Add Nico2
		case "rodrigo.alv.bor@kcpupils.org":	//Add Rodrigo A
			if(profileEmail=="spbong999@gmail.com" || profileEmail=="nicholas.hua@kcpupils.org" ||profileEmail=="patrickthomas.sch@kcpupils.org"||profileEmail=="antonio.sie.per@kcpupils.org" || profileEmail=="lucasgabriel.sal.bev@kcpupils.org" || profileEmail=="jorgegabriel.jof.vic@kcpupils.org"|| profileEmail=="nathan.wal.san@kcpupils.org"){	//check if account is pro
				document.body.innerHTML='<div class="welcome"></div><div id="Ad"></div>';
				Ad();
				document.querySelector('.welcome').innerHTML="<div style='margin-left:70%;'><h1 style='font-size:20px;'> Welcome, <img width='20px' height='20px' src='"+profileImg+"'> "+profileName+"!</h1></div><div style='margin-top:-50px;margin-left:96%;'><div style='font-size:10px; width:25px;height:15px;background:#FF5000;border:1px solid white;'>Pro</div>";
				setTimeout(function(){window.location="https://nhnet.github.io/pro/";},7000);
			}else{
				Ad();
				document.body.innerHTML='<div class="welcome"></div><div id="Ad"></div>';
				document.querySelector('.welcome').innerHTML="<div style='margin-left:70%;'><h1 style='font-size:20px;'> Welcome, <img width='20px' height='20px' src='"+profileImg+"'> "+profileName+"!</h1></div><div style='margin-top:-30px;margin-left:96%;'><div style='font-size:10px; width:25px;height:15px;background:#5e8696;border:1px solid white;'>Basic</div>";
				setTimeout(FinishAd,7000);
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
