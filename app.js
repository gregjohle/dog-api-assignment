// This is the JavaScript for part one of this assignment

// This function fetches the images from the Dog API
function getDogImages(number) {
    var doggos = `https://dog.ceo/api/breeds/image/random/${number}`
    console.log(doggos)
    fetch(doggos)
        .then(response => response.json())
        // This logs the reply json in the console for part one
        .then(responseJson => console.log(responseJson))
        // This moves the response to the display function for part two
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('An error has occurred. Please try again later.'));
};



// This function listens for the submit on part one and passes the form value to the getDogImages function
function watchForm() {
    $('.partOne').submit(function(event) {
        event.preventDefault();
        var numDoggos = $('input[name="number"]').val();
        getDogImages(numDoggos);
    });
};

// This function listens for the submit on form two and passes the form value to the getDogImages function
function watchForm() {
    $('.partTwo').submit(function(event) {
        event.preventDefault();
        var numDoggos = $('input[name="number"]').val();
        getDogImages(numDoggos);
    });
};

// This function allows for the JavaScript to run after the page has loaded
$(function() {
    console.log('part one is ready');
    watchForm();
});