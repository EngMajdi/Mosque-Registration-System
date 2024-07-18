document.getElementById('mosqueForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const registrationNumber = document.getElementById('registrationNumber').value;
    const location = document.getElementById('location').value;
    const imageUrl = document.getElementById('imageUrl').value;
  
    const response = await fetch('/api/mosques', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, registrationNumber, location, imageUrl }),
    });
  
    const result = await response.json();
  
    if (response.ok) {
      document.getElementById('message').textContent = 'تم التسجيل بنجاح';
      document.getElementById('mosqueForm').reset();
    } else {
      document.getElementById('message').textContent = 'حدث خطأ أثناء التسجيل';
      console.error(result);
    }
  });
  