$(document).ready(function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Please fill out this field");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    };

InvalidInputHelper(document.getElementById("email"), {
    defaultText: "Please enter a valid email address!",
    emptyText: "Please enter a valid email address!",
    invalidText: function (input) {
        return 'The email address "' + input.value + '" is invalid!';
    }
});




});

