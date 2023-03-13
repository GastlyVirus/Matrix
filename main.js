// Traigo el elemento CANVAS mediante una variable
const canvas = document.getElementById('canvas');

// El HTMLCanvasElement.getContext() método devuelve un contexto de dibujo en el lienzo, o null si el identificador de contexto no es compatible o si el lienzo ya se ha configurado en un modo de contexto diferente. Una cadena que contiene el identificador de contexto que define el contexto de dibujo asociado al lienzo. Los valores posibles son:"2d", lo que lleva a la creación de un CanvasRenderingContext2Dobjeto que representa un contexto de representación bidimensional.
const contextCanvas = canvas.getContext('2d');

// WindowLa propiedad de solo lectura innerWidthdevuelve el ancho interior de la ventana en píxeles. Esto incluye el ancho de la barra de desplazamiento vertical, si está presente. Más precisamente, innerWidthdevuelve el ancho de la ventana gráfica de diseño de la ventana . La altura interior de la ventana, la altura de la ventana gráfica de diseño, se puede obtener de la innerHeightpropiedad.
canvas.width = window.innerWidth;
console.log(canvas.width)
// innerHeightLa propiedad de solo lectura de la Windowinterfaz devuelve la altura interior de la ventana en píxeles, incluida la altura de la barra de desplazamiento horizontal, si está presente. El valor de innerHeightse toma de la altura de la ventana gráfica de diseño de la ventana . El ancho se puede obtener usando la innerWidthpropiedad.
canvas.height = window.innerHeight;

// Numeros, letras y simbolos que utilizare en el efecto MATRIX
const japones = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numeros = '0123456789';
const combinacionLetras = japones + numeros + abecedario;

// Creo variable para el tamaño de la fuente y tambien creo una variable que tiene el numero de columnas en base al ancho del elemento canvas dividido por el tamaño de la fuente
const fontSize = 20;
const columnas = canvas.width/fontSize;

// La siguiente sentencia "FOR" comienza mediante la declaración de la variable "X" y se inicializa a 0. Comprueba que "X" es menor que "COLUMNAS", realiza las dos sentencias con éxito e incrementa "X" en 1 después de cada pase del bucle.
const lluvia = [];
for( let x = 0; x < columnas; x++ ) {
	lluvia[x] = 1;
}


//--------------------------------------------------------------------------------------------------------------------

// FUNCION MATRIX - Creo una constante que es igual a la funcion para realizar el efecto matrix
const efectoMatrix = () => {
	// La CanvasRenderingContext2D.fillStyle propiedad de la API Canvas 2D especifica el color, el degradado o el patrón para usar dentro de las formas. El estilo predeterminado es #000 (negro).
	contextCanvas.fillStyle = 'rgba(0, 0, 0, 0.05)';
	// El método CanvasRenderingContext2D.fillRect() de la API Canvas 2D dibuja un rectángulo relleno en la posición ( x, y ). El tamaño del rectángulo se determina por width (anchura) y height (altura). El estilo de relleno se determina por el atributo fillStyle.
	contextCanvas.fillRect(0, 0, canvas.width, canvas.height);
	
	contextCanvas.fillStyle = '#3cff00';
	// La CanvasRenderingContext2D.font propiedad de la API Canvas 2D especifica el estilo de texto actual que se utilizará al dibujar texto. Esta cadena usa la misma sintaxis que el especificador de fuente CSS .
	contextCanvas.font = fontSize + 'px Roboto';

	// La siguiente sentencia "FOR" comienza mediante la declaración de la variable "i" y se inicializa a 0. Comprueba que "i" es menor que nueve, realiza las dos sentencias con éxito e incrementa "i" en 1 después de cada pase del bucle.
	for(let i = 0; i < lluvia.length; i++)
	{
		// El método "charAt()" de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
		// "Math.floor()" es un método del objeto estándar Math que redondea un número dado hacia el número entero anterior. Toma nota que para los números negativos esto significa que el número será redondeado "lejos de 0" en vez de el número de menor valor absoluto debido a que "Math.floor()" devuelve el número entero que sea menor o igual al número dado.
		// El Math.random()método estático devuelve un número pseudoaleatorio de punto flotante que es mayor o igual que 0 y menor que 1, con una distribución aproximadamente uniforme en ese rango, que luego puede escalar a su rango deseado. La implementación selecciona la semilla inicial del algoritmo de generación de números aleatorios; el usuario no puede elegirlo ni restablecerlo.
		const texto = combinacionLetras.charAt(Math.floor(Math.random() * combinacionLetras.length));
		// El CanvasRenderingContext2Dmétodo fillText(), parte de la API Canvas 2D, dibuja una cadena de texto en las coordenadas especificadas, llenando los caracteres de la cadena con el actual fillStyle. Un parámetro opcional permite especificar un ancho máximo para el texto renderizado, que el agente de usuario logrará condensando el texto o usando un tamaño de fuente más bajo. Este método dibuja directamente en el lienzo sin modificar la ruta actual, por lo que cualquier llamada subsiguiente fill()no stroke()tendrá efecto en él. El texto se representa utilizando la configuración de fuente y diseño de texto definida por las propiedades font, textAlign, textBaseliney direction.
		contextCanvas.fillText(texto, i*fontSize, lluvia[i]*fontSize);
		
		if(lluvia[i]*fontSize > canvas.height && Math.random() > 0.975){
			lluvia[i] = 0;
        }
		lluvia[i]++;
	}
};

// Usa "setInterval()" para hacer que una función se repita con un tiempo de retraso entre cada ejecución. Una vez más, se pasan dos parámetros a "setInterval()": la función que quieres llamar y el tiempo en milisegundos a retrasar cada ejecución de la función. "setInterval()" continuará ejecutándose hasta que sea borrada.
setInterval(efectoMatrix, 50);


//--------------------------------------------------------------------------------------------------------------------
