let Gpu = document.getElementById("placa-de-video")
let Cpu = document.getElementById("processador")
let btnGpu = document.getElementById("btnGpu")
let btnCpu = document.getElementById("btnCpu")

onload = (callback) => {
    mostraGpu()
}

let mostraGpu = () => {
    Gpu.style.display = "grid"
    btnGpu.style.backgroundColor = "var(--roxo)"
    btnGpu.style.borderColor = "var(--roxo)"
    btnGpu.style.color = "#fff"
    
    Cpu.style.display = "none"
    btnCpu.style.backgroundColor = "transparent"
    btnCpu.style.color = "var(--corCaracteres)"
    btnCpu.style.borderColor = "var(--corCaracteres)"
}

let mostraCpu = () => {
    Cpu.style.display = "grid"
    btnCpu.style.backgroundColor = "var(--roxo)"
    btnCpu.style.borderColor = "var(--roxo)"
    btnCpu.style.color = "#fff"

    Gpu.style.display = "none"
    btnGpu.style.backgroundColor = "transparent"
    btnGpu.style.color = "var(--corCaracteres)"
    btnGpu.style.borderColor = "var(--corCaracteres)"
}

let hoverBotoes = (element) => {
    element.style.backgroundColor = "var(--roxo)"
    element.style.color = "var(--backgroundPrimario)"
}

let linkCss = document.getElementById('linkCss')
let logo = document.getElementsByClassName('logo')

let mudaTema = () => {
    let tema = linkCss.getAttribute('tema')

    let href = linkCss.getAttribute("href")
    
    if (href == "./assets/style/produtoDark.css") {
        linkCss.setAttribute("tema", "claro")
        tema = 'claro'
    } else if ("./assets/style/produto.css") {
        linkCss.setAttribute("tema", "escuro")
        tema = 'escuro'
    }
    
    if (tema == "claro") {
        linkCss.setAttribute('href', "./assets/style/produto.css")
        logo[0].setAttribute("src", "./assets/imagens/Logo/logoHorizontal.png")
        logo[0].setAttribute("width", "180px")

        logo[1].setAttribute("src", "./assets/imagens/Logo/logoVertical.png")
        logo[1].setAttribute("width", "120px")
        
    } else if (tema == "escuro") {
        linkCss.setAttribute('href', "./assets/style/produtoDark.css")
        
        logo[0].setAttribute("src", "./assets/imagens/Logo/logoHorizontalClara.png")
        logo[0].setAttribute("width", "180px")

        logo[1].setAttribute("src", "./assets/imagens/Logo/logoVerticalClara.png")
        logo[1].setAttribute("width", "120px")
    }
}