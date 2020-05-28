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
    $("#submitForm").click(function(event) {
        event.preventDefault();

        var inputtedBreed = $("textarea#breed").val();
        console.log(inputtedBreed);
        var inputtedAge = $("textarea#age").val();
        console.log(inputtedAge);
        var inputtedNumber = $("textarea#number").val();
        console.log(inputtedNumber);
        var inputtedSick = $("textarea#sick").val();
        console.log(inputtedSick);
        var inputtedDead = $("textarea#dead").val();
        console.log(inputtedDead);
        var inputtedLocation = $("textarea#location").val();
        console.log(inputtedLocation);

        $('#breedV').append("<td>" + inputtedBreed + "</td>");
        $('#ageV').append("<td>" + inputtedAge + "</td>");
        $('#numberV').append("<td>" + inputtedNumber + "</td>");
        $('#sickV').append("<td>" + inputtedSick + "</td>");
        $('#deadV').append("<td>" + inputtedDead + "</td>");
        $('#locationV').append("<td>" + inputtedLocation + "</td>");
    });

});

$(document).ready(function() {
    $("#upload").submit(function(event) {
        alert("Your file has been received");
    });
});
