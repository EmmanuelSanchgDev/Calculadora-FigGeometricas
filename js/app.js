//Cuadrado
function perimetro_Cuadrado(lado){
    return lado * 4;
}

function area_Cuadrado(lado){
    return lado * lado;
}


//Triangulo
function perimetro_Triangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function area_Triangulo(base,altura){
    return (base * altura) / 2;
}


//Circulo
function diametro_Circulo(radio){
    return radio * 2;
}
function perimetro_Circulo(radio){
    let diametro = diametro_Circulo(radio);
    return (diametro * Math.PI).toFixed(3);
}
function area_Circulo(radio){
    return ((radio * radio) * Math.PI).toFixed(3);
}

//aqui integramos HTML

//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    var perimetro = perimetro_Cuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    var area = area_Cuadrado(value);
    alert(area);
}

//triangulo
function calcularPerimetroTriangulo() {
    const input_lado1 = document.getElementById("1erLado");
    const input_lado2 = document.getElementById("2doLado");
    const input_base = document.getElementById("base");

    var lado1 = parseFloat(input_lado1.value);
    var lado2 = parseFloat(input_lado2.value);
    var base = parseFloat(input_base.value);

    var perimetro = perimetro_Triangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input_base = document.getElementById("baseArea");
    const input_altura = document.getElementById("altura")

    var base = parseFloat(input_base.value);
    var altura = parseFloat(input_altura.value);

    var area = area_Triangulo(base, altura);
    alert(area);
 
}

//Circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("radio");
    const radio = input.value;

    var diametro = diametro_Circulo(radio);
    alert(diametro)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value);

    var perimetro = perimetro_Circulo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value);

    var area = area_Circulo(radio);
    alert(area);
}