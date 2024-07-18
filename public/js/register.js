async function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, phone, password })
    });
  
    const data = await response.json();
    if (response.ok) {
      alert('User registered successfully!');
      window.location.href = 'login.html';
    } else {
      alert('Error: ' + data.message);
    }
  }
  
  document.getElementById('registerForm').addEventListener('submit', registerUser);
  