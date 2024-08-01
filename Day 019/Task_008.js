// Write a regular expression to match a word only if it is at the end of a string. Log the matches

const wordRegex = /word\b$/;
const string = 'word word';
const matches = string.match(wordRegex);

console.log(matches);
