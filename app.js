const addbtn = document.querySelector('.btn');
const list = document.querySelector('.main ul');

var count = 1;

addbtn.addEventListener('click', function () {

    const myLi = document.createElement('li');
    myLi.innerHTML = count++;
    list.appendChild(myLi);
    

    const deltIcon = document.createElement('i');
    deltIcon.innerHTML = '<i id="rem" class="fa fa-times" aria-hidden="true"></i>';
    myLi.appendChild(deltIcon);

    deltIcon.addEventListener('click', function () {
        myLi.remove();
    });
});