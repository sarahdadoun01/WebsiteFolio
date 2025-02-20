setInterval(function () {
    var devtools = /./;
    devtools.toString = function () {
        window.location.href = "about:blank"; // Redirect if DevTools is detected
    };
    console.log(devtools);
}, 1000);


document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I")) {
        event.preventDefault();
    }
    if (event.key === "F12") {
        event.preventDefault();
    }
});
