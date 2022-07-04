let autoRojo = document.querySelector("#auto-rojo")
let autoAzul = document.querySelector("#auto-azul")

let anchoPista = document.querySelector("#pista1").clientWidth

let recorridoRojo = 0
let recorridoAzul = 0

window.addEventListener("keyup", function(e){
    if(e.key === "r"){
        recorridoRojo = recorridoRojo + 9
        autoRojo.style.marginLeft = `${recorridoRojo}px`
        // console.log(recorridoRojo)
        if(recorridoRojo + 137 >= anchoPista){
            document.body.style.backgroundColor = "red";
            alert("Gano el rojo!")
        }
    }
})

window.addEventListener("keyup", function(e){
    if(e.key === "a"){
        recorridoAzul = recorridoAzul + 9  
        autoAzul.style.marginLeft = `${recorridoAzul}px`
        // console.log(recorridoRojo)
        if(recorridoAzul + 137 >= anchoPista){
            document.body.style.backgroundColor = "blue";
            alert("Gano el azul!") 
        }
    }
})


