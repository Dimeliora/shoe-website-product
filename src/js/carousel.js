export const carousel = ({
	carouselSelector,
	carouselItemsSelector,
	prevSelector,
	nextSelector,
	paginationSelector,
}) => {
	const carousel = document.querySelector(carouselSelector);
	const carouselItems = carousel.querySelectorAll(carouselItemsSelector);
	const prevBtn = carousel.querySelector(prevSelector);
	const nextBtn = carousel.querySelector(nextSelector);
	const pagination = carousel.querySelector(paginationSelector);

	let currentItemIdx = 1;

	const updateItemIdx = (step) => {
		currentItemIdx += step;

		if (currentItemIdx > carouselItems.length) {
			currentItemIdx = 1;
		}

		if (currentItemIdx === 0) {
			currentItemIdx = carouselItems.length;
		}
	};

	const changeItem = () => {
		[...carouselItems].forEach((item) => {
			item.classList.remove("product__item--active");
		});

		const currentItem = carouselItems[currentItemIdx - 1];
		currentItem.classList.add("product__item--active");
	};

	const updatePagination = () => {
		const currentPage = String(currentItemIdx).padStart(2, "0");
		const totalPages = String(carouselItems.length).padStart(2, "0");
		pagination.textContent = `${currentPage} / ${totalPages}`;
	};

	const updateCarouselState = (step) => {
		updateItemIdx(step);
		changeItem();
		updatePagination();
	};

	carousel.addEventListener("wheel", (e) => {
		updateCarouselState(Math.sign(e.deltaY));
	});

	if (prevBtn && nextBtn) {
		prevBtn.addEventListener("click", () => {
			updateCarouselState(-1);
		});

		nextBtn.addEventListener("click", () => {
			updateCarouselState(1);
		});
	}

	updatePagination();
	changeItem(currentItemIdx);
};
