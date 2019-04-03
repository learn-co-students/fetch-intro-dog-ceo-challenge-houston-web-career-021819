console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded',function(){
    //fetch dog pics
    fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let array = json.message;
        for(let i =0; i < array.length; i++){
            let image = document.createElement('img');
            image.src = array[i];
            document.querySelector("#dog-image-container").append(image);
        } 
    })
    //fetch all breeds
    fetch(breedUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        const breedArray = json.message
        let keys = Object.keys(breedArray)

        for (let i = 0; i < keys.length; i++) {
            const ul = document.querySelector("#dog-breeds");
            //let li = document.createElement('li');
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
    //dropdown menu js
    const dropdownMenu = document.querySelector("#breed-dropdown")
    dropdownMenu.addEventListener('change', function(e){
        alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        if (e.target.value === 'all') {
            items = document.querySelectorAll('li')
            for (j = 0; j < items.length; j++) {
                singleListItem = items[j]
                singleListItem.style.display = ""
            }
        }
        for (i = 0; i < alphabet.length; i++){
            if(e.target.value === alphabet[i]){
                items = document.querySelectorAll('li')
                for (j = 0; j < items.length; j++){
                    singleListItem = items[j]
                    if (singleListItem.textContent.slice(0,1) === alphabet[i]){
                        singleListItem.style.display = ""
                    } else {
                        singleListItem.style.display = "none"
                    }
                }
            }
        }
    })   
})

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