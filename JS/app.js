var totalClicks = 0;

function getImage(fileName, voteTotal, name) {
    this.fileName = fileName;
    this.voteTotal = 0;
    this.name = name;
}

var images = [];
images.push(new getImage("bag.jpg", 0, "Bag"));
images.push(new getImage("banana.jpg", 0, "Banana Slicer"));
images.push(new getImage("boots.jpg", 0, "Rain Boots"));
images.push(new getImage("chair.jpg", 0, "Red Chair"));
images.push(new getImage("cthulhu.jpg", 0, "Cthulhu"));
images.push(new getImage("dragon.jpg", 0, "Dragon"));
images.push(new getImage("pen.jpg", 0, "Pen Utensils"));
images.push(new getImage("scissors.jpg", 0, "Pizza Scissors"));
images.push(new getImage("shark.jpg", 0, "Shark"));
images.push(new getImage("sweep.jpg", 0, "Sweeper Babe"));
images.push(new getImage("unicorn.jpg", 0, "Unicorn"));
images.push(new getImage("usb.jpg", 0, "USB Tenticle"));
images.push(new getImage("water_can.jpg", 0, "Watering-Can"));
images.push(new getImage("wine_glass.jpg", 0, "Wine Glass"));


function placeRandomImages() {
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
    instructions.innerText = "Pick the product you are most likely to purchase:";
    header[0].appendChild(instructions);
    imageContainer = document.createElement('div');
    imageContainer.setAttribute('id', 'votingImgContainer');
    image.setAttribute('src', "img/"+images[0].fileName);
    imageContainer.appendChild(image);
    name = document.createElement('h3');
    name.setAttribute('class', 'sharpieMarker');
    name.innerText = images[0].name;
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
    name.innerText = images[1].name;
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
    name.innerText = images[2].name;
    imageContainer.appendChild(name);
    addImage.appendChild(imageContainer);
    image.addEventListener('click', trackClicks);
}

function shuffleArray(array) {
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

function showProgress() {
   var bar = document.getElementById("bar");
   var width = parseInt(bar.style.width);
   if (totalClicks == 15) {
       bar.style.width = '0%';
       var progress = document.getElementById("progress");
       progress.style.width = '0%';
   } else {
        var string = width + 6 + '%';
        bar.style.width = string;
        bar.style.innerText = string;
    }    
}

function resultsPage() {
    var voteTotals = [];
    function getVoteTotals(input, field) {
        for (var index = 0; index < input.length; index++)
            voteTotals.push(input[index][field]);
    }
    getVoteTotals(images, "voteTotal");
    var mostVotes = [];
    for (var list = 0; list < 3; list++) {
        var topPick = Math.max(...voteTotals);
        mostVotes.push(topPick);
        voteTotals.splice(0, topPick);
    }
    var addImage = document.getElementById('images');
    var header = document.getElementsByTagName('header');
    var progress = document.getElementById('progress');
    header[0].innerText = '';
    progress.innerText = '';
    addImage.innerText = '';
    var thanks = document.createElement('h2');
    thanks.innerText = 'Thank you for voting! Here are your top picks:';
    header[0].appendChild(thanks);
    var showResults = document.getElementById('results');
    for (var index = 0; index < mostVotes.length; index++) {
        var imageContainer = document.createElement('div');
        imageContainer.setAttribute('id', 'imageContainer');
        var image = document.createElement('img');
        image.setAttribute('src', "img/"+images[index].fileName);
        imageContainer.appendChild(image);
        var name = document.createElement('h3');
        name.setAttribute('class', 'sharpieMarker');
        name.innerHTML = images[index].name + "<br>VOTES  " + mostVotes[index];
        imageContainer.appendChild(name);
        showResults.appendChild(imageContainer);
    }
}

function trackClicks(event) {
    showProgress();
    for (var index = 0; index < images.length; index++) {
        if (event.target.attributes[0].value == 'img/'+ images[index].fileName) {
            images[index].voteTotal++
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

window.addEventListener('load', placeRandomImages);
