# JavaScript (Mis notas)

# 📹 Video 1 - ¿Que es JavaScript?
 
 JavaScript nace de la necesidad de generar **dinamismo en las páginas web** y que a su vez personas y empresas pudieran interactuar. Es un lenguaje interpretado, orientado a objeto, debilmente tipado y dinámico.
    
+ **Debilmente tipado:** se refiere a que JavaScript ejecutará operaciones entre distintos tipos de datos. Ejemplo: sumar un número con un carácter. Otros lenguajes dan errores al intentar esto.

+ **Dinámico:** JavaScript no necesita ser compilado, lo que facilita probar nuestro código. También hace que los errores se vean hasta que se ejecuta dicho código. También hace que los errores se vean hasta que se ejecuta(runtime) dicho código.

+ **Suma en JavaScript:**
    + 4 + "7" = 47; //"7" es un String
    + 2 + true = 3;

+  **Resta:**
    + false - 3 = -3;

+ **Multiplicación:**
    + 4 * "7" = 28;

+ **Forward:** Ser compatible con versiones futuras significa que incluir una adicción al lenguaje en un programa no causaría que se rompa si se ejecuta en un motor JS anterior. JS no es compatible conversiones futuras.
    + **JS es backwards Compatible:** La compatibilidad con versiones anteriores significa que cuando se acepta como JS válido, no habrá un cambio futuro que haga el código deje de funcionar.

+ **JavaScript:**
    + Añade dinamismo e interactividad a una página web.
    + Funciona en el navegador de forma nativa. Es el único. 
    + Ha sido creado por Brenda Eich en 1995.
    + Su tipado es dinámico. Nos da la facilidad de no definir los tipos de datos al declarar una variable, ya que lo asigna durante un tiempo de ejecución basado en su valor en ese momento. 
    + Es un lenguaje basado en prototipos:
        + Los prototipos son un mecanismo por el cual un objeto hereda propiedades y métodos de una padre. En JavaScript la herencia funciona por prototipos.
        + Un objeto en JavaScript tiene otro objeto, llamado prototype.
        + Cuando pedimos a un objeto una propiedad que no tiene, la busca en su prototipo.
        + Entonces, un prototipo es otro objeto que se utiliza como una fuente de propiedades alternativas.

    + Es un lenguaje multiparadigma y por tanto podemos usarlo para distintas formas a la hora de desarrollar aplicaciones.
        + **Programación imperativa:** se escriben las intrucciones paso a paso para generar la solución al problema. 
        + **Programación funcional:** usando funciones que se pueden ir anidando hasta conseguir el resultado que se espera.
        + **Programación Orientada a Objetos:** se usan objetos que encapsulan variables y métodos para interactuar con otros objetos y de esta forma intentar obtener el resultado esperado.

+ ¿Qué puede hacer JavaScript?
    + Desarrollo web.
    + Desarrollo fronted 
    + Desarrollo backend
    + Desarrollo Mobile 
    + Apps Escritorio.
    + Internet of things

# 📹 Video 2 - ¿Por qué JavaScript?

+ Comunidad enorme.
+ Desarrollo de Apps --> React Native
+ Desarrollo de Apps para Desktop
    + Electron.
        + Mac 
        + Windows
+ Backend/IO

# 📹 Video 3 - Elementos de un lenguaje de programación: Variables, funciones y sintexis

+ **Dos componentes principales**
    + Data que guardamos en memoria
    + Tareas (funciones) que haremos con esa data.

+ **Tipos de Datos en JavaScript**
    + **Tipos primitivos:** Son inmutables y contienen un único valor.
        + `String`: cadena de texto " ".
        + `Number`: valores númericos.
        + `Boolean`: verdadero o falso.
        + `Null`: tipo especial, contiene null. --> Cuando todavía no tengamos un valor podemos reservar una posición en memoria.
        + `undefined`: tipo especial, contiene null. --> Cuando todavía no tengamos un valor podemos reservar una posición en memoria.

