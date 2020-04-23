app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';
app.appendChild(logo);

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    return response.json();
  })
  .then(data => {
    app = document.findElementById('root');
  })
  .catch(err => {
    console.log(err);
  })

