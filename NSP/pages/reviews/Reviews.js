let go = document.getElementById('go');
let back = document.getElementById('back');
export let reviws = document.getElementsByClassName('this_review');
let product_types = document.getElementsByClassName('check');
let showReview = document.getElementById('showReview');
export let aaa = 2;

go.addEventListener('click', ()=> {
    filter();
});

back.addEventListener('click', ()=> {
    showAll();
    downFilter();
});

function downFilter () {
    for (let i = 0; i < reviws.length; i++) {
        reviws[i].style.display = 'block';
    }
}

function showAll () {
    for (let i = 0; i < product_types.length; i++) {
        product_types[i].checked = false;
    }
}

function filter () {
    downFilter();
    
    let enabled = [];

    for (let i = 0; i < product_types.length; i++) {
        if (product_types[i].checked == true) {
            enabled.push(product_types[i].id);
        }
    }

    for (let i = 0; i < reviws.length; i++) {
        if (enabled.indexOf(reviws[i].dataset.type) == -1) {
            reviws[i].style.display = 'none';
        }
    }
}

function showReviewNumber () {
    let lastNumber = -1;
    let randomNumber = () => {
        return Math.round(Math.random() * reviws.length)
    }
    let number = randomNumber();
    if (number == lastNumber) {
        number = randomNumber();
    } else {
        lastNumber = number;
    }
    return number;
}

showReview.innerHTML(reviews[showReviewNumber()]);
