console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
     return response.json()
    })
    .then(function(data){
        data.message.forEach(function(link){  // this is just like Ruby .each ||
            let div = document.querySelector('#dog-image-container')  
            let img = document.createElement('img') 
            div.appendChild(img)
            img.src = link 
        })
       
    }) 
 
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response){
     return response.json()
    })
    .then(function(data){
        Object.keys(data.message).forEach(function(breed){  // this is just like Ruby .each ||
            let ul = document.querySelector('#dog-breeds')  
            let li = document.createElement('li') 
            ul.appendChild(li)
            li.innerText = breed 
            //let list = document.querySelector("#dog-breeds li");
     li.addEventListener('click', function(){
     li.style.color = "Pink"
   })


        })
       
    }) 
  
let menu = document.querySelector('#breed-dropdown');
  menu.addEventListener('change', function(){
    
   let lists = Array.from(document.querySelectorAll('#dog-breeds li'));
        lists.forEach(function(li){
           if(li.innerText[0] == menu.value){
             li.style.display = "block"
           }else{
               li.style.display = "none"
           }
        })
   
}) 

})


   






    