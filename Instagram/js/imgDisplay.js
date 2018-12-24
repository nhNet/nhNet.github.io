function NH_Insta(getAccessToken){
	// tabbed menus
	$('#instafeed').text('');
	$('.menu .item').tab();
	
	// first script to pull posts
  
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+getAccessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 20 ) { return false; }
		 // template
	    if(this.user.username==="nicholash_2004"){
	    	var myLikes = this.likes.count+50;
	    }else{
	    	var myLikes = this.likes.count;
	    }
      $(
      '<div class="column">' +
        '<div class="ui centered fluid card">' +
          '<div class="image">' +
            '<img width="640px" height="640px" src="'+this.images.standard_resolution.url+'"/>' +
              '</div>' +
                '<div class="content">' +
                  '<a class="header">' + this.user.full_name + '</a>' +
                    '<div class="meta">' +
                      '<span class="date">Made using Instagram'+"'s "+ this.filter.toUpperCase() + ' filter.' +'</span>' +
                      '</div>' +
                      '<div class="description">Uploaded by <a href="#">' + this.user.username +
                      '</a></div>' +
                  '</div>'+
                    '<div class="extra content">' +
                    '<span class="right floated">' + '<i class="heart outline icon">'+ '</i>' + myLikes +' likes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="'+this.images.standard_resolution.url+'"><i class="fa fa-download" style="font-size:36px"></i></a>'+'</span>' +
							'<span class="left floated">' + '<i class="comments outline icon">'+ '</i>' + this.comments.count +' comments'+'</span>' +
                    '</div>' +
                  '</div>'+
                '</div>'
      ).appendTo('#instafeed');
	document.querySelector("#infoText").innerHTML='Find your AccessToken at <a href="http://instagram.pixelunion.net/">this site</a>.';
    }); 
  });
}
