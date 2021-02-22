const Imgstore = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'pet', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicom', 'waterCan', 'wineGlass', 'usb'];



const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const centerImg = document.getElementById('center-img');
console.log(leftImage);
const imagesSection = document.getElementById('images-section');



function imgMall(ImgName, path) {
    this.ImgName = ImgName;
    this.path = path;
    this.votes = 0;
    this.views = 0;


    Img.all(this);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Img.all = [];




console.table(Img.all);

function render() {
    const leftIndex = randomNumber(0, Goat.all.length - 1);
    console.log('LEFT', leftIndex, Img.all[leftIndex].path);
    leftImage.src = Img.all[leftIndex].Imgstore;
    leftImage.title = Img.all[leftIndex].Imgstore;
    leftImage.alt = Img.all[leftIndex].Imgstore;

    const centerIndex = randomNumber(0, Img.all.length - 1);
    console.log('LEFT', centerIndex, Img.all[centerIndex].path);
    centerImage.src = Img.all[centerIndex].path;
    centerImage.title = Img.all[centerIndex].Imgstore;
    centerImage.alt = Img.all[centerIndex].Imgstore;

    const rightIndex = randomNumber(0, Img.all.length - 1);
    console.log('Right', rightIndex);
    rightImage.src = Img.all[rightIndex].path;
    rightImage.title = Img.all[rightIndex].Imgstore;
    rightImage.alt = Img.all[rightIndex].Imgstore;
}
imagesSection.addEventListener('click', handleClick);




function handleClick(event) {
    [rightIndex, centerIndex, leftIndex];


    let attempts = 25;
    let vote = 0;
    let imges = 3;



    if (attempts < vote) {
        if (event.target.id === rightIndex || event.target.id === centerIndex || event.target.id === leftIndex) {

            for (let i = 0; i < Imgstore.all.length; i++) {
                if (Imgstore.all[i].name === event.target.title) {
                    console.log(Imgstore.all[i].ImgName, event.target.title);
                    Imgstore.all[i].vote++;
                }




                attempts++

                userInput = prompt('please try again : ' + attempts + ' remaining for you');
            }
        }
    }

}
render.handleClick();
render.userInput();