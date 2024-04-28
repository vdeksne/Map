(() => {
    let elements = document.querySelectorAll(".expander-video");
    elements.forEach(element => {
        let video = element.querySelector("video");
        if (!video)
            return;


        video.addEventListener("click", () => {

            window.open("https://secure.adnxs.com/clktrb?id=800896&redir=https://ad.doubleclick.net/ddm/trackclk/N1459470.279382DBMPRECISDIGITAL-/B31235932.386387021;dc_trk_aid=577485947;dc_trk_cid=208815182;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1", "_blank"); 
        });

        let soundButton = document.createElement("button");
        soundButton.classList.add("sound");
        soundButton.addEventListener("click", (e) => {
            if (video.muted) {
                video.muted = false;
                video.volume = 1;
            } else if (video.volume < 1) {
                video.muted = true;
            } else {
                video.volume = 0.5;
            }
        });
        element.appendChild(soundButton);

        video.addEventListener("volumechange", () => {
            if (video.muted) {
                element.classList.add("sound-off");
                element.classList.remove("sound-half");
                element.classList.remove("sound-on");
            } else if (video.volume === 1) {
                element.classList.remove("sound-off");
                element.classList.remove("sound-half");
                element.classList.add("sound-on");
            } else {
                element.classList.remove("sound-off");
                element.classList.add("sound-half");
                element.classList.remove("sound-on");
            }
        });

        if (video.hasAttribute("data-volume-half")) {
            video.volume = 0.5;
        }

        // Add an event listener to play the video infinitely
        video.addEventListener("ended", () => {
            video.currentTime = 0;
            video.play();
        });

        // Ensure the video starts playing
        if (video.hasAttribute("autoplay")) {
            promise = video.play();
            if (promise) {
                promise.catch(() => {
                    // Autoplay with sound didn't work, mute the video and try again
                    video.muted = true;
                    video.play();
                });
            }
        }
    });
})();
