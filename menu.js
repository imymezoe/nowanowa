
window.onload = function () {

    var N = 1;
    var mainPic = document.getElementById('mainPic');

    mainPic.src = './Images/banner/carousel' + N + '.jpg';

    function picRun() {
        if (N < 7) {
            N++;
        } else {
            N = 1;
        }
        mainPic.src = './Images/banner/carousel' + N + '.jpg';

    }

    setInterval(picRun, 1500);

}



