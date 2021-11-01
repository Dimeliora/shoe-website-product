export const addToCart = ({ cart, item, amountBadge, addButton }) => {
	const addToCartHandler = () => {
		let isTransitionEnded = false;

		const { left, top, width, height } = item.getBoundingClientRect();

		const itemCopy = item.cloneNode(true);
		const itemCopyStyles = `
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      width: ${width}px;
      height: ${height}px;
      margin: 0;
      transform-origin: 0 0;
      transition: all 0.7s ease-in-out;
    `;
		itemCopy.style.cssText = itemCopyStyles;
		document.body.append(itemCopy);

		setTimeout(() => {
			itemCopy.style.top = `50px`;
			itemCopy.style.left = `calc(100% - 50px)`;
			itemCopy.style.opacity = "0";
			itemCopy.style.transform = "scale(0)";
		});

		itemCopy.addEventListener("transitionend", () => {
			if (isTransitionEnded) {
				return;
			}

			cart.amount += 1;
			amountBadge.textContent = cart.amount;
			if (cart.amount > 0) {
				amountBadge.style.display = "flex";
			}

			itemCopy.remove();

			isTransitionEnded = true;
		});
	};

	addButton.addEventListener("click", addToCartHandler);
};
