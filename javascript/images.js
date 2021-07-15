const $element = ('.fix');
const imagePath = '/assets';
const totalFrames = 4;
const animationDuration = 500;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;

function step(startTime) {
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;

  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  if (timeFromLastUpdate > timePerFrame) {
    $element.attr('src', imagePath + '/avatartext${frameNumber}.png');
    timeWhenLastUpdate = startTime;

    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
       frameNumber = frameNumber + 1;
    }        
  }

  requestAnimationFrame(step);
}

$(document).ready(() => {
    for (var i = 1; i < totalFrames + 1; i++) {
      $('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/avatartext${i}.png');"></div>`);
    }
  });
  
  // wait for images to be downloaded and start the animation
  $(window).on('load', () => {
    requestAnimationFrame(step);
  });