const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id")
const params = new URLSearchParams(window.location.search);
const userId = params.get('userId'); // returns "1"

async function onSearchChange(event) {
    const id = event.target.value;
    renderDistilleries(id);

}

async function renderDistilleries(whiskyId) {
    

    const distilleries = await fetch("./whiskyAPI.json")
    const postsData = await distilleries.json();

      const selectedDistillery = postsData.find(
  distillery => distillery.slug === id
);

postListEl.innerHTML = postHTML(selectedDistillery);
}

function postHTML(distillery) {
return `<div class="distillery">
      <div class="distillery__name">
        ${distillery.name}
      </div>
      <p class="distillery__slug">
        ${distillery.slug}
      </p>
      <p class="distillery__country">
        ${distillery.country}
      </p>
    </div>`
}

renderDistilleries(id);