+ **Tipo Objeto**
    + Tipos predefinidios de JavaScript.
        + Date(fecha).
        + RegExp (Expresiones regulares)
        + Error.

    + Tipos definidos por el programador/usuario.
        + Funciones simples
        + Clases.
    
    + **Arrays** --> Serie de elementos o formación tipo vector o matriz. Lo consideramos un objeto especial [1, 2, 3].

    + **Objetos especiales:**
        + Objeto global.
        + Objeto prototipo.
        + Otros.
    
    + **typeof 40** --> Nos devuelve el tipo de valor de la variable. En este caso "number".
    + **undefinided** --> Existe cuando no se le asigna un valor a una variable.
    + **null** --> es cuando un dato no existe.

# 📹 Video 4 - Variables en JavaScript

**¿Qué es una variable?**

Una variable es una representación de algún lugar en memoria que nosotros vamos a reservar para poder guardar un valor. Este valor puede tener diferente tipos.

// --> creamos comentarios en js. 

+ **Existen ds estados:**
    1. Declarar una variable -> var edad;
    2. Inicializar una variable -> edad = 30;

🗒️ Declarando e inicializando una variable --> var elementos = ["animal", "casa"];

+ Variable Objeto
    + var persona = {
        nombre: "Andres",
        edad : 30
    }

    + llamar a la variable: persona;
     
# 📹 Video 5 - Funciones en JavaScript.

+ Funciones
    + Las funciones son conjunto de sentencias que podemos utilizar para generar ciertos acciones con los valores ya guardados en las variables.  
        + Existen dos tipos de funciones:
            + **Declarativas:** Su sintexis es la siguiente:
                function miFuncion(){
                    return 3; 
                }
            + **De expresion:** son aquellos que guardamos en una variable, por lo tanto, no es necesario nombrarlas y tienen la siguiente sintaxis:
                var miFuncion = function(){
                    return a+b;
                }

+ **Características de las funciones**
    + Puede llevar parámetros separados por coma.
    + cada instrucción debe acabar con " ; ".
    + usar **return** si queremos que nos devuelva un dato.

+ **Diferencias entre funciones declarativas y expresivas.**
    + A las funciones declarativas se les aplica hoisting y a la expresión de función, no. Ya que hoisting solo se aplica a a las palabras reservadas var y function.
    + Lo que quiere decir con las funciones declarativas, podemos llamar a la función antes de que esta sea declarada y con la expresión de función, no. Tendríamos que declararla primero y después mandarla a llamar. 

***
# 📹 Video 7 - Scope.

+ **El scope hace referencia al alcance que tienen las variables dentro del código.**
    + Depende mucho de donde declararemos esas variables.
    + **Scope Global:** las variables son accesibles desde cualquier parte del código.
    + **Scope Local:** son las variables que declararemos dentro de una función y solo lo que tengamos dentro de la función tendrá acceso a dicha variable.
    
+ **PD:** En el **Scope Global** no podemos acceder a una variable que se encuentra en un **Scope Local**, pero estando en un **Scope Local** podemos acceder a una variable que se encuentra en el **Scope Global**.

**Ejemplo 1:** *Scope Global:*
~~~
 var nombre = "Diego";

 function fun(){
        var apellido = "De Granda"
        return nombre + " " + apellido; --> No nos daría ningun error. 
 }

fun(); //Salida: Diego de Granda
~~~

**Ejemplo 2:** *Scope Local:*
~~~
var nombre = "Diego";

 function fun(){
        var apellido = "De Granda"
        return nombre + " " + apellido; --> No nos daría ningun error. 
 }

console.log(apellido); //apellido is not defined.
~~~

***
# Video 8 - Hoisting

🗒️ El hoisting es un proceso del compilador de javascript que consiste en que la declaración de las variables y las funciones son llevadas al inicio del código, sin importar su posición para su procesamiento, sin embargo, la inicialización de las variables no es llevada al inicio del código para su compilación, sino solo su declaración, lo cual suele dar a errores cuando se declara una variable sin inicializarla y se procesa en el código antes de haber llegado a su inicialización, lo cual nos suele dar una variable con valor undefined, ya que la variable, si fue almacenada en memoria, pero no se le asignó un valor hasta después de su ejecución. 

~~~
    saludo();

    function saludo(){
        console.log("Hola "+nombre);
    }

    var nombre = "Aaron"
~~~

Output del código anterior --> Hola undefined.

