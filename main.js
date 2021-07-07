const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const huhu = $('html')
const hihi = $('.music')

console.log(huhu)
console.log(hihi)
huhu.onclick = function () {
    hihi.play();
}
