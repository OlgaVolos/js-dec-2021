const users = JSON.parse(localStorage.getItem('user'));

users.forEach(user=> {
    const userDiv = document.createElement('div');
    // userDiv.innerText = JSON.stringify(user);
userDiv.innerText = `${user.name} ${user.age}`
    document.body.appendChild(userDiv)
})
