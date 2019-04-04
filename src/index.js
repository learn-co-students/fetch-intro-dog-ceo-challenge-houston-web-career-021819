document.addEventListener('DOMContentLoaded',function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fourRandomDogs(imgUrl)
  fetchAllBreeds(breedUrl)
  dropdownMenu()
})
