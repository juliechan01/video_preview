console.log("page loaded...");

function playVid(element) {
    console.log(element);
    element.play();
}

function pauseVid(element) {
    console.log(element);
    element.pause();
    element.currentTime = 0;
}