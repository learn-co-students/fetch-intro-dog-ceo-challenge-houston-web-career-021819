function fetchAllBreeds(breedUrl){
  fetch(breedUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (json) {
      const breedArray = json.message
      let keys = Object.keys(breedArray)

      for (let i = 0; i < keys.length; i++) {
          const ul = document.querySelector("#dog-breeds");
          let currentBreed = keys[i]
          if (breedArray[currentBreed].length === 0) {
              let li = document.createElement('li');
              li.textContent = currentBreed;
              ul.append(li);
              createNewEvent(li);
          } else {
              for (let j = 0; j < breedArray[currentBreed].length; j++) {
                  let li = document.createElement('li');
                  li.textContent = `${currentBreed} - ${breedArray[currentBreed][j]}`
                  ul.append(li);
                  createNewEvent(li)
              }
          }
      }
  })
}

function randomHexColor(){
    return '#' + (function co(lor) {
        return (lor +=
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)])
            && (lor.length == 6) ? lor : co(lor);
    })('');
} //stolen from the internet....

function createNewEvent(li){
    li.addEventListener('click', function () {
        li.style.color = randomHexColor()
    })
}
