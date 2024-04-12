var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function patricio(){
 document.getElementById("textbox").innerHTML=""   ;
 recognition.start();
 }
recognition.onresult=function(identificar){
    console.log(identificar);
    var kk=identificar.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=kk;
   if (kk=="esternocleidomastoideo") {
console.log ("esternocleidmastoideo"); 
 speak()  } 
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
Webcam.attach(kiol);
setTimeout(
 function(){
 kalo();
 hola ();  
 },2500                                       
);
}
function kalo(){
    Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });     
}
kiol=document.getElementById("camera");
Webcam.set({
with:500,height:250,image_format:"png",png_quality:80    
}) 
function hola(){
 var meh=document.getElementById("link");
 var img=document.getElementById("selfie_image").scr;
 meh.href=img;
 meh.save(".png");   
}
