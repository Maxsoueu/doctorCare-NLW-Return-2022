//String (textos)
//Number (números)
//Boolean (treu | false)
window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
function activateMenuAtCurrentSection(section) {
  const targetline = scrollY + innerHeight / 2
  //Verifica se a seção passou da linha
  //Quais dados vou precisar pra seguir a sequência lógica de resolução do problema?
    //Dado 1: topo da seção

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  console.log(sectionHeight);
  //console.log vai mostrar a informação requisitada: neste caso, a altura, em pixels, da home. Para obter esta informação a respeito das outras sections, substituir home pelo nome da section (services, about e contat)

  const sectionTopReachOrPassedTargetLine = targeLine >= sectionTop

  console.log('Has the top of section reached or passed the Target Line?', sectionTopReachOrPassedTargetLine)

    //Dado 2: verificar se a base está abaixo da linha alvo
  console.log(sectionTop)
  console.log(sectionHeight)
  const sectionEndAt = sectionTop + sectionHeight
  console.log(sectionEndAt)
  const sectionEndPassedTargetLine = sectionEndAt <= targetline
  console.log('Has the bottom of section reached or passed the Target Line?', sectionEndPassedTargetLine)

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    //console.log('Estou na seção HOME!')
  menuElement.classList.add('active')

  }


}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 440) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
//
//O comando <onScroll()> ativa "manualmente" a função <function onScroll()>
//O objeto <navigation> pode conter outro objeto, no caso, o objeto <classList>, ou pode conter uma funcionalidade, neste caso, <add> e <remove>.
//As funcionalidades <add> e <remove> substituem o comando <onScroll()> com mais especificidade.

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
//Adicionar o ScrollReveal deixou visível o conteúdo da página, mas o menu foi para o canto superior esquerdo. Investigar o que está faltando - provavelmente alguma coisa no HTML.
//De fato: faltava, no HTML, a referência ao Script do ScrollReveal e a informação de  posicionamento no CSS, o z-index do nav.

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
//Esta organização da string em coluna é possível com o uso da crase (`) no começo e no final da string.

//Continua aparecendo o seguinte erro:
//"Uncaught TypeError: Cannot read properties of undefined (reading 'add') at showNavOnScroll (main.js:19: 26) at onScroll (main.js:7: 3) at main.js:5: 1"
//"O erro acontece porque o elemento <navigation> não existe no HTML.", disse o Copilot. (Investigar o que está faltando no HTML.)
//Este erro se repete sempre que o usuário rola a página.
//Por exemplo, o retorno da função console.log(targetline) não está sendo exibida.

//Você está em: 2h31min40: Disponibilizar o projeto no GitHub
//É a última meia hora de aula, fazer e voltar ao começo para revisar: alguma coisa ainda está fora de lugar.
