var totalClicks = 0;

function getImage(fileName, name) {
    this.fileName = fileName;
    this.y = 0; //y = voteTotalForImage
    this.label = name;
    this.clickHistory = 0;
}
var images = [];
images.push(new getImage("bag.jpg", "Bag"));
images.push(new getImage("banana.jpg", "Banana Slicer"));
images.push(new getImage("boots.jpg", "Rain Boots"));
images.push(new getImage("chair.jpg", "Red Chair"));
images.push(new getImage("cthulhu.jpg", "Cthulhu"));
images.push(new getImage("dragon.jpg", "Dragon"));
images.push(new getImage("pen.jpg", "Pen Utensils"));
images.push(new getImage("scissors.jpg", "Pizza Scissors"));
images.push(new getImage("shark.jpg", "Shark"));
images.push(new getImage("sweep.jpg", "Sweeper Babe"));
images.push(new getImage("unicorn.jpg", "Unicorn"));
images.push(new getImage("usb.jpg", "USB Tenticle"));
images.push(new getImage("water_can.jpg", "Watering-Can"));
images.push(new getImage("wine_glass.jpg", "Wine Glass"));

function copyGetImages(fileName, name) {
    this.fileName = fileName;
    this.label = name;
    this.y = 0;
}

var copyImages = [];
copyImages.push(new copyGetImages("bag.jpg", "Bag"));
copyImages.push(new copyGetImages("banana.jpg", "Banana Slicer"));
copyImages.push(new copyGetImages("boots.jpg", "Rain Boots"));
copyImages.push(new copyGetImages("chair.jpg", "Red Chair"));
copyImages.push(new copyGetImages("cthulhu.jpg", "Cthulhu"));
copyImages.push(new copyGetImages("dragon.jpg", "Dragon"));
copyImages.push(new copyGetImages("pen.jpg", "Pen Utensils"));
copyImages.push(new copyGetImages("scissors.jpg", "Pizza Scissors"));
copyImages.push(new copyGetImages("shark.jpg", "Shark"));
copyImages.push(new copyGetImages("sweep.jpg",  "Sweeper Babe"));
copyImages.push(new copyGetImages("unicorn.jpg",  "Unicorn"));
copyImages.push(new copyGetImages("usb.jpg", "USB Tenticle"));
copyImages.push(new copyGetImages("water_can.jpg", "Watering-Can"));
copyImages.push(new copyGetImages("wine_glass.jpg", "Wine Glass"));

function clickHistory() {

}

function placeRandomImages() {
    var chartContainer = document.getElementById('chart-container');
    if (chartContainer.innerText !== '') {
        chartContainer.innerText = '';
        totalClicks = 0;
        var restartProgressBar = document.getElementById('progress');
        var addBar = document.createElement('div');
        restartProgressBar.setAttribute('style', '');
        addBar.setAttribute('id', 'bar');
        addBar.setAttribute('style', 'width:7%');
        restartProgressBar.appendChild(addBar);
        percentRecorder = 0;
        showProgress();
        for (var index = 0; index < images.length; index++) {
            images[index].y = 0;
        }   
    }
    var addImage = document.getElementById('images');
    var image = document.createElement('img');
    var header = document.getElementsByTagName('header');
    var instructions = document.createElement('h2');
    var name = document.createElement('h3');
    //clear the page
    addImage.innerText = "";
    header[0].innerText = "";
    shuffleArray(images);
    //reload images and instructions
    instructions.innerText = "Pick a product you might purchase. You may choose the same one more than once.";
    header[0].appendChild(instructions);
    imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'votingImgContainer');
    image.setAttribute('src', "img/"+images[0].fileName);
    imageContainer.appendChild(image);
    name = document.createElement('h3');
    name.setAttribute('class', 'sharpieMarker');
    name.innerText = images[0].label;
    imageContainer.appendChild(name);
    addImage.appendChild(imageContainer);
    image.addEventListener('click', trackClicks);

    imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'votingImgContainer');
    image = document.createElement('img');
    image.setAttribute('src', "img/"+images[1].fileName);
    imageContainer.appendChild(image);
    name = document.createElement('h3');
    name.setAttribute('class', 'sharpieMarker');
    name.innerText = images[1].label;
    imageContainer.appendChild(name);
    addImage.appendChild(imageContainer);
    image.addEventListener('click', trackClicks);

    imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'votingImgContainer');
    image = document.createElement('img');
    image.setAttribute('src', "img/"+images[2].fileName);
    imageContainer.appendChild(image);
    name = document.createElement('h3');
    name.setAttribute('class', 'sharpieMarker');
    name.innerText = images[2].label;
    imageContainer.appendChild(name);
    addImage.appendChild(imageContainer);
    image.addEventListener('click', trackClicks);
}

