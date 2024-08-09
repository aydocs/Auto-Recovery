document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(this);
        
        emailjs.send("service_cko1lsx","template_mfvbhdp" ,"formData")
            .then(function(response) {
                alert('Mesajınız başarıyla gönderildi!');
                console.log('Success:', response);
            }, function(error) {
                alert('Mesajınız gönderilemedi.');
                console.error('Error:', error);
            });
    });
});
