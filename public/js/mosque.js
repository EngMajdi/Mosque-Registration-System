document.getElementById('registerMosqueForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token'); // الحصول على التوكن من التخزين المحلي
    const formData = new FormData(e.target);
    const response = await fetch('/api/mosques/register', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
  
    const result = await response.json();
    if (response.ok) {
      alert('Mosque registered successfully');
      fetchMosques(); // تحديث قائمة المساجد المسجلة
    } else {
      alert(result.message);
    }
  });
  
  async function fetchMosques() {
    const token = localStorage.getItem('token'); // الحصول على التوكن من التخزين المحلي
    const response = await fetch('/api/mosques/view', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    const mosques = await response.json();
    if (response.ok) {
      const container = document.getElementById('mosquesContainer');
      container.innerHTML = '';
      mosques.forEach(mosque => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${mosque.mosqueName}</h3>
          <p>Registration Number: ${mosque.registrationNumber}</p>
          <p>Location: <a href="${mosque.location}" target="_blank">${mosque.location}</a></p>
          <img src="${mosque.imageUrl}" alt="${mosque.mosqueName}" width="200">
          <button onclick="editMosque('${mosque._id}')">Edit</button>
        `;
        container.appendChild(div);
      });
    } else {
      alert(mosques.message);
    }
  }
  
  async function editMosque(id) {
    const token = localStorage.getItem('token'); // الحصول على التوكن من التخزين المحلي
    const mosqueName = prompt('Enter new mosque name:');
    const registrationNumber = prompt('Enter new registration number:');
    const location = prompt('Enter new location:');
  
    const response = await fetch(`/api/mosques/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ mosqueName, registrationNumber, location })
    });
  
    const result = await response.json();
    if (response.ok) {
      alert('Mosque updated successfully');
      fetchMosques(); // تحديث قائمة المساجد المسجلة
    } else {
      alert(result.message);
    }
  }
  
  window.addEventListener('DOMContentLoaded', fetchMosques);
  