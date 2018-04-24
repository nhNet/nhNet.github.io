//Code for Ad!
//Made by Nicholas Huaman
    function Ad(){
        var num1=800;
        var num2=700;
        var fnum1=40;
        var fnum2=65;
        setInterval(scaleDownLogo, 1);

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
        document.body.innerHTML='<span style="user-select:none;"><h1 style="font-size:50px;color:white;font-family: "Black Han Sans", sans-serif;">NH Net Browser</h1></span><a href="twitch"><div style="margin-left:-7.4px;background:white;border:5px black;width:50%;height:650px;"><img height="90%" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"><div style="color:black; font-size:30px"><div style="height:10%;width:100%;">NH Twitch</div></div></div></a><a href="info"><div style="margin-left:50%;margin-top:-650px;background:white;border:5px black;width:50%;height:650px;"><img height="90%" width="100%" src="https://upload.wikimedia.org/wikipedia/en/5/54/Information.png"><div style="color:black; font-size:30px"><div style="height:10%;width:100%;">Info</div></div></a>'
    }
    function FinishAdWithTwitch(){
        document.body.style.background="white";
        document.body.style.color="black";
        document.body.innerHTML='<span style="user-select:none;"><h1 style="font-size:50px;"><img style="margin:5px;" width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"> NH Twitch Browser</h1><br><br><p>This page allows you to view live twitch streams without it saving in your history or on your network. All you shall see there is this website! :)</p><p>Please note: Extensions (Like Omnito and Netop) can see this... <br><br><p>Press the keys alt+H to search without pressing the button. (More discreet)</p><p>If you' + " don't" +' understand Attributes go to this link here on <a href="https://www.w3schools.com/tags/tag_iframe.asp">W3 Attributes for Iframes...</a></p><br><br><span style="user-select:none;"><div>Twitch Streamer<span style="color:red;"><b><u>*</u></b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<input style="width:30%;" class="Box" placeholder="eg. Ninja" type="text"></div><br><div>Add any attributes (Optional):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input placeholder="eg. allowfullscreen=&quot;true&quot;" style="width:30%;" class="Box2" type="text"></div><button accesskey="h" onclick="SUBMITtwitch();">Submit Chromebook Fullscreen</button></span><br><br><p>NH Twitch Browser <b> is allowed by Twitch</b> to play their streams and does <b>not</b> restrict the streamers from earning their daily wage.</p><p><span style="color:red;"><b><u>*</u></b></span>Make sure you know a few in case some are offline!</p>'
    }
Ad();