function shuffleArray(array) {
    var newLength = array.length
    while (newLength) {
        var ranNum = Math.floor(Math.random() * newLength--);
        var swap = array[newLength];
        array[newLength] = array[ranNum];
        array[ranNum] = swap;
    }
    return array;
}

//this function is still in progress - I'm planning to use it to get the #1 product
function sort() {
    copyImages.sort((a, b) => a-b);
    var votes = [];
    var sortImages = copyImages.slice(0);
    console.log(sortImages);
    for (var index = 0; index < sortImages.length; index++) {
        var fileName = '';
        for (var imageIndex = 0; imageIndex < copyImages.length; copyImages++) {
            if (sortImages[imageIndex].y == votes[index]) {
                console.log(fileName = copyImages[imageIndex].fileName);
                console.log(sortImages.splice(imageIndex));
                
            }
        }
    }
    
}

function showProgress() {
   var bar = document.getElementById("bar");
   var width = parseInt(bar.style.width = (6 + (totalClicks / 15 * 100)) + '%');
   bar.innerText = '';
   var percent = document.createElement('p');
    if (totalClicks == 7) {
       bar.style.width = '0%';
       var progress = document.getElementById("progress");
       progress.style.width = '0%';
   } else {
        percent.innerText = width + '%';
        bar.appendChild(percent);
    }
}

function resultsPage() {
    var addImage = document.getElementById('images');
    var header = document.getElementsByTagName('header');
    var progress = document.getElementById('progress');
    header[0].innerText = '';
    progress.innerText = '';
    addImage.innerText = '';
    var thanks = document.createElement('h2');
    thanks.innerText = 'Thank you for voting! To reset voting for a different user, Tap here:';
    header[0].appendChild(thanks);
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Reset');
    header[0].appendChild(button);
    button.addEventListener('click', placeRandomImages);
    drawChart();
    makeLoserList();
    drawHistoryChart();
}

function trackClicks(event) {
    showProgress();
    for (var index = 0; index < images.length; index++) {
        if (event.target.attributes[0].value == 'img/'+ images[index].fileName) {
            console.log(images[index].fileName);
            images[index].y++
            console.log(images[index].y);
            for (var copy = 0; copy < copyImages.length; copy++) {
               if (event.target.attributes[0].value == 'img/'+ copyImages[copy].fileName) {
                console.log(event.target.attributes[0].value);
                copyImages[copy].y++
                console.log(copyImages[copy].y);   
               }
            }
        }
    }
    totalClicks++
    if (totalClicks == 7) {
        showProgress();
        resultsPage();
        
    } else {
        placeRandomImages();
    }
}

function makeLoserList() {
    var container = document.getElementById('loser-container');
    container.innerText = '';
        var zerosList = document.createElement('ul');
        zerosList.setAttribute('id', 'loser-container');
        for (var index = 0; index < images.length; index++) {
            if (images[index].y == 0) {
                var item = document.createElement('li');
                item.innerText = images[index].label;
                zerosList.appendChild(item);
            }
        }
        container.appendChild(zerosList);
        var listHeader = document.createElement('h3');
        listHeader.setAttribute('class', 'sharpieMarker')
        listHeader.innerText = 'Products with 0 votes';
        container.appendChild(listHeader);
}


window.addEventListener('load', placeRandomImages);
// window.addEventListener('load', showProgress);


// Below is an alternative results page in which I was attemping to present the top three picks.
// function resultsPage() {
//     var ys = [];
//     function getVoteTotals(array, y) {
//         for (var index = 0; index < array.length; index++)
//             ys.push(array[index][y]);
//     }
//     getVoteTotals(images, "y");
//     console.log(ys);
//     var mostVotes = [];
//     for (var list = 0; list < 3; list++) {
//         var topPick = Math.max(...ys);
//         mostVotes.push(topPick);
//         console.log(mostVotes);
//         ys.splice(0, topPick);
//         console.log(ys);
//     }
//     var addImage = document.getElementById('images');
//     var header = document.getElementsByTagName('header');
//     var progress = document.getElementById('progress');
//     header[0].innerText = '';
//     progress.innerText = '';
//     addImage.innerText = '';
//     var thanks = document.createElement('h2');
//     thanks.innerText = 'Thank you for voting! Here are your top picks:';
//     header[0].appendChild(thanks);
//     var showResults = document.getElementById('results');
//     for (var index = 0; index < mostVotes.length; index++) {
//         var imageContainer = document.createElement('div');
//         imageContainer.setAttribute('id', 'imageContainer');
//         var image = document.createElement('img');
//         image.setAttribute('src', "img/"+images[index].fileName);
//         imageContainer.appendChild(image);
//         var name = document.createElement('h3');
//         name.setAttribute('class', 'sharpieMarker');
//         name.innerHTML = images[index].name + "<br>VOTES  " + mostVotes[index];
//         imageContainer.appendChild(name);
//         showResults.appendChild(imageContainer);
//     }
// }
