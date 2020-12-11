window.addEventListener('DOMContentLoaded', function () {

	//Создаем объект 'user', который будет содержать информацию Detect.js
//Вызываем detect.parse() с navigator.userAgent в качестве аргумента
let user = navigator.userAgent;

// Выводим нужные значения в консоли браузера
console.log(user);
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
});