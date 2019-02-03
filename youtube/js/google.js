// Nicholas Huaman 2018
// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope","profile email");
makeMeta("google-signin-client_id","398993796104-lq9k21a411mnehe5p94brocp3rs72dr5.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");
 // Accounts defined at at https://nhnet.github.io/js/NH_Net_Accounts/private/seriously.you.shouldnt.be.here/accounts.js
 // If someone didn't complete the sign-in correctly, then something ought to happen!
// This code is then executed.
function onFail(){
    document.querySelector('#yt-logo').innerHTML='<img width="55" src="https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico"> You closed the signin tab :(';
}
// I haven't really tried out this one.
// It is supposed to sign u out and then complete your own functions
function signOut() {
    // Here is Google Signing you out
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        window.location.reload();
    });
}
// Here is what happens when Google Signs u in correctly.
function onSignIn(googleUser) {
    var OnOff='off';
    document.querySelector('#yt-logo').innerHTML='<img width="55" src="https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico"> NH Youtube Search';
    // Refer to Google using this variable. This is the base for the useful variables for code users
    var profile = googleUser.getBasicProfile();
    // Name  Google User Variables for future use!
    var profileImg = profile.getImageUrl();
    var profileName = profile.getName();
    var profileEmail = profile.getEmail();
    document.querySelector('#query').style.display='block';
    document.querySelector('#subB').style.display='block';
    document.querySelector('.g-signin2').style.display='none';
    document.querySelector('#query').style.marginLeft='41%';
    document.querySelector('#subB').style.marginLeft='56.9%';
    document.querySelector('#subB').style.marginTop='-2.3%';
    document.querySelector('.stuff-top-right').innerHTML="<div id='box'><h1 style='text-align:right'><span id='img'></span>&nbsp;<br><div id='name'></div></h1></div>";
    document.getElementById('img').innerHTML="<img style='position:fixed;border-radius:15px' width='30px' height='30px' src='"+profileImg+"'> <img width='10px' src='https://image.flaticon.com/icons/svg/60/60995.svg'/>";
    document.getElementById('img').onclick=function(){
       if(OnOff=='off'){
          OnOff='on';
          document.getElementById('name').innerHTML= '<p style="margin-top:5px;" id="boop-box">Welcome, '+profileName.split(' ')[0]+'!<br><a href="javascript:signOut();">Sign out</a></p>';
       }else{
          OnOff='off';
          document.getElementById('name').innerHTML= '';
       }
    };
}
 // This is unimportant.
// It is what loads everything at the top!
function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.async="true";
    script.defer="true";
     document.head.appendChild(script);
}
function makeMeta(name, content) {
    var meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
     document.head.appendChild(meta);
}
function makeStyle(content) {
    var style = document.createElement("style");
    style.innerHTML = content;
    document.body.appendChild(style);
}
 // That's all folks!
// Thank you for looking at my code.
// It might even be of some use to you!
// Nicholas Huaman 2018
