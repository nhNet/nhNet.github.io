//Code for Ad!
//Made by Nicholas Huaman
    var num1=800;
    var num2=700;
    var fnum1=40;
    var fnum2=65;
    setInterval(scaleDownLogo, 1);
    setTimeout(FinishAd,7000);
    
    function scaleDownLogo(){
        num1--;
      num2--;
        document.getElementById("Ad").style.backgroundSize = num1 + "px " + num2 + "px";
      if (num1==0){scaleDownText();}
    }
    function scaleDownText(){
        document.getElementById("Ad").innerHTML="<br><br><br><br><br><br><br><br><br><br><p style='user-select:none;font-size:"+fnum1+"px;'>Made by the creator of</p><h1 style='user-select:none;font-size:"+fnum2+"px'>HuamanGames</h1>";
    }
    function FinishAd(){
        document.body.style.background="white";
        document.body.style.color="black";
        document.body.innerHTML='<span style="user-select:none;"><h1 style="font-size:50px;">NH Net Browser</h1><br><br><p>This page allows you to go on most sites without it saving in your history or on your network. All you shall see there is this website! :)</p><p>WARNING: Extensions (Like Omnito and Netop) can see this... All Google webpages do not work. Look it up, and paste the link of the website you want to visit here.</p><p>FIND THE CORRECT LINK! Any errors will cause your page not to load...</p><br><br><p>Press the keys alt+H to search without pressing the button. (More discreet)</p><p>To view youtube videos you visit "</span><span style="user-select:all; background:purple; color:white;">https://youtube.com/embed/</span><span style="user-select:none;">" and add the video ID.</p><p>To view twitch streams you copy the purple: "</span><span style="user-select:all;background:purple; color:white;">https://player.twitch.tv/?channel=</span><span style="user-select:none;">" and add the streamer name and then </span><span style="user-select:all;background:purple; color:white;"> "allowfullscreen="true</span>".</p><p>If you' + " don't" +' understand Attributes go to this link here on <a href="https://www.w3schools.com/tags/tag_iframe.asp">W3 Attributes for Iframes...</a></p><br><br><span style="user-select:none;"><input style="width:30%;" class="Box" placeholder="Add the website here!" type="text" value="https://"><input placeholder="(Optional) Add extra html!" style="width:15%;" class="Box2" type="text"><input placeholder="Close off your html..." style="width:10%;" class="Box3" type="text"><input placeholder="(Optional) Add any iframe attributes..." style="width:17%;" class="Box3" type="text"><button accesskey="h" onclick="SUBMIT();">Submit Chromebook Fullscreen</button></span>'
    }
