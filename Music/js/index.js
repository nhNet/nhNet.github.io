$(function(){
          document.querySelector('.loadedUnsafe').click();
          document.querySelector('.loadedUnsafe').onclick=function(){
              document.querySelector('.intro').style.display='none';
              document.querySelector('.body').style.display='block';
          };
          var speed = document.getElementById("myRange");
          var vol = document.getElementById("myVolRange");
          var speed2 = document.getElementById("myspeed");
          var speedOut = document.getElementById("speedOut");
          var vol2 = document.getElementById("myVol");
          var output = document.getElementById("speed");
          var pitch = document.querySelector(".pitch-slider");
          output.innerHTML = speed.value/50-0.01;
          speedOut.innerHTML = speed2.value/50-0.01;
          speed.oninput = function() {
             output.innerHTML = speed.value/50;
             audio.playbackRate=speed.value/50;
          }
          speed2.oninput = function() {
             speedOut.innerHTML = speed2.value/50;
             st.tempo=document.getElementById("myspeed").value/50;
          }
          vol.oninput = function() {
           audio.volume=vol.value/100;
          } 
             var playerTrack = $("#player-track"),
             bgArtwork = $('#bg-artwork'),
             bgArtworkUrl,
             albumName = $('#album-name'),
             trackName = $('#track-name'),
             albumArt = $('#album-art'),
             sArea = $('#s-area'),
             seekBar = $('#seek-bar'),
             trackTime = $('#track-time'),
             insTime = $('#ins-time'),
             sHover = $('#s-hover'),
             playPauseButton = $("#play-pause-button"),
             i = playPauseButton.find('i'),
             tProgress = $('#currentTime'),
             tTime = $('#track-length'),
             loopBtn = $('#play-loop'),
             seekT,
             lolType=true,
             seekLoc,
             seekBarPos,
             cM,
             ctMinutes,
             ctSeconds,
             curMinutes,
             curSeconds,
             durMinutes,
             durSeconds,
             defaultLogoItunes='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4HBg8QBw8OFRENEQ8XDhMQEA8QEBUQFhEWFxYRGBUYHjQgGholJxYVITIhJSkrLi4vGB8zODMtQygtLjcBCgoKDg0OGxAQGzUdICUtLS8vNTU3Ky0yMC4tMC4tLS0tKy0tLy0rMi0tLS4tKy0rLy0tLS0tLS8rLS0tLS8vMP/AABEIAKMBNgMBEQACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABQYHAQIEA//EAEEQAQACAQICBAkJBgUFAAAAAAABAgMEEQUGITE1UQcSQXFzkaGysxMiMzZhcnSBgzI0kqKxwSVCY9HhFBUjQ2L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgMBBAUG/8QAMREBAAIBAgIHBwUAAwAAAAAAAAECEQMEBXESITEyM0GxIiNhgcHR8BM0UZGhFUJS/9oADAMBAAIRAxEAPwDcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLPqcemrvqL0rHfe1ax7TKVaWtOKxlF6nmnQ6frzRae7HW1/bEbe1HpQ2qbDcW/6459SNvz1p4v8ANw55r5Z2xxO3fEeN0nSbH/E6uOuY/wB+y0YM1dRgrfDO9b1i1Z76zG8Sk5lqzWZie2HcYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfPNnpgrvnvWsd9rRWPXLEzhKtLWnFYyjNTzNotP15q2n/Ti2T21jb2ozqVjzbdOHbm/ZXHPqRWp54xV/dsGS335rjj2byhOtHk3KcF1J71oj/fsi9Tzpq8n0FcNI81r29czt7Ef1ZblOD6Md6Zn/EVqeN6zU/TajL5qz8nHqpsdK0tqmy29Oysevqj5+dbe3TM9cz0z6yIX4iOqBOIYmSepOIQmWp8udgaX0OL3YSeU3XjX5ykhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAjuYNZbh/Bs2XD+1WvzZ69rWmKxP5b7o3nEZbOz0o1detJ7Jll2XJbNkm2aZtaeu1pm1p/OWnOZezpp1pGKxiHXcwkJRDEyJRCEyJxCEyLIhXMiUQhNiepOIQmzU+XOwNL6HF7sMS8xufFtzlIsKQAAAAAAAAAAAAAAAAAAAAAAAAAAAELzl9W8/wCn8WiN+63uG/uqfP0lmjX6L1+XLPRRmRmIQmXKcQhNjZOIVzYTiFc2cpxCubOJjoSiFc2aly52DpfQ4/dhVbtef1/EtzlIsKgAAAAAAAAAAAAAAAAAAAAAAAAAAAELzl9Ws/6fxaMT2N3h37mvz9JZpCHRetmXLPRVzYm0R1yzFVc2ffT6TNqv3bFlv9tKWtHriNksNfU16V7ZwlNPyrrs/XjrSO/Jeseyu8+xnqad+IaUdk5Smn5HvP71qKx3xjpM/wA0z/ZnpNS/Ef8AzVKafk3R4vpYy3+/kmPc2OlLXtvdWfgqPMehpw/i+THpt4pEVmsTMztvHVvPTK6nXDb0dabUzK/cu9g6b0OP3YU27Zc3V7880iirAAAAAAAAAAAAAAAAAAAAAAAAAAAAQvOf1az/AKfxaMx1tzh/7ivz9JUPgPC54xxGMUX8WIpa17bbz4sTEbRHf86GZjDv7vdfoafSxnyXPTcl6PF9N8rk+/fxY/k2RcS/E9e3ZiPz45S2l4RpdJ+74MUTHl8Ss2/inpGpfX1L960y9oqAAAZ3zlH+P5PuY/dbWlHstvRtii6cvdhab0OP3Ya9+9LWvObSkEUQAAAAAAAAAAAAAAAAAAAAAAAAAAAEJzn9Ws/6fxaJ0jNm3sfHr8/RV/B/29f8Pf4mNZqxiHS4pOdKOf0loahwgAAAAGec4x/j+T7mP3W7oR7CcWxC58v9h6b0OP3Yaup3pQzlIIAAAAAAAAAAAAAAAAAAAAAAAAAAAACE50+rOo/T+LRboxm8NnZ+NX88lW8H3b1/w9/iY2xuK4r82/xGc6cc/u0RpOOAAAAAz7nDt7J9zH/R0NtHsKdS+JXHl/sPTehx+7DT1e/PNZWcxCQVpAAAAAAAAAAAAAAAAAAAAAAAAAAAAITnT6s6j9P4tF+2jOpDY2s41YVbwe9vX/D3+Jjbe8jFI5/dt722aRz+7RHNcwAAAABn3N/b2T7mP+jp7WPdtDcWxdceX+w9N6LH7sNDW8Sebc0pzSOSQVpgAAAAAAAAAAAAAAAAAAAAAAAAAAAIPnX6saj9P4tGztPGr+eS7QnGpCreDzt6/wCHv8TG3uIRjTjn9JX7m2atFchpAAAAAM95vnfj+TbyUx7+fxd/7uvs4905O8t7xcuX+w9N6HH7sObr+Jbm6Oh4deUJBUtAAAAAAAAAAAAAAAAAAAAAAAAAAAAQfOv1Y1H6fxaNrZePX88k9PvQqvg87ev+Hv8AExulxOMaUc/pK3WtmGjOG1wAHx1Wqx6PDN9Vetax5bTtG/d9s/YlSlrzisZYtaKxmepXtVzrp8czGkx5MndO0Y6z6+n2N6nDtSe9OGpfe0js60XqOctTl+gx4qRPf42S0fn0R7GxXh1I705a19/fyjCBy5bZslr5rTa15mbTPXMt2KRWMQ0L3m05lpPL/Yem9Dj92HA3Hi25y7238KvKEgpXAAAAAAAAAAAAAAAAAAAAAAAAAAAOuTJXFXfJMREdczMRHrZiJnqgVDnXj+my8Ktp9Jkpkvlmm/ycxata1vFpmbR0b9G232upw/aan6sXtGIhOsTE5RXg77fv+Hv8TG2+KxjRjn9JYtbLRnn0QHXJeMWObZJ2isTNp7oiN5lmImZxDEzjrZZxfil+L62cmaZ8WN/kqeSlPN3z5Z/4el2+3ro0xHb5uLra06lsvGvw15l2iWMITLnfoRmFcy07l7sLTehx+7Dze48W3OXo9t4NeUJBSvAAAAAAAAAAAAAAAAAAAAAAAAAeHjHFMXB9DOXVzO0dFax+1a09VYjv/wBpXaGhfWv0KpVrNpxDO+J8363X2n5K/wAjSequL9rb7b9e/m2eh0eGaOnHtR0p+P2Xxp1j4oPLe2ov42ota8997TefXLfrp1rGKxhiZx2EQyptZaPB32/f8Pf4mNyuL+DHP6Sqicy0Z51MBH8wVm3A9TGPrnDl2/gnoXbaYjWrn+YVa2f07Y/iWWVno6HqsPPzLkwhMuYYRmXPTPRWN5noiI65meqELYiModcziGscP0//AEmgxY5/9WOlf4axH9nltS3SvNv5l6rTp0KRX+IehBMAAAAAAAAAAAAAAAAAAAAAAAABm/hF1Vs3GqYv8uHHExH/AN3md59UV9r0fCNOI0pv5zPov0uqFWdZmbORTaztDCi1lq8HVJnjWW0dVcExPntkpMe7LkcXn3VY+P0ljT7WiPPLgHExvHSDNeYuA34RqLWxVmdPaZmlo6fEif8AJbu28k+Xoej2e8rq1xbverhbvbW0pzHd9EPFolutCZdsUTlyRXDFrWnqrWJtafyjpRtaKxmZwxETacR1yuXK/LN8OeufiUbTXpxY+iZifJe3290ONvd7Fo6Gn85dfZbGaz+pqdvlH1lb3KdYAAAAAAAAAAAAAAAAAAAAAAAAABnfhH0NsXE8eeI+ZlpFJnyRkrMztPnif5Zeg4PrRNJ0/OOv5fnqsrbqwqTssWlzAptLnfaOlhTaWkch8JtoOG2y6iJi+pms7T0TGON/FiY8kzvM/nDzPE9xGrqdGvZHr5rdKuIzKzuasAAJ6Y6QeG/B9Je+99Np5nvnFjmf6Lo3GrEYi0/3KmdvpTOZrH9Q9WHBTBXbBStY7q1isexXa0265nK2KxXqiMPoiyAAAAAAAAAAAAAAAAAAAAAAAAAAA8+v0WLiGkti1dYtS8dMT7JifJMd6enqW07Ras4mBRdfyFnx5J/7dlx2p5Iy70vEd28RMT5+h3NLjFJj3kYn4fn3JfHByJrb2/8ALfT1j717T6vF29qy3F9GOyJn+vurmsysXBeTNPw/LGTVWnNkr018aIrjie+KeWfPMuduOJ6mrHRr7Mf7/bMacQszmpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z',
             playProgress,
             bTime,
             nTime = 0,
             buffInterval = null,
             tFlag = false,
             albums = [
              'Over the Horizon Arr.', 
              'Wreck It Ralph Soundtrack', 
              'HTTYD P8- Forbidden Friendship',
              'Nyan Cat!'
             ],
             trackNames = [
              'Samsung, Nicholas Huaman',
              'Disney', 
              'Dreamworks, John Powell',
              'The most annoying...'
             ],
             albumArtworks = ['_1','_2','_3','_4'],
             trackUrl = [
              'https://nhnet.github.io/management/audio/Over%20The%20Horizon%20Arr..mp3',
              'https://nhnet.github.io/Music/Default/WIR.mp3',
              'https://nhnet.github.io/Music/Default/08%2C%20Forbidden%20Friendship%20(score)%20-%20How%20To%20Train%20Your%20Dragon%20OST.mp3',
              'http://188.138.96.232/tb/9/d9/nyan_cat_mp3_29324.mp3'
             ],
             playPreviousTrackButton = $('#play-previous'),
             playNextTrackButton = $('#play-next'),
             currIndex = -1;
             $(document).keypress(function(e) {
                 if(e.which == 32) {
                     playPause();
                 }
             });
             
           document.querySelector('.img').style.transform='scaleX(1.1)';
             $('.inputfile').on('change', function (e) {
                 var fakeurl = URL.createObjectURL(this.files[0]);
                 audio.src=fakeurl;
                 var fileName = $(this).val().split('/').pop().split('\\').pop().split('.');
                 var fileFormat = fileName[1].toLowerCase();
                 var fileName = fileName[0];
                 if(fileName.length<35){
                     fileName = fileName+'.'+fileFormat;
                 }else{
                     fileName = fileName.substr(0,34)+'... .'+fileFormat;
                 }
                 albumName.text(fileName);
                 trackName.text('Unknown artist');
                 var albumPic=document.querySelectorAll('.img');
                 albumPic[0].src=defaultLogoItunes;
                 albumPic[1].src=defaultLogoItunes;
                 $(':focus').blur()
                 //albumPic[2].src=defaultLogoItunes;
                 document.querySelector('.img').style.transform='scaleX(1.5)';
                 audio.playbackRate=speed.value/50;
                 setTimeout(function(){playPause();},1000);
         //      musicName=document.cookie = "musicName="+fileName+"; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/";
             });
         
             function playPause()
             {
                 setTimeout(function ()
                 {
               if (audio.paused)
               {
                   playerTrack.addClass('active');
                   albumArt.addClass('active');
                   checkBuffering();
                   $('.playbtn').text('Pause!');
                   i.attr('class', 'fas fa-pause');
                   audio.play();
               } else

               {
                   playerTrack.removeClass('active');
                   albumArt.removeClass('active');
                   clearInterval(buffInterval);
                   $('.playbtn').text('Play!');
                   albumArt.removeClass('buffering');
                   i.attr('class', 'fas fa-play');
                   audio.pause();
               }
                 }, 300);
             }
         
         
             function showHover(event)
             {
                 seekBarPos = sArea.offset();
                 seekT = event.clientX - seekBarPos.left;
                 seekLoc = audio.duration * (seekT / sArea.outerWidth());
         
                 sHover.width(seekT);
         
                 cM = seekLoc / 60;
         
                 ctMinutes = Math.floor(cM);
                 ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
         
                 if (ctMinutes < 0 || ctSeconds < 0)
                 return;
         
                 if (ctMinutes < 0 || ctSeconds < 0)
                 return;
         
                 if (ctMinutes < 10)
                 ctMinutes = '0' + ctMinutes;
                 if (ctSeconds < 10)
                 ctSeconds = '0' + ctSeconds;
         
                 if (isNaN(ctMinutes) || isNaN(ctSeconds))
                 insTime.text('--:--');else
         
                 insTime.text(ctMinutes + ':' + ctSeconds);
         
                 insTime.css({ 'left': seekT, 'margin-left': '-21px' }).fadeIn(0);
         
             }
         
             function hideHover()
             {
                 sHover.width(0);
                 insTime.text('00:00').css({ 'left': '0px', 'margin-left': '0px' }).fadeOut(0);
             }
         
             function playFromClickedPos()
             {
                 audio.currentTime = seekLoc;
                 seekBar.width(seekT);
                 hideHover();
             }
         
             function updateCurrTime()
             {
                 nTime = new Date();
                 nTime = nTime.getTime();
         
                 if (!tFlag)
                 {
                     tFlag = true;
                     trackTime.addClass('active');
                 }
         
                 curMinutes = Math.floor(audio.currentTime / 60);
                 curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
         
                 durMinutes = Math.floor(audio.duration / 60);
                 durSeconds = Math.floor(audio.duration - durMinutes * 60);
         
                 playProgress = audio.currentTime / audio.duration * 100;
         
                 if (curMinutes < 10)
                 curMinutes = '0' + curMinutes;
                 if (curSeconds < 10)
                 curSeconds = '0' + curSeconds;
         
                 if (durMinutes < 10)
                 durMinutes = '0' + durMinutes;
                 if (durSeconds < 10)
                 durSeconds = '0' + durSeconds;
         
                 if (isNaN(curMinutes) || isNaN(curSeconds))
                 tProgress.text('00:00');else
         
                 tProgress.text(curMinutes + ':' + curSeconds);
         
                 if (isNaN(durMinutes) || isNaN(durSeconds))
                 tTime.text('00:00');else
         
                 tTime.text(durMinutes + ':' + durSeconds);
         
                 if (isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds))
                 trackTime.removeClass('active');else
         
                 trackTime.addClass('active');
         
         
                 seekBar.width(playProgress + '%');
         
                 if (playProgress == 100)
                 {
                     i.attr('class', 'fa fa-play');
                     seekBar.width(0);
                     tProgress.text('00:00');
                     albumArt.removeClass('buffering').removeClass('active');
                     clearInterval(buffInterval);
                 }
             }
         
             function checkBuffering()
             {
                 clearInterval(buffInterval);
                 buffInterval = setInterval(function ()
                 {
                     if (nTime == 0 || bTime - nTime > 1000)
                     albumArt.addClass('buffering');else
         
                     albumArt.removeClass('buffering');
         
                     bTime = new Date();
                     bTime = bTime.getTime();
         
                 }, 100);
             }
         
             function selectTrack(flag)
             {
                 if (flag == 0 || flag == 1)
                 ++currIndex;else
         
                 --currIndex;
         
                 if (currIndex > -1 && currIndex < albumArtworks.length)
                 {
                     if (flag == 0)
                     i.attr('class', 'fa fa-play');else
         
                     {
                         albumArt.removeClass('buffering');
                         i.attr('class', 'fa fa-pause');
                     }
                     seekBar.width(0);
                     trackTime.removeClass('active');
                     tProgress.text('00:00');
                     tTime.text('00:00');
                     currAlbum = albums[currIndex];
                     currTrackName = trackNames[currIndex];
                     currArtwork = albumArtworks[currIndex];
                     audio.src = trackUrl[currIndex];
                     audio.playbackRate=speed.value/50;
                     nTime = 0;
                     bTime = new Date();
                     bTime = bTime.getTime();
                     if (flag != 0)
                     {
                         audio.play();
                         playerTrack.addClass('active');
                         albumArt.addClass('active');
         
                         clearInterval(buffInterval);
                         checkBuffering();
                     }
                     albumName.text(currAlbum);
                     trackName.text(currTrackName);
                     albumArt.find('img.active').removeClass('active');
                     $('#' + currArtwork).addClass('active');
                 } else
         
                 {
                     if (flag == 0 || flag == 1)
                     --currIndex;else
         
                     ++currIndex;
                 }
             }
             function initPlayer()
             {
                 audio = new Audio();
                 selectTrack(0);
                 audio.loop = false;
                 audio.onended=function(){
                     selectTrack(1);
                 }
                 loopBtn.on('click', function(){
                     if (audio.loop==true){
                         audio.loop=false;
                         document.querySelector('#play-loop').style.color= '#d6d6de';
                         document.querySelector('#play-loop').style.background= 'white';
                     }else{
                         audio.loop=true;
                         document.querySelector('#play-loop').style.background= '#d6d6de';
                         setTimeout(function(){document.querySelector('#play-loop').style.color= 'white';},1000);
                     }
                 });
                 playPauseButton.on('click', playPause);
                 sArea.mousemove(function (event) {showHover(event);});
                 sArea.mouseout(hideHover);
                 sArea.on('click', playFromClickedPos);
                 $(audio).on('timeupdate', updateCurrTime);
                 playPreviousTrackButton.on('click', function () {selectTrack(-1);});
                 playNextTrackButton.on('click', function () {selectTrack(1);});
             }
             initPlayer();
         });
