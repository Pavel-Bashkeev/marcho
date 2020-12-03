window.addEventListener('DOMContentLoaded', function () {
  // Работа таймера начало
  let deadLine = new Date(document.querySelector('.timer-numbers').getAttribute('data-endData'));


  function getTimeRemaninig(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.floor( (t % (1000 * 60)) / 1000 ),
      minuts = Math.floor( ( t % (1000 * 60 * 60)) / (1000 * 60) ),
      hours = Math.floor( (t % ( 1000 * 60 * 60 * 24 ) ) / (1000 * 60 * 60) ),
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
});


$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.videoBlog__play-btn').fancybox({

  });
  $('.products-item__stars').rateYo({
    starWidth: "20px",
    readOnly: true
  });
});