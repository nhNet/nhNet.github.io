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
        document.body.innerHTML='<span style="user-select:none;"><h1 style="font-size:50px;color:white;font-family: "Black Han Sans", sans-serif;">NH Net Browser</h1></span><a href="https://google.com"><div style="margin-left:-7.4px;background:white;border:2px solid black;width:50%;height:325px;"><img height="100%" width="100%" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></div></a><a href="youtube"><div style="margin-left:50%;margin-top:-328.5px;background:white;border:2px solid black;width:50%;height:325px;"><img height="100%" width="100%" src="http://www.underconsideration.com/brandnew/archives/youtube_logo_detail.png"></div></a><a href="twitch"><div style="margin-left:-7.4px;background:white;border:2px solid black;width:50%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"></div></a><a href="info"><div style="margin-left:50%;margin-top:-328.5px;background:white;border:2px solid black;width:50%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/en/5/54/Information.png"></div></a>';
    }
    function FinishAdWithTwitch(){
        document.body.style.background="black";
        document.body.style.color="black";
        document.body.innerHTML='<span style="user-select:none;"><div style="background:url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Stoneseamless.png);color:white;margin-left:-7.51565px;margin-top:-7.51565px;border:5px solid black;width:100.38%;"><h1 style="font-size:50px;"><img style="border-radius:10px;background:white;margin:5px;" width="50px" height="50px" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"> NH Twitch Browser</h1></div><div style="margin-left:-7.51565px;height:400px;margin-top:-3px;color:white;width:30%;font-size:45px;border:3px solid black;background:url(https://www.publicdomainpictures.net/pictures/120000/velka/abstract-colorful-seamless-pattern.jpg);background-size:300px 270px;color:white;font-family: '+"'Gamja Flower'"+', cursive;font-weight:bolder;padding:20px;"><div style="text-align:left;"><div style="border-radius:30px;background:black;">Twitch Streamer<span style="color:red;"><b><u>*</u></b></span>:</div><input style="width:90%;border-radius:25px;font-size:40px;" class="Box" placeholder="eg. Ninja" type="text"></div><br><div style="text-align:left;"><div style="border-radius:30px;background:black;">Add any attributes (Optional):</div><input placeholder="eg. allowfullscreen=&quot;true&quot;" style="height:50px;width:90%;border-radius:300px;font-size:20px;" class="Box2" type="text"></div></div><div style="margin-top:-444px;margin-left:443px;width:44.04%;background:url(http://www.cadhatch.com/communities/4/004/013/003/604//images/4618103428_100x100.jpg);background-size:300px 300px;border:3px solid black;font-weight:bolder;padding:100px;"><button style="font-size:50px;background:url(http://www.cadhatch.com/communities/4/004/013/003/604//images/4618103426_100x100.jpg);border-radius:300px;font-size:60px;font-family: '+"'Gamja Flower'"+', cursive;color:white;" accesskey="h" onclick="SUBMITtwitch();">Submit Chromebook Fullscreen</button></div></span><div style="text-align:center;background:#efdd97;height:166px;margin-left:-7.51565px;width:100.38%;border:5px solid black;"><h1>If you do not understand this website, (including: its purposes, how to use it and how it is done) please '+ "don't"+' hesitate to ask the developer of this website any questions at <a href="mailto:spbong999@gmail.com">this email address.</a></h1><h1>If any further questions need answering just check out the <a href="https://nhnet.github.io/info/"> info page.</a></h1></div>';
    }
    function FinishAdWithInfo(){
        document.body.innerHTML='<span style="user-select:none;"><h1>NH Youtube Browser</h1><br><br><p>This page allows you to view youtube videos without it saving in your history or on your network. All you shall see there is this website! :)</p><p>Please note: Extensions (Like Omnito and Netop) can see this... <br><p>The YouTube video ID is what YouTube uses to have a link to store for each unique video. This has to have been searched for beforehand. (In the google part of the browser)</p><p>Some videos contain sound that does not allow itself to be embedded. This can result in you not being able to watch it. Search for that same video in the google browser.</p><br><p>Press the keys alt+H to search without pressing the button. (More discreet)</p><br><p>NH YouTube Browser <b> is allowed by YouTube</b> to embed their videos.</p><br><h1>NH Twitch</h1><span style="user-select:none;"><br><br><p>This page allows you to view live twitch streams without it saving in your history or on your network. All you shall see there is this website! :)</p><p>Please note: Extensions (Like Omnito and Netop) can see this... <br><br><p>Press the keys alt+H to search without pressing the button. (More discreet)</p><p>If you' + " don't" +' understand Attributes go to this link here on <a href="https://www.w3schools.com/tags/tag_iframe.asp">W3 Attributes for Iframes...</a></p><br><br><br><p>NH Twitch Browser <b> is allowed by Twitch</b> to play their streams and does <b>not</b> restrict the streamers from earning their daily wage.</p><p><span style="color:red;"><b><u>*</u></b></span>Make sure you know a few in case some are offline!</p>';
    }
    function FinishAdWithYoutube(){
        document.body.style.background="black";
        document.body.style.color="black";
        document.body.innerHTML='<span style="user-select:none;"><div style="background:url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Stoneseamless.png);color:white;margin-left:-7.51565px;margin-top:-7.51565px;border:5px solid black;width:100.38%;"><h1 style="font-size:50px;"><img style="border-radius:10px;background:white;margin:5px;" width="50px" height="50px" src="http://www.underconsideration.com/brandnew/archives/youtube_logo_detail.png"> NH YouTube Browser</h1></div><div style="margin-left:-7.51565px;height:400px;margin-top:-3px;color:white;width:30%;font-size:45px;border:3px solid black;background:url(https://www.publicdomainpictures.net/pictures/120000/velka/abstract-colorful-seamless-pattern.jpg);background-size:300px 270px;color:white;font-family: '+"'Gamja Flower'"+', cursive;font-weight:bolder;padding:20px;"><div style="text-align:left;"><br><br><div style="border-radius:30px;background:black;">Youtube Video ID:</div><input style="width:90%;border-radius:25px;font-size:40px;" class="Box" placeholder="eg. z6oRgnUMfpg" type="text"></div></div><div style="margin-top:-444px;margin-left:443px;width:44.04%;background:url(http://www.cadhatch.com/communities/4/004/013/003/604//images/4618103428_100x100.jpg);background-size:300px 300px;border:3px solid black;padding:157px;"><button style="font-size:50px;background:lightblue;border-radius:300px;" accesskey="h" onclick="SUBMITtwitch();">Submit Chromebook Fullscreen</button></div></span><div style="text-align:center;background:#efdd97;height:166px;margin-left:-7.51565px;width:100.38%;border:5px solid black;"><h1>If you do not understand this website, (including: its purposes, how to use it and how it is done) please '+ "don't"+' hesitate to ask the developer of this website any questions at <a href="mailto:spbong999@gmail.com">this email address.</a></h1><h1>If any further questions need answering just check out the <a href="https://nhnet.github.io/info/"> info page.</a></h1></div>';
    }
Ad();
