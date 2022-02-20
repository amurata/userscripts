// ==UserScript==
// @name         youtube-dl commands generator
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  youtubeのページで表示している動画のリンクをダウンロードする youtube-dl のコマンドを生成します。
// @author       amurata
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

// 配列を一意にする関数
function uniq(array) {
  return array.filter((elem, index, self) => self.indexOf(elem) === index);
}
// main
(function() {
  'use strict';
  const shadyPrimaryHTML = window.document.getElementById('primary').__shady.ba.host.innerHTML
  const regExp = /watch\?v=([^&"]+?)(?:&|")/g
  let videoKeys = [], myArray;
  while ((myArray = regExp.exec(shadyPrimaryHTML)) != null) {
      if(myArray[1] != null) {
          videoKeys.push(`youtube-dl '${myArray[1]}'`)
      }
  }
  const commands = uniq(videoKeys).join('\n')

  // コンソールログ
  console.log(commands)
  // クリップボードにコピー
  if(navigator.clipboard){
    navigator.clipboard.writeText('')
    navigator.clipboard.writeText(commands)
  }
})();
