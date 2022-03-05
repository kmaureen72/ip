let akan = function(y, m, d, g) {
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var d = new Date(y, --m, d);
    if (g === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}

$( document ).ready(function() {
    console.log( "ready!" );
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($("#year").val());
        var m = parseInt($("#month").val());
        var d = parseInt($("#date").val());
        var g = $( "#gender" ).val();
        var result = akan(y, m, d, g); 
        alert("Your akan name is: " + result);
        //the .reset is for resetting the form after onsubmit
        document.getElementById("form").reset();
    });
});
