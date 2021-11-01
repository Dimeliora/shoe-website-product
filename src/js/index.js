import { carousel } from "./carousel";

window.addEventListener("DOMContentLoaded", () => {
	carousel({
		carouselSelector: ".product__carousel",
		carouselItemsSelector: ".product__item",
		paginationSelector: ".product__pagination",
		prevSelector: ".product__carousel-button--prev",
		nextSelector: ".product__carousel-button--next",
	});
});
