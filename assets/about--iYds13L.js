import"./styles-BRm-xZGA.js";function a(e){const r=document.querySelector(".baner"),t=document.querySelector(".header__switch"),s=document.querySelectorAll(".header__list > li");if(r){const n=`
        <img class="baner__image" src="${e.image}" alt="Baner"/>
        <div class="baner__content baner__content--${e.version}">
            <p class="baner__link">
                <a href="/">Strona główna</a>
                <img src="/wekter-heli/src/assets/icons/arrow-side-header.svg" alt="Arrow"/>
                <a>${e.from}</a>
            </p>
            <h2 class="baner__title">${e.title}</h2>
            <p class="baner__text">${e.text}</p>
        </div>
        `;r.innerHTML=n}t.style.display="none",s.forEach(n=>{n.innerText.trim()===e.from&&n.classList.add("show-before")})}document.addEventListener("DOMContentLoaded",()=>{a({image:"/wekter-heli/src/assets/images/about-baner.png",title:"Wekter Helicopters to przede wszystkim spełnione marzenia",text:"Nie tylko naszych pasażerów, ale również wszystkich nas – członków załogi.",from:"O nas",version:"high"})});
