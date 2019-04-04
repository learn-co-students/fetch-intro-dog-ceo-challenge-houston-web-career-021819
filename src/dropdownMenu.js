function dropdownMenu(){
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
}
