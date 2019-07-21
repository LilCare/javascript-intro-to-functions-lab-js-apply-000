function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

spy = shout("hello");
return spy;
console.log(spy);

spy = whisper(spy);
console.log(whisper("hello"));