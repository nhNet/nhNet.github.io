var params=new URLSearchParams(window.location.search);
var stolenSubs=["4;13","4;14"]
if(stolenSubs.includes(params.get("e"))&&params.get("l")=="en"){
  document.querySelector(".mbr-section-title").innerHTML+=`<br><span style="font-size:15px">Subtitles from <a href="https://miraculoushub.tv">miraculoushub.tv</a></span>`;
}
if(params.get("e")=="4;17"){
  document.querySelector("video").style.filter="blur(3px)";
}
