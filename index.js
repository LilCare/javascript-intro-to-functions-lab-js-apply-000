function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

function sayHiToGrandma(string){
  string = "I love you Grandma." ? " I love you, too." : string.toLowerCase() ? "I can't hear you!" : "YES INDEED!";
  return string;
}
//function sayHiToGrandma(string){
  //if (string === "I love you, Grandma."){
    //return "I love you, too.";
  //} else if (string.toLowerCase() === string){
    //return "I can't hear you!";
  //} else {
    //return "YES INDEED!";
  //}
//}




