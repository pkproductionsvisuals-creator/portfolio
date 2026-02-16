
emailjs.init("4F1s83w7FtkTEoIrP");

document.getElementById('contact-us').addEventListener('submit', function(event){
    event.preventDefault();

    emailjs.send("service_30o3xtw", "template_yne07tn", {
      form_name: document.getElementById("name").value,
      message: document.getElementById("message").value,
      number: document.getElementById("number").value,
      reply_to: document.getElementById("email").value
    })
    .then(function (response){
        alert("A sua mensagem foi enviada!");
    }, function(error){
        alert("Erro ao enviar:" + error.text);
    });
});