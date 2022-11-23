let Gpu = document.getElementById("placa-de-video")
let Cpu = document.getElementById("processador")
let btnGpu = document.getElementById("btnGpu")
let btnCpu = document.getElementById("btnCpu")

let mostraGpu = () => {
    Gpu.style.display = "grid"
    btnGpu.style.backgroundColor = "var(--roxo)"
    btnGpu.style.color = "var(--backgroundPrimario)"
    
    Cpu.style.display = "none"
    btnCpu.style.backgroundColor = "transparent"
    btnCpu.style.color = "var(--corCaracteres)"
}

let mostraCpu = () => {
    Cpu.style.display = "grid"
    btnCpu.style.backgroundColor = "var(--roxo)"
    btnCpu.style.color = "var(--backgroundPrimario)"

    Gpu.style.display = "none"
    btnGpu.style.backgroundColor = "transparent"
    btnGpu.style.color = "var(--corCaracteres)"
}

let hoverBotoes = (element) => {
    element.style.backgroundColor = "var(--roxo)"
    element.style.color = "var(--backgroundPrimario)"
}