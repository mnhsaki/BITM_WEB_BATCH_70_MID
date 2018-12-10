function checkNameField() {
    var regex = /^[a-zA-Z _-]{8,20}$/;
    var name = $('#name').val();
    if (regex.test(name)) {
        $('#nameError').text(' ');
        return true;
    } else {
        $('#nameError').text('First Name must be 8 to 20 character');
        return false;
    }
}


$('#name').keyup(function () {
    checkNameField();
});


$('#registrationForm').submit(function () {

    if( checkNameField() == true ) {
        return true;
    }  else {
        return false;
    }

});







$('#firstName').keyup(function () {
    var firstName = $(this).val();
    $('#res1').html(firstName);
});

$('#lastName').keyup(function () {
    var lastName = $(this).val();
    $('#res2').html(lastName);
});

$('#lastName').blur(function () {
    var firstName = $('#firstName').val();
    var lastName = $(this).val();
    var fullName = firstName+' '+lastName;

    $('#res3').html(fullName);
    $('#fullName').val(fullName);
});