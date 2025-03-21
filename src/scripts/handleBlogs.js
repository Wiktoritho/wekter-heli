import axios from "axios";

let data = [];
let categories = [];
let highlightedDatas = [];
let imagePaths = [];
let highlightedPaths = [];

export async function handleBlogs() {
  const recommendedContainer = document.querySelector(".blogs__recommended");

  await fetchData();
  if (highlightedDatas.length > 0) {
    highlightedDatas.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    });
    const latestPosts = highlightedDatas.slice(0, 2);
    highlightedPaths = highlightedDatas.map((el) => `/wekter-heli/images/blogs/${el.image}`);

    latestPosts.forEach((post, index) => {
      const containerContent = `
            <div class="${index === 0 ? "blogs__recommended-blog--highlighted" : "blogs__recommended-blog"}">
                <a href="/wekter-heli/blog/${post.url}">
                    <div class="${index === 0 ? "blogs__recommended-image--highlighted" : "blogs__recommended-image"}">
                        <img src="${highlightedPaths[index]}" alt="${post.title}"/>
                    </div>
                    <p class="${index === 0 ? "blogs__recommended-date--highlighted" : "blogs__recommended-date"}">${post.date}</p>
                    <p class="${index === 0 ? "blogs__recommended-title--highlighted" : "blogs__recommended-title"}">${post.title}</p>
                    <div class="blogs__arrow-block"><img src="/wekter-heli/icons/arrow-side-header.svg" alt="Arrow" /></div>
                    <div class="blogs__share-block"><img src="/wekter-heli/icons/share-arrow.svg" alt="Share Arrow" /></div>
                    <div class="blogs__blue-block">
                        <img src="/wekter-heli/icons/wekter-icon.svg" alt="Wekter Icon"/>
                        <span>Polecane</span>
                    </div>
                </a>
            </div>
            `;
      recommendedContainer.insertAdjacentHTML("beforeend", containerContent);
    });
  }
}

async function fetchData() {
  const response = await axios.get("/wekter-heli/jsons/blogs.json");
  data = response.data;
  categories = data.map((el) => el.category);
  highlightedDatas = data.filter((el) => el.highlight);
  imagePaths = data.map((el) => `/images/blogs/${el.image}`);
}

function parseDate(dateString) {
  const months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
  const [day, monthName, year] = dateString.split(" ");
  const month = months.indexOf(monthName.toLowerCase());
  return new Date(`${year}-${month + 1}-${day}`);
}
