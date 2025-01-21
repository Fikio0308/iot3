window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker registered successfully.'))
        .catch((error) => console.error('Service Worker registration failed:', error));
    }
  
    const themeToggleButton = document.getElementById('theme-toggle');
  
    const isDark = localStorage.getItem('dark-theme') === 'true';
    if (isDark) {
      document.body.classList.add('dark-theme');
    }
  
    themeToggleButton.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem('dark-theme', isDark);
    });
  };
  