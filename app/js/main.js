window.addEventListener('DOMContentLoaded', function () {

	// Работа таймера начало
	let taimer = document.querySelector('.promo');
	if (taimer) {
		let deadLine = new Date(document.querySelector('.timer-numbers').getAttribute('data-endData'));
		function getTimeRemaninig(endTime) {
			let t = Date.parse(endTime) - Date.parse(new Date()),
				seconds = Math.floor((t % (1000 * 60)) / 1000),
				minuts = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
				hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				days = Math.floor(t / (1000 * 60 * 60 * 24));

			return {
				'total': t,
				'hours': hours,
				'minuts': minuts,
				'seconds': seconds,
				'days': days
			};

		}
		function setClock(id, endTime) {
			let timer = document.getElementById(id),
				days = document.querySelector('.days'),
				hours = timer.querySelector('.hours'),
				minuts = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'),
				timeInterval = setInterval(upDateClock, 1000);


			function upDateClock() {
				let t = getTimeRemaninig(endTime);

				if (t.days < 10) {
					days.textContent = '0' + t.days;
				} else {
					days.textContent = t.days;
				}

				if (t.hours < 10) {
					hours.textContent = '0' + t.hours;
				} else {
					hours.textContent = t.hours;
				}
				if (t.minuts < 10) {
					minuts.textContent = '0' + t.minuts;
				} else {
					minuts.textContent = t.minuts;
				}

				if (t.seconds < 10) {
					seconds.textContent = '0' + t.seconds;
				} else {
					seconds.textContent = t.seconds;
				}
				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
			}
		}
		setClock('timer', deadLine);
		// Работа таймера конец
	}
	// Работа с tabs на странице product
	let productItem = document.querySelector('.productItem');
	if (productItem) {

		let innerProductTabs = document.querySelector('.productItem-tabs__top');
		let productTabs = document.querySelectorAll('.productItem-tabs__btn');
		let tabsContent = document.querySelectorAll('.productItem-tabs__content');

		productTabs.forEach(el => {
			el.addEventListener('click', function (e) {
				e.preventDefault();
			}, false);
		});
		innerProductTabs.addEventListener('click', function (event) {
			if (event.target.tagName !== 'A') return false; //Если тег элемента не будет а то вернет false и ничего не произайдет
			let tabsLink = event.target;//выберает ссылку в блоке productItem-tabs__top
			let attrTabs = event.target.getAttribute('href');//Берет значение href у ссылки
			let productContentTabs = document.querySelector(attrTabs);// выберает элемент по id из attrTabs
			// цикл запускает перебор табов у которых есть модификатор active удаляет его и добавляет тому на который кликнули
			for (let i = 0; i < productTabs.length; i++) {
				if (productTabs[i].classList.contains('productItem-tabs__btn--active')) {
					productTabs[i].classList.remove('productItem-tabs__btn--active');
				}
				tabsLink.classList.add('productItem-tabs__btn--active');
			}
			// цикл запускает перебор контента у которых есть модификатор active удаляет его и добавляет тому у которого соответсвующий id

			for (let o = 0; o < tabsContent.length; o++) {
				if (tabsContent[o].classList.contains('productItem-tabs__content--active')) {
					tabsContent[o].classList.remove('productItem-tabs__content--active');
				}
				productContentTabs.classList.add('productItem-tabs__content--active');
			}
		});
	}
	// Работа с tabs на странице product
});

$(function () {
	// slider
	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	// video popup
	$('.videoBlog__play-btn').fancybox();

	// stars
	$('.products-item__stars').rateYo({
		starWidth: "20px",
		readOnly: true
	});

	// rangeFilter
	$('.filter-price__value').ionRangeSlider({
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
	});

	// form styler
	$('.filter-catalog__list').styler();

	// Работа с кнопками фильтра на странице shop
	$('.filter-catalog__btn').on('click', function () {
		$('.filter-catalog__btn').removeClass('filter-catalog__btn--active');
		$(this).addClass('filter-catalog__btn--active');
	});
	$('.filter-catalog__list').on('click', function () {
		$('.shop-catalog__content').addClass('content-list');
		$('.products-item').addClass('product__list');
	});
	$('.filter-catalog__grid').on('click', function () {
		$('.shop-catalog__content').removeClass('content-list');
		$('.products-item').removeClass('product__list');
	});
	// Работа с кнопками фильтра на странице shop

	// сдайдер на странице product
	$('.product-slide__thumb').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
		draggable: false,
		asNavFor: '.product-slide__big'
	});
	$('.product-slide__big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		draggable: false,
		asNavFor: '.product-slide__thumb'
	});
	// сдайдер на странице product

	// counter product item
	$('.productItem-form__number').styler();
	// counter product item

});