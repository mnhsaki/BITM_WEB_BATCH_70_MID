var homeElement = document.getElementById('home');
var aboutElement = document.getElementById('about');
var contactElement = document.getElementById('contact');

var homeBtn = document.getElementById('homeBtn');
homeBtn.onclick = function () {
    homeElement.style.display = 'block';
    aboutElement.style.display = 'none';
    contactElement.style.display = 'none';
};
var aboutBtn = document.getElementById('aboutBtn');
aboutBtn.onclick = function () {
     aboutElement.style.display = 'block';
    homeElement.style.display = 'none';   
    contactElement.style.display = 'none';
};
var contactBtn = document.getElementById('contactBtn');
contactBtn.onclick = function () {
    contactElement.style.display = 'block';
    homeElement.style.display = 'none';
    aboutElement.style.display = 'none';    
};

////////////////////////////////////////////////////////////////////////////////////////////

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


