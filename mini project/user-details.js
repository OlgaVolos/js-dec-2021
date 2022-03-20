// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let url = new URL(location.href);
const user = JSON.parse(url.searchParams.get('data'));

const mainDiv = document.createElement('div');
mainDiv.classList.add('main');
document.body.appendChild(mainDiv);



const usersDetails = document.createElement('div');
usersDetails.classList.add('user_details');
mainDiv.appendChild(usersDetails);


const details = document.getElementsByClassName('user_details')[0];

details.innerHTML = `
                        <h3>${user.id} - ${user.name}</h3>
                        <h4>username: ${user.username}</h4>
                        <h5>email: ${user.email}</h5>
                        <ul>address:
                        <li>street: ${user.address.street};</li>
                        <li>suite: ${user.address.suite};</li>
                        <li>city: ${user.address.city};</li>
                        <li>zipcode: ${user.address.zipcode};</li>
                        <ul>geo:
                        <li>lat: ${user.address.geo.lat}</li>
                        <li>lng: ${user.address.geo.lng}</li>
                        </ul>
                        </ul>
                        <p>Phone: ${user.phone}</p>
                        <p>website: ${user.website}</p>
                        <ul>company:
                        <li>${user.company.name};</li>
                        <li>catchPhrase: ${user.company.catchPhrase};</li>
                        <li>bs: ${user.company.bs};</li>
                        </ul>
                    `
const detailBtn = document.createElement('button');
detailBtn.innerText = 'post of current user';

usersDetails.appendChild(detailBtn)

const postsDiv = document.createElement('div');
postsDiv.classList.add('posts')
document.body.appendChild(postsDiv);

detailBtn.onclick =(id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts=> {
            for (const post of posts) {

                const postDiv = document.createElement('div');
                postDiv.innerText = `${post.title}`;
                postDiv.classList.add('post_title');

                postsDiv.appendChild(postDiv);

                const postBtn = document.createElement('button');
                postBtn.innerText = 'post-details';

                postDiv.appendChild(postBtn);

                postBtn.onclick = () => {
                    console.log(post);
                    location.href = `./post-details.html?data=${JSON.stringify(post)}`
                }



            }
            detailBtn.disabled = true;
    })
}


