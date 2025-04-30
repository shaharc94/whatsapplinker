document.addEventListener('DOMContentLoaded', function() {
    var createLinkButton = document.getElementById('createLink');
    var openChatButton = document.getElementById('openChat');
    var phoneNumberInput = document.getElementById('phoneNumber');

    // נקה את הטקסט בעת הדבקה, השאר רק ספרות ומקפים
    phoneNumberInput.addEventListener('paste', function(e) {
        e.preventDefault();
        var pastedText = (e.clipboardData || window.clipboardData).getData('text');
        var cleaned = pastedText.replace(/[^0-9\-]/g, ''); // רק ספרות ומקפים
        phoneNumberInput.value = cleaned;
    });

    createLinkButton.addEventListener('click', function() {
        // הסר מקפים ותריץ רק על ספרות
        var phoneNumber = phoneNumberInput.value.replace(/\D/g,'');
        
        if (phoneNumber) {
            var whatsappLink = 'https://wa.me/+972' + phoneNumber;
            navigator.clipboard.writeText(whatsappLink).then(function() {
                createLinkButton.textContent = 'הקישור הועתק!';
                setTimeout(function() {
                    createLinkButton.textContent = 'צור והעתק קישור';
                }, 2000);
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        } else {
            alert('אנא הכנס מספר טלפון תקין');
        }
    });

    openChatButton.addEventListener('click', function() {
        var phoneNumber = phoneNumberInput.value.replace(/\D/g,'');
        
        if (phoneNumber) {
            var whatsappLink = 'https://wa.me/+972' + phoneNumber;
            window.open(whatsappLink, '_blank');
        } else {
            alert('אנא הכנס מספר טלפון תקין לפתיחת הצ\'אט');
        }
    });
});
