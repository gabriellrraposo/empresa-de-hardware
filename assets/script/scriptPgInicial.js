let linkCss = document.getElementById('linkCss')
let logo = document.getElementsByClassName('logo')


let mudaTema = () => {
    let tema = linkCss.getAttribute('tema')

    let href = linkCss.getAttribute("href")
    
    if (href == "./assets/style/styleDark.css") {
        linkCss.setAttribute("tema", "claro")
        tema = 'claro'
    } else if ("./assets/style/style.css") {
        linkCss.setAttribute("tema", "escuro")
        tema = 'escuro'
    }
    
    if (tema == "claro") {
        linkCss.setAttribute('href', "./assets/style/style.css")
        logo[0].setAttribute("src", "./assets/imagens/Logo/logoHorizontal.png")
        logo[0].setAttribute("width", "180px")

        logo[1].setAttribute("src", "./assets/imagens/Logo/logoVertical.png")
        logo[1].setAttribute("width", "120px")
        
    } else if (tema == "escuro") {
        linkCss.setAttribute('href', "./assets/style/styleDark.css")
        
        logo[0].setAttribute("src", "./assets/imagens/Logo/logoHorizontalClara.png")
        logo[0].setAttribute("width", "180px")

        logo[1].setAttribute("src", "./assets/imagens/Logo/logoVerticalClara.png")
        logo[1].setAttribute("width", "120px")
    }
}