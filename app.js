"use strict";

const Imgstore = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicom', 'water-can', 'wine-glass', 'usb'];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const firstImage = document.getElementById('left-image');
const secondImage = document.getElementById('center-image');
const thirdImage = document.getElementById('right-image');


const imagesSection = document.getElementById('imges-section');



function ImgMall(name) {
    this.name = name;
    this.path = `./img/${name}.jpg`;
    this.votes = 0;
    this.views = 0;


    ImgMall.all.push(this);

}







ImgMall.all = [];

for (let i = 0; i < Imgstore.length; i++) {
    new ImgMall(Imgstore[i]);
}

let leftImage = getRandomNumber(0, ImgMall.all.length - 1);
let centerImage = getRandomNumber(0, ImgMall.all.length - 1);
let rightImage = getRandomNumber(0, ImgMall.all.length - 1);

function render() {



    leftImage = getRandomNumber(0, ImgMall.all.length - 1);
    centerImage = getRandomNumber(0, ImgMall.all.length - 1);
    rightImage = getRandomNumber(0, ImgMall.all.length - 1);

    while (leftImage === centerImage) {
        centerImage = getRandomNumber(0, ImgMall.all.length - 1);
    }

    while (rightImage === leftImage || rightImage === centerImage) {
        rightImage = getRandomNumber(0, ImgMall.all.length - 1);
    }


    firstImage.src = ImgMall.all[leftImage].path;
    firstImage.title = ImgMall.all[leftImage].name;
    firstImage.alt = ImgMall.all[leftImage].name;
    ImgMall.all[leftImage].views++;



    secondImage.src = ImgMall.all[centerImage].path;
    secondImage.title = ImgMall.all[centerImage].name;
    secondImage.alt = ImgMall.all[centerImage].name;

    ImgMall.all[centerImage].views++;


    thirdImage.src = ImgMall.all[rightImage].path;
    thirdImage.title = ImgMall.all[rightImage].name;
    thirdImage.alt = ImgMall.all[rightImage].name;

    ImgMall.all[rightImage].views++;
}

imagesSection.addEventListener('click', handleClick);

let Maxvotes = 1;

function handleClick(event) {
    if (Maxvotes <= 25) {
        if (event.target.id === 'first-image') {

            ImgMall.all[leftImage].votes++;

            Maxvotes++;

            render();

        } else if (event.target.id === 'second-image') {
            ImgMall.all[centerImage].votes++;
            Maxvotes++;

            render();

        } else if (event.target.id === 'third-image') {
            ImgMall.all[rightImage].votes++;
            Maxvotes++;


            render();
        }

    } else {

        let button = document.getElementById('button');
        button.addEventListener('click', Result);
    }


    function Result() {

        Chart();

        let list = document.getElementById('list');
        let result;

        for (let i = 0; i < ImgMall.all.length; i++) {

            result = document.createElement('li');
            result.innerHTML = ImgMall.all[i].name + ' has ' + ImgMall.all[i].votes + ' votes ' + ' its shown' + ImgMall.all[i].views + ' times';
            list.appendChild(result);

        }
    }


    render();


    function Chart() {
        const ctx = document.getElementById('votes-chart').getContext('2d');

        const ImgMallImgstore = [];
        const ImgMallVotes = [];
        const ImgmallViews = [];

        for (let i = 0; i < ImgMall.all.length; i++) {
            ImgMallImgstore.push(ImgMall.all[i].name);
            ImgMallVotes.push(ImgMall.all[i].votes);
            ImgmallViews.push(ImgMall.all[i].views);


        }
        new Chart(ctx, {

            type: 'bar',

            data: {
                labels: ImgMallImgstore,
                datasets: [{
                        barPercentage: 0.5,

                        borderWidth: 5,
                        label: '# of votes:',
                        backgroundColor: ' rgb(52, 148, 212)',
                        borderColor: 'white',
                        data: ImgMallVotes,
                    },
                    {
                        barPercentage: 0.5,

                        borderWidth: 5,
                        label: '# of views:',
                        backgroundColor: ' rgb(52, 148, 212)',
                        borderColor: 'white',
                        data: ImgmallViews,
                    },
                ],
            },


            options: {},
        });
    }
}