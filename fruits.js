const btnIzq=document.getElementById("btn-left");
const btnRight=document.getElementById("btn-right");

const vista={
vista_actual: 0,
informacion:[
    {
        titulo:"PEAR",
        color_titulo: "white",
        color_fondo:"#c9e78a",
        color_boton:"green",
        Seccion: "sect-pear"
    },
    {
        titulo:"APPLE",
        color_titulo: "white",
        color_fondo:"#ffb2b2",
        color_boton:"#f2675a",
        Seccion: "sect-apple"

    },
    {
        titulo:"EXOTIC",
        color_titulo: "white",
        color_fondo:"#c1bff2",
        color_boton:"#9590f1",
        Seccion: "sect-exotic"

    }
]
}
vista.informacion.forEach(
    (visto)=>{
        document.getElementById(visto.Seccion).style.backgroundColor= visto.color_fondo
        document.getElementById(visto.Seccion).innerHTML+=`<h2 style="opacity:0;">${visto.titulo}</h2>`;
    }

)
// document.getElementById(vista.informacion[vista.vista_actual].Seccion).querySelector("h2").className="show-2"
geth2("show-view")


function geth2(class_animado){
// informacion dispongo
    let generalinfo=vista.informacion
let view_want=vista.vista_actual
// la convierto para empezar a buscar
let infowant=generalinfo[view_want]
let idwant=infowant.Seccion
// ya las encontre
let sectionwant=document.getElementById(idwant)

// let lawant=sectionwant.querySelector(".latanew")
// agregar animacion
sectionwant.className=class_animado
// lawant.className="latanew"
}
actualizar_vista()
let dirrecion= 1
    setInterval(
        ()=>{
            if(dirrecion ==1){
                ir_a_derecha()
                if(vista.vista_actual==vista.informacion.length - 1){
                    dirrecion= -1
                }
            }else{(dirrecion ==1)
                ir_a_izquierda()
                if(vista.vista_actual==0){
                    dirrecion= 1
                }
            }
        },
        2000
)

document.addEventListener(
    "keydown",
    (event)=>{
     if(event.key =="ArrowLeft"){
      ir_a_izquierda()
     }
     if(event.key =="ArrowRight"){
        ir_a_derecha()
       }
    }
)
btnRight.addEventListener("click",ir_a_derecha)
    function ir_a_derecha(){
        if(vista.vista_actual < vista.informacion.length - 1){
            geth2("hide-view")
            vista.vista_actual++
            geth2("show-view")
            actualizar_vista()
        }
    }
    btnIzq.addEventListener("click",ir_a_izquierda)
    function ir_a_izquierda(){
        if(vista.vista_actual > 0){
            geth2("hide-view")
            // geth2("lata")
            vista.vista_actual--
            geth2("show-view")
            actualizar_vista()
        }
    }


let startX;

document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

document.addEventListener('touchmove', (event) => {
    const moveX = event.touches[0].clientX;
    const diffX = startX - moveX;

    if (diffX > 50) { // Threshold for swipe
        ir_a_derecha(); // Swipe left
        
     } else if(diffX > 50){
            ir_a_izquierda(); // Swipe right
        }
        startX = null; // Reset startX after swipe
    }
);

mover()
function actualizar_vista(){
    console.log(vista.vista_actual)

  
        btnIzq.style.visibility=vista.vista_actual >0 ? "visible": "hidden"
        btnRight.style.visibility=vista.vista_actual < vista.informacion.length - 1 ? "visible": "hidden"
        
        if(vista.vista_actual < vista.informacion.length - 1){
        btnRight.style.setProperty("--color-boton",vista.informacion[vista.vista_actual + 1].color_boton)

    }
    btnIzq.style.setProperty("--color-boton",vista.informacion.at(vista.vista_actual - 1).color_boton)
    
document.querySelector(".views").style.left= `${vista.vista_actual * -100}%`
document.querySelector("h1").style.color=vista.informacion[vista.vista_actual].color_titulo;
// document.getElementById("latas").style.left= `${vista.vista_actual * -100}%`
document.querySelector('.lata img[alt="etiquetas"]').style.left= `${vista.vista_actual * -100}%`;
}
