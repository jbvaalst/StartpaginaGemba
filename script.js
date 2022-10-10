const url = 'https://wttr.in/Wormer?format=+%c+%t 💧 %p %w';

function getWeather() {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.readyState == 4 && req.status == '200') {
        const weather = document.getElementById('weather');
        weather.innerHTML = req.response;
      }
    }
  }
  req.open('GET', url, true);
  req.send();
}

function loadJSON(callback) {
  const req = new XMLHttpRequest();
  req.overrideMimeType('application/json');
  req.onreadystatechange = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.readyState == 4 && req.status == '200') {
        callback(req.responseText);
      }
    }
  }
  req.open('GET', 'quotes.json', true );
  req.send(null);
}

function setGreeting() {
  let element = document.getElementById('title');
  let d = new Date();
  let time = d.getHours();
  let naam = "collega"


  if (time >= 6 && time < 12) {
    element.innerHTML = 'Goedemorgen ' + naam + '!';
  }
  if (time >= 12 && time < 13) {
    element.innerHTML= 'Lunchtijd ' + naam + '!';
  }
  if (time >= 13 && time < 18) {
    element.innerHTML = 'Goedemiddag ' + naam + '!';
  }
    if (time >= 18 && time < 24) {
    element.innerHTML = 'Goedenavond ' + naam + '!';
  }
  if (time >= 0 && time < 6) {
    element.innerHTML = 'Goedenacht ' + naam + '!';
  }
}

setGreeting();
getWeather();
