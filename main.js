window.addEventListener('scroll', onScroll)
const year = new Date().getFullYear()
const yearSpan = document.getElementById('year')
yearSpan.innerHTML = year

function sendEmail(){
  let nome = document.querySelector('input[name=nome]').value;
  let telefone = document.querySelector('input[name=telefone]').value;
  let email = document.querySelector('input[name=email]').value;
  let mensagem = document.querySelector('#mensagem').value;

  let body = "Olá Graco eventos! \n" + mensagem + "\n\n Att, \n " + nome + "\n" + telefone

  Email.send({
    SecureToken : "1f67df15-2479-45c9-86fe-79190ae4275e",
    To : 'gracoeventos@gmail.com',
    From : email,
    Subject : "Contato " + nome,
    Body : body
  }).then(
    message => alert("Email enviado com sucesso!")
  )
}

function onScroll() {
  showNavOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectioEndsAt = sectionTop + sectionHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop 
  const sectioEndPassedTargetLine = sectioEndsAt <= targetLine
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectioEndPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
  
}

function showNavOnScroll(){
    const navigation = document.getElementById('navigation'); 

    if (scrollY > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
