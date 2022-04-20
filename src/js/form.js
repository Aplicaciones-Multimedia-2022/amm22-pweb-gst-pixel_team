
$('#sumbitemail')[0].addEventListener('click',function(){

    var nombre = $('#nombre').value;
    var mail = $('#email').value;
    var asunto = $('#asunto').value;
    var msg = $('#mensaje').value;

    window.location.href = `mailto:test@example.com?subject=${msg}`;
});