Es por eso que se tiene como buena práctica declarar e inicializar tanto la variable como funciones al inicio de nuestro programa, sin importat donde sean utilizadas, pues de esta manera se evita usarlas antes de ser inicializadas. 
El hoisting solo sucede con las palabras claves ***var*** y ***funtion***, por lo tanto, esto nos dice que solo se da en las versiones ECMAScript 5 o inferiores.
En la versión 6 y superiores se permite la declaración de variables con let y const que son dos nuevas variables que no activan hoisting.

# 📹 Video 9 - Coerción

+ Coericón es la forma en la que podemos cambiar un tipo de valor a otro. Existen dos tipos de coerción:
    + **Coerción implícita:** Es cuando el lenguaje nos ayuda a cambiar el tipo de valor. 
        + Ejemplos:
            + 4 + "7" = "47"; --> el resultado es un String 
            + 4 * "7" = 28; --> el resultado es un número.
            + 2 + true = 3; --> el resultado es un número.
            + false - 3 = -3; --> el resultado es número
    + **Coerción explícita:** Es cuando obligamos a que cambie el tipo de valor.
        + Ejemplos:
            + var = 20;
            + var c = String(a);
            + var d = Number(c);

+ **Diferencias entre ParseInt y Number**
    + **ParseInt:** analiza la cadena desde el primer dígito hasta que encuentre algo que no sea un dígito y devuelve lo que haya analizado.
        + Ejemplo:
            + parseInt("123hui") --> devuelve 123
            + parseInt("hui123") --> devuelve NAN
    + **Number:** Busca convertir toda la cadena en número, por lo que al encontrarse con un elemento que no sea un dígito nos dará como resultado NAN.
        + Ejemplo:
            + Number("123hui"); --> NAN

***
# 📹 Video 10 - Valores: truthy y falsy.

### ¿Qué tipos de valores por default son verdaderos o falsos?

Usamos la función de JS que es Boolean() y dentro del paréntesis ponemos el valor y nos dice si es false o true.

+ falsy:
    + Boolean() --> sin ningún valor es false.
    + Boolean(0) --> es false.
    + Boolean(null) --> es false.
    + Boolean(NaN) --> es false. NaN --> Not a Number
    + Boolean(false) --> false.
    + Boolean("") --> sin espacios es false.

+ Truthy:
    + Boolean(1) --> True. Cualquier numero que no sea iguala cero es true.
    + Boolean("a") --> true
    + Boolean(" ") --> true si es con espacio.
    + Boolean([]) --> true.
    + Boolean({}) --> true. 
    + Boolean(function() {}) --> true
    + Boolean(true)--> true.

# 📹 Video 11 - Operadores: Asignación, Comparación y Aritméticos.

+ Operador Binario:
    + Suma: 3+2
    + Resta: 5-2
    + Multiplicacion: 3*2
    + División: 20/2

+ Concatenación:
    + "Diego" +  "De Granda"

+ Operadores de Asignación.
    + Asignación: var a = 1; --> Asignamos un valor a la variable. 
    + Asignación de adición:	        x += y      x = x + y
    + Asignación de resta:	            x -= y      x = x - y
    + Asignación de multiplicación:	    x *= y	    x = x * y
    + Asignación de división:	        x /= y	    x = x / y
    + Asignación de residuo:	        x %= y	    x = x % y
    + signación de exponenciación	    x **= y	    x = x ** y
    + Asignación de desplazamiento a la izquierda	               x <<= y	     x = x << y
    + Asignación de desplazamiento a la derecha	                   x >>= y	     x = x >> y
    + Asignación de desplazamiento a la derecha sin signo:	       x >>>= y	     x = x >>> y
    + Asignación AND bit a bit	        x &= y	    x = x & y
    + Asignación XOR bit a bit	        x ^= y	    x = x ^ y
    + Asignación OR bit a bit	        x |= y	    x = x | y
    + Asignación AND lógico	            x &&= y	    x && (x = y)
    + Asignación OR lógico	            x ||= y	    x || (x = y)
    + Asignación de anulación lógica	x ??= y	    x ?? (x = y)
   


