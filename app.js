const buttonList = document.querySelectorAll(".button-list button");

let a1 = anime({
    strokeDashoffset: 0,
    targets: ".left-eye",
    loop: true,
    duration: 2000,
    strokeDashoffset: [anime.setDashoffset, 1000],
    direction: "alternate",
    easing: "linear",
});

let a2 = anime({
    strokeDashoffset: 0,
    targets: ".right-eye",
    loop: true,
    duration: 2000,
    strokeDashoffset: [anime.setDashoffset, 1000],
    direction: "alternate",
});

let a3 = anime({
    targets: ".left-arm",
    loop: true,
    duration: 2000,
    rotate: ["-2deg", "1deg"],
    direction: "alternate",
});

let a4 = anime({
    targets: ".right-arm",
    loop: true,
    duration: 2000,
    rotate: ["1deg", "-2deg"],
    direction: "alternate",
});

let a5 = anime({
    targets: ".left-leg",
    loop: true,
    duration: 2000,
    rotate: ["1deg", "-1deg"],
    direction: "alternate",
});

let a6 = anime({
    targets: ".right-leg",
    loop: true,
    duration: 2000,
    rotate: ["0deg", "-1deg"],
    direction: "alternate",
});

let restart = false;
let isPlay = false;

function animatePause() {
    a1.pause();
    a2.pause();
    a3.pause();
    a4.pause();
    a5.pause();
    a6.pause();
}

function animatePlay() {
    if (!isPlay) {
        a1.restart();
        a2.restart();
        a3.restart();
        a4.restart();
        a5.restart();
        a6.restart();
        isPlay = true;
    }
    a1.play();
    a2.play();
    a3.play();
    a4.play();
    a5.play();
    a6.play();
}

function animateStop() {
    if (isPlay) {
        a1.pause();
        a2.pause();
        a3.pause();
        a4.pause();
        a5.pause();
        a6.pause();
        isPlay = false;
    }
}
buttonList.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (
            e.currentTarget.innerText.toLowerCase() === button.id.toLowerCase()
        ) {
            button.id === "pause"
                ? animatePause()
                : button.id === "play"
                ? animatePlay()
                : button.id === "stop"
                ? animateStop()
                : "";
        }
    });
});
