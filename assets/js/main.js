/** Navbar **/
const navbarMenu = document.getElementById('navbar_menu')
const navbarOpen = document.getElementById('navbar_open')
const navbarClose = document.getElementById('navbar_close')

navbarOpen.addEventListener('click', (e) => {
  navbarMenu.classList.add('show__menu')
})

navbarClose.addEventListener('click', (e) => {
  navbarMenu.classList.remove('show__menu')
})

navbarMenu.addEventListener('click', (e) => {
  const target = e.target
  if (target.classList.contains('navbar__link')) {
    navbarMenu.classList.remove('show__menu')
  }
})

/** Formulario **/
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  /* Coloca tu correo */
  const yourEmail = 'arturo_23_03@hotmail.com'
  const form = e.currentTarget
  const input = form.elements

  const data = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  }

  fetch(`https://formsubmit.co/ajax/${yourEmail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

  form.reset()
})
