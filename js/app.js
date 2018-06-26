document.addEventListener("DOMContentLoaded", function() {


    // wysuwanie podlisty


    var liMenu = document.querySelector('.aboutUs');


    liMenu.addEventListener('mouseover', function() {

       var ul = this.querySelector('ul');

       ul.style.display = 'block';


    });


    liMenu.addEventListener('mouseout', function() {


        var ul = this.querySelector('ul');

       ul.style.display = 'none';


    });

    // znikanie elementu z nazwami krzeseł

    var box1 = document.querySelector('.box1');

    box1.querySelector('.chair-name').addEventListener('mouseover', function() {

       this.style.display = 'none';

    });

    box1.querySelector('.chair-name').addEventListener('mouseout', function() {

       this.style.display = 'block';

    });

    box1.querySelector('img').addEventListener('mouseover', function() {

        var chairName = box1.querySelector('.chair-name');

        chairName.style.display = 'none';

    } );

    box1.querySelector('img').addEventListener("mouseout", function () {

       var chairName = box1.querySelector('.chair-name');

       chairName.style.display = 'block';

    });

    var box2 = document.querySelector('.box2');

    box2.querySelector('.chair-name').addEventListener('mouseover', function() {

        this.style.display = 'none';

    });


    box2.querySelector('.chair-name').addEventListener('mouseout', function() {

        this.style.display = 'block';

    });

    box2.querySelector('img').addEventListener('mouseover', function() {

        var chairName = box2.querySelector('.chair-name');

        chairName.style.display = 'none';

    } );

    box2.querySelector('img').addEventListener("mouseout", function () {

        var chairName = box2.querySelector('.chair-name');

        chairName.style.display = 'block';

    });



    // slider

    var counter = 0;

    var a1 = document.querySelector(".container--first a");
    var divImgList = document.querySelectorAll(".container--second div");

    a1.addEventListener('click', function() {

        divImgList[counter].classList.remove("visible");

        if (counter === 0) {
            counter = 2;
        } else {
            counter = counter-1;
        }

        divImgList[counter].classList.add('visible');


    });

    var a2 = document.querySelector(".container--fourth a");

    a2.addEventListener('click', function() {

        divImgList[counter].classList.remove("visible");

        if (counter === 2) {
            counter = 0;
        } else {
            counter ++;
        }

        divImgList[counter].classList.add("visible");

    });



});