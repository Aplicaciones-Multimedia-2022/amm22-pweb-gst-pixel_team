
$('#sumbitemail')[0].addEventListener('click',function(){

    var name = $('#name')[0].value;
    var email = $('#email')[0].value;
    var subject = $('#subject')[0].value;
    var msg = $('#msg')[0].value;

    console.log(name);
    window.location.href = `mailto:100429257@alumnos.uc3m.es?subject=${subject}&body=${name}%0A%0A${msg}%0A%0A${email}`;
});

