//------------------ Constants ------------------------//
const storyMessages = [
  "Great! The first place Ace would like to investigate is his favorite chair. He spends long hours playing with his toys in this chair so there are high hopes his ball will be there. It looks like there is sad news to give as his ball is not here. What are the next steps?",
  "Wonderful! Ace is excited to have a helper find his ball. Watch his excitment show while he waits to be let outside.",
  "Ace wants to search the yard but since the yard is big he calls in help from his BFF Sophie. They search and search but have no luck on finding the ball. Should Ace continue to search?",
  "YAY!!! You helped Ace find his ball and he is so happy!",
  "Welcome to the Adventures of Ace! Ace is a Bulldog American Staffordshire Terrier mix who loves to play ball. An issue has arose, though, where he has lost his ball and is sad because of this. He is looking for someone to assist him in searching and wants to know if that will be you? Work through this story game to find out what happened to Ace's ball and be his hero. Watch out for sad Ace, though, because one wrong move can cause great disappointment!"
];

const randoAcePictures = [
  '../AcePictures/Ace1.jpg',
  '../AcePictures/Ace2.jpg',
  '../AcePictures/Ace3.jpeg',
  '../AcePictures/Ace4.jpeg',
  '../AcePictures/Ace5.jpeg',
  '../AcePictures/Ace6.jpg',
  '../AcePictures/Ace7.jpeg',
  '../AcePictures/Ace8.jpg',
  '../AcePictures/Ace9.jpeg',
  '../AcePictures/Ace10.jpeg',
  '../AcePictures/Ace11.jpg',
  '../AcePictures/Ace12.jpg',
  '../AcePictures/Ace13.jpg',
  '../AcePictures/Ace14.jpg',
  '../AcePictures/Ace15.jpg',
  '../AcePictures/Ace16.jpg',
  '../AcePictures/Ace17.jpg',
  '../AcePictures/Ace18.jpeg',
  '../AcePictures/Ace19.jpg',
  '../AcePictures/Ace20.jpeg',
  '../AcePictures/Ace21.jpg',
  '../AcePictures/Ace22.jpeg',
  '../AcePictures/Ace23.jpeg',
  '../AcePictures/Ace24.jpeg',
  '../AcePictures/Ace25.jpg',
  '../AcePictures/Ace26.jpg',
  '../AcePictures/Ace27.jpg',
  '../AcePictures/Ace28.jpg',
  '../AcePictures/Ace29.jpg',
  '../AcePictures/Ace30.jpg',
  '../AcePictures/Ace31.jpg',
  '../AcePictures/Ace32.jpg',
  '../AcePictures/Ace33.jpg',
  '../AcePictures/Ace34.jpg',
  '../AcePictures/Ace35.jpeg',
  '../AcePictures/Ace36.jpg',
]

//------------------ Cached Element References ----------//
const helpAceBtn = document.getElementById('help-ace')
const sadAceBtn = document.getElementById('sad-ace')
const sceneStories = document.getElementById('story')
const picturesOfAce = document.getElementById('image-ace')
const title = document.getElementById('title')
const videosOfAce = document.getElementById('video')
const resetBtn = document.getElementById('reset-btn')
const resetBtnDiv = document.getElementById('reset-btn-div')
const randoAcePicBtn = document.getElementById('rando-ace-pic-btn')
const partyWithAceBtn = document.getElementById('party-with-ace-btn')

const aceSays = new Audio("../audio/winningSong.wav")


//------------------ Event Listeners ------------------//
helpAceBtn.addEventListener('click', scene1)
sadAceBtn.addEventListener('click', sadAcePicture)


//------------------ Game Functions ---------------------//

init ()

function init() {
  title.textContent = 'The Adventures of Ace!'
  title.style = 'display: default'
  title.classList.add('animate__animated', 'animate__fadeIn')
  title.style.setProperty('animate__fadeIn', '0.8s')

  sceneStories.textContent = storyMessages[4]
  
  picturesOfAce.src = "../assets/windowAce.jpeg"
  
  helpAceBtn.style = 'display: default'
  helpAceBtn.textContent = 'Help Ace Find Ball'
  
  sadAceBtn.style = 'display: default'
  sadAceBtn.textContent = 'Too Bad So Sad Ace Boy'
  
  resetBtn.style = "display: none"
  randoAcePicBtn.style = 'display: none'
  partyWithAceBtn.style = 'display: none'

  helpAceBtn.removeEventListener('click', winningScene)

  helpAceBtn.addEventListener('click', scene1)
  picturesOfAce.addEventListener('mouseover', function() {
    aceSays.volume = 0
    aceSays.pause()
  })
}

