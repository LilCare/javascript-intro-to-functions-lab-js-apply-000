function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

var spy = shout("hello");
console.log(spy);

spy = whisper(spy);
console.log(whisper(spy));