+ Operadores para comparar: 
    + Igual (==) Devuelve true si los operandos son iguales: 3 == "3" --> true
    + Estrictamente igual (===)	Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS: 3 === "3" --> false
    + Menor que (<)	Devuelve true si el operando izquierdo es menor que el operando derecho: 5 < 3 --> false
    + Mayor que (>)	Devuelve true si el operando izquierdo es mayor que el operando derecho: 5 > 3 --> true
    + Mayor o igual que (>=) Devuelve true si el operando izquierdo es mayor o igual que el operando derecho: 5 >= 3 --> true
    + Menor o igual (<=) Devuelve true si el operando izquierdo es menor o igual que el operando derecho: 5 <= 3 -->  false
    + No es igual (!=)	Devuelve true si los operandos no son iguales. 1 != 4 --> true.
    + Desigualdad estricta (!==)	Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo: 3 !== '3'

+ Operadores unarios:
    
Una operación unaria es una operación con un solo operando.
+ 
    + !false --> negacion de la negacion = true
    + delete
    + typeof
    + void 

+ Operadores Aritméticos
    + Residuo (%)	Operador binario. Devuelve el resto entero de dividir los dos operandos.	
        + 12 % 5 devuelve 2.
    + Incremento (++)	Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno.	
        + Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y , solo entonces, establece x en 4.
    + Decremento (--)	Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.	
        + Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2.
    + Negación unaria (-)	Operador unario. Devuelve la negación de su operando.	Si x es 3, entonces -x devuelve -3.
    + Positivo unario (+)	Operador unario. Intenta convertir el operando en un número, si aún no lo es.	
        + +"3" devuelve 3.
    +true devuelve 1.
    + Operador de exponenciación (**)	Calcula la base a la potencia de exponente, es decir, baseexponente.	
        + 2 ** 3 returns 8.
        + 10 ** -1 returns 0.1.

+ Operadores lógicos
    + AND Lógico (&&)	
        + expr1 && expr2	
        + Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.
    + OR lógico (||)	
        + expr1 || expr2	
        + Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.
    + NOT lógico (!)	
        + !expr	
        + Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.

+ Operadores de cadena
    + Además de los operadores de comparación, que se pueden usar en valores de cadena, el operador de concatenación (+) concatena dos valores de cadena, devolviendo otra cadena que es la unión de los dos operandos de cadena.
    + Por ejemplo:

```
    console.log('mi ' + 'cadena'); // la consola registra la cadena "mi cadena".
```
    + El operador de asignación abreviada += también se puede utilizar para concatenar cadenas. Por ejemplo:

```
    var mystring = 'alpha';
    mystring += 'bet'; // se evalúa como "alphabet" y asigna este valor a mystring.
```
+ Operador condicional (ternario)

El operador condicional es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de dos valores según una condición. La sintaxis es:

```
    condition ? val1 : val2
```

Si condition es true, el operador tiene el valor de val1. De lo contrario, tiene el valor de val2. Puedes utilizar el operador condicional en cualquier lugar donde normalmente utilizas un operador estándar.

Por ejemplo,
```
    var status = (age >= 18) ? 'adult' : 'minor';
```

+ Operador coma

El operador coma (,) simplemente evalúa ambos operandos y devuelve el valor del último operando. Este operador se utiliza principalmente dentro de un bucle for, para permitir que se actualicen múltiples variables cada vez a través del bucle. Se considera de mal estilo usarlo en otros lugares, cuando no es necesario. A menudo, en su lugar pueden y se deben utilizar dos declaraciones independientes.

Por ejemplo, si a es un arreglo bidimensional con 10 elementos en un lado, el siguiente código usa el operador coma para actualizar dos variables a la vez. El código imprime los valores de los elementos diagonales en el arreglo:
```
    var x = [0,1,2,3,4,5,6,7,8,9]
    var a = [x, x, x, x, x];

    for (var i = 0, j = 9; i <= j; i++, j--)
    //                                ^
    console.log('a[' + i + '][' + j + ']= ' + a[i][j]);    
```

## Precedencia de los operadores

La precedencia de los operadores determina el orden en que se aplican al evaluar una expresión. Puedes redefinir la precedencia de los operadores mediante el uso de paréntesis.

La siguiente tabla describe la precedencia de los operadores, de mayor a menor.

