// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
const txt = document.getElementById("content");
console.log(txt.innerText);

// -- отримує текст з блоку з id "rules"
const txtBlock = document.getElementById("rules");
console.log(txtBlock.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший

const change = document.getElementById('content');
change.innerText = "Замінили текст на довільний"

// -- замініть текст параграфа з id 'rules' на будь-який інший
const changeParagraf = document.getElementById('rules');
changeParagraf.innerText = 'Замінили параграф на інший текст'

// -- змініть кожному елементу колір фону на червоний
const elementBackground = document.body.children;
for (const element of elementBackground) {
    element.style.backgroundColor = 'red'
}
// -- змініть кожному елементу колір тексту на синій
const colorText = document.body.children;
for (const colorTextElement of colorText) {
    colorTextElement.style.color = 'white'

}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
const list = document.getElementById('rules');
console.log(list.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const byClassName = document.getElementsByClassName('fc_rules');
for (const el of byClassName) {
    el.style.color = 'red'
}
