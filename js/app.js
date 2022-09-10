//------------------ Constants ------------------------//
const storyMessages = [
  "Great! The first place Ace would like to investigate is his favorite chair. He spends long hours playing with his toys in this chair so there are high hopes his ball will be there. It looks like there is sad news to give as his ball is not here. What are the next steps?",
  "Wonderful! Ace is excited to have a helper find his ball. Watch his excitment show while he waits to be let outside.",
  "Ace wants to search the yard but since the yard is big he calls in help from his BFF Sophie. They search and search but have no luck on finding the ball. Should Ace continue to search?",
  "YAY!!! You helped Ace find his ball and he is so happy!"
];

//------------------ Variables ------------------------//
// let winner
// let timerIntervalId
// let winTime, min, sec, seconds = 0


//------------------ Cached Element References ----------//
let helpAceBtn = document.getElementById('help-ace')
let sadAceBtn = document.getElementById('sad-ace')
let sceneStories = document.getElementById('story')

// console.log(helpAceBtn, 'hello');
// console.log(rejectAceBtn, 'hello');
// console.log(sceneStories, 'hello');

//------------------ Event Listeners ------------------//
helpAceBtn.addEventListener('click', scene1)
sadAceBtn.addEventListener('click', sadAcePicture)

// console.log(helpAceBtn);
// console.log(sadAceBtn);


//------------------ Game Functions ---------------------//

init ()

function init() {
  sceneStories.textContent = "Welcome to the Adventures of Ace! Ace is a Bulldog American Staffordshire Terrier mix who loves to play ball. An issue has arose, though, where he has lost his ball and is sad. He is looking for someone to assist him in searching and wants to know if that will be you? Work through this story game to find out what happened to Ace's ball and be his hero. Whatch out for sad Ace, though, because one wrong move can cause great disappointment!"
  helpAceBtn.textContent = 'Help Ace Find Ball'
  sadAceBtn.textContent = 'Too Bad So Sad Ace Boy'
}
console.log(init, 'hello');

function sadAcePicture() {
  // this will be the losing aspect of the game. 
  // whenever the losing button is picked the player will be sent here
}
// function betweenSceneAnimation() {
//   // this will show the paws walking to a sound and will be shown between scenes.
//   // will link to this function betweens scenes and set a time in this function to play for set amount of time. 
// }


function scene1() {
  // console.log('click');
  sceneStories = storyMessages[0]
    // console.log(sceneStories);

  helpAceBtn.textContent = 'Go Outside and Look'

  sadAceBtn.textContent = 'Give Up'
}

// function scene2() {
  
// }

// function scene3() {
  
// }

// function winningScene() {

// }


//------------------ Hidden Timer Functions -----------//
// function startTimer() {
// }

// function handleClickWin() {
// }

// function tick() {
// }

// function renderMessage() {
// }

// function renderTime() {
// }




// Choose Your Own Adventure was selected as the game option.

// The Adventures of Ace 

// Game state: picture of Ace with title and a description of the issue to be solved (find his ball). Once a player has selected their choice by using buttons a hidden timer will start. This timer will stop once Sad Ace is reached or the game is won. 

// When a player goes from one scene to the next an animation of paw prints and a sound will play. There are 4 scenes total. 

// Each scene will reveal more of the story and allow the player to select an option. If the wrong option is selected then Sad Ace will appear and the player has lost. If the player finds Ace's ball then the player has won.

// Once the game is won the timer will stop and reveal how long it took the player to find Ace's ball. If the player loses the timer will stop and reveal how long it took to disappoint Ace. We don't want to disappoint Ace. 

// Styling will be simple and based on a color pallet. Since I will be using outside pictures and videos I didn't want to take away from that. 

// If I have more time then I will add an optional extension where the player can play ball with Ace. This will only be if I'm not drowning by the time I reach MVP. 

// favicon will be of a paw print