// This is the JavaScript for part one of this assignment

// This function fetches the images from the Dog API, if no value is entered, the default value of 3 is used.
function getDogImages(number) {
    if (1 > number) {
        fetch(`https://dog.ceo/api/breeds/image/random/3`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert('An error has occurred. Please try again later.'));
    } else {
        var doggos = `https://dog.ceo/api/breeds/image/random/${number}`
        console.log(doggos)
        fetch(doggos)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert('An error has occurred. Please try again later.'));
    };
};

// This returns a random dog of a specific breed
function getDogBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('My apologies, but that breed was not found.'));
};

// This adds a list item for each result
function displayResults(responseJson) {
    console.log(responseJson);
    let responseStatus = responseJson.status;
    let imageUrls = responseJson.message;

    if (responseStatus === "success") {
        for (let i = 0; i < imageUrls.length; i++) {
            $('#js-results').append(
                `<li><img src="${responseJson.message[i]}" class="results-img"></li>`
            );
        };
    } else {
        alert('My apologies, but that breed was not found.');
    };
}



// This function listens for the submit on part one and part two and passes the form value to the getDogImages function
function watchForm() {
    $('.partOne').submit(function(event) {
        event.preventDefault();
        $('#js-results').empty();
        $('#breedOfDogs').empty();
        getDogImages($('#numberOfDogs').val());
    });
};

function watchBreed() {
    $('.breed').submit(function(event) {
        event.preventDefault();
        $('#js-results').empty();
        $("#numberOfDogs").empty();
        getDogBreed($('#breedOfDogs').val());
    });
};

// This function allows for the JavaScript to run after the page has loaded
$(function() {
    console.log('Ready');
    watchForm();
    watchBreed();
});