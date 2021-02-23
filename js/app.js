"use strict";

const Imgstore = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicom', 'water-can', 'wine-glass', 'usb'];



const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const centerImage = document.getElementById('center-image');


const imagesSection = document.getElementById('imges-section');



function ImgMall(name) {
    this.name = name;
    this.path = `./img/${name}.jpg`;
    this.vote = 0;
    this.views = 0;


    ImgMall.all.push(this);
}







ImgMall.all = [];

for (let i = 0; i < Imgstore.length; i++) {
    new ImgMall(Imgstore[i]);
}



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


    const leftIndex = RandomNumber(0, ImgMall.all.length - 1);
    leftImage.src = ImgMall.all[leftIndex].path;
    leftImage.title = ImgMall.all[leftIndex].name;
    leftImage.alt = ImgMall.all[leftIndex].name;

    const centerIndex = RandomNumber(0, ImgMall.all.length - 1);
    centerImage.src = ImgMall.all[centerIndex].path;
    centerImage.title = ImgMall.all[centerIndex].name;
    centerImage.alt = ImgMall.all[centerIndex].name;

    const rightIndex = RandomNumber(0, ImgMall.all.length - 1);
    rightImage.src = ImgMall.all[rightIndex].path;
    rightImage.title = ImgMall.all[rightIndex].name;
    rightImage.alt = ImgMall.all[rightIndex].name;

    ImgMall.all[centerImage].views++;
}

imagesSection.addEventListener('click', handleClick);

let Maxvotes = 0;

function handleClick(event) {
    if (Maxvotes <= 25) {
        if (event.target.id === 'left-image') {

            ImgMall.all[leftImage].votes++;

            Maxvotes++;



            render();

        } else if (event.target.id === 'center-image') {
            ImgMall.all[centerImage].votes++;
            Maxvotes++;

            render();

        } else if (event.target.id === 'right-image') {
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


//--------------------------------------------------------------



if (listenpuase === 25) {
    imagesSection.removeEventListener('click', ImgMall);



    localStorage.setItem('votes/views', JASON.stringify(ImgMall));
    storage();
} else {
    render();
}


function storage() {
    if (localStorage.length > 0) {
        ImgMall.Imgstore = JASON.parse(localStorage.getItem('votes / views'));
        result();
        listenpuase = 0;
        imagesSection.addEventListener('click', ImgMall);


    }
}