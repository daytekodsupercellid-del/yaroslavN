async function loadData() {
    try {
        let [userResponse, postsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        ]);
        let user = await userResponse.json();
        let posts = await postsResponse.json();

        displayUser(user);
        displayPosts(posts);
    } catch (error) {
    console.error('Помилка:', error);
    }
}

function displayUser(user) {
    let userDiv = document.getElementById('user');
    userDiv.innerHTML = `
    <h2>Інформація про користувача</h2>
    <p><strong>Ім'я:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Місто:</strong> ${user.address.city}</p>
    `;
}
function displayPosts(posts) {
    let postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '<h2>Пости</h2>';
    posts.forEach(post => {
    let postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postsDiv.appendChild(postEl);
    });
}

loadData();