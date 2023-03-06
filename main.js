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
const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '0123456789';
const combinacionLetras = japones + abecedario + numeros;

// Creo variable para el tamaño de la fuente y tambien creo una variable que tiene el numero de columnas en base al ancho del elemento canvas dividido por el tamaño de la fuente
const fontSize = 20;
const columnas = canvas.width/fontSize;


const lluvia = [];
for( let x = 0; x < columnas; x++ ) {
	lluvia[x] = 1;
}


const efectoMatrix = () => {
	contextCanvas.fillStyle = 'rgba(0, 0, 0, 0.05)';
	contextCanvas.fillRect(0, 0, canvas.width, canvas.height);
	
	contextCanvas.fillStyle = 'rgb(0, 247, 255)';
	contextCanvas.font = fontSize + 'px monospace';

	for(let i = 0; i < lluvia.length; i++)
	{
		const texto = combinacionLetras.charAt(Math.floor(Math.random() * combinacionLetras.length));
		contextCanvas.fillText(texto, i*fontSize, lluvia[i]*fontSize);
		
		if(lluvia[i]*fontSize > canvas.height && Math.random() > 0.975){
			lluvia[i] = 0;
        }
		lluvia[i]++;
	}
};


setInterval(efectoMatrix, 50);