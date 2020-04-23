fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    return response.json()
  })
  .then(data => {
    document.write('Data loaded successfully!')
    console.log(data)
  })
  .catch(err => {
    document.write('Some sort of error!')
    console.log(err)
  })

