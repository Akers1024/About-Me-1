'use strict';

// Question 1 Name

var name = prompt('Hello classmate! What is your name?');
console.log (name);

alert('Nice to meet you, ' + name + "!")

// Question 2 Experience
        
var experience = prompt(name + ', are you new to coding? Y for yes, or N for no, please.');
console.log (experience);

if (experience === 'Y') {
alert('Whew! So am I.');
} else {
alert('I must be the only noob in the class.');
}

// Question 3 Curiosity

var like = prompt('Well, ' + name + ', are you liking the course so far? Again, Y for Yes or N for No, please.');
console.log (like);

if (like === 'Y') {
alert('Yay!');
} else {
alert('I am sorry to hear that, buddy.');
}

// Question 4 Confidence

var confident = prompt('Do you think you will do well in this course, ' + name + '? Last Y or N question.');
console.log (confident);

if (confident === 'Y') {
alert('I do too, ' + name + '!');
} else {
alert('I am having a tough time too. Here is to hoping for the both of us, ' + name + '!');
}

// Question 5 Memory

var memory = prompt('What is my name, ' + name + '?')
  .toLowerCase();
console.log (memory);

if (memory = 'ryan') {
alert('Awww, ' + name + ', you remembered my name!');
} else {
alert('Hint: My name is Ryan...sadface');
}
