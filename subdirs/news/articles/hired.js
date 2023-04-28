function back() {
    var clickedhome = sessionStorage.getItem("clickedhome");
    if (clickedhome == "false") {
        location.href = "../news.html"
    } else {
        location.href = "../../../index.html"
    }
}
