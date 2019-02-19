$(function() {
  var text = $(".text");
  setTimeout(function(){
      text.removeClass("hidden");
      setTimeout(function(){document.querySelector('.text').style.animation='fade 1s';document.body.style.animation='black-blue 1s';},1200);
      setTimeout(function(){
          document.querySelector('.text').style.display='none';
          document.body.style.height='90vh';
          document.querySelector('.main').style.display='block';
          document.body.style.background='#007BFF';
          document.body.style.animation='blue-dark 5s infinite';
          document.querySelector('.main-img').style.animation='blue-dark-img_rot 5s infinite';
      },2000);
  },1000);
  document.querySelector('.GoToGame').onclick=function(){
      document.querySelector('#loadingScreenLink').click();
  };
}); 
