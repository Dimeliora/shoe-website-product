import { carousel } from "./carousel";
import { menu } from "./menu";
import { video } from "./video";
import { addToCart } from "./add-to-cart";

window.addEventListener("DOMContentLoaded", () => {
	const cart = {
		amount: 0,
	};

	carousel({
		carouselSelector: ".product__carousel",
		carouselItemsSelector: ".product__item",
		paginationSelector: ".product__carousel-pagination",
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

	video({
		videoContainerId: "video",
		videoModalSelector: ".modal",
		videoTriggersSelector: "button[data-video]",
		videoModalCloseSelector: ".modal__close",
		videoModalActiveClass: "modal--visible",
		videoModalErrorClass: "modal__video--error",
	});

	const products = document.querySelectorAll(".product__item");
	const amountBadge = document.querySelector(".header__cart-badge");
	products.forEach((product) => {
		const item = product.querySelector(".product__picture");
		const addButton = product.querySelector("[data-add-to-cart]");

		addToCart({
			cart,
			item,
			amountBadge,
			addButton,
		});
	});
});
