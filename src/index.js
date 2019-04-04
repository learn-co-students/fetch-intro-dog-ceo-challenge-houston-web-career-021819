console.log('%c HI', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        const images_array = response["message"];
        images_array.forEach(function(element){
            add_image(element);
        })
        
    })

function add_image(input){
    const container = document.getElementById("dog-image-container");
    const list = document.createElement('li');
    container.append(list); 
    const image = document.createElement('img');
    image.src = input;
    list.append(image);  
}

fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        var breed_name = ""
        const breeds_object = response["message"];
        const keys = Object.keys(breeds_object);
        const unique_letters = []
        
        keys.forEach(function(element){
                const breed_menu = document.getElementById("breed-dropdown");
                breed_menu.addEventListener('change', function(e){
                    const selected_letter = breed_menu.value
                    if(selected_letter == element.charAt(0)){
                        add_breed_of_first_letter(element);
                    } 
                })
           // })
           
        })
        keys.forEach(function(element){
            //add_breed(element);
            //I commented the above line to show only the breeds of that first letter
            //If you want all the breeds to be displayed, uncomment the first line in this function
            if(!(unique_letters.includes(element.charAt(0)))){
                unique_letters.push(element.charAt(0));
            }
          })
        unique_letters.forEach(function(element){
            add_option(element);
        })
        
    })
//The following function was written initially for challenge 2. Its a working solution
//if you uncomment the add_breed(element)-line in the above code block to display all breeds
function add_breed(input){
    const breed_container = document.getElementById("dog-breeds");
    const list = document.createElement('li');
    breed_container.append(list);
    list.innerText = input;
    list.value = input;
    list.addEventListener('click',function(e){
        list.style.color = "blue";
    })

}

function add_breed_of_first_letter(breed){
    const breed_container = document.getElementById("breed-dropdown");
    const ul = document.createElement('ul')
    document.body.append(ul);
    const list = document.createElement('li')
    list.innerText = breed;
    list.value = breed;
    ul.append(list);
    list.addEventListener('click',function(e){
        list.style.color = "blue";
    })
}

    

function add_option(input){
    //document.getElementById("breed-dropdown").value = input;
    //I had thought the above line will do it all. But it didnt!
    const breed_menu = document.getElementById("breed-dropdown");
    const breed_option = document.createElement('option')
    breed_option.innerText = input;
    //adding above line only made the letters to be displayed
    breed_option.value = input;
    breed_menu.append(breed_option);    
}

//challenge 1,2,3 are done! In challenge4-displayed the options with the 
//starting letters of the breed. Yet to completre the other half of challenge 4.

