// API 1: "https://whiskyhunter.net/api/distilleries_info/"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector(".user-list");

async function main() {
    const users = await fetch("https://whiskyhunter.net/api/distilleries_info/")
    const usersData = await application/json ();
    userListEl.innerHTML = usersData.map((user) => userHTML(user)).join(''); 
    //X-CSRFTOKEN: Eg25ozPG0eReksDp80AbFpCqrDR8fAJiH4Nd5tDo5rjXn881JYMQz8dZo9p99PmQ//
 }

main();

function showUserPosts(id) {
   localStorage.setItem("id", id);
    window.location.href = `user.html`
    
}

function userHTML(user) {
return `<div class="user-card" onclick="showUserPosts(${user.id})">
                    <div class="user-card__container">
                        <h3>${user.name}</h3>
                        <p><b>Slug:</b> ${user.slug}</p>
                        <p><b>Country:</b> ${user.country}</p>
                      </div>
                                        </div>`;
}