(function () {
  'use strict';

  const videoSelect = $('#videoSelect');
  const videoNameElem = $('#name');
  const videoList = $('#videoList video');
 

  async function loadChoices() {
    try {
      const response = await fetch('videos.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const choices = await response.json();
      if (choices) {
        choices.forEach(videos => {
          videoSelect.append(`<option value="${videos.id}">${videos.name}</option>`);

        });
    }
  }
      catch(e) {
      console.error('OOPS, ERROR', e);
    }
  }
    loadChoices();

     videoSelect.change(async function () {
      console.log(this.value);
      videoNameElem.append(videoSelect);
      videoList.attr('src', this.url);
      
      const request = await fetch(`${this.value}.json`)
      if (!request) {
        throw new Error(`${request.status} ${request.statusText}`);
    }
      const video = await request.json();
      if(video){
      console.log(video);
      videoList.attr('src', video.url);
      videoList.play();
      
    }
      
      videoNameElem.empty();
      
      
    });
    
}());