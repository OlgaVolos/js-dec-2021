// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post
// на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего
// поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// Комментарии - по 4 в ряд.


let url = new URL(location.href);
const post = JSON.parse(url.searchParams.get('data'));

const postsDiv = document.getElementsByClassName('post_details')[0];

postsDiv.innerHTML = `
<h3>${post.id} - ${post.userId}</h3>
<h4>${post.title}</h4>
<p>${post.body}</p>
`
const commentsBtn = document.createElement('button');
commentsBtn.innerText = 'Show comments'
postsDiv.appendChild(commentsBtn)


const commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments');
document.body.appendChild(commentsDiv);

commentsBtn.onclick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment')
                commentDiv.innerText = comment.body;

                commentsDiv.appendChild(commentDiv);
            }
            commentsBtn.disabled = true;
        })
}
