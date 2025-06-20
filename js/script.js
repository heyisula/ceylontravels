document.addEventListener('DOMContentLoaded', function() {
    const textDP="Discover Paradise";
    const textWelcome="Welcome!";
    const displayText= document.getElementById('hero-head-text');

    if (!displayText) {
        console.log("Element with ID 'hero-head-text' not found.");
        return;
    }else{
        function typeText(text, callback){
            var i=0;
            displayText.textContent = '';

            function typeHead(){
                if(i<text.length){
                    displayText.textContent += text[i];
                    i++;
                    setTimeout(typeHead, 150);
                } else if (callback) {
                    setTimeout(callback, 1000);
                }
            }
            typeHead();
        }
        function eraseText(callback){
            var currentText = displayText.textContent;

            function eraseHead(){
                if(currentText.length > 0) {
                    currentText = currentText.slice(0, -1);
                    displayText.textContent = currentText;
                    setTimeout(eraseHead, 100);
                } else if (callback) {
                    setTimeout(callback, 500);
                }
            }
            eraseHead();
        }

        typeText(textDP, function(){
            eraseText(function() {
                typeText(textWelcome);
            });
        });
        }
});

document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('enq-form');
    if(form){
        form.addEventListener('submit',function(exception){
            exception.preventDefault();

            const formData = new FormData (this);
            const firstName = formData.get('firstName')?.trim();
            const lastName = formData.get('lastName')?.trim();
            const email = formData.get('email')?.trim();
            const countryCode = formData.get('countryCode')?.trim();
            const phoneNumber = formData.get('phoneNumber')?.trim();
            const packageType = formData.get('package')?.trim();
            const message = formData.get('message')?.trim();

            if (!firstName || !lastName || !email){
                alert('Oops! Please make sure all required fields are filled out before submitting.')
                return;
            }else if(!email.includes('@') || !email.includes('.')){
                alert('Hmm... that email address doesn’t look right. Please double-check it.')
            }else if (!countryCode || !phoneNumber){
                alert('Please select your country code and enter your phone number.')
                return;
            }else if(!packageType){
                alert('Please select a travel package.')
                return;
            }else {
                alert(`Thanks, ${firstName} ${lastName}! Your enquiry has been submitted.\nWe will contact you at ${email} or +${countryCode} ${phoneNumber} regarding the "${packageType}" package.`)
                this.reset();
            }
        });
    }else{
        console.log("Form with id 'enq-form' not found")
    }
})