+ Precedencia de los operadores
    + Tipo de operador	Operadores individuales
    + miembro	. []
    + llamar / crear instancia	() new
    + negación / incremento	! ~ - + ++ -- typeof void delete
    + multiplicar / dividir	* / %
    + adición / sustracción	+ -
    + desplazamiento bit a bit	<< >> >>>
    + relacional	< <= > >= in instanceof
    + igualdad	== != === !==
    + AND bit a bit	&
    + XOR bit a bit	^
    + OR bit a bit	|
    + AND lógico	&&
    + OR lógico	||
    + condicional	?:
    + asignación	= += -= *= /= %= <<= >>= >>>= &= ^= |= &&= ||= ??=
    + coma	,

# Resumen - JavaScript

+ HTML (Hypertext Markup Langauge - lenguaje de marca de hipertexto): El lenguaje que define el contenido de las páginas web. 
+ CSS (Cascade Style Sheet - Hojas de estilo en Cascada): lenguaje en cual se especifica el diseño de la página web.
+ JavaScript -> Lenguaje para programar el comportamiento de las páginas web.

## Node.js

Node.js es una plataforma de desarrollo basada en JavaScript que nació hace unos 10 años, siendo una de las plataformas más importante de la actualidad. 
Su principal característica es su versatilidad, se puede utilizar para desarrollar aplicaciones web, aplicaciones de servidor, aplicaciones de red, etc.
Está basado en el motor JavaScript v8 de google, cuya tarea es compilar y ejecutar cñodigo de JavaScript. Dicho motor es el que se utiliza en Google Chrome. 

### npm

La plataforma de desarrollo Node.js trae consigo un gestor de paquetes que te permitirá instalar paquetes para el sistema operativo. Las siglas provienen de "Node Package Manager" - "Gestor de paquetes de Node".
Mediante npm vas a ser capaz de instalar paquetes con una sola línea de comandos.
    
Instalación de Node.js --> se descarga de su sitio web la versión LTS y se instala como cualquier aplicación en windows. 

## Entorno de Desarrollo

+ Un entorno de desarrollo es un programa informático que contiene integradas todas las herramientas, utilidades y funcionalidades necesarias para facilitar la tarea de desarrollo de software.  
    + IDE --> Integrated Development Environment o Entorno de desarrollo de trabajo.
    + Tareas --> 
        + Editor de texto: componente con el que escribimos el código fuente.
        + Compilador:  componente que traducirá el código fuente a máquina. 
        + Depurador: componente que permitirá la realización de pruebas de código fuente y eleminicación de errores.
        + Editor gráfico: componente que facilitará la creación y diseño de interfaces gráficas.

## Mi primer JavaScript

```
    console.log("Hola Mundo");
    console.log("Bienvenidos a mi primer JavaScript");
```

1. Paso: ejecutamos el programa que acabamos de escribir. Dos opciones:
    + 1. Utilizar el terminal integrado en Visual Code Studio.
            + VSC --> ventana "Terminal":
                + Nos vamos a la carpeta de archivo: node miPrimerJavaScript.js
    + 2. Ejecutarlo utilizando las funcionalidades que ofrece Visual Studio Code.
        + VSC --> Ventana "Run" o "Ejecutar":
            + Seleccionamos "Run without debugging" o "Ejecutar sin depurar".
                + En la siguiente ventana, seleccionamos Node.js

## Variables y Constante

+ Variables: son datos que se necesita almacenar y utilizar en los programas y que residen en la memoria del ordenador. Tienen la siguiente características:
    + `Nombre`: identificador dentro del código fuente que utilizamos para usarla. 
    + `Valor`: valor que almacena la variable. 

+ En JavaScript, los nombres de las variables empiezan siempre por una letra (mayúsculas o minúsculas) y pueden contener tantas letras (mayúsculas o minúsculas) y números que necesites. A diferencia des con otros lenguajes, tienes que tener en cuenta que las letras que las mayúsculas y minúsculas son letras diferentes, una variable con el nombre de "edad" será diferente a otra llamada "Edad".
    + La declaración de la variable en JavaScript se realiza utilizando la palabra `let o const`:
        + let edad; --> declaramos una variable.
        + let nombre, apellidos; --> aquí declaramos dos variables. 

