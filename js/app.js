//------------------ Constants ------------------------//
const storyMessages = [
  "Great! The first place Ace would like to investigate is his favorite chair. He spends long hours playing with his toys in this chair so there are high hopes his ball will be there. It looks like there is sad news to give as his ball is not here. What are the next steps?",
  "Wonderful! Ace is excited to have a helper find his ball. Watch his excitment show while he waits to be let outside.",
  "Ace wants to search the yard but since the yard is big he calls in help from his BFF Sophie. They search and search but have no luck on finding the ball. Should Ace continue to search?",
  "YAY!!! You helped Ace find his ball and he is so happy!",
  "Welcome to the Adventures of Ace! Ace is a Bulldog American Staffordshire Terrier mix who loves to play ball. An issue has arose, though, where he has lost his ball and is sad. He is looking for someone to assist him in searching and wants to know if that will be you? Work through this story game to find out what happened to Ace's ball and be his hero. Whatch out for sad Ace, though, because one wrong move can cause great disappointment!"
];

//------------------ Variables ------------------------//
// let timerIntervalId
// let winTime, min, sec, seconds = 0


//------------------ Cached Element References ----------//
let helpAceBtn = document.getElementById('help-ace')
let sadAceBtn = document.getElementById('sad-ace')
let sceneStories = document.getElementById('story')
let picturesOfAce = document.getElementById('image-ace')
let title = document.getElementById('title')
let videosOfAce = document.getElementById('video')
let resetBtn = document.getElementById('resetBtn')

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
  sceneStories.textContent = storyMessages[4]

  picturesOfAce.src = "../assets/windowAce.jpeg"

  helpAceBtn.style = 'display: default'
  helpAceBtn.textContent = 'Help Ace Find Ball'

  sadAceBtn.style = 'display: default'
  sadAceBtn.textContent = 'Too Bad So Sad Ace Boy'

  resetBtn.style = "display: none"
}
// console.log(init, 'hello');

function sadAcePicture() {
  // this will be the losing aspect of the game. 
  // whenever the losing button is picked the player will be sent here
  
  picturesOfAce.src = '../assets/sadAce.jpg'
  

  sceneStories.textContent = "Ace is sad you will not help him."

  resetBtn.style = 'display: block'
  resetBtn.addEventListener('click', resetGame)

  helpAceBtn.style = 'display: none'
  sadAceBtn.style = 'display: none'
  title.style = 'display: none'
}

function scene1() {
  // console.log('click');
  sceneStories.textContent = storyMessages[0]
    // console.log(sceneStories);
  
  picturesOfAce.style = "display: none"
  videosOfAce.style = "display: block"
  videosOfAce.volume = .10

  helpAceBtn.textContent = 'Go Outside and Look!'

  sadAceBtn.textContent = 'Give Up.'

  title.style = 'display: none'

  helpAceBtn.addEventListener('click', scene2)
}

function scene2() {
  sceneStories.textContent = storyMessages[1]
    // console.log(sceneStories);

  videosOfAce.src = "../assets/doorAce.mp4"
  videosOfAce.volume = .10

  helpAceBtn.textContent = 'Open Door!'

  sadAceBtn.style = 'display: none'

  helpAceBtn.addEventListener('click', scene3)

}

function scene3() {
  sceneStories.textContent = storyMessages[2]
    // console.log(sceneStories);
  
  videosOfAce.src = "../assets/AceandSophieBackyard.mp4"
  videosOfAce.volume = .10
  
  helpAceBtn.textContent = 'Lets check the area around the rain barrel!'

  sadAceBtn.style = "display: default"
  sadAceBtn.textContent = 'So sad, looks like your ball is lost.'

  helpAceBtn.addEventListener('click', winningScene)

}

function winningScene() {
  videosOfAce.style = "display: none"
  picturesOfAce.style = "display: default"
  picturesOfAce.src = '../assets/ballAce.jpg'

  sceneStories.textContent = storyMessages[3]
  // console.log(sceneStories);

  helpAceBtn.style = 'display: none'

  sadAceBtn.style = 'display: none'

  resetBtn.style = 'display: block'
  resetBtn.addEventListener('click', resetGame)

  // build in dancing dog animation with sound
}

function resetGame() {
  init ()
}


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


