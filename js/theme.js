document.getElementById('theme').addEventListener('change', (event) => {
    const theme = event.target.value;
  
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--primary-color', '#222222');
      document.documentElement.style.setProperty('--secondary-color', '#787D58');
      document.documentElement.style.setProperty('--white', '#F1F1F1');
      document.documentElement.style.setProperty('--gray', '#f1f1f16a');
      document.documentElement.style.setProperty('--disabled', '#F1F1F1');
      document.documentElement.style.setProperty('--menu', '#262626');
    } else if (theme === 'light') {
      document.documentElement.style.setProperty('--primary-color', '#F1F1F1');
      document.documentElement.style.setProperty('--secondary-color', '#787D58');
      document.documentElement.style.setProperty('--white', '#222222');
      document.documentElement.style.setProperty('--gray', '#222222');
      document.documentElement.style.setProperty('--disabled', '#a4b6c1');
      document.documentElement.style.setProperty('--menu', '#FFFFFF');
      document.documentElement.style.setProperty('--form__odd', '#e9e9e9');
      document.documentElement.style.setProperty('--form__even', '#ffffff');
    }
  });