const flightData1 = [
  { city: "Warszawa", time: "1h 45m" },
  { city: "Poznań", time: "0h 50m" },
  { city: "Gdańsk", time: "2h 15m" },
  { city: "Zakopane", time: "1h 40m" },
  { city: "Szczecin", time: "1h 45m" },
  { city: "Warszawa", time: "1h 45m" },
  { city: "Warszawa", time: "1h 45m" },
  { city: "Warszawa", time: "1h 45m" },
];

const flightData2 = [
  { city: "Wrocław", time: "1h 45m" },
  { city: "Poznań", time: "0h 50m" },
  { city: "Gdańsk", time: "2h 15m" },
  { city: "Zakopane", time: "1h 40m" },
  { city: "Szczecin", time: "1h 45m" },
  { city: "Wrocław", time: "1h 45m" },
  { city: "Wrocław", time: "1h 45m" },
  { city: "Wrocław", time: "1h 45m" },
];

export function initFleet() {
  countFleetBlockHeight();
  generateFleetTables(flightData1, true);
  generateFleetTables(flightData2, false);
  const examples = document.querySelectorAll(".fleet__example, .fleet__example--active");
  const elements = document.querySelectorAll(".fleet__advantages-element, .fleet__advantages-element--active");
  const texts = document.querySelectorAll(".fleet__advantages-text, .fleet__advantages-text--active");
  const headers = document.querySelectorAll(".fleet__advantages-header, .fleet__advantages-header--active");
  const cities = document.querySelectorAll(".fleet__advantages-city--active, .fleet__advantages-city");
  const switcher = document.querySelector(".fleet__advantages-city-switch");
  const tables = document.querySelectorAll(".fleet__advantages-table--active, .fleet__advantages-table");
  const content = document.querySelector(".fleet__advantages-content");
  // choppers section
  if (examples) {
    examples.forEach((example) => {
      example.addEventListener("click", function () {
        examples.forEach((el) => {
          if (el.classList.contains("fleet__example--active")) {
            el.classList.replace("fleet__example--active", "fleet__example");
            el.querySelector(".fleet__example-header--active")?.classList.replace("fleet__example-header--active", "fleet__example-header");
            el.querySelector(".fleet__example-index--active")?.classList.replace("fleet__example-index--active", "fleet__example-index");
            el.querySelector(".fleet__example-text--active")?.classList.replace("fleet__example-text--active", "fleet__example-text");
          }
        });

        if (this.classList.contains("fleet__example")) {
          this.classList.replace("fleet__example", "fleet__example--active");
          this.querySelector(".fleet__example-header")?.classList.replace("fleet__example-header", "fleet__example-header--active");
          this.querySelector(".fleet__example-index")?.classList.replace("fleet__example-index", "fleet__example-index--active");
          this.querySelector(".fleet__example-text")?.classList.replace("fleet__example-text", "fleet__example-text--active");
        } else {
          this.classList.replace("fleet__example--active", "fleet__example");
          this.querySelector(".fleet__example-header--active")?.classList.replace("fleet__example-header--active", "fleet__example-header");
          this.querySelector(".fleet__example-index--active")?.classList.replace("fleet__example-index--active", "fleet__example-index");
          this.querySelector(".fleet__example-text--active")?.classList.replace("fleet__example-text--active", "fleet__example-text");
        }
      });
    });
  }

  // below choppers section
  if (elements) {
    elements.forEach((element, index) => {
      element.addEventListener("click", function () {
        elements.forEach((el) => el.classList.replace("fleet__advantages-element--active", "fleet__advantages-element"));
        texts.forEach((text) => text.classList.replace("fleet__advantages-text--active", "fleet__advantages-text"));
        headers.forEach((header) => header.classList.replace("fleet__advantages-header--active", "fleet__advantages-header"));

        this.classList.replace("fleet__advantages-element", "fleet__advantages-element--active");

        const header = this.querySelector(".fleet__advantages-header");
        if (header) {
          header.classList.replace("fleet__advantages-header", "fleet__advantages-header--active");
        }

        if (texts[index]) {
          texts[index].classList.replace("fleet__advantages-text", "fleet__advantages-text--active");
        }

        let currentIndex = index;
        const isWide = window.innerWidth > 900;
        const isFirst = index === 0;
        const isSecond = index === 1;

        const prevTextHeight = texts[currentIndex - 1]?.offsetHeight || 0;
        const baseOffset = 44;
        const mobileExtraOffset = 72;
        const yTranslate = isSecond ? `translateY(-${prevTextHeight + (isWide ? baseOffset : -28)}px)` : "translateY(0px)";

        if (isSecond) {
          elements[currentIndex].style.transform = isWide ? yTranslate : "translateY(-231%)";
          texts[currentIndex].style.transform = yTranslate;
        } else {
          elements[currentIndex + 1].style.transform = "translateY(0px)";
          texts[currentIndex + 1].style.transform = "translateY(0px)";
        }

        const heightOffset = isSecond ? 100 : baseOffset + (isWide ? 0 : mobileExtraOffset);
        content.style.height = `${headers[currentIndex].offsetHeight + headers[currentIndex + (isFirst ? 1 : -1)].offsetHeight + texts[currentIndex].offsetHeight + heightOffset}px`;

        setTimeout(
          () => {
            texts[currentIndex].style.zIndex = "2";
          },
          isFirst ? 500 : 0
        );
      });
    });
  }

  // cities section
  if (cities) {
    cities.forEach((city, index) => {
      city.addEventListener("click", function () {
        if (!this.classList.contains("fleet__advantages-city--active")) {
          cities.forEach((c) => c.classList.replace("fleet__advantages-city--active", "fleet__advantages-city"));
          this.classList.replace("fleet__advantages-city", "fleet__advantages-city--active");
          if (this.textContent.trim() === "Warszawa") {
            switcher.style.left = "calc(50% - 3px)";
          } else {
            switcher.style.left = "3px";
          }

          tables.forEach((table, tableIndex) => {
            if (tableIndex === index) {
              table.classList.replace("fleet__advantages-table", "fleet__advantages-table--active");
            } else {
              table.classList.replace("fleet__advantages-table--active", "fleet__advantages-table");
            }
          });
        }
      });
    });
  }
}

function countFleetBlockHeight() {
  const content = document.querySelector(".fleet__advantages-content");
  const texts = document.querySelectorAll(".fleet__advantages-text, .fleet__advantages-text--active");
  const headers = document.querySelectorAll(".fleet__advantages-header, .fleet__advantages-header--active");

  content.style.height = `${headers[0].offsetHeight + headers[1].offsetHeight + texts[0].offsetHeight + 44}px`;
}

function generateFleetTables(data, active) {
  const container = document.querySelector(".fleet__advantages-block");
  if (!container) return;

  const tableHTML = `
    <table class="${active ? "fleet__advantages-table--active" : "fleet__advantages-table"}">
        <tr>
          <th>Miasto docelowe</th>
          <th colspan="2">Czas lotu</th>
        </tr>
        ${data
          .map(
            (item) => `
          <tr>
            <td>${item.city}</td>
            <td>${item.time}</td>
            <td><span>Zamów</span></td>
          </tr>
        `
          )
          .join("")}
    </table>
  `;

  container.insertAdjacentHTML("beforeend", tableHTML);
}
