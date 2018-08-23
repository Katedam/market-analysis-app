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


function placeRandomImages() {
    var addImage = document.getElementById('images')
    var image = document.createElement('img');
    //clear the page
    addImage.innerText = "";
    makeThreeRandomImages(images);
    //reload images
    image.setAttribute('src', "img/"+images[0].fileName);
    addImage.appendChild(image);
    addImage.addEventListener('click', trackClicks);
    image = document.createElement('img');
    image.setAttribute('src', "img/"+images[1].fileName)
    addImage.appendChild(image);
    addImage.addEventListener('click', trackClicks);
    image = document.createElement('img');
    image.setAttribute('src', "img/"+images[2].fileName)
    addImage.appendChild(image);
    addImage.addEventListener('click', trackClicks);
}

function makeThreeRandomImages(array) {
    var newLength = array.length
    while (newLength) {
        var ranNum = Math.floor(Math.random() * newLength--);
        var swap = array[newLength];
        //switch newLength with the ranNum
        array[newLength] = array[ranNum];
        //now switch ranNum with newLength
        array[ranNum] = swap;
    } 
    return array; 
} 

var totalClicks = 0;
function trackClicks() {
    //add click to vote totals of each image
    for (var index = 0; index < images.length; index++) {
        if (event.target.attributes[0].value == 'img/'+ images[index].fileName) {
            images[index].voteTotal++
            console.log('img/'+ images[index].fileName + images[index].voteTotal);
        }
    }
    //add click to total clicks
    totalClicks++
    console.log(totalClicks);
    //after 3 clicks - run this function for results page
    if (totalClicks == 3) {
        console.log('clicked 3 times');
        function results() {
            var addImage = document.getElementById('images');
            var image = document.createElement('img');
            image.setAttribute('src', "img/"+images[0].fileName);
            image.innerText = 'Top Choice';
            addImage.appendChild(image);
        }
    } else { //otherwise, replace with 3 new images with this function
        placeRandomImages();
    }   
}



window.addEventListener('load', placeRandomImages);
