// API 1: "https://whiskyhunter.net/api/distilleries_info/"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector(".user-list");
let distilleries = [];


async function main() {
   const users = await fetch("./whiskyAPI.json");
distilleries = await users.json();

userListEl.innerHTML = distilleries
  .map(distillery => userHTML(distillery))
  .join("");
}

main();

function renderFilteredDistilleries(event) {
  const searchValue = event.target.value.toLowerCase();

  const filteredDistilleries = distilleries.filter(distillery =>
    distillery.name.toLowerCase().includes(searchValue) ||
    distillery.slug.toLowerCase().includes(searchValue) ||
    distillery.country.toLowerCase().includes(searchValue)
  );

  userListEl.innerHTML = filteredDistilleries
    .map(distillery => userHTML(distillery))
    .join("");
}

function showUserPosts(id) {
  localStorage.setItem("id", id);
  window.location.href = "user.html";
}

function userHTML(user) {
  return `
    <div class="user-card" onclick="showUserPosts('${user.slug}')">
      <div class="user-card__container">
        <h3>${user.name}</h3>
        <p><b>Slug:</b> ${user.slug}</p>
        <p><b>Country:</b> ${user.country}</p>
      </div>
    </div>
  `;
}


function searchDistilleries() {
  const spinner = document.querySelector(".fa-spinner");
  const searchInput = document.querySelector("#searchInput");
  const searchValue = searchInput.value.toLowerCase();

  spinner.classList.add("fa-spinner--visible");

  setTimeout(() => {
    const filteredDistilleries = distilleries.filter(distillery =>
      distillery.name.toLowerCase().includes(searchValue) ||
      distillery.slug.toLowerCase().includes(searchValue) ||
      distillery.country.toLowerCase().includes(searchValue)
    );

    userListEl.innerHTML = filteredDistilleries
      .map(distillery => userHTML(distillery))
      .join("");

    spinner.classList.remove("fa-spinner--visible");
  }, 500);
}