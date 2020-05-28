//business logic
function Diagnosis() {
    this.diagnosis;
    this.farmAccessories;
    this.species;
    this.sex;
    this.History =[];
    this.notes;
}
function History(breed, age, number, sick, dead, location) {
    this.breed;
    this.age;
    this.number;
    this.sick;
    this.location;
}
Diagnosis.prototype.selected = function() {
    return this.diagnosis + " " + this.farmAccessories;
}
History.prototype.selected = function() {
    return this.breed + " " + this.age;
}


//userInterface
$(document).ready(function() {
    $("#submitForm").submit(function(event) {
        event.preventDefault();
        var inputtedBreed = document.getElementById('breed');
        var inputtedAge = document.getElementById('age');
        var inputtedNumber = document.getElementById('number');
        var inputtedSick = document.getElementById('sick');
        var inputtedDead = document.getElementById('dead');
        var inputtedLocation = document.getElementById('location');

        $('#breed').append("<li>" + inputtedBreed + "</li>");
        $('#age').append("<li>" + inputtedAge + "</li>");
        $('#number').append("<li>" + inputtedNumber + "</li>");
        $('#sick').append("<li>" + inputtedSick + "</li>");
        $('#dead').append("<li>" + inputtedDead + "</li>");
        $('#location').append("<li>" + inputtedLocation + "</li>");
    });

});

$(document).ready(function() {
    $("#upload").submit(function(event) {
        alert("Your file has been received");
    });
});