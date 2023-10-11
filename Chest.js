// ==UserScript==
// @name         Discord Avatar Border
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Patrick Zhou
// @match        https://discord.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let injectHTML = '<svg width="108" height="96" viewBox="0 0 108 96" class="avatarDecoration-2Wb1Au" aria-hidden="true"><foreignObject x="0" y="0" width="96" height="96" mask="url(#svg-mask-avatar-decoration-status-round-80)"><div class="avatarStack-3Bjmsl"><img class="avatar-31d8He" src="https://cdn.discordapp.com/avatar-decoration-presets/a_4c9f2ec29c05755456dbce45d8190ed4.png?size=128&passthrough=true" alt=" " aria-hidden="true"></div></foreignObject></svg>';
let profInject = '<svg width="162" height="144" viewBox="0 0 162 144" class="avatarDecoration-2Wb1Au" aria-hidden="true"><foreignObject x="0" y="0" width="144" height="144" mask="url(#svg-mask-avatar-decoration-status-round-120)"><div class="avatarStack-3Bjmsl"><img class="avatar-31d8He" src="https://cdn.discordapp.com/avatar-decoration-presets/a_4c9f2ec29c05755456dbce45d8190ed4.png?size=240&passthrough=true" alt=" " aria-hidden="true"></div></foreignObject></svg>';
setInterval(() => {
    if (document.querySelectorAll(".clickable-GKg4Qy").length > 0 && document.querySelector(".clickable-GKg4Qy").childNodes[0].childNodes[0].childNodes.length < 2) {
        document.querySelector(".clickable-GKg4Qy").childNodes[0].childNodes[0].innerHTML += injectHTML;
    }
    if (document.querySelectorAll(".avatar-3QF_VA").length > 0 && document.querySelector(".avatar-3QF_VA").childNodes.length < 2) {
        document.querySelector(".avatar-3QF_VA").innerHTML += profInject;
    }
}, 100);
