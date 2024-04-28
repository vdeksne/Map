function changeBackground(choiceId) {
    var choice = document.getElementById(choiceId).value;
    var result = document.getElementById('result');

    if (choice === "") {
        alert("No Map Selected!");
    } else {
        var newImage = new Image();
        newImage.src = 'assets/maps/' + choice;

        newImage.onload = function() {
            // Only update the background once the new image is loaded
            result.removeAttribute('style');
            result.innerHTML = "<img src='assets/maps/" + choice + "' width='100%' height='100%'/>";
        };
    }
}