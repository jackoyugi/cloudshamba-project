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
    $("#selectShamba").click(function(event) {
        event.preventDefault();
        $("#select").fadeIn();
        $("#selectShamba").hide();
        $("button#submitForm").click(function() {

        });
    
    });

});

