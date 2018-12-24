// Nicholas Huaman 2018
// Storage of Instagram AccessTokens
// These will give data for the images that will show up...
document.querySelector('.circle').style.display="none";
function changeUser(){
	try{
		eval(
			"var tokenData = NH_NET_AccessTokens."+
			document.querySelector("#username").value.toLowerCase()+
			";var splitThis = tokenData.split(\"___\");"+
			"var instaEmail = splitThis[0];"+
			"var accessToken = splitThis[1];"
		);
		document.querySelector('.circle').style.display="block";
		document.querySelector('#instafeed').style.display="none";
		$.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
		$.each(insta.data,function (photos, src) {
		  document.querySelector('.profileImgHere').src=this.user.profile_picture;
		  $('#infoText').text('\n\nLoading '+this.user.username+'...');
			});
		});
	}catch(err){
		alert("Oops! that was not a registered account!");
	}
	setTimeout(function(){
			document.querySelector('#instafeed').style.display="block";
			eval(
				"var tokenData = NH_NET_AccessTokens."+
				document.querySelector("#username").value.toLowerCase()+
				";var splitThis = tokenData.split(\"___\");"+
				"var instaEmail = splitThis[0];"+
				"var accessToken = splitThis[1];"+
				"NH_Insta(accessToken);"
			);
			document.querySelector('.circle').style.display="none";
	},5000);
}

var NH_NET_AccessTokens = {
	nicholash_2004 : "spbong999@gmail.com___2332206178.1677ed0.cdf2a78e521849a7b980459a3d8bf4b9",
	obcif123 : "oliver.hua@kcpupils.org___8004172817.1677ed0.8f1ecc65a1144b99bea503b7219e91ce",
	nhnetbrowsers : "nicholas.hua@kcpupils.org___8055239849.1677ed0.7a2427d3185d4ed0b00b1c03cda1f309"
};
var NHNetInstaUsers=['spbong999','obcif123','nhnetbrowsers'];
document.querySelector('.allUsers').innerHTML='<h1>The following are registered users: </h1>';
for(var i=0; i<NHNetInstaUsers.length; i++){
	document.querySelector('.allUsers').innerHTML+='<h1>&nbsp;&nbsp;&nbsp;&nbsp;&middot; '+NHNetInstaUsers[i]+'</h1>';
}

var tokenData = NH_NET_AccessTokens.nicholash_2004;
var splitThis = tokenData.split("___");
var instaEmail = splitThis[0];
var accessToken = splitThis[1];

$(document).keypress(function(e) {
    if(e.which == 13) {
	$('#buttonToSearch').click();
    }
});

setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading S...';},0);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Sc...';},50);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Scr...';},100);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Scri...';},150);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Scrip...';},200);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Script...';},250);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Scripts...';},300);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading ...';},500);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading P...';},550);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Ph...';},600);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Pho...';},650);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Phot...';},700);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Photo...';},750);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Photos...';},800);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading ...';},1000);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading S...';},1050);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Se...';},1100);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Set...';},1150);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Sett...';},1200);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Setti...';},1250);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Settin...';},1300);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Setting...';},1350);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Settings...';},1400);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading ...';},1500);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading D...';},1550);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Da...';},1600);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Dat...';},1650);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Data...';},1700);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading ...';},2000);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading S...';},2050);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading St...';},2100);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Stu...';},2150);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Stuf...';},2200);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Stuff...';},2250);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading ...';},2500);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading P...';},2550);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Po...';},2600);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Pos...';},2650);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Post...';},2700);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Loading Posts...';},2750);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Ok. Loading up now';},3000);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Ok. Loading up now.';},3050);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Ok. Loading up now..';},3100);
setTimeout(function(){document.querySelector("#infoText").innerHTML='Ok. Loading up now...';},3150);
setTimeout(function(){NH_Insta(accessToken);},3200);
