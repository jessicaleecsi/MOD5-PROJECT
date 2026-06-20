// API 1: "https://whiskyhunter.net/api/distilleries_info/"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector(".user-list");
const response = await fetch("./whiskyAPI.json");
const distilleries = await response.json();


async function main() {
   const users = await fetch("./whiskyAPI.json");
    const usersData = await users.json();
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join(''); 
    //X-CSRFTOKEN: Eg25ozPG0eReksDp80AbFpCqrDR8fAJiH4Nd5tDo5rjXn881JYMQz8dZo9p99PmQ//
 }

main();

function showUserPosts(id) {
   localStorage.setItem("id", id);
    window.location.href = `user.html`
    
}

function userHTML(user) {
return `<div class="user-card" onclick="showUserPosts('${user.slug}')">
                    <div class="user-card__container">
                        <h3>${user.name}</h3>
                        <p><b>Slug:</b> ${user.slug}</p>
                        <p><b>Country:</b> ${user.country}</p>
                      </div>
                                        </div>`;
}

async function renderFilteredDistilleries(whiskyId) {
    
    const filteredDistilleries = distilleries.filter(distillery =>
  distillery.name.toLowerCase().includes(searchValue) ||
  distillery.slug.toLowerCase().includes(searchValue) ||
  distillery.country.toLowerCase().includes(searchValue)
);
}
renderDistilleries(filteredDistilleries);