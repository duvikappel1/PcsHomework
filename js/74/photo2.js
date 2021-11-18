(async function () {
    'use strict';
  
    async function loadPhotos() {
      try {
        const r = await fetch('photo.json');
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return await r.json();
      } catch (e) {
        console.error(e);
      }
    }
    const photo = $('#photo img');
    const photoName = $('#name');
    const backButton = $('#backButton');
    const nextButton = $('#nextButton');
    let x = 0;
  
    function displayPhotos(photos) {
      photoName.empty();
      photoName.append(photos[x].title);
      photo.attr('src',photos[x].media );
     
    };
    nextButton.click(function(){
      if(x==photos.length-1){
        x=0;
      }
      else{
        x++;
      }
      displayPhotos(photos);
    });

    backButton.click(function(){
      if(x==0){
        x=photos.length-1;
      }
      else{
        x--;
      }
      displayPhotos(photos);
    });
    
    const photos = await loadPhotos();
    displayPhotos(photos);
    
  }());