if (localStorage.getItem("theme") == "dark") setDarkMode();

function setDarkMode() {
  let emoticon = "";
  let isDark = document.body.classList.toggle("darkmode");

  if (isDark) {
    emoticon = "🔆";
    localStorage.setItem("theme", "dark");
  } else {
    emoticon = "🌙";
    localStorage.removeItem("theme");
  }
  document.getElementById("darkBtn").innerHTML = emoticon;
  var Navclr = document.getElementById("Navclr");
  Navclr.classList.toggle("bg-dark");
  var sBocx = document.getElementById("sBoxs");
  sBocx.classList.toggle("bg-dark");
}
