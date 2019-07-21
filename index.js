function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

var spy = "hello";
console.log(shout(spy));

console.log(whisper("hello"));