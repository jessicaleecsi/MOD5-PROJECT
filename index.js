// API 1: "https://whiskyhunter.net/api/distilleries_info/"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector(".user-list");
let distilleries = [];


async function main() {
   const users = await fetch("./whiskyAPI.json");
    const usersData = await users.json();


    userListEl.innerHTML = filteredDistilleries
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
renderFilteredDistilleries(whiskyId);