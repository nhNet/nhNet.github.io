//Code for Ad!
//Made by Nicholas Huaman

addEventListener(
    "resize",
    function(){
        addEventListener(
            "resize",
            function(){
                return Resize();
            },
            10
        );
    },
    10
);









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
    function Resize(){
        document.body.style.background="black";
        document.body.style.color="white";
        document.body.innerHTML="<h1 style='font-size:100px;'>Wait a minute...</h1><h1 style='font-size:100px;'>Are u trying to change my size?</h1><p style='font-size:50px;'>Please don't do it. It will ruin the structure of my website.</p><p style='font-size:50px'>Reset the size of the browser to the correct one, then close and reopen the browser to start again...</p>";
    }
    function Ad(){
        var num1=800;
        var num2=700;
        var fnum1=40;
        var fnum2=65;
        var down = setInterval(scaleDownLogo, 10);
        setTimeout(function(){clearInterval(down);},1000);

        function scaleDownLogo(){
            num1--;
          num2--;
            document.getElementById("Ad").style.backgroundSize = num1 + "px " + num2 + "px";
          if (num1==0){scaleDownText();}
        }
        function scaleDownText(){
            document.getElementById("Ad").innerHTML="<br><br><br><br><br><br><br><br><br><br><p style='user-select:none;font-size:"+fnum1+"px;'>Made by the creator of</p><h1 style='user-select:none;font-size:"+fnum2+"px'>HuamanGames</h1>";
        }
    }
    function FinishAd(){
        document.body.style.background="#4c4c39";
        document.body.style.color="black";
        document.body.innerHTML='<span style="user-select:none;"><h1 style="font-size:50px;color:white;font-family: "Black Han Sans", sans-serif;">NH Net Browser</h1></span><a href="google"><div style="margin-left:-7.4px;background:white;border:2px solid black;width:33.33333333333%;height:325px;"><img height="100%" width="100%" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></div></a><a href="youtube"><div style="margin-left:33.33333333333333%;margin-top:-328.5px;background:white;border:2px solid black;width:33%;height:325px;"><img height="100%" width="100%" src="http://www.underconsideration.com/brandnew/archives/youtube_logo_detail.png"></div></a><a href="twitch"><div style="margin-left:66.666666666666666666%;margin-top:-328.5px;background:white;border:2px solid black;width:33.33333333333333333333333%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"></div></a><a href="WebDev"><div style="margin-left:-7.5px;background:#01a1bc;color:black;font-size:30px;border:2px solid black;width:33.333333333%;height:325px;"><br><img height="130px" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png"><img height="130px" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"><img height="130px" style="border-radius:52px;" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"><h1>NH WebDev</h1></div></div></a><div onclick="window.location='+"'miniclip_games'"+'" style="margin-left:33.33333333333333%;color:white;text-decoration:none currentcolor solid;margin-top:-328.5px;background:#01bc0d;border:2px solid black;width:33%;height:325px;"><br><br><br><img height="100px" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Miniclip.svg/2000px-Miniclip.svg.png"><h1>Games!</h1><h2>(Coming Soon!)</h2></div><div onclick="window.location='+"'info'"+';" style="margin-left:66.66666666%;background:#c61501;border:2px solid black;margin-top:-328.5px;width:33.3333333333%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/en/5/54/Information.png"></div>';
    }
    function FinishAdWithTwitch(){
        document.body.style.background="black";
        document.body.style.color="black";
        document.body.innerHTML='<span style="user-select:none;"><div style="background:url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Stoneseamless.png);color:white;margin-left:-7.51565px;margin-top:-7.51565px;border:5px solid black;width:100.38%;"><h1 style="font-size:50px;"><img style="border-radius:10px;background:white;margin:5px;" width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"> NH Twitch Browser</h1></div><div style="margin-left:-7.51565px;height:400px;margin-top:-3px;color:white;width:30%;font-size:45px;border:3px solid black;background:url(https://www.publicdomainpictures.net/pictures/120000/velka/abstract-colorful-seamless-pattern.jpg);background-size:300px 270px;color:white;font-family: '+"'Gamja Flower'"+', cursive;font-weight:bolder;padding:20px;"><div style="text-align:left;"><div style="border-radius:30px;background:black;">Twitch Streamer<span style="color:red;"><b><u>*</u></b></span>:</div><input style="width:90%;border-radius:25px;font-size:40px;" class="Box" autocomplete="on" name="inputStreamer" placeholder="eg. Ninja" type="text"></div><br><div style="text-align:left;"><div style="border-radius:30px;background:black;">Add any attributes (Optional):</div><input placeholder="eg. style=&quot;HERE CSS&quot;" style="height:50px;width:90%;border-radius:300px;font-size:20px;" class="Box2" type="text"></div></div><div style="margin-top:-444px;margin-left:443px;width:49.04%;background:url(http://www.cadhatch.com/communities/4/004/013/003/604//images/4618103428_100x100.jpg);background-size:300px 300px;border:3px solid black;font-weight:bolder;padding:120px;"><button style="font-size:50px;background:url(http://www.cadhatch.com/communities/4/004/013/003/604//images/4618103426_100x100.jpg);border-radius:300px;font-size:60px;font-family: '+"'Gamja Flower'"+', cursive;color:white;" accesskey="h" onclick="SUBMITtwitch();">Submit Chromebook Fullscreen</button></div></span><div style="text-align:center;background:#efdd97;height:166px;margin-left:-7.51565px;width:100.38%;border:5px solid black;"><h1>If you do not understand this website, (including: its purposes, how to use it and how it is done) please '+ "don't"+' hesitate to ask the developer of this website any questions at <a href="mailto:spbong999@gmail.com">this email address.</a></h1><h1>If any further questions need answering just check out the <a href="https://nhnet.github.io/info/"> info page.</a></h1></div>';
    }
    function FinishAdWithInfo(){
        document.body.innerHTML='<span style="user-select:none;"><h1>NH Youtube Browser</h1><br><br><p>This page allows you to view youtube videos without it saving in your history or on your network. All you shall see there is this website! :)</p><p>Please note: Extensions (Like Omnito and Netop) can see this... <br><p>The YouTube video ID is what YouTube uses to have a link to store for each unique video. This has to have been searched for beforehand. (In the google part of the browser)</p><p>Some videos contain sound that does not allow itself to be embedded. This can result in you not being able to watch it. Search for that same video in the google browser.</p><br><p>Press the keys alt+H to search without pressing the button. (More discreet)</p><br><p>NH YouTube Browser <b> is allowed by YouTube</b> to embed their videos.</p><br><h1>NH Twitch</h1><span style="user-select:none;"><br><br><p>This page allows you to view live twitch streams without it saving in your history or on your network. All you shall see there is this website! :)</p><p>Please note: Extensions (Like Omnito and Netop) can see this... <br><br><p>Press the keys alt+H to search without pressing the button. (More discreet)</p><p>If you' + " don't" +' understand Attributes go to this link here on <a href="https://www.w3schools.com/tags/tag_iframe.asp">W3 Attributes for Iframes...</a></p><br><br><br><p>NH Twitch Browser <b> is allowed by Twitch</b> to play their streams and does <b>not</b> restrict the streamers from earning their daily wage.</p><p><span style="color:red;"><b><u>*</u></b></span>Make sure you know a few in case some are offline!</p>';
    }
    function FinishAdWithYoutube(){
        document.body.style.background="black";
        document.body.style.color="black";
        document.body.innerHTML='<span style="user-select:none;"><div style="background:url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Stoneseamless.png);color:white;margin-left:-7.51565px;margin-top:-7.51565px;border:5px solid black;width:100.38%;"><h1 style="font-size:50px;"><img style="border-radius:10px;background:white;margin:5px;" width="50px" height="50px" src="http://www.underconsideration.com/brandnew/archives/youtube_logo_detail.png"> NH YouTube Browser</h1></div><div style="margin-left:-7.51565px;height:400px;margin-top:-3px;color:white;width:30%;font-size:45px;border:3px solid black;background:url(https://www.publicdomainpictures.net/pictures/120000/velka/abstract-colorful-seamless-pattern.jpg);background-size:300px 270px;color:white;font-family: '+"'Gamja Flower'"+', cursive;font-weight:bolder;padding:20px;"><div style="text-align:left;"><div style="border-radius:30px;background:black;">Youtube Video ID:</div><input style="width:90%;border-radius:25px;font-size:40px;" class="Box" placeholder="eg. z6oRgnUMfpg" type="text"></div><div style="border-radius:30px;background:black;">Attributes (Optional):</div><input style="width:90%;border-radius:25px;font-size:40px;" class="Box2" placeholder="eg. style=&quot;&quot;" type="text"></div></div><div style="margin-top:-444px;margin-left:443px;width:44.04%;background:url(http://www.cadhatch.com/communities/4/004/013/003/604//images/4618103428_100x100.jpg);background-size:300px 300px;border:3px solid black;padding:157px;"><button style="font-size:50px;background:lightblue;border-radius:300px;" accesskey="h" onclick="SUBMITyoutube();">Submit Chromebook Fullscreen</button></div></span><div style="text-align:center;background:#efdd97;height:166px;margin-left:-7.51565px;width:100.38%;border:5px solid black;"><h1>If you do not understand this website, (including: its purposes, how to use it and how it is done) please '+ "don't"+' hesitate to ask the developer of this website any questions at <a href="mailto:spbong999@gmail.com">this email address.</a></h1><h1>If any further questions need answering just check out the <a href="https://nhnet.github.io/info/"> info page.</a></h1></div>';
    }
Ad();
