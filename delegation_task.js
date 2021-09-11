function addElem() {
    let add = document.createElement('li');
    add.innerText = 'element';
    ul.append(add);
}

const ul = document.querySelector('ul')


const button = document.querySelector('.btn')
button.addEventListener('click', () => { addElem() })

ul.onclick = function liOnclick(event) {
    let target = event.target;
    console.log(target.tagName)
    if (target.tagName.toLowerCase() !== 'li') return;
    coloredLi(event.target);

}

function coloredLi(li) {
    console.log(li)
    li.classList.add('redColor')
}
