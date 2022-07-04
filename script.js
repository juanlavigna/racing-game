let autoRojo = document.querySelector("#auto-rojo")
let autoAzul = document.querySelector("#auto-azul")

let anchoPista = document.querySelector("#pista1").clientWidth

let recorridoRojo = 0
let recorridoAzul = 0

window.addEventListener("keyup", function(e){
    if(e.key === "r"){
        recorridoRojo ++
        autoRojo.style.marginLeft = `${recorridoRojo}px`
        // console.log(recorridoRojo)
    }
})

window.addEventListener("keyup", function(e){
    if(e.key === "b"){
        recorridoAzul ++
        autoAzul.style.marginLeft = `${recorridoAzul}px`
        // console.log(recorridoRojo)
    }
})
