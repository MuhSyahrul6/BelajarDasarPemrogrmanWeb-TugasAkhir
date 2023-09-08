const txtElement = ['Student', 'Back End Developer', 'Gamer', 'Web Developer', 'Freelancer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';
let isDeleting = false;

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    if (isDeleting) {
        words = currentTxt.slice(0, --txtIndex);
    } else {
        words = currentTxt.slice(0, ++txtIndex);
    }

    document.querySelector('.efek-tik').textContent = words;

    if (words.length == currentTxt.length) {
        isDeleting = true;
        setTimeout(function() {
            isDeleting = false;
            count++;
            txtIndex = 0;
            tik();
        }, 200);
    } else {
        setTimeout(tik, isDeleting ? 50 : 200);
    }

})();
