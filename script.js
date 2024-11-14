document.addEventListener('DOMContentLoaded', function() {
    var createLinkButton = document.getElementById('createLink');
    var openChatButton = document.getElementById('openChat');
    var phoneNumberInput = document.getElementById('phoneNumber');
  
    createLinkButton.addEventListener('click', function() {
      var phoneNumber = phoneNumberInput.value.replace(/\D/g,''); // Remove non-digit characters
      
      if (phoneNumber) {
        var whatsappLink = 'https://wa.me/+972' + phoneNumber;
        
        // Copy to clipboard
        navigator.clipboard.writeText(whatsappLink).then(function() {
          createLinkButton.textContent = 'הקישור הועתק!';
          // Reset the button text after 2 seconds
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
        window.open(whatsappLink, '_blank'); // Open the chat in a new tab
      } else {
        alert('אנא הכנס מספר טלפון תקין לפתיחת הצ\'אט');
      }
    });
  });
  