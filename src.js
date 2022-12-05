//To select a single option in the Checkbox
$('.messageCheckbox').on('change', function() {
    $('.messageCheckbox').not(this).prop('checked', false);  
});

//Object created to assign the entered inputs with their values.
let items={

};

//An array that is opened to hold previously entered values.
let output=[];

//Function created to return information after pressing the button.
function getInfo() {
    name = document.getElementById('fname').value;
    tel = document.getElementById('tel').value;
    email=document.getElementById('email').value;
    egitim=document.getElementById('egitim').value;
    alan = document.querySelector('.messageCheckbox:checked').value;
    cinsiyet=document.getElementById('gender').value;
    items.name=name;
    items.tel=tel;
    items.email=email;
    items.egitim=egitim;
    items.alan=alan;
    items.cinsiyet=cinsiyet
    output.push({name:name,tel:tel,email:email,egitim,alan:alan,cinsiyet:cinsiyet})
    console.table(output);
    document.getElementById("form").reset()
    return false
}