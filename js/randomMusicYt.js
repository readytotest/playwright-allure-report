/*
===========================================================
=                                                         =
=   This script is used to generate random URLs from an   =
=   array. Just paste this in your HTML <a href="#"       =
=   id="randomVideoLink" target="_blank" rel="noopener    =
=   noreferrer">click here</a> where you want the link to =
=   appear and then add this <script                      =
=   src="/yourdirectorypath/randomMusicYt.js"></script> to=
=   the bottom of the page before the closing body tag.   =
=                                                         =
===========================================================
*/

const ytPlaylist = [
  // Social Distortion - Live Oct 8 2024 - Story of My Life - Bad Luck - Ring of Fire
  "https://youtu.be/Ase-qZaXou0?feature=shared",
  // EXCLUSIVE Social Distortion "Prison Bound" Guitar Center Sessions on DIRECTV
  "https://www.youtube.com/watch?v=lIWHlIhvt3Y",
  // Pearl Jam “Yellow Ledbetter” Live on the Stern Show
  "https://youtu.be/2cyp1g7idYc?feature=shared",
];

document.getElementById("randomVideoLink").onclick = function () {
  const randomIndex = Math.floor(Math.random() * ytPlaylist.length);
  const randomVideoUrl = ytPlaylist[randomIndex];
  window.open(randomVideoUrl);
  return false;
};
