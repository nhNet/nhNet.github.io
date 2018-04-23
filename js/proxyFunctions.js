function SUBMIT(){
    OpenIframe(document.querySelector('.Box').value, document.querySelector('.Box2').value, document.querySelector('.Box3').value,document.querySelector('.Box4').value);
}
function OpenIframe(web, thisishtml, thisisclosing, attr2){
    document.body.style.background="url(http://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg) no-repeat fixed top";
    document.body.style.backgroundSize="100% 5.5%";
    document.body.innerHTML='<div><input style="width:30%;" class="Box" placeholder="Add the website here!" type="text" value="'+ web+ '"><input placeholder="(Optional) Add extra html!" style="width:15%;" class="Box2" type="text" value="'+ thisishtml + '"><input placeholder="Close off your html, if you'+" haven't already"+'" style="width:10%;" class="Box3" type="text" value="'+ thisisclosing + '"><input placeholder="(Optional) Add any iframe attributes..." style="width:17%;" class="Box3" type="text" value="'+ attr2 + '"><button accesskey="h" onclick="SUBMIT();">Submit Chromebook Fullscreen</button></div><br>'+thisishtml+'<iframe frameborder="0" style="margin:-7.6px;" width="101.2%" height="725.5px" src="' + web + '"' + attr2 + '>Your Browser does not support Iframes. Get a new one!</iframe>'+thisisclosing;
}
