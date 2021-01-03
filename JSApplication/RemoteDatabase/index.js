(function () {
    const appContainerEl= document.getElementById('app-container');
    const loginContainerEl= document.getElementById('login-container');
    const genericLoginError = document.getElementById('genericc-login-error')

    const loginBtn = document.getElementById('login-btn');
    const emailInputEl = document.getElementById('email');
    const passwordInputEl = document.getElementById('password');

    loginBtn.addEventListener('click', function loginHandler() {
        


        const email = emailInputEl.value;
        const password = passwordInputEl.value;

        if (!email || !password) {
            alert('Please provide credantials');
            return;

        }

        console.log(email, password);

        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
      genericLoginError.textContent = error.message
   
  });

    })


    function init() {

        //console.log(firebase.app().name);  // "[DEFAULT]"

        //       firebase.auth().createUserWithEmailAndPassword(email, password)
        //             .then((user) => {
        //     // Signed in 
        //     // ...
        //   })
        //   .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ..
        //   });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                console.log(user);
                loginContainerEl.classList.add('hidden');
                appContainerEl.classList.remove('hidden')
                // ...
            } else {
                // User is signed out
                // ...
                appContainerEl.classList.add('hidden');
                loginContainerEl.classList.remove('hidden')
            }
        });

    }


    init();
}());