+ Constantes: son como las variables pero con una gran diferencia, que es que la constante no puede cambiar de valor durente la ejecución del programa. 
    + La declaración de variable de JavaScript se realiza utilizando la palabra `const` en vez de let. 
    + A diferencia de las variables, las constantes siempre tienen que ser inicializadas con un valor. Ejemplos:
        + const pi = 3.1316.
        + const velocidadLuz = 300 000; 

## Operador Asignación:

+ El operador de asginación "=" sirve para asginar un valor a una variable o constante. Ejemplo:
    + edadUsuario = 36; --> Asignamos 36 a edadUsuario;
    + nombreUsuario = "Alfredo"; --> asignamos "Alfredo" a nombreUsuario.

## Mostrando información 

+ Para ello utilizamos la siguiente sentencia
    + console.log("Texto a mostrar");
+ Ejemplo: 
```
    let texto = "Alfredo";
    console.log("Mi nombre es ",  texto)
```
+ %s: cuando en la cadena de texto queremos introducir el valor de una variable. Ejemplo:
```
    let texto = "35";
    console.log("Mi edad es %s años", edad);
```

# 📒 v12 - Condicionales if, else, else if

## if, else y else if
```
    let edad = 18;

    if (edad === 18) {
        console.log("Podrás votar por primera vez");
    }else if( edad > 18){
        console.log("Podrás votar");
    }else{
        console.log("Eres menor de edad, ya no puedes votar");
    }

```

## Operador ternario: condition ? true : false;

```
    let numero = 1;
    let resultado = numero === 1 ? "El valor es 1" : "El valor no es uno";
    console.log(resultado);
```
## ¿Para qué nos sirve el operador ternario?

Para definir una condición, el resultado cuando se cumple y cuando no se cumple, en una sola línea. 

# 📒 v13 - switch

## ¿En qué caso conviene utilizar switch?

Cuando tenemos múltiples casos a evaluar y evitar el uso múltiple de `if-else.` 

```
    let numero = 10;
    switch(numero){
        case 1:
            console.log("Soy 1");
            break;
        case 10:
            console.log("Soy 10");
            break;
        case 100:
            console.log("Soy un 100");
            break;
        default:
            console.log("No soy nada");

    }
```


# 📒 v14 - Arrays

El objeto Array de JavaScript es un objeto global que es usado en la construcción de array, que son objetos de tipo lista de alto nivel. 

## Descripción

+ Los array son objetos similares a una lista cuyo prototipo proporciona métodos para ejecutar operaciones de recorrido y de mutación.
+ Tanto en longitud como el tipo de elementos de una array son variables. 

## Operaciones habituales

### Crear un array

```
    let frutas ["Manzanas","Banana","Mango"];
    console.log(frutas);
```

### Saber su xtensión

```
    frutas.length; //3
```

### Acceder a un elemento

```
    let primerElemento = frutas[0]
    console.log(primerElemento)

```

## Último elemento 

```
    let ultimo = frutas[frutas.length - 1];
```

## Eliminar el último elemento

```
    frutas.pop()
```

## Recorrer Array

```
    frutas.foreach(function(elemento, indice, array){
        console.log(elemento, indice); //manzana 0 | Banana 1 | Mango 2
    });                      
```
## Añadir un elemento al final de un array

```
    frutas.push("Naranja");
```

## Añadir un elemento al principio de un array 

```
    frutas.unshift("fresa");
```

## Eliminar el primer elemento de un Array

```
 frutas.shift();
```

## Encontrar el índice de un elemento del array

```
    frutas.indexOf("Banana"); //1
```

## Eliminar un único elemento mediante su posición o a partir de su posición 

```
    frutas.splice(pos, numElementos)
```
+ pos: posicion en la que partimos.
+ numElementos: cantidad de elementos a borrar. 

## Copiar un Array

```
    let copiarArray = frutas.slice();
```

## Acceso a elementos del Array

```
    console.log(frutas[0]);
    console.log(frutas[frutas.lebgth-1]);
```

+ los arrays pueden contener más array 
+ los elementos principales de una array son: índice y elemento.

# 📒 v15 - Loops: for, for ...of, for ...in

