export const video = ({
	videoContainerId,
	videoModalSelector,
	videoTriggersSelector,
	videoModalCloseSelector,
}) => {
	const videoModal = document.querySelector(videoModalSelector);
	const videoTriggers = document.querySelectorAll(videoTriggersSelector);
	const videoModalClose = document.querySelector(videoModalCloseSelector);

	let videoPlayer;

	if (!videoModal || !videoContainerId) {
		return;
	}

	const initializeVideoPlayer = (videoId) => {
		videoPlayer = new YT.Player(videoContainerId, {
			width: "100%",
			height: "100%",
			videoId,
			events: {
				onReady: openVideoModalHandler,
			},
		});
	};

	const openVideoModalHandler = () => {
		videoModal.classList.add("modal--visible");
		videoPlayer.playVideo();
	};

	const closeVideoModalHandler = () => {
		videoModal.classList.remove("modal--visible");
		videoPlayer.stopVideo();
	};

	videoTriggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			const videoId = e.target.dataset.video;

			if (!videoPlayer) {
				initializeVideoPlayer(videoId);
			} else {
				videoPlayer.loadVideoById({ videoId });
			}

			videoModal.classList.add("modal--visible");
		});
	});

	videoModal.addEventListener("click", (e) => {
		if (e.target === videoModal) {
			closeVideoModalHandler();
		}
	});

	if (videoModalClose) {
		videoModalClose.addEventListener("click", closeVideoModalHandler);
	}
};