function extend(a,b) {
             for ( var i in b ) {
                 var g = b.__lookupGetter__(i), s = b.__lookupSetter__(i);
         
                 if ( g || s ) {
                     if ( g )
                         a.__defineGetter__(i, g);
                     if ( s )
                         a.__defineSetter__(i, s);
                  } else
                      a[i] = b[i];
             }
             return a;
         }
         
         function testFloatEqual(a, b) {
             return (a > b ? a - b : b - a) > 1e-10;
         }
         
         /////////////
         
         function AbstractFifoSamplePipe(createBuffers) {
             if (createBuffers) {
                 this.inputBuffer = new FifoSampleBuffer();
                 this.outputBuffer = new FifoSampleBuffer();
             }
             else {
                 this.inputBuffer = this.outputBuffer = null;
             }
         }
         
         AbstractFifoSamplePipe.prototype = {
             get inputBuffer() {
                 return this._inputBuffer;
             },
         
             set inputBuffer (inputBuffer) {
               this._inputBuffer = inputBuffer;
             },
         
             get outputBuffer() {
                 return this._outputBuffer;
             },
         
             set outputBuffer(outputBuffer) {
               this._outputBuffer = outputBuffer;
             },
         
             clear: function () {
                 this._inputBuffer.clear();
                 this._outputBuffer.clear();
             }
         };
         
         /////////////////
         
         function RateTransposer(createBuffers) {
             AbstractFifoSamplePipe.call(this, createBuffers);
             this._reset();
             this.rate = 1;
         }
         
         extend(RateTransposer.prototype, AbstractFifoSamplePipe.prototype);
         extend(RateTransposer.prototype, {
             set rate(rate) {
                 this._rate = rate;
                 // TODO aa filter
             },
         
             _reset: function () {
                 this.slopeCount = 0;
                 this.prevSampleL = 0;
                 this.prevSampleR = 0;
             },
         
             clone: function () {
                 var result = new RateTransposer();
                 result.rate = this._rate;
                 return result;
             },
         
             process: function () {
                 // TODO aa filter
                 var numFrames = this._inputBuffer.frameCount;
                 this._outputBuffer.ensureAdditionalCapacity(numFrames / this._rate + 1);
                 var numFramesOutput = this._transpose(numFrames);
                 this._inputBuffer.receive();
                 this._outputBuffer.put(numFramesOutput);
             },
         
             _transpose: function (numFrames) {
                 if (numFrames == 0) {
                     // no work
                     return 0;
                 }
         
                 var src = this._inputBuffer.vector;
                 var srcOffset = this._inputBuffer.startIndex;
         
                 var dest = this._outputBuffer.vector;
                 var destOffset = this._outputBuffer.endIndex;
         
                 var used = 0;
                 var i = 0;
         
                 while(this.slopeCount < 1.0) {
                     dest[destOffset + 2 * i] = (1.0 - this.slopeCount) * this.prevSampleL + this.slopeCount * src[srcOffset];
                     dest[destOffset + 2 * i + 1] = (1.0 - this.slopeCount) * this.prevSampleR + this.slopeCount * src[srcOffset + 1];
                     i++;
                     this.slopeCount += this._rate;
                 }
         
                 this.slopeCount -= 1.0;
         
                 if (numFrames != 1) {
                     out: while (true) {
                         while (this.slopeCount > 1.0) {
                             this.slopeCount -= 1.0;
                             used++;
                             if (used >= numFrames - 1) {
                                 break out;
                             }
                         }
         
                         var srcIndex = srcOffset + 2 * used;
                         dest[destOffset + 2 * i] = (1.0 - this.slopeCount) * src[srcIndex] + this.slopeCount * src[srcIndex + 2];
                         dest[destOffset + 2 * i + 1] = (1.0 - this.slopeCount) * src[srcIndex + 1] + this.slopeCount * src[srcIndex + 3];
         
                         i++;
                         this.slopeCount += this._rate;
                     }
                 }
         
                 this.prevSampleL = src[srcOffset + 2 * numFrames - 2];
                 this.prevSampleR = src[srcOffset + 2 * numFrames - 1];
         
                 return i;
             }
         });
         
         ////////////////////
         
         function FifoSampleBuffer() {
             this._vector = new Float32Array();
             this._position = 0;
             this._frameCount = 0;
         }
         
         FifoSampleBuffer.prototype = {
             get vector() {
                 return this._vector;
             },
         
             get position() {
                 return this._position;
             },
         
             get startIndex() {
                 return this._position * 2;
             },
         
             get frameCount() {
                 return this._frameCount;
             },
         
             get endIndex() {
                 return (this._position + this._frameCount) * 2;
             },
         
             clear: function() {
                 this.receive(frameCount);
                 this.rewind();
             },
         
             put: function (numFrames) {
                 this._frameCount += numFrames;
             },
         
             putSamples: function (samples, position, numFrames) {
                 position = position || 0;
                 var sourceOffset = position * 2;
                 if (!(numFrames >= 0)) {
                     numFrames = (samples.length - sourceOffset) / 2;
                 }
                 var numSamples = numFrames * 2;
         
                 this.ensureCapacity(numFrames + this._frameCount);
         
                 var destOffset = this.endIndex;
                 this._vector.set(samples.subarray(sourceOffset, sourceOffset + numSamples), destOffset);
         
                 this._frameCount += numFrames;
             },
         
             putBuffer: function (buffer, position, numFrames) {
                 position = position || 0;
                 if (!(numFrames >= 0)) {
                     numFrames = buffer.frameCount - position;
                 }
                 this.putSamples(buffer.vector, buffer.position + position, numFrames);
             },
         
             receive: function (numFrames) {
                 if (!(numFrames >= 0) || numFrames > this._frameCount) {
                     numFrames = this._frameCount
                 }
                 this._frameCount -= numFrames;
                 this._position += numFrames;
             },
         
             receiveSamples: function (output, numFrames) {
                 var numSamples = numFrames * 2;
                 var sourceOffset = this.startIndex;
                 output.set(this._vector.subarray(sourceOffset, sourceOffset + numSamples));
                 this.receive(numFrames);
             },
         
             extract: function (output, position, numFrames) {
                 var sourceOffset = this.startIndex + position * 2;
                 var numSamples = numFrames * 2;
                 output.set(this._vector.subarray(sourceOffset, sourceOffset + numSamples));
             },
         
             ensureCapacity: function (numFrames) {
                 var minLength = parseInt(numFrames * 2);
                 if (this._vector.length < minLength) {
                     var newVector = new Float32Array(minLength);
                     newVector.set(this._vector.subarray(this.startIndex, this.endIndex));
                     this._vector = newVector;
                     this._position = 0;
                 }
                 else {
                     this.rewind();
                 }
             },
         
             ensureAdditionalCapacity: function (numFrames) {
                 this.ensureCapacity(this.frameCount + numFrames);
             },
         
             rewind: function () {
                 if (this._position > 0) {
                     this._vector.set(this._vector.subarray(this.startIndex, this.endIndex));
                     this._position = 0;
                 }
             }
         };
         
         //////////////////
         
         function FilterSupport(pipe) {
             this._pipe = pipe;
         }
         
         FilterSupport.prototype = {
             get pipe() {
                 return this._pipe;
             },
         
             get inputBuffer() {
                 return this._pipe.inputBuffer;
             },
         
             get outputBuffer() {
                 return this._pipe.outputBuffer;
             },
         
             // fillInputBuffer: function(numFrames) {
             //     throw new Error("fillInputBuffer() not overridden");
             // },
         
             fillOutputBuffer: function(numFrames) {
                 while (this.outputBuffer.frameCount < numFrames) {
                     // TODO hardcoded buffer size
                     var numInputFrames = (8192 * 2) - this.inputBuffer.frameCount;
         
                     this.fillInputBuffer(numInputFrames);
         
                     if (this.inputBuffer.frameCount < (8192 * 2)) {
                         break;
                         // TODO flush pipe
                     }
                     this._pipe.process();
                 }
             },
         
             clear: function() {
                 this._pipe.clear();
             }
         };
         
         function SimpleFilter(sourceSound, pipe) {
             FilterSupport.call(this, pipe);
             this.sourceSound = sourceSound;
             this.historyBufferSize = 22050;
             this._sourcePosition = 0;
             this.outputBufferPosition = 0;
             this._position = 0;
         }
         
         extend(SimpleFilter.prototype, FilterSupport.prototype);
         
         extend(SimpleFilter.prototype, {
             get position() {
                 return this._position;
             },
         
             set position(position) {
                 // if (position > this._position) {
                 //     throw new RangeError('New position may not be greater than current position');
                 // }
                 var newOutputBufferPosition = this.outputBufferPosition - (this._position - position);
                 // if (newOutputBufferPosition < 0) {
                 //     throw new RangeError('New position falls outside of history buffer');
                 // }
                 this.outputBufferPosition = newOutputBufferPosition;
                 this._position = position;
             },
         
             get sourcePosition() {
                 return this._sourcePosition;
             },
         
             set sourcePosition(sourcePosition) {
                 this.clear();
                 this._sourcePosition = sourcePosition;
             },
         
             fillInputBuffer: function(numFrames) {
                 var samples = new Float32Array(numFrames * 2);
                 var numFramesExtracted = this.sourceSound.extract(samples, numFrames, this._sourcePosition);
                 this._sourcePosition += numFramesExtracted;
                 this.inputBuffer.putSamples(samples, 0, numFramesExtracted);
             },
         
             extract: function(target, numFrames) {
                 this.fillOutputBuffer(this.outputBufferPosition + numFrames);
         
                 var numFramesExtracted = Math.min(numFrames, this.outputBuffer.frameCount - this.outputBufferPosition);
                 this.outputBuffer.extract(target, this.outputBufferPosition, numFramesExtracted);
         
                 var currentFrames = this.outputBufferPosition + numFramesExtracted;
                 this.outputBufferPosition = Math.min(this.historyBufferSize, currentFrames);
                 this.outputBuffer.receive(Math.max(currentFrames - this.historyBufferSize, 0));
         
                 this._position += numFramesExtracted;
                 return numFramesExtracted;
             },
         
             handleSampleData: function(e) {
                 this.extract(e.data, 4096);
             },
         
             clear: function() {
                 this.outputBufferPosition = 0;
             }
         });
         var USE_AUTO_SEQUENCE_LEN = 0;
         var DEFAULT_SEQUENCE_MS = USE_AUTO_SEQUENCE_LEN;
         var USE_AUTO_SEEKWINDOW_LEN = 0;
         var DEFAULT_SEEKWINDOW_MS = USE_AUTO_SEEKWINDOW_LEN;
         var DEFAULT_OVERLAP_MS = 8;
         var _SCAN_OFFSETS = [
             [ 124,  186,  248,  310,  372,  434,  496,  558,  620,  682,  744, 806,
               868,  930,  992, 1054, 1116, 1178, 1240, 1302, 1364, 1426, 1488,   0],
             [-100,  -75,  -50,  -25,   25,   50,   75,  100,    0,    0,    0,   0,
                 0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,   0],
             [ -20,  -15,  -10,   -5,    5,   10,   15,   20,    0,    0,    0,   0,
                 0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,   0],
             [  -4,   -3,   -2,   -1,    1,    2,    3,    4,    0,    0,    0,   0,
                 0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,   0]];
         var AUTOSEQ_TEMPO_LOW = 0.5;     // auto setting low tempo range (-50%)
         var AUTOSEQ_TEMPO_TOP = 2.0;     // auto setting top tempo range (+100%)
         var AUTOSEQ_AT_MIN = 125.0;
         var AUTOSEQ_AT_MAX = 50.0;
         var AUTOSEQ_K = ((AUTOSEQ_AT_MAX - AUTOSEQ_AT_MIN) / (AUTOSEQ_TEMPO_TOP - AUTOSEQ_TEMPO_LOW));
         var AUTOSEQ_C = (AUTOSEQ_AT_MIN - (AUTOSEQ_K) * (AUTOSEQ_TEMPO_LOW))
         var AUTOSEEK_AT_MIN = 25.0;
         var AUTOSEEK_AT_MAX = 15.0;
         var AUTOSEEK_K = ((AUTOSEEK_AT_MAX - AUTOSEEK_AT_MIN) / (AUTOSEQ_TEMPO_TOP - AUTOSEQ_TEMPO_LOW));
         var AUTOSEEK_C = (AUTOSEEK_AT_MIN - (AUTOSEEK_K) * (AUTOSEQ_TEMPO_LOW));
         
         function Stretch(createBuffers) {
             AbstractFifoSamplePipe.call(this, createBuffers);
             this.bQuickSeek = true;
             this.bMidBufferDirty = false;
         
             this.pMidBuffer = null;
             this.overlapLength = 0;
         
             this.bAutoSeqSetting = true;
             this.bAutoSeekSetting = true;
         
             this._tempo = 1;
             this.setParameters(44100, DEFAULT_SEQUENCE_MS, DEFAULT_SEEKWINDOW_MS, DEFAULT_OVERLAP_MS);
         }
         
         extend(Stretch.prototype, AbstractFifoSamplePipe.prototype);
         
         extend(Stretch.prototype, {
             clear: function () {
                 AbstractFifoSamplePipe.prototype.clear.call(this);
                 this._clearMidBuffer();
             },
         
             _clearMidBuffer: function () {
                 if (this.bMidBufferDirty) {
                     this.bMidBufferDirty = false;
                     this.pMidBuffer = null;
                 }
             },
         
             /**
             * Sets routine control parameters. These control are certain time constants
             * defining how the sound is stretched to the desired duration.
             *
             * 'sampleRate' = sample rate of the sound
             * 'sequenceMS' = one processing sequence length in milliseconds (default = 82 ms)
             * 'seekwindowMS' = seeking window length for scanning the best overlapping
             *      position (default = 28 ms)
             * 'overlapMS' = overlapping length (default = 12 ms)
             */
             setParameters: function(aSampleRate, aSequenceMS, aSeekWindowMS, aOverlapMS) {
                 // accept only positive parameter values - if zero or negative, use old values instead
                 if (aSampleRate > 0) {
                     this.sampleRate = aSampleRate;
                 }
                 if (aOverlapMS > 0) {
                     this.overlapMs = aOverlapMS;
                 }
         
                 if (aSequenceMS > 0) {
                     this.sequenceMs = aSequenceMS;
                     this.bAutoSeqSetting = false;
                 } else {
                     // zero or below, use automatic setting
                     this.bAutoSeqSetting = true;
                 }
         
                 if (aSeekWindowMS > 0) {
                     this.seekWindowMs = aSeekWindowMS;
                     this.bAutoSeekSetting = false;
                 } else {
                     // zero or below, use automatic setting
                     this.bAutoSeekSetting = true;
                 }
         
                 this.calcSeqParameters();
         
                 this.calculateOverlapLength(this.overlapMs);
         
                 // set tempo to recalculate 'sampleReq'
                 this.tempo = this._tempo;
             },
             set tempo(newTempo) {
                 var intskip;
                 this._tempo = newTempo;
                 this.calcSeqParameters();
                 this.nominalSkip = this._tempo * (this.seekWindowLength - this.overlapLength);
                 this.skipFract = 0;
                 intskip = Math.floor(this.nominalSkip + 0.5);
                 this.sampleReq = Math.max(intskip + this.overlapLength, this.seekWindowLength) + this.seekLength;
             },
             get inputChunkSize() {
                 return this.sampleReq;
             },
             get outputChunkSize() {
                 return this.overlapLength + Math.max(0, this.seekWindowLength - 2 * this.overlapLength);
             },
             calculateOverlapLength: function (overlapInMsec) {
                 var newOvl;
                 newOvl = (this.sampleRate * overlapInMsec) / 1000;
                 if (newOvl < 16) newOvl = 16;
         
                 // must be divisible by 8
                 newOvl -= newOvl % 8;
         
                 this.overlapLength = newOvl;
         
                 this.pRefMidBuffer = new Float32Array(this.overlapLength * 2);
                 this.pMidBuffer = new Float32Array(this.overlapLength * 2);
             },
         
             checkLimits: function (x, mi, ma) {
                 return (x < mi) ? mi : ((x > ma) ? ma : x);
             },
         
             /**
             * Calculates processing sequence length according to tempo setting
             */
             calcSeqParameters: function() {
                 var seq;
                 var seek;
         
                 if (this.bAutoSeqSetting) {
                     seq = AUTOSEQ_C + AUTOSEQ_K * this._tempo;
                     seq = this.checkLimits(seq, AUTOSEQ_AT_MAX, AUTOSEQ_AT_MIN);
                     this.sequenceMs = Math.floor(seq + 0.5);
                 }
         
                 if (this.bAutoSeekSetting) {
                     seek = AUTOSEEK_C + AUTOSEEK_K * this._tempo;
                     seek = this.checkLimits(seek, AUTOSEEK_AT_MAX, AUTOSEEK_AT_MIN);
                     this.seekWindowMs = Math.floor(seek + 0.5);
                 }
         
                 // Update seek window lengths
                 this.seekWindowLength = Math.floor((this.sampleRate * this.sequenceMs) / 1000);
                 this.seekLength = Math.floor((this.sampleRate * this.seekWindowMs) / 1000);
             },
         
         
             /**
             * Enables/disables the quick position seeking algorithm.
             */
             set quickSeek(enable) {
                 this.bQuickSeek = enable;
             },
         
             clone: function () {
                 var result = new Stretch();
                 result.tempo = this.tempo;
                 result.setParameters(this.sampleRate, this.sequenceMs, this.seekWindowMs, this.overlapMs);
                 return result;
             },
         
             /**
             * Seeks for the optimal overlap-mixing position.
             */
             seekBestOverlapPosition: function () {
               if (this.bQuickSeek) {
                   return this.seekBestOverlapPositionStereoQuick();
               }
               else {
                   return this.seekBestOverlapPositionStereo();
               }
             },
         
             /**
             * Seeks for the optimal overlap-mixing position. The 'stereo' version of the
             * routine
             *
             * The best position is determined as the position where the two overlapped
             * sample sequences are 'most alike', in terms of the highest cross-correlation
             * value over the overlapping period
             */
             seekBestOverlapPositionStereo: function () {
                 var bestOffs;
                 var bestCorr
                 var corr;
                 var i;
         
                 // Slopes the amplitudes of the 'midBuffer' samples
                 this.precalcCorrReferenceStereo();
         
                 bestCorr = Number.MIN_VALUE;
                 bestOffs = 0;
         
                 // Scans for the best correlation value by testing each possible position
                 // over the permitted range.
                 for (i = 0; i < this.seekLength; i ++) {
                     // Calculates correlation value for the mixing position corresponding
                     // to 'i'
                     corr = this.calcCrossCorrStereo(2 * i, this.pRefMidBuffer);
         
                     // Checks for the highest correlation value
                     if (corr > bestCorr) {
                         bestCorr = corr;
                         bestOffs = i;
                     }
                 }
         
                 return bestOffs;
             },
         
             /**
             * Seeks for the optimal overlap-mixing position. The 'stereo' version of the
             * routine
             *
             * The best position is determined as the position where the two overlapped
             * sample sequences are 'most alike', in terms of the highest cross-correlation
             * value over the overlapping period
             */
             seekBestOverlapPositionStereoQuick: function () {
                 var j;
                 var bestOffs;
                 var bestCorr;
                 var corr;
                 var scanCount;
                 var corrOffset;
                 var tempOffset;
         
                 // Slopes the amplitude of the 'midBuffer' samples
                 this.precalcCorrReferenceStereo();
         
                 bestCorr = Number.MIN_VALUE;
                 bestOffs = 0;
                 corrOffset = 0;
                 tempOffset = 0;
         
                 // Scans for the best correlation value using four-pass hierarchical search.
                 //
                 // The look-up table 'scans' has hierarchical position adjusting steps.
                 // In first pass the routine searhes for the highest correlation with
                 // relatively coarse steps, then rescans the neighbourhood of the highest
                 // correlation with better resolution and so on.
                 for (scanCount = 0; scanCount < 4; scanCount ++) {
                     j = 0;
                     while (_SCAN_OFFSETS[scanCount][j]) {
                         tempOffset = corrOffset + _SCAN_OFFSETS[scanCount][j];
                         if (tempOffset >= this.seekLength) break;
         
                         // Calculates correlation value for the mixing position corresponding
                         // to 'tempOffset'
                         corr = this.calcCrossCorrStereo(2 * tempOffset, this.pRefMidBuffer);
         
                         // Checks for the highest correlation value
                         if (corr > bestCorr) {
                             bestCorr = corr;
                             bestOffs = tempOffset;
                         }
                         j++;
                     }
                     corrOffset = bestOffs;
                 }
         
                 return bestOffs;
             },
         
             /**
             * Slopes the amplitude of the 'midBuffer' samples so that cross correlation
             * is faster to calculate
             */
             precalcCorrReferenceStereo: function() {
                 var i;
                 var cnt2;
                 var temp;
         
                 for (i = 0; i < this.overlapLength; i ++) {
                     temp = i * (this.overlapLength - i);
                     cnt2 = i * 2;
                     this.pRefMidBuffer[cnt2] = this.pMidBuffer[cnt2] * temp;
                     this.pRefMidBuffer[cnt2 + 1] = this.pMidBuffer[cnt2 + 1] * temp;
                 }
             },
         
             calcCrossCorrStereo: function(mixingPos, compare) {
                 var mixing = this._inputBuffer.vector;
                 mixingPos += this._inputBuffer.startIndex;
         
                 var corr;
                 var i;
                 var mixingOffset;
         
                 corr = 0;
                 for (i = 2; i < 2 * this.overlapLength; i += 2) {
                     mixingOffset = i + mixingPos;
                     corr += mixing[mixingOffset] * compare[i] +
                     mixing[mixingOffset + 1] * compare[i + 1];
                 }
         
                 return corr;
             },
         
             // TODO inline
             /**
             * Overlaps samples in 'midBuffer' with the samples in 'pInputBuffer' at position
             * of 'ovlPos'.
             */
             overlap: function (ovlPos) {
                 this.overlapStereo(2 * ovlPos);
             },
         
             /**
             * Overlaps samples in 'midBuffer' with the samples in 'pInput'
             */
             overlapStereo: function(pInputPos) {
                 var pInput = this._inputBuffer.vector;
                 pInputPos += this._inputBuffer.startIndex;
         
                 var pOutput = this._outputBuffer.vector;
                 var pOutputPos = this._outputBuffer.endIndex;
         
                 var i;
                 var cnt2;
                 var fTemp;
                 var fScale;
                 var fi;
                 var pInputOffset;
                 var pOutputOffset;
         
                 fScale = 1 / this.overlapLength;
         
                 for (i = 0; i < this.overlapLength; i++) {
                     fTemp = (this.overlapLength - i) * fScale;
                     fi = i * fScale;
                     cnt2 = 2 * i;
                     pInputOffset = cnt2 + pInputPos;
                     pOutputOffset = cnt2 + pOutputPos;
                     pOutput[pOutputOffset + 0] = pInput[pInputOffset + 0] * fi + this.pMidBuffer[cnt2 + 0] * fTemp;
                     pOutput[pOutputOffset + 1] = pInput[pInputOffset + 1] * fi + this.pMidBuffer[cnt2 + 1] * fTemp;
                 }
             },
         
             process: function() {
                 var ovlSkip;
                 var offset;
                 var temp;
                 var i;
         
                 if (this.pMidBuffer == null) {
                     // if midBuffer is empty, move the first samples of the input stream
                     // into it
                     if (this._inputBuffer.frameCount < this.overlapLength) {
                         // wait until we've got overlapLength samples
                         return;
                     }
                     this.pMidBuffer = new Float32Array(this.overlapLength * 2);
                     this._inputBuffer.receiveSamples(this.pMidBuffer, this.overlapLength);
                 }
         
                 var output;
                 // Process samples as long as there are enough samples in 'inputBuffer'
                 // to form a processing frame.
                 while (this._inputBuffer.frameCount >= this.sampleReq) {
                     // If tempo differs from the normal ('SCALE'), scan for the best overlapping
                     // position
                     offset = this.seekBestOverlapPosition();
         
                     // Mix the samples in the 'inputBuffer' at position of 'offset' with the
                     // samples in 'midBuffer' using sliding overlapping
                     // ... first partially overlap with the end of the previous sequence
                     // (that's in 'midBuffer')
                     this._outputBuffer.ensureAdditionalCapacity(this.overlapLength);
                     // FIXME unit?
                     //overlap(uint(offset));
                     this.overlap(Math.floor(offset));
                     this._outputBuffer.put(this.overlapLength);
         
                     // ... then copy sequence samples from 'inputBuffer' to output
                     temp = (this.seekWindowLength - 2 * this.overlapLength); // & 0xfffffffe;
                     if (temp > 0) {
                         this._outputBuffer.putBuffer(this._inputBuffer, offset + this.overlapLength, temp);
                     }
         
                     // Copies the end of the current sequence from 'inputBuffer' to
                     // 'midBuffer' for being mixed with the beginning of the next
                     // processing sequence and so on
                     //assert(offset + seekWindowLength <= (int)inputBuffer.numSamples());
                     var start = this.inputBuffer.startIndex + 2 * (offset + this.seekWindowLength - this.overlapLength);
                     this.pMidBuffer.set(this._inputBuffer.vector.subarray(start, start + 2 * this.overlapLength))
         
                     // Remove the processed samples from the input buffer. Update
                     // the difference between integer & nominal skip step to 'skipFract'
                     // in order to prevent the error from accumulating over time.
                     this.skipFract += this.nominalSkip;   // real skip size
                     ovlSkip = Math.floor(this.skipFract); // rounded to integer skip
                     this.skipFract -= ovlSkip;            // maintain the fraction part, i.e. real vs. integer skip
                     this._inputBuffer.receive(ovlSkip);
                 }
             }
         });
         
         // https://bugs.webkit.org/show_bug.cgi?id=57295
         extend(Stretch.prototype, {
             get tempo() {
               return this._tempo;
             }
         });
         
         //////////////
         
         function SoundTouch() {
             this.rateTransposer = new RateTransposer(false);
             this.tdStretch = new Stretch(false);
         
             this._inputBuffer = new FifoSampleBuffer();
             this._intermediateBuffer = new FifoSampleBuffer();
             this._outputBuffer = new FifoSampleBuffer();
         
             this._rate = 0;
             this.tempo = 0;
         
             this.virtualPitch = 1.0;
             this.virtualRate = 1.0;
             this.virtualTempo = 1.0;
         
             this._calculateEffectiveRateAndTempo();
         }
         
         extend(SoundTouch.prototype, {
             clear: function () {
                 rateTransposer.clear();
                 tdStretch.clear();
             },
         
             clone: function () {
                 var result = new SoundTouch();
                 result.rate = rate;
                 result.tempo = tempo;
                 return result;
             },
         
             get rate() {
                 return this._rate;
             },
         
             set rate(rate) {
                 this.virtualRate = rate;
                 this._calculateEffectiveRateAndTempo();
             },
         
             set rateChange(rateChange) {
                 this.rate = 1.0 + 0.01 * rateChange;
             },
         
             get tempo() {
                 return this._tempo;
             },
         
             set tempo(tempo) {
                 this.virtualTempo = tempo;
                 this._calculateEffectiveRateAndTempo();
             },
         
             set tempoChange(tempoChange) {
                 this.tempo = 1.0 + 0.01 * tempoChange;
             },
         
             set pitch(pitch) {
                 this.virtualPitch = pitch;
                 this._calculateEffectiveRateAndTempo();
             },
         
             set pitchOctaves(pitchOctaves) {
                 this.pitch = Math.exp(0.69314718056 * pitchOctaves);
                 this._calculateEffectiveRateAndTempo();
             },
         
             set pitchSemitones(pitchSemitones) {
                 this.pitchOctaves = pitchSemitones / 12.0;
             },
         
             get inputBuffer() {
                 return this._inputBuffer;
             },
         
             get outputBuffer() {
                 return this._outputBuffer;
             },
         
             _calculateEffectiveRateAndTempo: function () {
                 var previousTempo = this._tempo;
                 var previousRate = this._rate;
         
                 this._tempo = this.virtualTempo / this.virtualPitch;
                 this._rate = this.virtualRate * this.virtualPitch;
         
                 if (testFloatEqual(this._tempo, previousTempo)) {
                     this.tdStretch.tempo = this._tempo;
                 }
                 if (testFloatEqual(this._rate, previousRate)) {
                     this.rateTransposer.rate = this._rate;
                 }
         
                 if (this._rate > 1.0) {
                     if (this._outputBuffer != this.rateTransposer.outputBuffer) {
                         this.tdStretch.inputBuffer = this._inputBuffer;
                         this.tdStretch.outputBuffer = this._intermediateBuffer;
         
                         this.rateTransposer.inputBuffer = this._intermediateBuffer;
                         this.rateTransposer.outputBuffer = this._outputBuffer;
                     }
                 }
                 else {
                     if (this._outputBuffer != this.tdStretch.outputBuffer) {
                         this.rateTransposer.inputBuffer = this._inputBuffer;
                         this.rateTransposer.outputBuffer = this._intermediateBuffer;
         
                         this.tdStretch.inputBuffer = this._intermediateBuffer;
                         this.tdStretch.outputBuffer = this._outputBuffer;
                     }
                 }
             },
         
             process: function () {
                 if (this._rate > 1.0) {
                     this.tdStretch.process();
                     this.rateTransposer.process();
                 }
                 else {
                     this.rateTransposer.process();
                     this.tdStretch.process();
                 }
             }
         });
         
         /////////////
         
         
         var t = new RateTransposer(true);
         var s = new Stretch(true);
         var st = new SoundTouch();
         st.pitch = 1.0;
         s.tempo = .5;
         st.rate = 1.0;
         
         var contextClass = (window.AudioContext ||
           window.webkitAudioContext ||
           window.mozAudioContext ||
           window.oAudioContext ||
           window.msAudioContext);
         
         if (contextClass) {
           // Web Audio API is available.
           var context = new contextClass();
         
         }
         
         var buffer = {};
         var bufferDuration;
         
         loadSample = function(url) {
             var request = new XMLHttpRequest();
             request.open('GET', url, true);
             request.responseType = 'arraybuffer';
         
             request.onload = function() {
                 var start = new Date();
                 context.decodeAudioData(request.response, function(theBuffer){
                     buffer = theBuffer;
                     bufferDuration = theBuffer.duration;
                 })
             }
             request.send();
         }
         var BUFFER_SIZE = 4096;
         
         
         var node = context.createScriptProcessor ? context.createScriptProcessor(BUFFER_SIZE, 2, 2) : context.createJavaScriptNode(BUFFER_SIZE, 2, 2);
         
         var samples = new Float32Array(BUFFER_SIZE * 2);
         
         var pos = 0;
         
         var leftchannel = [];
         var rightchannel = [];
         var recordingLength = 0;
         
         function interleave(leftChannel, rightChannel){
           var length = leftChannel.length + rightChannel.length;
           var result = new Float32Array(length);
         
           var inputIndex = 0;
         
           for (var index = 0; index < length; ){
             result[index++] = leftChannel[inputIndex];
             result[index++] = rightChannel[inputIndex];
             inputIndex++;
           }
           return result;
         }
         
         function mergeBuffers(channelBuffer, recordingLength){
           var result = new Float32Array(recordingLength);
           var offset = 0;
           var lng = channelBuffer.length;
           for (var i = 0; i < lng; i++){
             var buffer = channelBuffer[i];
             result.set(buffer, offset);
             offset += buffer.length;
           }
           return result;
         }
         
         function writeUTFBytes(view, offset, string){ 
           var lng = string.length;
           for (var i = 0; i < lng; i++){
             view.setUint8(offset + i, string.charCodeAt(i));
           }
         }
         
         
         node.onaudioprocess = function (e) {
             if (buffer.getChannelData){
                 pos+=BUFFER_SIZE / context.sampleRate;
                 var l = e.outputBuffer.getChannelData(0);
                 var r = e.outputBuffer.getChannelData(1);
                 var framesExtracted = f.extract(samples, BUFFER_SIZE);
                 if (framesExtracted == 0) {
                     pause();
                 }
                 for (var i = 0; i < framesExtracted; i++) {
                     l[i] = samples[i * 2];
                     r[i] = samples[i * 2 + 1];
                 }
         
                 leftchannel.push (new Float32Array (l));
                 rightchannel.push (new Float32Array (r));
                 recordingLength += BUFFER_SIZE;
             }
         };
         
         function play() {
             node.connect(context.destination);
             ga('send', 'event', 'Pitch shift playback', "Play");
         
             // window.setInterval(function(){
                 // console.log(pos);
                 // console.log("Percentage complete: ",100*pos/bufferDuration);
             // },
             // 1000);
         }
         
         function pause() {
             node.disconnect();
             ga('send', 'event', 'Pitch shift playback', "Pause");
         }
         
         var source = {
             extract: function (target, numFrames, position) {
                 $("#current-time").html(minsSecs(position/(context.sampleRate)));
                 $("#progress").width(100*position/(bufferDuration*context.sampleRate) + "%");
                 if (Math.round(100 *position/(bufferDuration*context.sampleRate)) == 100 && is_playing){
                     //stop recorder
                     recorder && recorder.stop();
                     __log('Recording complete.');
                     
                     // create WAV download link using audio data blob
                     createDownloadLink();
                     
                     if (typeof recorder != "undefined"){
                         recorder.clear();
                     }
                     is_playing = false;
                 }
                 var l = buffer.getChannelData(0);
                 if (buffer.numberofChannels > 1){
                     var r = buffer.getChannelData(1);
                 } else {
                     var r = buffer.getChannelData(0);
                 }
                 for (var i = 0; i < numFrames; i++) {
                     target[i * 2] = l[i + position];
                     target[i * 2 + 1] = r[i + position];
                 }
                 return Math.min(numFrames, l.length - position);
             }
         };
         
         
         //Stretch (s) or Rate (t) object goes in this filter function!
         f = new SimpleFilter(source, st);
         
         
         
         //////////////////////////////////
         
         $("#play-pitchshifter").click(function(e){
             if (fileInput.val()==""){
                 alert("Please choose a file to play");
             } else if ($(this).hasClass("disabled")) {
                 // alert("Currently loading audio, please wait a few seconds...");
             } else{
                 play();
                 is_playing = true;
                 $("#play-pitchshifter").text('Playing');
                 if ($("#save-output").prop("checked") == true){
                     recorder = new Recorder(node, {workerPath: 'js/recorderWorkerMP3.js'});
                     startRecording();
                 }
             }
         });
         
         $("#pause-pitchshifter").click(function(e){
             pause();
             $("#play-pitchshifter").text('Play');
             is_playing = false;
         });
         
         function minsSecs(secs){
             mins = Math.floor(secs / 60);
             seconds = secs - mins * 60;
             return mins + ":" + pad(parseInt(seconds),2);
         }
         
         function pad(n, width, z) {
           z = z || '0';
           n = n + '';
           return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
         }
         
         var fileInput = $("#audio-file");
         // bufferSource.gain.value = 1;
         // bufferSource.loop = true;
         // bufferSource.connect(oscillatorGain);
         
         fileInput.on("change", function() {
             $("#play-pitchshifter").text('Play');
             $(".timing").hide();
             $("#loading").show();
             $("#play-pitchshifter").addClass("disabled");
         
             if (is_playing) pause();
             var reader = new FileReader();
             reader.onload = function(ev) {
                 context.decodeAudioData(ev.target.result, function(theBuffer){
                     pause();
                     ga('send', 'event', 'File Upload', "Success");
         
                             buffer = theBuffer;
                             bufferDuration = theBuffer.duration;
                             $("#play-pitchshifter").removeClass("disabled");
         
                             $("#total-time").html(minsSecs(bufferDuration));
         
                             $("#progress").width("0%");
                             $("#current-time").html("0:00");
         
         
                                 st = new SoundTouch();
                                 st.pitch = ($(".pitch-slider").val() / 100);
                                 st.tempo=document.getElementById("myspeed").value/50;
         
         
                                f = new SimpleFilter(source, st);
                                var BUFFER_SIZE = 2048;
         
                                 var node = context.createScriptProcessor ? context.createScriptProcessor(BUFFER_SIZE, 2, 2) : context.createJavaScriptNode(BUFFER_SIZE, 2, 2);
         
                                var samples = new Float32Array(BUFFER_SIZE * 2);
         
                                var pos = 0;
                                f.sourcePosition = 0;
         
                                 $("#play-pitchshifter").addClass("beginTuning");
                                 $(".timing").show();
                                 $("#loading").hide();
                         }, function(){ //error function
                             $("#loading").html("Sorry, we could not process this audio file.");
                             ga('send', 'event', 'File Upload', "Failure");
         
                         })
             };
             reader.readAsArrayBuffer(this.files[0]);
         });
         
         
         $(".pitch-slider").noUiSlider({
             start: 100,
             range: {
                 'min': 50,
                 'max': 200
             },
         });
         document.querySelector('#play-pitchshifter').onclick= function(){
             document.querySelector('#myPitchOK').addClass('active');
         };
         twelth_root = 1.05946309436;
         st.pitch = 1;
         
         $(".pitch-slider").on("slide", function(){
             st.pitch = ($(this).val() / 100);
             st.tempo=document.getElementById("myspeed").value/50;
             var pitch = Math.pow(twelth_root, parseFloat($(this).val())) 
             var pitchFormatted = (100 * pitch).toFixed(2);
             // console.log($(this).val() / 100);
             // $("#semitones").val(parseFloat(($(this).val() / 100 - 1) / 0.05946309436).toFixed(2));
             $("#semitones").val(Math.log($(this).val() / 100)/Math.log(twelth_root));
             $("#pitch-shift-value").html($(this).val());
         
         
         });
         
         $("#maintain-tempo").change(function(){
             st.tempo=document.getElementById("myspeed").value/50;
         })
         $(".pitch-slider").on("change", function(){
             ga('send', 'event', 'Pitch shift', "Slider", $(this).val());
         })
         $("#semitones").change(function(){
             ga('send', 'event', 'Pitch shift', "Semitone", $(this).val());
             if ($(this).val() <= 50 && $(this).val() >= - 50){
             var pitch = Math.pow(twelth_root, parseFloat($(this).val())) 
             var pitchFormatted = (100 * pitch).toFixed(2);
         
             st.pitch = pitch;
             $(".pitch-slider").val(pitchFormatted);
             $("#pitch-shift-value").html(pitchFormatted);
             st.tempo=document.getElementById("myspeed").value/50;
             } else {
                 alert("Please enter a number between -50 and +50");
             }
         });
         
         $("#progress-wrapper").click(function(e){
             var parentOffset = $(this).offset();
            //or $(this).offset(); if you really just want the current element's offset
            var relX = e.pageX - parentOffset.left;
            // var relY = e.pageY - parentOffset.top;
            $("#progress").width(100*(relX / $(this).width())+"%");
            pause();
            st = new SoundTouch();
            st.pitch = $(".pitch-slider").val() /100;
            st.tempo=document.getElementById("myspeed").value/50;
            f = new SimpleFilter(source, st);
            var BUFFER_SIZE = 2048;
         
            var node = context.createScriptProcessor ? context.createScriptProcessor(BUFFER_SIZE, 2, 2) : context.createJavaScriptNode(BUFFER_SIZE, 2, 2);
         
            var samples = new Float32Array(BUFFER_SIZE * 2);
         
            var pos = 0;
            f.sourcePosition = parseInt((relX / $(this).width()) * bufferDuration * context.sampleRate);
            if (is_playing){
                play();
            }
         });
         function __log(e, data) {
           log.innerHTML += "\n" + e + " " + (data || '');
         }
         var audio_context;
         var recorder;
         function startUserMedia(stream) {
           // var input = audio_context.createMediaStreamSource(stream);
           var input = node;
           __log('Media stream created.');
           // Uncomment if you want the audio to feedback directly
           //input.connect(audio_context.destination);
           //__log('Input connected to audio context destination.');
           
           recorder = new Recorder(input);
           __log('Recorder initialised.');
         }
         $("#pause-pitchshifter").click(function(){
           if ($("#save-output").prop("checked") == true){
               recorder && recorder.stop();
               __log('Stopped recording.');
               
               // create WAV download link using audio data blob
               createDownloadLink();
               
               recorder && recorder.clear();
           }
         });
         
         $("#save-output").click(function(){
           if ($("#save-output").prop("checked") == true){
               $(".js-downloads-section").css("display","block");
           } else {
               $(".js-downloads-section").css("display","none");;
           }
         })
