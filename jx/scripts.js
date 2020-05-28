//business logic
function Diagnosis() {
    this.diagnosis;
    this.farmAccessories;
    this.species;
    this.sex;
    this.History =[];
    this.video;
}
function History(breed, age, number, sick, dead, location) {
    this.breed;
    this.age;
    this.number;
    this.sick;
    this.location;
}
Diagnosis.prototype.selected = function() {
    return this.diagnosis + " ";
}
History.prototype.selected = function() {
    return this.breed + " " + this.location;
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
    $("#selectShamba").click(function(event) {
        event.preventDefault();
        $("#select, #sex, #history, #button").fadeIn();
        $("#selectShamba").hide();
        $("button#submitForm").click(function() {

        });

    });

});

