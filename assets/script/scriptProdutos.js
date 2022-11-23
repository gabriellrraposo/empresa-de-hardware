let Gpu = document.getElementById("placa-de-video")
let Cpu = document.getElementById("processador")

let mostraGpu = () => {
    Gpu.style.display = "grid"
    Cpu.style.display = "none"
}

let mostraCpu = () => {
    Cpu.style.display = "grid"
    Gpu.style.display = "none"
}