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

	// Добавление карты на странице контакты

	if(document.querySelector(".map")){
		let map = new google.maps.Map(document.querySelector(".map"), {
			center: { lat: 40.71510747214663, lng: -74.00366424029664 },
			zoom: 8,
			styles: [
				{
					"featureType": "all",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"color": "#a31645"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"weight": "3.79"
						},
						{
							"visibility": "on"
						},
						{
							"color": "#ffecf0"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"color": "#a31645"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": "0"
						},
						{
							"lightness": "0"
						},
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"color": "#d89ca8"
						}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"saturation": "0"
						}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "labels",
					"stylers": [
						{
							"color": "#a31645"
						}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"lightness": "84"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#d89ca8"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#fedce3"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			]
		});
	}
	

	// Добавление карты на странице контакты
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
		readOnly: true,
		starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
			'<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">' +
			'</path>' +
			'</svg>'
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

	// слайдер на странице blog
	$('.blogPage-item__top--slider').slick({
		infinite: false,
		prevArrow: '<button type="button" class="slick-prev slick-btn"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">' +
			'<path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>' +
			'</svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">' +
			'<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>' +
			'</svg></button>'
	});
	// слайдер на странице blog
});

