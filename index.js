var device = "";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    device = "phone"
    document.getElementById("deviceHtml").innerHTML = device;
} else {
    device = "computer"
    document.getElementById("deviceHtml").innerHTML = device;
}
  

function homeclickarticle() {
    location.href = "subdirs/news/articles/sad ghost/sad-ghost.html"
    sessionStorage.setItem("clickedhome", true)
}

function orange() {
    window.location.href = "about:blank"
}

