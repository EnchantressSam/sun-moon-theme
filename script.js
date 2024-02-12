let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/media/light.png";
  } else {
    icon.src = "/media/moon.png";
  }
};
