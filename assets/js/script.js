window.ytPlayer = null;
        window.onYouTubeIframeAPIReady = () => {
            let playerElement = document.querySelector("#yt-embed-player");
            if (playerElement) {
                window.ytPlayer = new YT.Player('yt-embed-player', {
                    videoId: playerElement.dataset.id,
                    playerVars: {
                        controls: 0,
                        showinfo: 0,
                        modestbranding: 1,
                        wmode: 'transparent',
                        mute: 1,
                        progressBar: false,
                        loop: 1,
                        rel: 0,
                        autoplay: 1,
                        origin: window.location.hostname
                    },
                    events: {
                        'onReady': (e) => { e.target.mute(); },
                        'onStateChange': (e) => {
                            if (e.data === YT.PlayerState.ENDED) {
                                e.target.playVideo();
                            }
                        }
                    }
                });
            }
        };