function SUBMITtwitch(){
    OpenTwitch(document.querySelector('.Box').value, document.querySelector('.Box2').value);
}
function SUBMITyoutube(){
    OpenYouTube(document.querySelector('.Box').value, document.querySelector('.Box').value);
}
function OpenTwitch(streamer, attr){
    document.body.style.background="url(http://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg) no-repeat fixed top";
    document.body.style.backgroundSize="100% 5.5%";
    document.body.innerHTML='<div><input style="width:20%;" class="Box" placeholder="Streamer: eg. Ninja" value="'+streamer+'" type="text"><input placeholder="Attributes: eg. style=&quot;&quot;" value="'+attr+'" style="width:30%;" class="Box2" type="text"><button accesskey="h" onclick="SUBMITtwitch();">Submit Chromebook Fullscreen</button><br><br><div style="text-align:left;"><iframe frameborder="0" style="margin:-7.6px;" width="76.2%" allowfullscreen="true" height="725.5px" src="https://player.twitch.tv/?channel=' + streamer + '"' + attr + '>Your Browser does not support Iframes. Get a new one!</iframe></div><div style="margin-left:15px;margin-top:-723.5px;text-align:right;"><iframe src="https://www.twitch.tv/embed/'+streamer+'/chat" width="25%" height="725.5px" frameborder="0"></iframe></div>';
}
function OpenYouTube(id, attr){
    document.body.style.background="url(http://www.solidbackgrounds.com/images/950x350/950x350-black-solid-color-background.jpg) no-repeat fixed top";
    document.body.style.backgroundSize="100% 5.5%";
    document.body.innerHTML='<div style="color:white;">Video id: <input style="width:20%;" class="Box" placeholder="e.g. 7Qp5vcuMIlk" value="'+id+'" type="text"><input style="width:20%;" class="Box2" placeholder="e.g. style=&quot;&quot;" value="'+attr+'" type="text"><button accesskey="h" onclick="SUBMITyoutube();">Submit Chromebook Fullscreen</button><br><br><iframe frameborder="0" style="margin:-7.6px;" allowfullscreen="true" width="101.2%" height="725.5px" src="https://youtube.com/embed/' + id + '"'+attr+'>Your Browser does not support Iframes. Get a new one!</iframe>';
}
