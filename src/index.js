console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener("DOMContentLoaded", function() {
    const dogDiv = document.querySelector("#dog-image-container")
    fetch(imgUrl)
    .then(function(res) {
        return res.json()
    })
    .then(function(dogArray) {
        for(i = 0; i < dogArray.message.length; i++) {
            const dogImg = document.createElement("img") // test back
            dogImg.src = dogArray.message[i]
            dogDiv.append(dogImg)
        }
    })


    const dogBreeds = document.querySelector("#dog-breeds")
    fetch(breedUrl)
        .then(function(res) {
            return res.json()
        })
        .then(function(breedsArray){
            let keys = Object.keys(breedsArray.message)
            for(i = 0; i < keys.length; i++) {
                const dogList = document.createElement("li") // test back
                dogList.innerText = keys[i]
                dogBreeds.append(dogList)
            }
        })


})
