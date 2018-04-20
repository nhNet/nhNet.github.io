function SUBMIT(){
    OpenIframe(document.querySelector('.Box').value);
}
function OpenIframe(web){
    document.body.style.background="url(http://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg) no-repeat fixed top";
    document.body.style.backgroundSize="100% 5.5%";
    document.body.innerHTML='<div><input style="width:60%;" class="Box" type="text" value="'+ web+ '"><button accesskey="h" onclick="SUBMIT();">Submit Chromebook Fullscreen</button></div><br><iframe frameborder="0" style="margin:-7.6px;" width="101.2%" height="725.5px" src="' + web + '">Your Browser does not support Iframes. Get a new one!</iframe>';
}
