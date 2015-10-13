// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .
function courseUpdate() {
  var count = document.getElementsByClassName('btn').length;
  document.getElementsByClassName('btn')[count - 1].disabled = true;
}

function removeContainer() {
  var count = document.getElementsByClassName("row").length;
  var section = document.getElementsByClassName("row")[count -1];
  section.style.display = 'none';
}

function addContainer() {
  var count = document.getElementsByClassName("row").length;
  var section = document.getElementsByClassName("row")[count -1];
  section.style.display = 'block';
}

function destroyGrades() {
  var count = document.getElementsByClassName("destroy").length;
  var checkbox = document.getElementsByClassName("destroy")[count -1];
  var hideRow = event.target.parentElement.parentElement.parentElement;
  hideRow.style.display = "none";
  checkbox.checked = true;
}
