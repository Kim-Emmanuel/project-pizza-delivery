document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        buildToDo(e.target.order.value)
        form.reset()
    })
})

function buildToDo(todo){
  const p = document.createElement('p');
  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.getElementById('list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
  alert('This order will be removed')
}
// This code below is for the users' location
const cords = document.getElementById('cords');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        cords.innerHTML = "Geolocation is not supported by this browser.";

    }
}

function showPosition(position) {
    cords.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// The nav bar toggle
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})


fetch('https://api.agify.io/?name=Kimkd', {
    headers: {
        'Content-Type': 'application/json'
    },
}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('Error'))




