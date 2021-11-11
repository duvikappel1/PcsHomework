(async function () {
  'use strict';

  async function loadVideos() {
    try {
      const r = await fetch('videos.json');
      if (!r.ok) {
        throw new Error(`${r.status} ${r.statusText}`);
      }
      return await r.json();
    } catch (e) {
      console.error(e);
    }
  }

  function populateVideoList(videos) {
    const videoElem = $('#video');
    const videoList = $('#videoList ul');
    const videoName = $('#videoName');

    videos.forEach(video => {
     
      $(`<li>
         ${video.name} 
        <img src="${video.image}" alt="${video.name}">
      </li>`)
      .appendTo(videoList)
      .click(function () {
        videoElem.attr('src', video.url, );
        videoElem.attr('controls', true);
        videoElem[0].play();
       
        
      });
    });
  }

  const videos = await loadVideos();
  populateVideoList(videos);
}());