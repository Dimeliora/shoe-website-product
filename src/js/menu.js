export const menu = ({
	menuSelector,
	menuButtonSelector,
	closeButtonSelector,
	menuActiveClass,
	menuButtonActiveClass,
}) => {
	const menu = document.querySelector(menuSelector);
	const menuButton = document.querySelector(menuButtonSelector);
	const closeButton = document.querySelector(closeButtonSelector);

	if (menu && menuButton) {
		menuButton.addEventListener("click", () => {
			menu.classList.toggle(menuActiveClass);
			menuButton.classList.toggle(menuButtonActiveClass);
		});
	}

	if (closeButton) {
		closeButton.addEventListener("click", () => {
			menu.classList.remove(menuActiveClass);
			menuButton.classList.remove(menuButtonActiveClass);
		});
	}
};
