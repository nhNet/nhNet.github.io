function SUBMIT(){
    OpenIframe(document.querySelector('.Box').value, document.querySelector('.Box2').value);
}
function OpenIframe(web, attr){
    document.body.style.background="url(http://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg) no-repeat fixed top";
    document.body.style.backgroundSize="100% 5.5%";
    document.body.innerHTML='<div><input style="width:30%;" class="Box" placeholder="Add the website here!" type="text" value="'+ web+ '"><input placeholder="(Optional) Add any extra attributes..." style="width:30%;" class="Box2" type="text" value="'+ attr + '"><button accesskey="h" onclick="SUBMIT();">Submit Chromebook Fullscreen</button></div><br><iframe frameborder="0" style="margin:-7.6px;" width="101.2%" height="725.5px" src="' + web + '"' + attr '>Your Browser does not support Iframes. Get a new one!</iframe>';
}
