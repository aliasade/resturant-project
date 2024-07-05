function sign(form) {
    var passed = false;
    // Check email
    if (form.email.value.indexOf("@") === -1 || form.email.value.indexOf(".") === -1) {
      alert("Invalid email address. Please enter a correct email.");
    }
    // Check username
    else if (!/^[a-zA-Z]+$/.test(form.username.value)) {
      alert("Invalid first name. Please enter a correct first name.");
    }
    // Check password
    else if (!/^[a-zA-Z0-9]{8,}$/.test(form.password.value)) {
      alert("Invalid password. Please enter a valid password (at least 8 characters).");
    } else {
      passed = true;
    }
  
    return passed;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var colorSelector = document.getElementById('colorSelector');
  
    colorSelector.addEventListener('change', function() {
      var container = document.getElementById('container');
      var color = this.value === 'Dark' ? 'gray' : 'wheat';
      var labelColor = this.value === 'Dark' ? 'gray' : 'wheat';
      container.style.background = color;
      document.getElementById('label').style.background = labelColor;
    });
  });