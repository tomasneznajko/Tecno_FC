//Base de datos

const tripleErrada = "https://www.youtube.com/embed/-LDEMXhNfI0";
const autoGol = "https://www.youtube.com/embed/05RH5hgrgPg";
const maradoniano = "https://www.youtube.com/embed/eLhnll5BD3U";
const remontada = "https://www.youtube.com/embed/WdI16q56yjg";
const celebracion = "https://www.youtube.com/embed/5VCME0qIyPU";
const bombazo = "https://www.youtube.com/embed/EXmzZO8vj_s";
const chilenarda = "https://www.youtube.com/embed/HgKycsit6CI";
const canio = "https://www.youtube.com/embed/9auQV8BRcX8";
const inexplicableGol = "https://www.youtube.com/embed/QX7tx0l4j10";
const escorpion = "https://www.youtube.com/embed/wNXEXfwJSmY";
const balaDeCanion = "https://www.youtube.com/embed/jch3QMK0E-A";
const rabona = "https://www.youtube.com/embed/Ww4-OxgKvUU";
const picadita = "https://www.youtube.com/embed/rv3r2c26bhY";
const caniazo = "https://www.youtube.com/embed/ux1RR8sWOJI";
const patadon = "https://www.youtube.com/embed/lk-TcXUK418";
const tikitaka = "https://www.youtube.com/embed/gnoe5_w1fuo";
const destruccion = "https://www.youtube.com/embed/DDZ3wD_Ch_0";
const resorte = "https://www.youtube.com/embed/b8B7BgP1HsM";

const videos = [tripleErrada,autoGol,maradoniano,remontada,celebracion,bombazo,chilenarda,canio,inexplicableGol,escorpion,balaDeCanion,rabona,picadita,caniazo,patadon,tikitaka,destruccion,resorte];

const botones = document.querySelectorAll("button");

function cambiarVideo(botonApretado){
    // const posicion = botones.findIndex((boton,botonApretado) => boton == botonApretado); 
    const videoActual = document.querySelector("iframe");
    for(posicion in botones){
        if(botones[posicion] == botonApretado){
            videoActual.src = videos[posicion];
        }
    }

}




// const app = Vue.createApp({
//         data(){
//             return{
//                 videoActual: querySelector("iframe")
//             }
//         },
//         methods: {
//             cambiarVideo(){
                
//             }
//         }
//     }
// );

// Vue.component('videoActual',{
//     template: '<iframe width="560" height="315" src={{actual}} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//     data(){
//         return{
//             actual:"https://www.youtube.com/embed/-LDEMXhNfI0",
//             videos: [
//                 tripleErrada,autoGol,maradoniano],
//             botones: document.querySelectorAll("button")
//         }
//     },
//     methods: {
//         cambiarVideo(botonApretado){
//             for(let i in this.botones){
//                 if(botones[i] == botonApretado){
//                     this.actual = this.videos[i];
//                 }
//             }
//         }
//     }

// })

// app.mount('#videos');
