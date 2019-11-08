/*

Aplicación desarrollada puramente con JS
para las clases de DWEC de Nuevas Profesiones (Curso 2019/20)

Web: https://fpnuevasprofesiones.es/

*/
'use strict'



/**
 *  Definición de Clases
 */

class Jugador {
    constructor() {}
        // constructor(apodo, rol) {
        //     this.apodo = apodo;
        //     this.rol = rol;
        //     this.puntos = 0;
        // }
    setDatos(apodo, rol) {
        this.apodo = apodo;
        this.rol = rol;
    }
    setPuntos(puntos) {
        this.puntos = puntos;
    }
    saludo() {
        return "Hola " + this.apodo + " tu rol es " + this.rol + " tus puntos son: " + this.puntos;
    }
}


/*
 * Variables globales
 */

var jugador = new Jugador();



/*
 * Función inicial para el juego
 */


function start() {
    console.log("hola");
    var bienvenida = $("#bienvenida");
    var datos = $("#datos");
    console.log(bienvenida[0]);
    bienvenida[0].style.display = "none";
    datos[0].style.display = "block";


}

function cargardatos() {

    var apodo = $("#apodo");
    var rol = $("#rol");
    console.log(apodo[0].value);
    console.log(rol[0].value);

    //jugador.setDatos(apodo, rol);

    // console.log(jugador.saludo);
}








/**
 *  funciones auxiliares
 */

function $(selector) {
    return document.querySelectorAll(selector);
}