const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id")
const params = new URLSearchParams(window.location.search);
const userId = params.get('userId'); // returns "1"

async function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id);

}

async function renderPosts(userid) {
    
    const posts = await fetch(`https://whiskyhunter.net/api/distilleries_info/'${userid || id}`)
    const postsData = await posts.json();

      postListEl.innerHTML = postsData.map(post => postHTML(post)).join('');
}

function postHTML(post) {
return `<div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`
}

renderPosts(id);