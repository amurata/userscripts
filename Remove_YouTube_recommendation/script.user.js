// ==UserScript==
// @name         Remove YouTube recommendation
// @version      0.1
// @namespace    https://github.com/amurata/userscripts
// @description  Remove the last YouTube recommendation window
// @author       Atsuo MURATA
// @include      https://www.youtube.com/*
// ==/UserScript==

(window.onload = function () {
  'use strict';
    const recommendElem = '.ytp-ce-element'
    const removes = document.querySelectorAll(recommendElem);
    for (let i = 0; i < removes.length; i++) {
        removes[i].style.display = 'none';
    }
})();
