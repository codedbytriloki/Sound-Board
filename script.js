
const buttons = document.querySelector(".buttons");
const sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach((sound) => {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerText = sound;
 

  button.addEventListener('click',() => {
    stopSount();
    document.getElementById(sound).play();

  })
  buttons.appendChild(button);
})

function stopSount(){
  sounds.forEach((sound) => {
    const stop = document.getElementById(sound);
    stop.pause();
    stop.currentTime = 0;
  })
}


