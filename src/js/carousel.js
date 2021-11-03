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

	if (!carousel || carouselItems.length === 0) {
		return;
	}

	let currentItemIdx = 1;
	let isTransitionInProgress = false;

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
		if (!pagination) {
			return;
		}

		const currentPage = String(currentItemIdx).padStart(2, "0");
		const totalPages = String(carouselItems.length).padStart(2, "0");
		pagination.textContent = `${currentPage} / ${totalPages}`;
	};

	const updateCarouselState = (step) => {
		if (!isTransitionInProgress) {
			updateItemIdx(step);
			changeItem();
			updatePagination();
			isTransitionInProgress = true;
		}
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

	[...carouselItems].forEach((item) => {
		item.addEventListener("transitionend", () => {
			isTransitionInProgress = false;
		});
	});

	updatePagination();
	changeItem(currentItemIdx);
};
