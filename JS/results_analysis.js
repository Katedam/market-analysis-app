function resultsPageOfImages() {
    var showResults = document.getElementById('results');
    for (var index = 0; index < copyImages.length; index++) {
        var imageContainer = document.createElement('div');
        imageContainer.setAttribute('id', 'imageContainer');
        var image = document.createElement('img');
        image.setAttribute('src', "img/"+copyImages[index].fileName);
        imageContainer.appendChild(image);
        var name = document.createElement('h3');
        name.setAttribute('class', 'sharpieMarker');
        name.innerText = copyImages[index].label += "VOTES  " + images[index].y;
        imageContainer.appendChild(name);
        showResults.appendChild(imageContainer);
    }
}

window.addEventListener('load', resultsPageOfImages);