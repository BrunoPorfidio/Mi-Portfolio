
let hideContent_btn = document.getElementById('hideContent_btn');

let hideContent = document.getElementById('hideContent');

hideContent_btn.addEventListener('click', toggleContent);

function toggleContent(){
    hideContent.classList.toggle('show');
}