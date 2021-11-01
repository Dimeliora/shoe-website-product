import { carousel } from "./carousel";
import { menu } from "./menu";

window.addEventListener("DOMContentLoaded", () => {
	carousel({
		carouselSelector: ".product__carousel",
		carouselItemsSelector: ".product__item",
		paginationSelector: ".product__pagination",
		prevSelector: ".product__carousel-button--prev",
		nextSelector: ".product__carousel-button--next",
	});

	menu({
		menuSelector: ".sidebar",
		menuButtonSelector: ".header__sidemenu-button",
		closeButtonSelector: ".sidebar__close",
		menuActiveClass: "sidebar--active",
		menuButtonActiveClass: "header__sidemenu-button--active",
	});

	menu({
		menuSelector: ".header__navigation",
		menuButtonSelector: ".header__menu-button",
		menuActiveClass: "header__navigation--active",
		menuButtonActiveClass: "header__menu-button--active",
	});
});
