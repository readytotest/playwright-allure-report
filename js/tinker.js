/*
JavaScript Playground.
Things from practice coding challenges, tutorials, and other ideas I come up with.
A place to tinker with JS.
*/

//If the knight is awake you cannot do a fast attack
//If the knight is asleep you can do a fast attack
function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

alert(canExecuteFastAttack(true));
//Expect alert to be false because knight is awake = true

//Take a word or group of words and only the first
//letter of the first word will be uppercase
//all other letters will be lowercase
function frontDoorPassword(word) {
  let convertUpperCase = word.toUpperCase();
  //Convert the word that is entered into Uppercase
  //Then slice off everything except the very first letter (keep the first letter)
  let sliceFirstLetter = convertUpperCase.slice(0, 1);
  //Slice off the first letter and keep all the rest (keep everything, except first letter)
  let allLettersAfterFirst = word.slice(1);
  //All the letters except the first convert to lowercase
  let convertLowerCase = allLettersAfterFirst.toLowerCase();
  //Now we have the first letter of the word uppercase
  //All remaining letters in the word are lowercase
  let finishedFormat = `${sliceFirstLetter}${convertLowerCase}`;
  return finishedFormat;
}
alert(frontDoorPassword("pLANETS SuN MooN"));
//Expect alert to be Planets sun moon

//test
