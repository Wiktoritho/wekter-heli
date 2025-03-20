import"./styles-CN82UMWH.js";const i="data:image/svg+xml,%3csvg%20width='14'%20height='13'%20viewBox='0%200%2014%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.44203%200.235535C6.70535%20-0.0108749%207.12614%20-0.00967383%207.38792%200.238244L13.2798%205.81812C13.6759%206.19325%2013.6759%206.80623%2013.2798%207.18135L7.38792%2012.7612C7.12614%2013.0091%206.70535%2013.0104%206.44203%2012.7639C6.17199%2012.5112%206.17069%2012.0954%206.43915%2011.8412L11.4008%207.14223H0.670428C0.300162%207.14223%200%206.85458%200%206.49974C0%206.1449%200.300162%205.85725%200.670428%205.85725H11.4008L6.43915%201.1583C6.17069%200.904055%206.17199%200.488231%206.44203%200.235535Z'%20fill='%233A3A3A'/%3e%3c/svg%3e";function a(e){const t=document.querySelector(".baner"),r=document.querySelector(".header__switch"),s=document.querySelectorAll(".header__list > li");if(t){const n=`
        <img class="baner__image" src="${e.image}" alt="Baner"/>
        <div class="baner__content baner__content--${e.version}">
            <p class="baner__link">
                <a href="/wekter-heli/">Strona główna</a>
                <img src="${i}" alt="Arrow"/>
                <a>${e.from}</a>
            </p>
            <h2 class="baner__title">${e.title}</h2>
            <p class="baner__text">${e.text}</p>
        </div>
        `;t.innerHTML=n}r.style.display="none",s.forEach(n=>{n.innerText.trim()===e.from&&n.classList.add("show-before")})}const o="/wekter-heli/assets/about-baner-DNq97Zec.png";document.addEventListener("DOMContentLoaded",()=>{a({image:o,title:"Wekter Helicopters to przede wszystkim spełnione marzenia",text:"Nie tylko naszych pasażerów, ale również wszystkich nas – członków załogi.",from:"O nas",version:"high"})});
