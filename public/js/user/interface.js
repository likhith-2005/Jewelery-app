export function initializeUserInterface() {
  updateUserInterface();
  setupLogoutHandler();
}

function updateUserInterface() {
  const userNameElement = document.getElementById('user-name');
  const userIcon = document.getElementById('user-icon');
  const userInfo = document.getElementById('user-info');
  
  if (!userNameElement || !userIcon || !userInfo) return;
  
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {
    userNameElement.textContent = userEmail.charAt(0).toUpperCase();
    userIcon.style.display = 'none';
    userInfo.style.display = 'block';
  } else {
    userIcon.style.display = 'block';
    userInfo.style.display = 'none';
  }
}

function setupLogoutHandler() {
  const logoutButton = document.getElementById('logout-button');
  if (!logoutButton) return;
  
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('userEmail');
    updateUserInterface();
    window.location.href = 'login.html';
  });
}