# Todo de JavaScript (Mis notas)

## 📹 Video 1 - ¿Que es JavaScript?
 
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

## 📹 Video 2 - ¿Por qué JavaScript?

+ Comunidad enorme.
+ Desarrollo de Apps --> React Native
+ Desarrollo de Apps para Desktop
    + Electron.
        + Mac 
        + Windows
+ Backend/IO

## 📹 Video 3 - Elementos de un lenguaje de programación: Variables, funciones y sintexis

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

## 📹 Video 4 - Variables en JavaScript

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
     
## 📹 Video 5 - Funciones en JavaScript.

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
## 📹 Video 7 - Scope.

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
## Video 8 - Hoisting

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

## 📹 Video 9 - Coerción

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
## 📹 Video 10 - Valores: truthy y falsy.

- ¿Qué tipos d




                
