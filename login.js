// login section
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
    // user email
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    // user password
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;
    if (userEmail == 'arafat@gmail.com' && userPassword == 'arafat') {
        window.location.href = 'bank.html'
    }
})