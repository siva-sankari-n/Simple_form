
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const displayData = document.getElementById('displayData');
  
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      
      const content = `
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        <p><strong>Message:</strong> ${escapeHTML(message)}</p>
      `;
  
      
      displayData.innerHTML = content;
  
     
      form.reset();
    });
  
   
    function escapeHTML(str) {
      const p = document.createElement('p');
      p.textContent = str;
      return p.innerHTML;
    }
  });
  