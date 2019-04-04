
function fourRandomDogs(imgUrl) {
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
}
