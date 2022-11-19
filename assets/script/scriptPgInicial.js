let linkCss = document.getElementById('linkCss')
    let mudaTema = () => {
        
        let href = linkCss.getAttribute("href")
        href = href == "./assets/style/styleDark.css" ? linkCss.setAttribute("href", "./assets/style/style.css") : linkCss.setAttribute("href", "./assets/style/styleDark.css")
    
}

