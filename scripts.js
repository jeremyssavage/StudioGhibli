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
  
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      container.appendChild(card);
      
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      card.appendChild(h1);
      
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      card.append(p);
  })
  .catch(err => {
    console.log(err);
  })

