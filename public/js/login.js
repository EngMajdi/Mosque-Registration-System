document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: formData
    });
  
    const result = await response.json();
    if (response.ok) {
      localStorage.setItem('token', result.token); // تخزين التوكن في التخزين المحلي
      window.location.href = 'mosque.html'; // إعادة التوجيه إلى صفحة تسجيل المسجد
    } else {
      alert(result.message);
    }
  });
  