import './vendor';
import './helpers';
// import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
// import {actualYear} from './modules/actualYear';
import header from './components/header';
import './components/popup';
import scrolltop from './components/scrolltop';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import Swiper, { Navigation, Scrollbar } from 'swiper';

ieFix();
vhFix();
// actualYear();
scrollToAnchor.init();

header.init();
scrolltop.init();
lazyLoading.init();

new Swiper('.review', {
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.review__button-next',
    prevEl: '.review__button-prev',
  },
  modules: [Navigation],
});

new Swiper('.js-aroma', {
  loop: false,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  modules: [Navigation],
});

new Swiper('.js-other-slider', {
  loop: false,
  spaceBetween: 16,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    1023: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  },
  modules: [Navigation, Scrollbar],
});

$('[data-toggle="datepicker"]').datepicker({
  autoHide: true,
  format: 'dd-mm-yyyy',
  date: new Date(),
  startDate: new Date(),
  language: 'ru-RU'
});
