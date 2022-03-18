// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста.
//     при кліку на яку виводяться в окремий блок всі коментарі поточного поста

const url = 'https://jsonplaceholder.typicode.com/posts';


fetch(url).then(value => value.json()).then(posts => {
    const container = document.createElement('div');
    container.classList.add('container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h4>id: ${post.id}</h4>
                             <h5>title: ${post.title}</h5>
                             <p>body: ${post.body}</p>`

        const btn = document.createElement('button');
        btn.innerText = 'Show comments';
        postDiv.appendChild(btn)
        container.append(postDiv);
        document.body.appendChild(container);

        btn.onclick  = (id) => {
            fetch(`https:jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(value => value.json()).then(comments => {
                console.log(comments);
                for (const comment of comments) {
                    if(post.id === comment.postId){ //перевірки можна не робити, все одно виводить
                const commentsDiv = document.createElement('div');
                commentsDiv.classList.add("comment");
                commentsDiv.innerText = `${comment.id} ${comment.body}`;
                document.body.appendChild(commentsDiv);
                btn.disabled = true

                    }
                }


            })
        };
    }

})
