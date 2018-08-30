function getImage(fileName, name) {
    this.fileName = fileName;
    this.y = 0; //y = voteTotalForImage
    this.label = name;
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

var copyImages = images;


function getProductStatus() {
    if(localStorage.getItem('Product Votes') == null) {
        localStorage.setItem('Product Votes', JSON.stringify(images));
    } else {
        var storeItems = JSON.parse(localStorage.getItem('Product Votes'));
        for(var i = 0; i < storeItems.length; i++) {
            for(var j = 0; j < images.length; j++) {
                if(storeItems[i].fileName == images[j].fileName) {
                    storeItems[i].y += images[j].y;
                }
            }
        }
        localStorage.setItem('Product Votes', JSON.stringify(storeItems));
        return storeItems;
    }
}




var totalClicks = 0;
function trackClicks(event) {
    showProgress();
    for (var index = 0; index < images.length; index++) {
        if (event.target.attributes[0].value == 'img/'+ images[index].fileName) {
            images[index].y++
        }
    }
    totalClicks++
    if (totalClicks == 15) {
        showProgress();
        resultsPage();
        
    } else {
        placeRandomImages();
    }
}

function showProgress() {
   var bar = document.getElementById("bar");
   var width = parseInt(bar.style.width = (6 + (totalClicks / 15 * 100)) + '%');
   bar.innerText = '';
   var percent = document.createElement('p');
    if (totalClicks == 15) {
       bar.style.width = '0%';
       var progress = document.getElementById("progress");
       progress.style.width = '0%';
   } else {
        percent.innerText = width + '%';
        bar.appendChild(percent);
    }
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

function placeRandomImages() {
    var chartContainer = document.getElementById('chart-container');
    var loserContainer = document.getElementById('loser-container');
    var voteHistoryContainer = document.getElementById('history-chart-container');
    if (chartContainer.innerText !== '' && loserContainer.innerText !== '' && voteHistoryContainer.innerText !== '') {
        chartContainer.innerText = '';
        loserContainer.innerText = '';
        voteHistoryContainer.innerText = '';
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


//this function is still in progress - will be used to get #1 product
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
window.addEventListener('load', placeRandomImages);
window.addEventListener('load', getProductStatus);