import axios from "axios";

let data = []
let categories = []
let highlightedDatas = []
let imagePaths = []
let highlightedPaths = []

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
        
        latestPosts.forEach((post, index) => {
            const containerContent = `
            <div class="blog__recommended ${index === 0 ? "blog__recommended--highlighted" : ""}">
                <img class="blog__recommended-image ${index === 0 ? "blog__recommended-image--highlighted" : ""}" src="${highlightedPaths[index]}" alt="${post.title}"/>
                <p class="blog__recommended-date">${post.date}</p>
                <p clas="blog__recommended-title">${post.title}</p>
            </div>
            `
            recommendedContainer.insertAdjacentHTML("beforeend", containerContent)
        })
        
    }
    
}

async function fetchData() {
    const response = await axios.get("/wekter-heli/jsons/blogs.json")
    data = response.data;
    categories = data.map((el) => el.category)
    highlightedDatas = data.filter((el) => el.highlight)
    imagePaths = data.map((el) => `/images/blogs/${el.image}`);
    highlightedPaths = highlightedDatas.map((el) => `/wekter-heli/images/blogs/${el.image}`)
}

function parseDate(dateString) {
    const months = [
        "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", 
        "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
    ];
    const [day, monthName, year] = dateString.split(" ");
    const month = months.indexOf(monthName.toLowerCase());
    return new Date(`${year}-${month + 1}-${day}`);
}