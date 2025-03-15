import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export function initPricesSwiper() {
    return new Swiper('.prices__swiper', {
        modules: [Navigation],
        loop: false,
        slidesPerView: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export function ringProgress() {
    document.querySelectorAll(".swiper-slide").forEach((slide) => {
    const valueElement = slide.querySelector(".prices__ring-value");
    const ringOutside = slide.querySelector(".prices__ring--outside");
    
    if (valueElement && ringOutside) {
      const timeText = valueElement.textContent.trim();
      const minutes = parseInt(timeText.split(":")[1], 10) || 0; 
      
      const maxTime = 60; 
      const percentage = (minutes / maxTime) * 100;
      const degrees = (percentage / 100) * 360;
      
      ringOutside.style.background = `conic-gradient(#3B5EAB ${degrees}deg, #ddd ${degrees}deg)`;
    }
  });
}
