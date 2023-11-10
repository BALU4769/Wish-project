
// forgot code

function forgot(){
    var email=prompt("Enter your email to get OTP..!");
    if(email !=null){
        document.getElementsById("forgot-password").innerHTML="welcome to "+email;
         document.getElementsById("container");
    }
}

// login code

const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Perform your authentication logic here (e.g., check against a database).

        // For this example, let's assume a hardcoded username and password.
        const validEmail = "balu123@gmail.com";
        const validPassword = "1234";

        if (email === validEmail && password === validPassword) {
            // Authentication successful
            // errorMessage.textContent = "Login successful!";
            // errorMessage.style.color = "green";
           
            alert("Login sucessfully");
            window.location.href='../index.html';
        
        } else {
            // Authentication failed
            errorMessage.textContent = "Invalid username or password.";
            errorMessage.style.color = "red";
        }
    });
   

  

function openForm() {
document.getElementById("container").style.display = "block";
}

function closeForm() {
document.getElementById("container").style.display = "none";
}


document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const firstname = document.getElementById('firstname').value;
    const lastname=document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    if (firstname === '' && password === '') {
    errorMessage.textContent = 'Invalid username or email or password';
    alert('Signup unsuccessful!');
    window.location.href='signup.html';
    } else {
        errorMessage.textContent = '';
    alert('Signup successful!');
    window.location.href='../index.html';
    }
  
  });


  

  function openView() {
  document.getElementById("viewcontainer").style.display = "block";
  }

  function closeView() {
  document.getElementById("viewcontainer").style.display = "none";
  }
  
  function subscribe(){
      alert('Subscribed Successfully..!')
  }