## for 

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y coma, seguidas de una sentencia ejecutada en un bucle.
+ Sintaxis: 
```
    for([expresión-inicial]; [condición]; [expresión-final]){
        sentencia --> la sentencia se ejecuta si la condición es verdadera. 
    }
```

## for ...of

La sentencia `for ...of` ejecuta un bloque de código para cada elemento de un `objeto iterable` como son los String, Array, objetos similares al array (arguments o Nodelist), TypeScript, Map, Set e iterables definidos por el usuario.

+ Sintaxis:
```
    for(variable of iterable){
        statement(sentencia);
    }
```
+ Ejemplo:
```
    let iterable = "boo";
    for(let value of itereble){
        console.log(value); 
    }

```

## for ...in

La instrucción `for ...in` itera sobre todas las propiedades enumarables de un objeto que está codificado por cadenas (ignorando los codificados por símbolos,. incluídos las propiedades enumarables heredadas)

+ Sintaxis:
    + variable: asigna un nombre de propiedad diferente a la variable en cada iteracion.
    + objeto: propieades enumerables que son símbolos que se iteran. 
```
    for(variable in objeto){
        instruccion;
    }
```

### Descripción:

un bucle `for ...in` solo itera sobre propiedades enumerables que no son símbolos. El bucle opera o itera sobre todas las propieades enumerables del objeto en sí y aquellas que el objeto hereda de su cadena de prototipos (las propiedades de los prototipos más cercano tiene prioridad sobre las propiedades de los prototipos más alejados del objeto en su cadena de prototipos).

+ Nota: `for ...in` no se debe de usar para iterar array donde el orden de las cosas del índice es importante.

### ¿Por qué usar for ...in?

Dado que `for ...in` está construido para iterar propieades de objetos, no se recomienda su uso con arreglos y opciones como Array.protopype.foreach() y, además, existe `for ...of`.

### ¿Cuál podría ser el uso de for ...in?

 Es posible que se utilice en forma más práctica con fines de depuración, ya que es una forma fácil de comprobar las propiedades de un objeto(mediante la salida por consola). En los casos que se prefiere un par de clave-valor para trabajar con datos, puede haber casos en los que se desee comprobar si alguna de esas clases cumple un valor particular. 

+ Ejemplos: 

El siguiente bucle `for ...in` itera sobre todas las propiedades enumerables que no son símbolos del objeto y registra una cadena de los nombres de propiedad y su valores. 
```
let obj = {a:1, b:2, c:3}
for(const prop in obj){
    console.log(`obj.${prop} = ${prop}`);
}

```
+ Output: 
    + obj.a = 1
    + obj.b = 2
    + obj.c = 3

+ Ejemplo con funciones: 

```
    let estudiantes = ["María", "José", "Sergio", "Andrés"];
    
    function saludarEstudiantes(estudiante){
        console.log(`Hola, ${estudiante}`);
    }

    for(let i = 0; i < estudiante.length; i++){
        saludarEstudiantes(estudiantes[i]);
    }

    for(let estudiante of estudiantes){
        saludarEstudiantes(estudiante);
    }
```

# 📒 v16 - Loops: While, do - While

## While

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúa como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

+ sintaxis:
    + si la condición es verdadera se ejecuta la sentencia.

```
    while(condicion){
        sentencia;
    }
```

## Do - While

La sentencia `do - while` crea un bucle que ejecuta una sentencia específica, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia dando como resultado que la sentencia se ejecute al menos una vez. 

+ sintaxis:
    + la sentencia se ejecuta al menos una vez.
    + se evalúa la condición después de cada bucle.

```
    do{
    sentencia;
    }while(condición)
```

+ Ejemplo:

```
    let estudiantes = ["María", "Sergio", "Rosa", "Andres"];

    function saludarEstudiantes( estudiante){
        console.log(`Hola, ${Estudiante});
    }

    do{
        let estudiante = estudiantes.shift(); // eliminamos el primer elemento del array.
        saludarEstudiantes(estudiante);

    }while(estudiantes.length > 0) //en cuanto eliminemos todos los elementos el bucle deja de iterar. 
