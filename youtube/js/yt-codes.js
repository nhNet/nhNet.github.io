//Look @url!
function queeries(stuff){
    try{
        var variable=window.location.toString();
        variable=variable.split('?');
        variable.shift();
        try{
            variable=variable[0].split('&').join(',');
        }catch(err){
            // Don't exit code when error found...
        }
        variable=variable.split('=').join(',');
        variable=variable.split(',');
        for(var i=0;i<stuff.length;i++){
            var workingOn=stuff[i];
            workingOn=workingOn.split('_');
            if(variable.includes(workingOn[0])==true&&variable[variable.indexOf(workingOn[0])+1]==workingOn[1]){
                eval(stuff[i+1]);
            }
            i++;
        }
    }catch(err){
      //   alert(err)
    }
}
function getRequest(searchTerm) {
    alreadySearched=true;
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyAN15Bt4fSc8TcsdaxUm0i52PCRwi-H_Bc',
        q: searchTerm
    };

    $.getJSON(url, params, showResults);
}
function showResults(results) {
    var html = "";
    var entries = results.items;
    $.each(entries, function (index, value) {
        if(JSON.stringify(value.id.kind)=='"youtube#video"'){
            var title = value.snippet.title;
            var thumbnail = value.snippet.thumbnails.default.url;
            html += '<div class="results">';
            html += '<h3>' + title + '</h3>';
            html += '<img style="border-radius:15px" draggable="false" src="' + thumbnail + '">';
            html += `<br><br><button type="button" class="btn btn-info btn-lg" onclick="changeModal('video','`+value.id.videoId+`')" data-toggle="modal" data-target="#myModal">Open Video Tools</button>`;
            html += '</div><br>';
        }else if(JSON.stringify(value.id.kind)=='"youtube#channel"'){
              var title = 'Channel: '+value.snippet.title;
              var thumbnail = value.snippet.thumbnails.default.url;
              html += '<div class="results">';
              html += '<h1>' + title + '</h1>';
              html += '<img style="border-radius:15px" draggable="false" src="' + thumbnail + '">';
              html += `<br><br><button type="button" class="btn btn-info btn-lg" onclick="changeModal('channel','`+value.id.channelId+`')" data-toggle="modal" data-target="#myModal">Channel ID</button>`;
              html += '</div><br>';
      }
    }); 

    $('#search-results').html(html);
}
function changeModal(type, value){
    if(type=='channel'){
        document.querySelector('.modal-body').innerHTML='Channel ID: '+value;
    }else if(type=='video'){
        document.querySelector('.modal-body').innerHTML='Video ID: '+value+'<br><iframe frameborder="0" src="https://www.youtube.com/embed/'+value+'" allowfullscreen sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts"></iframe>';
        document.querySelector('.modal-footer').innerHTML='<button type="button" id="closeBTN" class="btn btn-default" data-dismiss="modal">Close</button>';
        if(fromMus===true){
          document.querySelector('.modal-footer').innerHTML+='<button type="button" id="vidIDtoUse" data-vidID="'+value+'" class="btn btn-primary" data-dismiss="modal">Get audio</button>';
          document.querySelector('#vidIDtoUse').onclick=function(){
            window.location='https://nhnet.github.io/Music/yt-audio.html?vidID='+document.querySelector('#vidIDtoUse').dataset.vidID;
          };
      }
      if(download===true){
          document.querySelector('.modal-footer').innerHTML+='<button type="button" id="downloadVid" data-vidID="'+value+'" class="btn btn-info" data-dismiss="modal">Download Video (will open in new tab)<br>You will not get caught.<br>I have hidden the webpages you visit.</button>';
          document.querySelector('#downloadVid').onclick=function(){
              window.open('download.html?v='+value, '_blank');
          };
      }
    }
}
var fromMus=false;
var download=false;
var times=0;
queeries(['from_Mus','fromMus=true;','download_true','download=true;']);
document.querySelectorAll('#closeBTN')[0].onclick=function(){document.querySelector('.modal-body').innerHTML='';};
document.querySelectorAll('#closeBTN')[1].onclick=function(){document.querySelector('.modal-body').innerHTML='';};
$('#search-term').submit(function (event) {
    event.preventDefault();
    if(times==0){
        document.querySelector('form').style.animation='moveLogo 2s';
        document.querySelector('.inps').style.animation='moveSearch 2s';
        document.querySelector('.submitBTN').style.animation='moveSearchBTN 2s';
        document.querySelector('form').style.animationFillMode='forwards';
        document.querySelector('.inps').style.animationFillMode='forwards';
        document.querySelector('.submitBTN').style.animationFillMode='forwards';
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
        times++;
    }else{
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    }
});
