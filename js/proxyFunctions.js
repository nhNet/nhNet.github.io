function SUBMITtwitch(){
    OpenTwitch(document.querySelector('.Box').value, document.querySelector('.Box2').value);
}
function SUBMITyoutube(){
    OpenYouTube(document.querySelector('.Box').value);
}
function OpenTwitch(streamer, attr){
    document.body.style.background="url(http://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg) no-repeat fixed top";
    document.body.style.backgroundSize="100% 5.5%";
    document.body.innerHTML='<div><input style="width:20%;" class="Box" placeholder="Streamer: eg. Ninja" value="'+streamer+'" type="text"><input placeholder="Attributes: eg. allowfullscreen=&quot;true&quot;" value="'+attr+'" style="width:30%;" class="Box2" type="text"><button accesskey="h" onclick="SUBMITtwitch();">Submit Chromebook Fullscreen</button><br><br><iframe frameborder="0" style="margin:-7.6px;" width="101.2%" height="725.5px" src="https://player.twitch.tv/?channel=' + streamer + '"' + attr + '>Your Browser does not support Iframes. Get a new one!</iframe>';
}
function OpenYoutube(id){
    document.body.style.background="url(http://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg) no-repeat fixed top";
    document.body.style.backgroundSize="100% 5.5%";
    document.body.innerHTML='<div style="color:white;">Video id: <input style="width:20%;" class="Box" placeholder="e.g. 7Qp5vcuMIlk" value="'+id+'" type="text"><button accesskey="h" onclick="SUBMITyoutube();">Submit Chromebook Fullscreen</button><br><br><iframe frameborder="0" style="margin:-7.6px;" width="101.2%" height="725.5px" src="https://youtube.com/embed/' + id + '">Your Browser does not support Iframes. Get a new one!</iframe>';
}
