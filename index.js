function sendMessage(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (validateForm(name, email, message)) {
      // Send the message (for demonstration purposes, just showing success message)
      document.getElementById('contactForm').reset();
      document.getElementById('successMessage').style.display = 'block';
    }
  }
  
  function validateForm(name, email, message) {
    let isValid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name.trim() === '') {
      document.getElementById('name').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('name').classList.remove('error');
    }
  
    if (!emailPattern.test(email)) {
      document.getElementById('email').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('email').classList.remove('error');
    }
  
    if (message.trim() === '') {
      document.getElementById('message').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('message').classList.remove('error');
    }
  
    return isValid;
  }