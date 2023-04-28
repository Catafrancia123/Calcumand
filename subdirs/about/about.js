function home() {
    TweenMax.to("body", 0.5, {
        opacity: 0,
        onComplete: function() {
            window.location.href = "../../index.html";
        }
    });
}
