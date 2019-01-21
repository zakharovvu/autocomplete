'use strict';

let blockInput = document.querySelector('#blockInput');
let elementSearch = document.querySelector('#elementSearch');
let ul = document.querySelector('#ul');
let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keyup', keyboard);
input.addEventListener('focus', startFocus);
input.addEventListener('blur', endFocus);
document.addEventListener('click', setBlockInput);

function startFocus() {
    ul.style.display = 'block';
    blockInput.style.borderBottom = '4px solid rgb(44, 102, 228)';
} 
function endFocus() {
   
    blockInput.style.borderBottom = '';
   
    blockInput.classList.toggle('border-b');

    setTimeout(run, 500);
    function run() {
        if (!elementSearch.children.length) {
            label.classList.remove('labelmodyfi');
        }
    }
}

function setBlockInput(e) {
    if (e.srcElement.parentNode.id === 'blockInput') {
        label.classList.add('labelmodyfi');
    } else {
        ul.style.display = '';
    }

    if (e.target.tagName === 'LI') {
        let item = document.createElement('span');

        item.classList.add('elementSearch');
        item.innerHTML = e.target.innerHTML;
        elementSearch.insertBefore(item, elementSearch.lastChild);
    }
   
    console.dir(e.target);
    if (e.target.tagName === 'IMG') {
        elementSearch.removeChild(e.target.parentElement);
    }
    if (e.target.tagName === 'SPAN') {
        elementSearch.removeChild(e.target);
    }
}

function keyboard() {
    
    setTimeout(run, 500);
    
    function run() {
        for (let i = 0; i < ul.children.length; i++) {
            
            let strLi = ul.children[i].textContent.trim().toLocaleLowerCase();
            let inputVal = input.value;

            if (strLi.indexOf(inputVal) < 0) {
                ul.children[i].style.display = 'none';
            } else {
                ul.children[i].style.display = 'block';
            }
            
        }
    }

}