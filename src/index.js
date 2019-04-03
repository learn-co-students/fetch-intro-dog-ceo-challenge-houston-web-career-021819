console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function () {
  const dd = document.querySelector('#breed-dropdown')

  function dogpics() {
    return fetch('https://dog.ceo/api/breeds/image/random/4', {
      method: 'GET'
    })
      .then(function (res) {
        return res.json()
      })
      .then(function (jsonReturn) {
        let imageLinks = jsonReturn.message
        imageLinks.forEach(function (image) {
          displayImage = document.createElement('img')
          displayImage.src = image
          imgdiv = document.querySelector('#dog-image-container')
          imgdiv.append(displayImage)
        })
      })
  }

  function breedlist() {
    return fetch('https://dog.ceo/api/breeds/list/all', {
      method: 'GET'
    })
      .then(function (res) {
        return res.json()
      })
      .then(function (jsonReturn) {
        const breeds = Object.keys(jsonReturn.message)
        breeds.forEach(function (breed) {
          newli = document.createElement('li')
          newli.textContent = breed
          ul = document.querySelector('#dog-breeds')
          ul.append(newli)
          newli.addEventListener('click', function (e) {
            e.target.style.color = 'yellow'
          })
        })
      })
  }

  function filter() {
    let breeds = document.querySelectorAll('li')
    breeds.forEach(function (breed) {
      if (dd.value === breed.innerText[0]) {
        breed.style.display = 'list-item'
      } else {
        breed.style.display = 'none'
      }
    })
  }

  function filterListen() {
    dd.addEventListener('change', function () {
      filter()
    })
  }


  dogpics()
  breedlist()
  filterListen()










})