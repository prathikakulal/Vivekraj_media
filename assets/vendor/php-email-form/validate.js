/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, error);
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Security-Policy": "default-src 'self'; style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://hcaptcha.com https://*.hcaptcha.com https://*.google.com https://*.gstatic.com; font-src 'self' https://*.gstatic.com; img-src 'self' data: https://maps.googleapis.com https://hcaptcha.com https://*.hcaptcha.com https://*.google.com https://*.gstatic.com; frame-src 'self' https://www.google.com https://hcaptcha.com https://*.hcaptcha.com; connect-src 'self' https://maps.googleapis.com https://hcaptcha.com https://*.hcaptcha.com https://*.google.com https://*.gstatic.com https://vivek-raj-form.vercel.app https://vivek-raj-form.vercel.app/reach;"
      }
    })
    .then(response => {
      if( response.ok ) {
        return response.text();
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.querySelector('.sent-message').innerHTML="Form Submitted Successfully!"
        thisForm.reset(); 
      } else {
        thisForm.querySelector('.error-message').classList.add('d-block');
        thisForm.querySelector('.error-message').innerHTML="Error in Submitting Form!"
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