function __log(e, data) {
    log.innerHTML += "\n" + e + " " + (data || '');
  }
  var audio_context;
  var recorder;
  function startUserMedia(stream) {
    // var input = audio_context.createMediaStreamSource(stream);
    var input = node;
    __log('Media stream created.');
    // Uncomment if you want the audio to feedback directly
    //input.connect(audio_context.destination);
    //__log('Input connected to audio context destination.');
    
    recorder = new Recorder(input);
    __log('Recorder initialised.');
  }

  function startRecording(button) {

    recorder && recorder.record();
    // button.disabled = true;
    // button.nextElementSibling.disabled = false;
    __log('Recording, please wait...');
  }
  function stopRecording() {
    recorder && recorder.stop();
    // button.disabled = true;
    // button.previousElementSibling.disabled = false;
    __log('Recording complete.');
    
    // create WAV download link using audio data blob
    createDownloadLink();
    
    if (typeof recorder !== "undefined") recorder.clear();
  }
  function createDownloadLink() {
    recorder && recorder.exportAudio(function(blob) {
      var url = URL.createObjectURL(blob);
      var li = document.createElement('li');
      var au = document.createElement('audio');
      var hf = document.createElement('a');
      var br = document.createElement('br');
      au.controls = true;
      au.id='pitch-auds';
      au.src = url;
      hf.href = url;
      // hf.download = new Date().toISOString() + '.wav';
      // hf.download = new Date().toISOString() + '.mp3';
      hf.download = "pitch-shifted-" + $('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
      hf.innerHTML = hf.download;
      hf.color='white';
      hf.textDecoration='none';
      li.appendChild(au);
      li.appendChild(br);       
      li.appendChild(hf);
      recordingslist.appendChild(li);
      ga('send', 'event', 'Pitch shift download', "Download Added");
    });
  }
document.querySelector('#allatonce').onclick=function(){
    document.querySelectorAll('#pitch-auds').forEach(function(element) {
      element.play();
    });
};
