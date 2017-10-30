'use strict';

var scrollToProjects = function() {
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}

var init = function() {
  var projectJump = document.getElementById('page-jump');
  projectJump.addEventListener('click', scrollToProjects);
}

window.onload = init;