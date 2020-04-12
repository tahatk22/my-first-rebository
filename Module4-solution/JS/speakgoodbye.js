
(function (window) {
var byeSpeaker = {};
var speakWord = "goodbye";
 byeSpeaker.speak= function () {
  console.log(speakWord + " " + byeSpeaker.name);
}
 
 window.byeSpeaker = byeSpeaker;
    
})(window);