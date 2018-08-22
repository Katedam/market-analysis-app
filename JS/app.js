function getImage(fileName) {
    this.fileName = fileName;
    this.voteTotal = 0;
}

var images = [];
images.push(new getImage("bag.jpg"));
images.push(new getImage("banana.jpg"));
images.push(new getImage("boots.jpg"));
images.push(new getImage("chair.jpg"));
images.push(new getImage("cthulhu.jpg"));
images.push(new getImage("dragon.jpg"));
images.push(new getImage("pen.jpg"));
images.push(new getImage("scissors.jpg"));
images.push(new getImage("shark.jpg"));
images.push(new getImage("sweep.jpg"));
images.push(new getImage("unicorn.jpg"));
images.push(new getImage("usb.jpg"));
images.push(new getImage("water_can.jpg"));
images.push(new getImage("wine_glass.jpg"));


placeRandomImages = function() {
    var addImage = document.getElementById('images')
    var image = document.createElement('img');
    var index = makeThreeRandomImages(0, images.length);
    addImage.innerText = "";
    image.setAttribute('src', "img/"+images[index].fileName);
    addImage.appendChild(image);
    addImage.addEventListener('click', placeRandomImages);
    image = document.createElement('img');
    index = makeThreeRandomImages(0, images.length);
    image.setAttribute('src', "img/"+images[index].fileName)
    addImage.appendChild(image);
    addImage.addEventListener('click', placeRandomImages);

    image = document.createElement('img');
    index = makeThreeRandomImages(0, images.length);
    image.setAttribute('src', "img/"+images[index].fileName)
    addImage.appendChild(image);
    addImage.addEventListener('click', placeRandomImages);
}

function makeThreeRandomImages(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

window.addEventListener('load', placeRandomImages);
