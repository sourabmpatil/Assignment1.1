const addbtn = document.querySelector('.btn');
const mainContainers = document.querySelectorAll('.main');

addbtn.addEventListener('click', function () {
    for (let i = 0; i < mainContainers.length; i++) {
        const container = mainContainers[i];
        const list = container.querySelector('ul');
        const myLi = document.createElement('li');
        list.appendChild(myLi);
        adjustNumber();
    }
});

function adjustNumber(){
    for (let i = 0; i < mainContainers.length; i++) {
        const container = mainContainers[i];
        const list = container.querySelector('ul');
        const liItems = list.getElementsByTagName('li');
        for (let j = 0; j < liItems.length; j++) {
            liItems[j].innerHTML = j + 1;
            const deltIcon = document.createElement('i');
            deltIcon.className = 'fa fa-times';
            liItems[j].appendChild(deltIcon);
            deltIcon.addEventListener('click', function () {
                liItems[j].remove();
               adjustNumber(list);
            });
        }
    }
}
console.log(mainContainers.length);