```

# 📒 v17 - Objects

La clase Object representa uno de los tipos de datos de JavaScript. Es usado para guardar una colección de datos definidos y entidades más complejas. 

```
    var miAuto = {
    marca : "Toyota",
    modelo: "Corolla",
    anio: 2020,
    //metodo de objeto
    detalleDeAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
};

    console.log(miAuto);
    console.log(miAuto.anio)
    console.log(miAuto.detalleDeAuto());
```

# 📒 v18 - Objects: Función Constructor

El constructor Object crea una envoltura de objeto al valor dado. Si el valor es `null o undefined` creará o retornará un objeto vacío de otra forma. Retornará un objeto de un tipo que corresponda al valor dado. Si el valor ya es un objeto devolverá el valor.

+ sintaxis:
```
    new Object([value])
```

# 📒 v19 - Métodos de recorridos de Array

## Filter()

El método `filter()` nos permite filtrar solo los elementos que deseamos según ciertos criterios y devolvemos en un nuevo array. 

## Map()

El método `Map()` crea un nuevo array con los resultados de la llamada a la función indicada aplicada a cada uno de los sus elementos.

+ Ejemplo:
```
    let articulos = [
        {nombre: "Bici", costo: 3000},
        {nombre: "Tv", costo: 2500},
        {nombre: "Libro", costo: 320},
        {nombre: "Celular", costo: 10000},
        {nombre: "Teclado", costo: 500},
        {nombre: "Audifono", cost: 1700}
    ];

    //Metodo Filter
    let articulosFiltrados = articulos.filter(
        function(articulo){
            return articulo.costo <= 500;
        }

    );

    console.log(articulosFiltrados);

    //Metodo Map
    let nombreArticulos = articulos.map(
        function(articulo){
            return articulo.nombre;
        }
    );
    console.log();
    console.log(nombreArticulos);

```

# 📒 v20 - Recorriendo Arrays con .find(), .foreach() y .some()

## find()

El método `find()` devuelve el primer elemento del array que cumpla con la condición dada. 

```
let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifono", cost: 1700}
];

//Metodo .find()
let encuentraArticulo = articulos.find(
    function(articulo){
        return articulo.nombre === "Tv";
    }
);
console.log(encuentraArticulo);

```
## foreach()

El método `foreach()` ejecuta lo que le definimos una vez por cada elemento de nuestro array.

```
    let articulos = [
        {nombre: "Bici", costo: 3000},
        {nombre: "Tv", costo: 2500},
        {nombre: "Libro", costo: 320},
        {nombre: "Celular", costo: 10000},
        {nombre: "Teclado", costo: 500},
        {nombre: "Audifono", cost: 1700}
    ];

    //Metodo .forEach
    articulos.forEach(
    function(articulo){
        console.log(articulo.nombre);
    }
);

```
## some()

El método `some()`comprueba si al menos un elemento del array cumple con la condición que le damos. 
```
    let articulos = [
        {nombre: "Bici", costo: 3000},
        {nombre: "Tv", costo: 2500},
        {nombre: "Libro", costo: 320},
        {nombre: "Celular", costo: 10000},
        {nombre: "Teclado", costo: 500},
        {nombre: "Audifono", cost: 1700}
    ];

    //Metodo .Some(): solo nos devuelve true o false
    var articulosBaratos = articulos.some(
        function(articulo){
            return articulo.costo <= 700;
        }
    );

    console.log(articulosBaratos);
```

# 📒 v21 - Eliminado un elemento de un Array 

## Médodo .push()

El método `push()`  nos permite agregar uno más elements al final de un array. 

 + Ejemplo con número: 
```
    let numArray = [1,2,3,4,5];

    function newNum(){
        numArray.push()
    }

    console.log(numArray);
```
+ Ejemplo con cadena:
```
    let textArray = ["Ana", "María"];
    
    function addChar(){
        textArray.push("Sergio");
    }
    
    console.log(textArray);
```

## Médodo shift()

El método shift() nos permite eliminar un elemento del array que esté en el índice 0.
+ Ejemplo:
```
    let array = [1,2,3,4,5];
    console.log(array);

    let shiftArray = array.shift();
    console.log(array);
```

## Médodo pop()

El método `.pop()` elimina el última elemento de a un array.
+ Ejemplo:
```
    let array = [1,2,3,4, 5]
    console.log(array);

    let popArray = array.pop();

    console.log(popArray); 
```