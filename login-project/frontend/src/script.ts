document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('show-login') as HTMLButtonElement;
  const registerBtn = document.getElementById('show-register') as HTMLButtonElement;
  const loginForm = document.getElementById('login-form') as HTMLFormElement;
  const registerForm = document.getElementById('register-form') as HTMLFormElement;
  const landingButtons = document.getElementById('landing-buttons') as HTMLDivElement;

  // Initial landing page state
  history.replaceState({ page: 'landing' }, '', window.location.pathname);

  // Handle Login Button Click
  loginBtn.addEventListener('click', () => {
    history.pushState({ page: 'login' }, '', '#login');
    showLoginForm();
  });

  // Handle Register Button Click
  registerBtn.addEventListener('click', () => {
    history.pushState({ page: 'register' }, '', '#register');
    showRegisterForm();
  });

  // Handle back button behavior
  window.addEventListener('popstate', (event) => {
    if (!event.state || event.state.page === 'landing') {
      showLandingPage();
    } else if (event.state.page === 'login') {
      showLoginForm();
    } else if (event.state.page === 'register') {
      showRegisterForm();
    }
  });

    // Prevent form submission default behavior and handle login
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const email = (document.getElementById("login-email") as HTMLInputElement).value;
      const password = (document.getElementById("login-password") as HTMLInputElement).value;
  
      const response = await fetch("https://vis9w7ebm7.execute-api.ap-south-1.amazonaws.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("✅ " + data.message);
      } else {
        alert("❌ " + data.message);
      }
    });
  

    // Prevent form submission default behavior and handle register
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
    
      const email = (document.getElementById("register-email") as HTMLInputElement).value;
      const password = (document.getElementById("register-password") as HTMLInputElement).value;
    
      console.log("Sending registration request:", { email, password }); // 👈 Check what is sent
    
      const response = await fetch("https://vis9w7ebm7.execute-api.ap-south-1.amazonaws.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    
      const data = await response.json();
    
      console.log("Response from API:", response.status, data); // 👈 Check server response
    
      if (response.ok) {
        alert("✅ " + data.message);
      } else {
        alert("❌ " + data.message);
      }
    });
    
  

  // Show login form with animation
  function showLoginForm() {
    // Hide other elements with fade-out
    registerForm.classList.add('fade-out');
    landingButtons.classList.add('fade-out');

    // Remove fade-out and hidden after animation
    setTimeout(() => {
      registerForm.classList.add('hidden');
      landingButtons.classList.add('hidden');
      registerForm.classList.remove('fade-out');
      landingButtons.classList.remove('fade-out');

      // Show login form
      loginForm.classList.remove('hidden');
      loginForm.classList.add('fade-in');

      // Remove fade-in after animation
      setTimeout(() => {
        loginForm.classList.remove('fade-in');
      }, 400); // Match animation duration
    }, 400); // Match fade-out duration
  }

  // Show register form with animation
  function showRegisterForm() {
    // Hide other elements with fade-out
    loginForm.classList.add('fade-out');
    landingButtons.classList.add('fade-out');

    // Remove fade-out and hidden after animation
    setTimeout(() => {
      loginForm.classList.add('hidden');
      landingButtons.classList.add('hidden');
      loginForm.classList.remove('fade-out');
      landingButtons.classList.remove('fade-out');

      // Show register form
      registerForm.classList.remove('hidden');
      registerForm.classList.add('fade-in');

      // Remove fade-in after animation
      setTimeout(() => {
        registerForm.classList.remove('fade-in');
      }, 400);
    }, 400);
  }

  // Show landing page with animation
  function showLandingPage() {
    // Hide forms with fade-out
    loginForm.classList.add('fade-out');
    registerForm.classList.add('fade-out');

    // Remove fade-out and hidden after animation
    setTimeout(() => {
      loginForm.classList.add('hidden');
      registerForm.classList.add('hidden');
      loginForm.classList.remove('fade-out');
      registerForm.classList.remove('fade-out');

      // Show landing buttons
      landingButtons.classList.remove('hidden');
      landingButtons.classList.add('fade-in');

      // Remove fade-in after animation
      setTimeout(() => {
        landingButtons.classList.remove('fade-in');
      }, 400);
    }, 400);
  }
});
