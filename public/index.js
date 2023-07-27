// DOM
const name = document.getElementById('name')
const focus = document.getElementById('focus')

//function show time
function showTime() {
    let today = new Date()
    document.getElementById('time').innerHTML = today.toLocaleTimeString()
}
setInterval(showTime,1000)
showTime()

//function set greeting
function setGreeting() {
    let greeting;
    let time = new Date().getHours
    if (time < 12) {
        greeting = `Hello Good Morning! `
    } else if(time === 12) {
        greeting = `Let 's go have lunch`
    } else if (time > 12) {
        greeting = `Hello Good Afternoon`
    } else {
        greeting = `Hello Good Evening`
    }
    document.getElementById('greeting').innerHTML = greeting
}
setGreeting()

//function get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = "[Enter Name]"
    } else {
        name.textContent = localStorage.getItem('name')
    }
}
getName()

//function set name
function setName(e) {
  if (e.type === "keypress") {
    //make sure enter is pressed
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
name.addEvenListener("keypress", setName)
name.addEvenListener("blur", setName)


function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
//Set focus
function setFocus(e) {
  if (e.type === "keypress") {
    //make sure enter is pressed
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

focus.addEvenListener('keypress', setFocus)
focus.addEvenListener('blur', setFocus)



getFocus()


