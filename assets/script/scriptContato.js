let linkCss = document.getElementById('linkCss')
let logo = document.getElementsByClassName('logo')


let mudaTema = () => {
    let tema = linkCss.getAttribute('tema')

    let href = linkCss.getAttribute("href")
    
    if (href == "./assets/style/contatoDark.css") {
        linkCss.setAttribute("tema", "claro")
        tema = 'claro'
    } else if ("./assets/style/contato.css") {
        linkCss.setAttribute("tema", "escuro")
        tema = 'escuro'
    }
    
    if (tema == "claro") {
        linkCss.setAttribute('href', "./assets/style/contato.css")
        logo[0].setAttribute("src", "./assets/imagens/Logo/logoHorizontal.png")
        logo[0].setAttribute("width", "180px")

        logo[1].setAttribute("src", "./assets/imagens/Logo/logoVertical.png")
        logo[1].setAttribute("width", "120px")
        
    } else if (tema == "escuro") {
        linkCss.setAttribute('href', "./assets/style/contatoDark.css")
        
        logo[0].setAttribute("src", "./assets/imagens/Logo/logoHorizontalClara.png")
        logo[0].setAttribute("width", "180px")

        logo[1].setAttribute("src", "./assets/imagens/Logo/logoVerticalClara.png")
        logo[1].setAttribute("width", "120px")
    }
}