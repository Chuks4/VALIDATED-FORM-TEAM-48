// Accessing the HTML DOM
const hamburger = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const passwordEye = document.getElementById('icon')
const submit = document.getElementById('submit')

// toggling the hamburger menu icon
hamburger.addEventListener('click', () => {
  navList.classList.toggle('show')
})

// display passwordEye icon function
function displayIcon () {
  const password = document.querySelector('[name=password]')
  if (password.getAttribute('type') === 'password') {
    password.setAttribute('type', 'text')
    passwordEye.style.color = 'black'
  } else {
    password.setAttribute('type', 'password')
    document.getElementById('icon').style.color = 'white'
  }
}

// Adding an Event Listener to the password eye icon
passwordEye.addEventListener('click', displayIcon)

// form validation
function validateInput () {
  let male = document.getElementById('male')
  let female = document.getElementById('female')

  let username = document.forms['myForm']['username'].value
  let email = document.forms['myForm']['email'].value
  let phone = document.forms['myForm']['phone'].value
  let password = document.forms['myForm']['password'].value
  let confirmPassword = document.forms['myForm']['confirm'].value
  let gender = document.forms['myForm']['gender']

  if (
    username == '' ||
    email == '' ||
    phone == '' ||
    password == '' ||
    confirmPassword == ''
  ) {
    alert('All empty fields must be filled')
  }

  if (password !== confirmPassword) {
    alert('Password Does Not Correspond')
  }

  if (male.checked || female.checked) {
    alert('Form Was Successfully Submitted')
  } else {
    alert('Please Select A Gender')
    return false
  }
}

// Adding an Event Listener to the submit button
submit.addEventListener('click', validateInput)
