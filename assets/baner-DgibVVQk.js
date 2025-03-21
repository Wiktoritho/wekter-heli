function s(e){const n=document.querySelector(".baner"),t=document.querySelector(".header__switch"),i=document.querySelectorAll(".header__list > li");if(n){const r=`
        <img class="baner__image" src="${e.image}" alt="Baner"/>
        <div class="baner__content baner__content--${e.version}">
            <p class="baner__link">
                <a href="/wekter-heli/">Strona główna</a>
                <img src="/wekter-heli/icons/arrow-side-header.svg" alt="Arrow"/>
                <a>${e.from}</a>
            </p>
            <h2 class="baner__title baner__title--${e.titleVersion}">${e.title}</h2>
            <p class="baner__text">${e.text}</p>
        </div>
        `;n.innerHTML=r}e.hideButtonsFromHeader&&(t.style.display="none"),i.forEach(r=>{r.innerText.trim()===e.from&&r.classList.add("show-before")})}export{s as i};
