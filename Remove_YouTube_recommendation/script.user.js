// ==UserScript==
// @name         Remove YouTube recommendation
// @version      0.1
// @namespace    https://github.com/amurata/userscripts
// @description  Remove the last YouTube recommendation window
// @author       amurata
// @include      https://www.youtube.com/*
// ==/UserScript==

(function () {
  'use strict';
    const observer = new MutationObserver(function() {
    const recommendElem = '.ytp-ce-element'
    const removes = document.querySelectorAll(recommendElem);
        if (removes) {
            for (let i = 0; i < removes.length; i++) {
                removes[i].style.display = 'none';
            }
        }
    });
    observer.observe(document, {childList: true, subtree: true});
})();
