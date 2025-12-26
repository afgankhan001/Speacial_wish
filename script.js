(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());



const style = document.querySelector(".text pre style");
const card = document.querySelector(".front face back face");


script = `
    .....
Happy Birthday, Arfiya 💝

On this special day, I pray that Allah blesses you with endless

happiness, good health, and success in this life and the next.

May He guide you on the path of righteousness, fill your heart

with peace,and grant you all your dreams and aspirations.

You are a beautiful soul, and your kindness, humility, and

warmth inspire everyone around you.

May Allah continue to shower His mercy and blessings upon you,

Happy Birthday, and may this upcoming year be the best one yet! 🌟
 ..........
       Your Ayesha 🫶🏻 😇
`;


let counter = 0;

let intervalID = setInterval(() => {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if(counter > script.length) {
    clearInterval(intervalID);
  }
}, 90);
