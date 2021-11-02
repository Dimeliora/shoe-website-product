export const video = ({
	videoContainerId,
	videoModalSelector,
	videoTriggersSelector,
	videoModalCloseSelector,
	videoModalActiveClass,
	videoModalErrorClass,
}) => {
	const videoModal = document.querySelector(videoModalSelector);
	const videoTriggers = document.querySelectorAll(videoTriggersSelector);
	const videoModalClose = document.querySelector(videoModalCloseSelector);

	let videoPlayer;

	if (!videoModal || !videoContainerId) {
		return;
	}

	const initializeVideoPlayer = (videoId) => {
		const videoContainer = document.getElementById(videoContainerId);

		try {
			videoPlayer = new YT.Player(videoContainerId, {
				width: "100%",
				height: "100%",
				videoId,
				playerVars: {
					autoplay: 1,
				},
				events: {
					onReady: openVideoModalHandler,
				},
			});

			videoContainer.classList.remove(videoModalErrorClass);
		} catch (error) {
			videoContainer.classList.add(videoModalErrorClass);
			openVideoModalHandler();
		}
	};

	const openVideoModalHandler = () => {
		videoModal.classList.add(videoModalActiveClass);
	};

	const closeVideoModalHandler = () => {
		if (videoPlayer) {
			videoPlayer.destroy();
			videoPlayer = null;
		}

		videoModal.classList.remove(videoModalActiveClass);
	};

	videoTriggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			const videoId = e.currentTarget.dataset.video;

			if (!videoPlayer) {
				initializeVideoPlayer(videoId);
			}
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
