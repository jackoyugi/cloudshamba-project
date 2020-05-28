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
    $("#selectShamba").submit(function(event) {
        event.preventDefault();
        var Diagnosis = new Diagnosis();
        $("#selectShamba").FadeIn();
        $("#select form-group").hide();
        $("button#submitForm").click(function() {

        });

    });

});