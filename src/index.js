console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (imgUrls) {
        console.log(imgUrls["message"])
        const imgs = imgUrls["message"]
        for (let img of imgs) {
            let image = document.createElement('img')
            image.src = img
            document.body.appendChild(image)
        }
    })

const breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(breedUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (breeds) {
        const breedList = breeds["message"]
        for (let breed in breedList) {
            if (breedList[breed].length != 0) {
                for (dog of breedList[breed]) {
                    let li = document.createElement('li')
                    let list = document.querySelector('#dog-breeds')
                    li.innerText = dog
                    list.appendChild(li)
                    li.addEventListener('click', function () {
                        li.style.color = "pink"
                    })

                    let selector = document.querySelector("#breed-dropdown")
                    selector.addEventListener('change', function () {
                        for (let listItem of list.children) {
                            listItem.style.display = ""
                            //   console.log(listItem.innerText)
                            if (!listItem.innerText.startsWith(selector.value)) {
                                listItem.style.display = "none"
                            }
                        }
                    })

                }
            }
        }
    })