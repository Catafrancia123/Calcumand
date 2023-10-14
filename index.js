var device = "";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    device = "phone"
    document.getElementById("deviceHtml").innerHTML = device;
} else {
    device = "computer"
    document.getElementById("deviceHtml").innerHTML = device;
}
  

function homeclickarticle() {
    location.href = "subdirs/news/articles/discord down/discord-down.html"
    sessionStorage.setItem("clickedhome", true)
}

function updateDate() {
    // Get the current date
    var currentDate = new Date();

    // Format the date as desired (e.g., "Month Day, Year")
    var formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Update the content of the <h1> element
    document.getElementById('newsdate').textContent = "News as of " + formattedDate;
}

// Call the updateDate function to set the initial date
updateDate();

// Set an interval to update the date every day (in milliseconds)
setInterval(updateDate, 24 * 60 * 60 * 1000); // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

