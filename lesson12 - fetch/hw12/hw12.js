// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// let url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
//     .then(value => value.json())
//     .then(posts => {
//             console.log(posts);
//             let container = document.createElement('div');
//             container.classList.add('container');
//             for (const post of posts) {
//                 let postDiv = document.createElement('div');
//                 postDiv.classList.add('post')
//                 postDiv.innerHTML = `<h3>id: ${post.id}</h3>
//                                     <h4>title: ${post.title}</h4>
//                                     <p>body: ${post.body}</p>
//                                  `;
//                 container.appendChild(postDiv);
//                 document.body.appendChild(container)
//             }
//         }
//     )
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url).then(value => value.json()).then(comments => {
    console.log(comments);
    const container = document.createElement('div');
    container.classList.add('container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<h4>id: ${comment.id}</h4>
                                <h5>name: ${comment.name}</h5>
                                <h5>email: ${comment.email}</h5>
                                <p>body: ${comment.body}</p>`
        container.appendChild(commentDiv);
        document.body.appendChild(container)
    }
})
// body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// email: "Eliseo@gardner.biz"
// id: 1
// name:
