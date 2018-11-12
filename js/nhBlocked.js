(function () {
    'use strict';
    
    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);
            
            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;
            
            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };
    
    var e = module.init();
    if(e.os.name=='Linux'){
    	e.os.name='Chromebook';
        $.getJSON('https://api.ipdata.co/?api-key=40b8e9b6261e4d0109bc0777c46c106f85f5cc51e0b746b244c1c4bc', function(data) {
          if(data.ip!='95.131.169.251'){
            alert('You are using a '+ e.os.name+' device.\nYou are also using the School Wifi...\n\nYou will now need a Password to unlock\nNH Net Browser during School hours...');
            document.querySelector('.svg').innerHTML=`<i style="margin-top:-10px;font-size:60px;color:#4F8AFE;" class="fas fa-lock"></i>`;
            document.querySelector('.main-box').onclick=function(){
                var password=prompt('Password:','');
                if(password==Password){
                  window.location='AfterCompletion.html';
                }else{
                    document.querySelector('.svg').innerHTML=`<i style="margin-top:-10px;font-size:60px;color:#ff4f4c" class="fas fa-lock"></i>`;
//                     document.querySelector('.container').style.background='#ff4f4c';
                    var dots=document.querySelector('.dots').children;
                    dots[0].style.background='#ff4f4c';
                    dots[1].style.background='#ff4f4c';
                    dots[2].style.background='#ff4f4c';
                    document.body.style.background='black';
                    document.querySelector('.Text').innerHTML='Password Incorrect!';
                }
              };
          }else{
              document.querySelector('.Text').innerHTML='Welcome to NH Net Browser! (Home)';
              document.querySelector('.main-box').onclick=function(){
                window.location='AfterCompletion.html';
          };
      }
    });
    }
}());
