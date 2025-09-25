// script.js
// Minimal avatar builder logic — updates inline SVG parts and supports randomize + download

// Utility
const $$ = sel => document.querySelector(sel);
const $all = sel => Array.from(document.querySelectorAll(sel));

/* --- DOM elements --- */
const skinColor = $$('#skinColor');
const faceShape = $$('#faceShape');
const hairStyle = $$('#hairStyle');
const hairColor = $$('#hairColor');
const eyeStyle = $$('#eyeStyle');
const mouthStyle = $$('#mouthStyle');
const eyeColor = $$('#eyeColor');
const shirtColor = $$('#shirtColor');
const bgStyle = $$('#bgStyle');
const bgColor = $$('#bgColor');
const glassesToggle = $$('#glassesToggle');
const beardToggle = $$('#beardToggle');

const randomBtn = $$('#randomBtn');
const downloadBtn = $$('#downloadBtn');
const smallDownload = $$('#smallDownload');
const resetBtn = $$('#resetBtn');

const avatarSvg = $$('#avatarSvg');
const bgRect = $$('#bgRect');
const bgDecor = $$('#bgDecor');
const faceCircle = $$('#faceCircle');
const faceClipCircle = $$('#faceClipCircle');
const hairGroup = $$('#hairGroup');
const eyesGroup = $$('#eyesGroup');
const mouthGroup = $$('#mouthGroup');
const beardGroup = $$('#beardGroup');
const glassesGroup = $$('#glassesGroup');
const neck = $$('#neck');
const shirt = $$('#shirt');

/* --- Render functions --- */
// (unchanged, same as before)
