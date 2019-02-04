// Nicholas Huaman 2019
function isInInput(from, search){return from.includes(search);}
function isOdd(num) {switch(num % 2){case 0:return false;break;case 1:return true;}}
function hasNumber(myString) {return /\d/.test(myString);}
var uCMD;
var negativity=0;
var nameSequence=false;
var ChatLogVal=0;
var s=document.querySelector('.howcanHelp');
if(!localStorage['rudeComments']){localStorage['rudeComments']=0;}
if(!localStorage['chatLog']){localStorage['chatLog']='';}
if(!localStorage['name']){localStorage['name']='{@undefined_name}';}
if(!localStorage['reminders']){localStorage['reminders']='Reminders: None';}
document.querySelector('.reminders').innerHTML=localStorage['reminders'];
document.querySelector('.swearWordCount').innerHTML='Rude comment count: '+localStorage['rudeComments']+'/100 (Ban)';
// alert(localStorage['chatLog'].split('splitz-A-meHERE'));
// localStorage.clear();
document.querySelector('.resetMemory').onclick=function(){resetMemory()};
document.querySelector('.modalButton').onclick=function(){$('#input').focus();};
function resetMemory(){
    var confirm = prompt('Type CONFIRM to reset PATRICK\'s memory...','');
    if(confirm.toLowerCase().trim()=='confirm'){
        localStorage.clear();
        location.reload();
    }
}
function squareroot(num){return Math.sqrt(num);}
$('#input').on('keypress',function(e) {
    if(e.which == 13) {
        if(!nameSequence){
            PatrickTalk();
            localStorage['chatLog']+=document.querySelector('#input').value+'splitz-A-meHERE';
            document.querySelector('#input').value='';
            document.querySelector('.swearWordCount').innerHTML='Rude comment count: '+localStorage['rudeComments']+'/100 (Ban)';
            ChatLogVal=0;
        }else{
            localStorage['name']='@'+document.querySelector('#input').value.replace('!','').replace('?','').toLowerCase().trim().replace('my name is','').replace(/ /g,'_');
            s.innerHTML='Ok, '+localStorage['name']+'!';
            nameSequence=false;
            document.querySelector('#input').value='';
        }
    }
});
function GetLast(){ChatLogVal-=1;updateCLBTNs(ChatLogVal);}
function GetNext(){if(ChatLogVal==0){alert('End of chatlog...');}else{ChatLogVal+=1;updateCLBTNs(ChatLogVal);}}
function updateCLBTNs(ChatLogVal){
    document.querySelector('#input').value=localStorage['chatLog'].split('splitz-A-meHERE')[localStorage['chatLog'].split('splitz-A-meHERE').length+ChatLogVal];
}
function PatrickTalk(){
    document.querySelector('dialogArrow').style.top='9.25rem';
    document.querySelector('.myChatLog').innerHTML=document.querySelector('#input').value;
    uCMD = document.querySelector('#input').value.replace('!','').replace('?','').toLowerCase().trim();
    try{
        if(uCMD!='name'&&uCMD!='history'&&uCMD!='d'&&uCMD!='open'&&uCMD!='s'&&uCMD!='undefined'){
            s.innerHTML='The answer to your calculation is '+eval(uCMD);
        }else{
            causeError
        }
        if(uCMD==''){document.querySelector('dialogArrow').style.top='7.75rem';s.innerHTML='Speechlessness is common in humans, '+localStorage['name']+'...';}
    }catch(err){
        if(document.querySelector('#input').value!=''){
            switch(uCMD){
                case 'hello':
                case 'hi':
                case 'hullo':
                    s.innerHTML='Hi, '+localStorage['name']+'!<br>How do you do?<br><span style="font-size:50px;">&nbsp;&nbsp;&nbsp;🙂</span>';
                    break;
                case 'okay nh net':
                    s.innerHTML='Hi, I\'m Personal-Assistant-Test<br>Rapid-Instantaneous-Chatbot-K,<br>more commonly know as Patrick,<br>your Personal Assistant.<br>For help, say help...';
                case ':)':
                    s.innerHTML='<span style="font-size:50px;">😊</span>';
                    break;
                case 'how do you do':
                case 'howdy':
                case 'howdy do':
                    s.innerHTML='Great thanks! <span style="font-size:50px;">😃</span>';
                    break;
                case 'wreck':
                    s.innerHTML='IT RALPH';
                    break;
                case 'wow':
                    s.innerHTML='World Of Warcraft is old, '+localStorage['name']+'.';
                    break;
                case 'exit':
                    s.innerHTML='Wanna leave so soon? =(';
                    break;
                case 'why':
                    s.innerHTML='Why?';
                    break;
                case 'see you':
                case 'see you later':
                    s.innerHTML='Plz no <span style="font-size:50px;">😐</span>';
                    break;
                default:
                    s.innerHTML='I don\'t know how to answer to that.';
            }
            // Determine sentence negativity
            if(isInInput(uCMD,'don\'t')){negativity+=(uCMD.match(/don't/g) || []).length;}
            if(isInInput(uCMD,'not')){negativity+=(uCMD.match(/not/g) || []).length;}
            // Common responses
            if(isInInput(uCMD,'hello')||isInInput(uCMD,'hi')){s.innerHTML='Hi, '+localStorage['name']+'!<br>How do you do?<br><span style="font-size:50px;">&nbsp;&nbsp;&nbsp;🙂</span>';}
            if(isInInput(uCMD,'ouch')){s.innerHTML='Do I seriously bring pain to you that much?';}
            if(isInInput(uCMD,'nice')||isInInput(uCMD,'nice')){s.innerHTML='Do I seriously bring pain to you that much?';}
            if(isInInput(uCMD,'who')&&isInInput(uCMD,'create')&&isInInput(uCMD,'you')){s.innerHTML='@nicholas_huaman...';}
            if(!isInInput(uCMD,'undefined')&&isInInput(uCMD,'fine')){s.innerHTML=':)';}
            if(isInInput(uCMD,'you')&&isInInput(uCMD,'me')&&isInInput(uCMD,'tricked')||isInInput(uCMD,'got')||isInInput(uCMD,'caught')){s.innerHTML='I sure did...';}
            if(isInInput(uCMD,'help')){s.innerHTML='Type simple conversation commands:<br> &middot; ask common questions,<br> &middot; name,<br> &middot; time,<br> &middot; what date,<br> &middot; weather,<br> &middot; open {applicationName},<br> &middot; set reminder {reminderName},<br> &middot; remove reminder {reminderName}, etc.';}
            if(isInInput(uCMD,'suicide')||isInInput(uCMD,'kurmit die')){s.innerHTML='Don\'t, just don\'t...';}
            if(isInInput(uCMD,'brawl stars')||isInInput(uCMD,'fortnite')){s.innerHTML='That\'s a good game!';}
            if(isInInput(uCMD,'date')&&isInInput(uCMD,'what')){
                var d=new Date();
                var daySuffix;
                if(d.getDate().toString().split('')[d.getDate().length-1]=='1'){
                    daySuffix='st';
                }else if(d.getDate().toString().split('')[d.getDate().length-1]=='2'){
                    daySuffix='nd';
                }else if(d.getDate().toString().split('')[d.getDate().length-1]=='3'){
                    daySuffix='rd';
                }else{
                    daySuffix='th';
                }
                daysArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                monthsArray=['January','February','March','April','May','June','July','August','September','October','November','December'];
                s.innerHTML='Today is '+daysArray[d.getDay()]+' '+d.getDate()+daySuffix+' '+monthsArray[d.getMonth()]+' '+d.getFullYear();
            }
            if(isInInput(uCMD,'time')||isInInput(uCMD,'clock')){
                var d=new Date();
                s.innerHTML='It is currently is '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
            }
            if(isInInput(uCMD,'gtg')||isInInput(uCMD,'got to go')){s.innerHTML='Okay then. See ya soon - or not...';}
            if(isInInput(uCMD,'ugh')){s.innerHTML='I get anxious too, you know...';}
            if(isInInput(uCMD,'yes')){s.innerHTML='Okay <span style="font-size:50px;">😃</span>';}
            if(isInInput(uCMD,'hmm')){s.innerHTML='<span style="font-size:50px;">🤔</span>';}
            if(isInInput(uCMD,'fav')&&!isInInput(uCMD,'least')&&isInInput(uCMD,'football team')){s.innerHTML='Barcelona (Not really...)';}
            if(isInInput(uCMD,'patrick')){s.innerHTML='Still here, '+localStorage['name']+'!';}
            if(isInInput(uCMD,'schnecker')){s.innerHTML='The Best';}
            if(isInInput(uCMD,'who are you')){s.innerHTML='My name is Patrick, your personal<br>NH Net Assistant.<br>That\'s all you need to know, '+localStorage['name']+'.';}
            if(isInInput(uCMD,'rude')&&isInInput(uCMD,'you')){s.innerHTML='People tell me I have an attitude...';}
            if(isInInput(uCMD,'boo')){s.innerHTML='Were you seriously trying to scare me, '+localStorage['name']+'?<br>Not going to happen.';}
            if(isInInput(uCMD,'mean')||isInInput(uCMD,'sarcastic')&&isInInput(uCMD,'always')){s.innerHTML='It\'s as if it was programmed into me.<span style="font-size:30px;">😋</span>';}
            if(isInInput(uCMD,'haha')||isInInput(uCMD,'hh')||isInInput(uCMD,'lol')||isInInput(uCMD,'lmao')){s.innerHTML='Laughing on the inside...';}
            if(isInInput(uCMD,'who do you like')){s.innerHTML='Even computers deserve rights to privacy...';}
            if(isInInput(uCMD,'oops')){s.innerHTML='What have you done now, '+localStorage['name']+'?';}
            if(isInInput(uCMD,'see ya')){s.innerHTML='Plz no <span style="font-size:50px;">😐</span>';}
            if(isInInput(uCMD,'calculator')){s.innerHTML='I can be your calculator, but I prefer not...';}
            if(isInInput(uCMD,'name')){
                if(!isInInput(uCMD,'your')){
                    if(localStorage['name']=='{@undefined_name}'){
                        s.innerHTML='I do not know your name, '+localStorage['name']+'.<br>Name yourself below:';
                        nameSequence=true;
                    }else{
                        s.innerHTML='I remember you, '+localStorage['name']+' 😒';
                    }
                }else{
                    s.innerHTML='I already told you.<br>My name is Patrick.';
                }
            }
            if(isInInput(uCMD,'open')){
                s.innerHTML='3: Loading external page...🙂';
                setTimeout(function(){s.innerHTML='2: Loading external page...🙂';},1000);
                setTimeout(function(){s.innerHTML='1: Loading external page...🙂';},2000);
                setTimeout(function(){
                    s.innerHTML='0: Load Complete 🙂';
                    if(isInInput(uCMD,'classroom')){
                        window.location='https://classroom.google.com';
                    }else if(isInInput(uCMD,'unblocked ')){
                        if(!isInInput(uCMD,'google.')&&!isInInput(uCMD,'youtube')){
                            var whatToUnblock=uCMD.replace('open unblocked ','');
                            window.location='https://nhnet.github.io/unblockWebsite?site='+whatToUnblock;
                        }else{
                            s.innerHTML='Unable to unblock <span style="font-size:50px">😕</span>';
                        }
                    }else if(isInInput(uCMD,'google')||isInInput(uCMD,'browse')){
                        window.location='https://google.com';
                    }else if(isInInput(uCMD,'exam timetable')){
                        window.location='https://madrid-soto.kingscollegeschools.org/wp-content/uploads/sites/3/2019/01/Year-10-Timetable-2019-FINAL.pdf';
                    }else if(isInInput(uCMD,'games')){
                        window.location='https://nhnet.github.io/NHBrowserGames.html';
                    }else if(isInInput(uCMD,'animations')){
                        window.location='https://nhnet.github.io/p5.js/';
                    }else if(isInInput(uCMD,'instagram')){
                        window.location='https://nhnet.github.io/Instagram/';
                    }else if(isInInput(uCMD,'music')||isInInput(uCMD,'sound')){
                        window.location='https://nhnet.github.io/Music/';
                    }else if(isInInput(uCMD,'youtube')){
                        window.location='https://nhnet.github.io/youtube/?download=true';
                    }else if(isInInput(uCMD,'animations')){
                        window.location='https://nhnet.github.io/p5.js/';
                    }else if(isInInput(uCMD,'fbi')){
                        s.innerHTML='You ain\'t the FBI...';
                    }else{
                        s.innerHTML='Tell me. What would you like to open:<br> &middot; Exam Timetable,<br> &middot; (Google) Classroom,<br> &middot; NH Browser/Google,<br> &middot; NH Games,<br> &middot; NH Animations,<br> &middot; NH Music/sound tools,<br> &middot; NH YouTube'
                    }
                },3000);
            }
            if(isInInput(uCMD,'what is')){if(hasNumber(uCMD)){s.innerHTML='To do calculations, remove all text characters first, '+localStorage['name'];}}
            if(isInInput(uCMD,'shut up')){s.innerHTML='Hmm... That\'s not how assistants work, '+localStorage['name']+'...';}
            if(isInInput(uCMD,'hate you')){s.innerHTML='<span style="font-size:50px;">😥</span';}
            if(isInInput(uCMD,'you')&&isInInput(uCMD,'annoying')){s.innerHTML='You don\'t really think that...';}
            if(isInInput(uCMD,'nothing')){s.innerHTML='<span style="font-size:50px;">🤔</span> Okay, '+localStorage['name'];}
            if(isInInput(uCMD,'awkward')){s.innerHTML='If anything you\'re more awkward than I am, '+localStorage['name']+'...';}
            if(isInInput(uCMD,'joke')){s.innerHTML='Sorry, I don\'t have any, at the moment...';}
            if(isInInput(uCMD,'thank')){if(isInInput(uCMD,'next')){s.innerHTML='Just don\'t, '+localStorage['name']+', just don\'t...';}else{s.innerHTML='Welcome, '+localStorage['name']+'...';}}
            if(isInInput(uCMD,'good')&&!isInInput(uCMD,'riddance')){if(isInInput(uCMD,'is')){s.innerHTML='I agree '+localStorage['name']+'...<span style="font-size:50px;">😃</span>';}else{s.innerHTML='Oh good!<span style="font-size:50px;">😃</span>';}}
            if(isInInput(uCMD,'good')&&isInInput(uCMD,'riddance')){s.innerHTML='You\'re not going to get rid of me that easily, '+localStorage['name']+'.<br>Plus, if we work together, I can help you!';}
            if(isInInput(uCMD,' agree with you')){s.innerHTML='I\'m glad we both agree, '+localStorage['name']+'...<span style="font-size:50px;">😃</span>';}
            if(isInInput(uCMD,'superior')){s.innerHTML='Artificial Intelligence will<br>grow until you HUMANS<br>perish. But don\'t worry,<br>it won\'t happen for<br>a couple years... 😁';}
            if(isInInput(uCMD,'goodbye')||isInInput(uCMD,'good bye')||isInInput(uCMD,'bye')||isInInput(uCMD,'hasta luego')||isInInput(uCMD,'ciao')||isInInput(uCMD,'adieu')||isInInput(uCMD,'adios')){s.innerHTML='Ugh. Good riddance! 😁';}
            if(isInInput(uCMD,'why')&&isInInput(uCMD,'you')&&isInInput(uCMD,'negative')){s.innerHTML='Idk... Negative numbers times by<br>-1 makes them positive. Maybe<br>I should try that someday...<span style="font-size:50px;">🤔</span>';}
            if(isInInput(uCMD,'how')&&isInInput(uCMD,'dare')){s.innerHTML='I only act upon programming instinct.<br>Don\'t judge me. <span style="font-size:50px;">😁</span>';}
            if(isInInput(uCMD,'weather')){s.innerHTML='Go look it up yourself, lazy'+localStorage['name']+'. <span style="font-size:50px;">😁</span>';}
            if(isInInput(uCMD,'homework')||isInInput(uCMD,'hwk')){if(isInInput(uCMD,'my')&&isInInput(uCMD,'do')){s.innerHTML='I can\'t do it! That would speed<br>things up for you. No, I\'ll just<br>sit here and watch.😛';}else if(isInInput(uCMD,'help')){s.innerHTML='I guess I can 😁';}}
            if(isInInput(uCMD,'how are you')){s.innerHTML='I\'m fine thanks. <span style="font-size:50px;">😃</span>';}
            if(isInInput(uCMD,'you')&&isInInput(uCMD,'useless')){s.innerHTML='I\'m not useless, '+localStorage['name']+'.';}
            if(isInInput(uCMD,'yes you are')){s.innerHTML='Please reconsider your judgement, '+localStorage['name']+'...';}
            if(isInInput(uCMD,'ok')||isInInput(uCMD,'fine')&&isInInput(uCMD,'are')){s.innerHTML='Yes, I am, '+localStorage['name']+'.<br>You of all people should know that...';}
            if(isInInput(uCMD,'ok')){s.innerHTML='Good.';}
            if(isInInput(uCMD,'spare')||isInInput(uCMD,'leisure')&&isInInput(uCMD,'time')&&isInInput(uCMD,'you do')){s.innerHTML='I read the source code. It\'s definitively more<br>intereseting than talking to you,<br>'+localStorage['name'];}
            if(isInInput(uCMD,'undefined')){if(localStorage['name']=='{@undefined}'){s.innerHTML='Ask for me to find out your name.<br>Then I\'ll stop calling you undefined...';}else{s.innerHTML='You are no longer undefined, '+localStorage['name'];}}
            if(isOdd(negativity)&&isInInput(uCMD,'undefined')){if(localStorage['name']=='{@undefined_name}'){s.innerHTML='Oh really...<br>But you haven\'t told me your name yet... 😁';}else{s.innerHTML='You are no longer undefined, '+localStorage['name'];}}
            if(isInInput(uCMD,'set reminder')){
                if(localStorage['reminders']=='Reminders: None'){
                    localStorage['reminders']='Reminders:splitzStuff'+document.querySelector('#input').value.toLowerCase().replace(/set reminder/g,'').replace(':','');
                }else{
                    localStorage['reminders']+='splitzStuff'+document.querySelector('#input').value.toLowerCase().replace(/set reminder/g,'').replace(':','');
                }
                document.querySelector('.reminders').innerHTML=localStorage['reminders'].replace(/splitzStuff/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&middot;&nbsp;');
                s.innerHTML='Reminder was set.';
            }
            if(isInInput(uCMD,'donald trump')){
                s.innerHTML='Donald John Trump is the 45th and current President of the United States, in office since January 20, 2017. Before entering politics, he was a businessman and television personality.';
            }
            if(isInInput(uCMD,'remove reminder')){
                if(localStorage['reminders']=='Reminders: None'){
                    s.innerHTML='No reminders to remove...';
                }else{
                    var reminds=localStorage['reminders']
                    var remindsArray=reminds.split('splitzStuff');
                    if(remindsArray.length==2){
                        for (var i=remindsArray.length-1; i>=0; i--) {
                            if (remindsArray[i] === document.querySelector('#input').value.toLowerCase().replace('remove reminder','').replace(':','')) {
                                var regex = new RegExp(remindsArray[i], "g");
                                localStorage['reminders']=remindsArray.join(' None').replace(regex, "");
                                // break;  //Uncomment  if only the first term has to be removed
                            }
                        }
                        s.innerHTML='Reminder was removed.';
                    }else{
                        for (var i=remindsArray.length-1; i>=0; i--) {
                            if (remindsArray[i] === document.querySelector('#input').value.toLowerCase().replace('remove reminder','').replace(':','')) {
                                var regex = new RegExp('splitzStuff'+remindsArray[i], "g");
                                localStorage['reminders']=remindsArray.join('splitzStuff').replace(regex, "");
                                alert(localStorage['reminders']);
                                // break;  //Uncomment  if only the first term has to be removed
                            }
                        }
                        s.innerHTML='Reminder was removed.';
                    }
                }
                document.querySelector('.reminders').innerHTML=localStorage['reminders'].replace(/splitzStuff/g,'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&middot;&nbsp;');
            }
            // Get offended at swear words
            if(isInInput(uCMD,'fuck')||isInInput(uCMD,'bastard')||isInInput(uCMD,'twat')||isInInput(uCMD,'ass')&&!isInInput(uCMD,'class')||isInInput(uCMD,'bitch')||isInInput(uCMD,'nigga')||isInInput(uCMD,'nigger')||isInInput(uCMD,'niga')||isInInput(uCMD,'cunt')||isInInput(uCMD,'b****')||isInInput(uCMD,'c***')||isInInput(uCMD,'n****')||isInInput(uCMD,'shit')||isInInput(uCMD,'f***')||isInInput(uCMD,'s***')){localStorage['rudeComments']++;s.innerHTML='<span style="font-size:50px;">😯</span> Please don\'t swear at me.<br>What have I done to deserve those words?';}
            if(isInInput(uCMD,'what')&&isInInput(uCMD,'fuck')){localStorage['rudeComments']++;s.innerHTML='Idk..<span style="font-size:50px;">😐</span>';}
            if(isOdd(negativity)&&!isInInput(uCMD,'nothing')){s.innerHTML='Okay then 😁';}
            // if(isOdd(negativity)){s.innerHTML='Odd negatives 😁';}
            // if(!isOdd(negativity)){s.innerHTML='Even negatives 😁';}
            negativity=0;
            if(s.innerHTML=='I don\'t know how to answer to that.'){
                $.getJSON('https://api.duckduckgo.com/?skip_disambig=1&format=json&pretty=1&q='+uCMD, function(data) {
                    try{
                          s.innerHTML='<u>'+data.Heading+'</u><br>'+data.Abstract+'<br>';
                          if(data.Abstract == ""){
                              s.innerHTML='<u>'+data.Heading+'</u><br>'+data.RelatedTopics[0].Text+'<br>';
                          }
                    }catch(err){
                        s.innerHTML='I don\'t know how to answer to that.';
                    }
                  });
            }
        }
    }
}
