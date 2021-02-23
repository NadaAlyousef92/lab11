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
}

imagesSection.addEventListener('click', handleClick);

function handleClick(event) {
    if (event.target.id !== 'images-section') {
        for (let i = 0; i < ImgMall.all.length; i++) {
            if (ImgMall.all[i].name === event.target.title) {
                ImgMall.all[i].votes++;

            }
        }
        render();

    }
}







function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

render();

const Imgarr = [];

const Maxvotes = 25;
const votesSum = 0;

const Threeimg = 3;



function renderPics() {
    while (ImgContainer.firstChild) {
        ImgContainer.removeChild(ImgContainer.firstChild);
    }
    for (let i = 0; i < Threeimg; i++) {
        let newEl = RandomNumber();
    }
}

function Counter(votes) {
    votesSum++;
    for (let i = 0; i < ImgMall.all.length; i++) {
        if (votes.target.title === Imgarr[i].name) {
            Imgarr[i].Maxvotes++;
        }
    }
    if (votesSum >= Maxvotes) {
        Container.removeEventListener('click', Counter);


    }

    renderpics();
}

function clicks() {

    select.removeEventListener('click', clicks);

    const list = document.getElementById('result');
    const ul = document.createElement('ul');
    list.appendChild(ul);
    renderElement('h2', resultsEl, '');
    for (let i = 0; i < Imgarr.length; i++) {
        if (Imgarr[i].Maxvotes > 0) {
            const display = `${Imgarr[i].name} its ${Imgarr[i].Maxvotes} votes, and  shown ${Imgarr[i].views} times.`;
            renderElement('li', ul, display);
        }
    }
}

for (let i = 0; i < Imgstore.length; i++) {
    new ImgMall(Imgstore[i]);
}

renderPics();
renderclicks();

Container.addEventListener('click', Counter);



function createChart() {
    const ctx = document.getElementById('votes-Chart').getContext('2d');

    const Imgstore = [];
    const Votes = [];
    for (let i = 0; i < ImgMall.all.length; i++) {
        goatNames.push(ImgMall.all[i].name);
        goatVotes.push(ImgMall.all[i].votes);
    }

    new Chart(ctx, {

        type: 'bar',


        data: {
            labels: Imgstore,
            datasets: [{
                barPercentage: 0.5,

                borderWidth: 10,
                label: '# of votes:',
                backgroundColor: 'rgb(100, 125, 50)',
                borderColor: 'rgb(52, 148, 212)',
                data: goatVotes,
            }, ],
        },


        options: {},
    });
}