function sadAcePicture() {
  picturesOfAce.style = 'display: default'
  picturesOfAce.src = '../assets/sadAce.jpg'
  
  sceneStories.textContent = "Ace is sad you will not help him. All he wants to do is play ball with you."

  resetBtn.style = 'display: block'
  resetBtn.textContent = "I'm sorry Ace, let me help you find your ball."
  
  videosOfAce.style = 'display: none'
  helpAceBtn.style = 'display: none'
  sadAceBtn.style = 'display: none'
  title.style = 'display: none'
  randoAcePicBtn.style = 'display: none'
  partyWithAceBtn.style = 'display: none'
  
  helpAceBtn.removeEventListener('click', scene1)
  helpAceBtn.removeEventListener('click', scene2)
  resetBtn.removeEventListener('click', init)


  resetBtn.addEventListener('click', init)
}

function scene1() {
  sceneStories.textContent = storyMessages[0]

  picturesOfAce.style = "display: none"
  videosOfAce.src = '../assets/couchAce.mp4'
  videosOfAce.style = "display: block"
  videosOfAce.volume = .10

  helpAceBtn.textContent = 'Go Outside and Look!'
  sadAceBtn.textContent = 'Give Up.'

  title.style = 'display: none'
  resetBtn.style= "display: none"
  randoAcePicBtn.style= "display: none"
  partyWithAceBtn.style = 'display: none'

  helpAceBtn.removeEventListener('click', scene1)

  helpAceBtn.addEventListener('click', scene2)
  sadAceBtn.addEventListener('click', sadAcePicture)
}

function scene2() {
  sceneStories.textContent = storyMessages[1]

  videosOfAce.src = "../assets/doorAce.mp4"
  videosOfAce.volume = .10

  helpAceBtn.textContent = 'Open Door!'

  resetBtn.style= "display: none"
  randoAcePicBtn.style= "display: none"
  sadAceBtn.style = 'display: none'
  partyWithAceBtn.style = 'display: none'

  helpAceBtn.removeEventListener('click', scene2)

  helpAceBtn.addEventListener('click', scene3)
  sadAceBtn.addEventListener('click', sadAcePicture)
}

function scene3() {
  sceneStories.textContent = storyMessages[2]
  
  videosOfAce.src = "../assets/AceandSophieBackyard.mp4"
  videosOfAce.volume = .10
  
  helpAceBtn.textContent = 'Lets check the area around the rain barrel!'
  resetBtn.style= "display: none"
  randoAcePicBtn.style= "display: none"

  sadAceBtn.style = "display: default"
  sadAceBtn.textContent = 'So sad, looks like your ball is lost.'
  partyWithAceBtn.style = 'display: none'

  helpAceBtn.removeEventListener('click', scene3)

  helpAceBtn.addEventListener('click', winningScene)
  sadAceBtn.addEventListener('click', sadAcePicture)
  helpAceBtn.addEventListener('click', displayRandoPicsOfAce)
}

function winningScene() {
  videosOfAce.style = "display: none"
  picturesOfAce.style = "display: default"
  picturesOfAce.src = '../assets/ballAce.jpg'

  sceneStories.textContent = storyMessages[3]

  helpAceBtn.style = 'display: none'
  sadAceBtn.style = 'display: none'

  resetBtn.style = 'display: block'
  resetBtn.textContent = 'Reset the Game'
  randoAcePicBtn.style = 'display: block'
  partyWithAceBtn.style = 'display: block'
  
  partyWithAceBtn.addEventListener('click', function() {
    aceSays.volume = .10
    winningAudio()
    confetti.start(2500)
  })

  helpAceBtn.removeEventListener('click', winningScene)

  resetBtn.addEventListener('click', init)
}

function winningAudio() {
  aceSays.currentTime=0;
  aceSays.play();
  setInterval(function(){
    if(aceSays.currentTime > 5){
      aceSays.pause();
    }
  },1000);
}

function displayRandoPicsOfAce() {
  randoAcePicBtn.textContent = 'Random Ace Pictures!'

  randoAcePicBtn.addEventListener('click', function() {
    let randoAcePic = randoAcePictures[Math.floor(Math.random() * randoAcePictures.length)]
    picturesOfAce.setAttribute('src', randoAcePic)
  })
}