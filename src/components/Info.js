import React,{Fragment} from 'react';

const Info  = () => {
    return ( 
        
<Fragment>



<div class="pt-8 sm:pr-6 md:pb-4 lg:pl-5 xl:px-9 px-4 flex flex-col justify-center bg-grey-lighter">
        <div class="justify-center"><span class="font-light text-gray-600 ">Preguntas</span>
</div>

      
        <div class="mt-2">
        <div class="flex justify-between items-center">

<a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">JavaScript</a>
</div>
            <p class="mt-2 text-gray-600">1.- &iquest;Por qu&eacute; el DOM es importante en Javascript?<br /><strong>A. Gracias al DOM podremos modificar de forma sencilla el HTML</strong><br />B. El DOM es el espacio donde corre Javascript<br />C. Permite construir APIs y hacer que javascript corra en todos los navegadores</p>
<p>2.- &iquest;Cu&aacute;l de las siguientes no es forma de definir comentarios en Javascript?<br /><strong>A. //</strong><br /><strong>B. /*</strong><br />C. **</p>
<p>3.- &iquest;C&oacute;mo podemos diferenciar un string de un identificador?<br />A. Los strings est&aacute;n envueltos por comillas dobles, los identificadores por simples<br />B. Los strings est&aacute;n envueltos por comillas simples, los identificadores por dobles<br />C. Los string no van envueltos en comillas, los identificadores si<br /><strong>D. Los string van envueltos en comillas, los identificadores no</strong></p>
<p>4.- &iquest;Cu&aacute;l es la diferencia entre una funci&oacute;n y una declaraci&oacute;n?<br /><strong>A. En las declaraciones el identificador va acompa&ntilde;ado por la expresi&oacute;n var</strong><br />B. En las declaraciones se asigna un valor a la variable<br />C. En las definiciones se asigna un valor en la variable</p>
<p>5.- &iquest;Qu&eacute; hace typeof()?<br /><strong>A. Devuelve como un string el tipo de dato</strong><br />B. Muestra en la pantalla el tipo de dato<br />C. Permite cambiar el tipo de dato</p>
<p>6.- 1 + &ldquo;1&rdquo; es =<br />A. error<br />B. 2<br /><strong>C. &ldquo;11&rdquo;</strong></p>
<p>7.- &iquest;Qu&eacute; sucede si uno no pone las llaves alrededor del if?<br /><strong>A. Solo la primera linea de codigo despues del if se considera dentro</strong><br />B. Es un error<br />C. El if no se eval&uacute;a</p>
<p>8.- &iquest;Cu&aacute;l es la diferencia entre while y do while?<br /><strong>A. while eval&uacute;a la condici&oacute;n antes y do while despu&eacute;s</strong><br />B. do while eval&uacute;a la condici&oacute;n antes y while despu&eacute;s<br />C. No hay diferencia<br />D. do while no existe en javascript</p>
<p>9.- Si se define var variable = 100 dentro de un do while<br />A. Se puede acceder al valor una vez terminado el bloque<br /><strong>B. No se puede acceder al valor de la variable una vez terminado el bloque</strong><br />C. Se puede utilizar la variable pero no se puede acceder a el valor</p>
<p>10.- &iquest;Qu&eacute; sucede si javascript se top con la instrucci&oacute;n continue durante de un while?<br />A. Salta todo lo que viene y vuelve al principio<br />B. Termina el while<br /><strong>C. Salta todo lo que viene y vuelve al principio y adem&aacute;s incrementa el contador</strong></p>
<p>11.- &iquest;Qu&eacute; hace un break dentro de dos whiles anidado?<br /><strong>A. Rompe los dos whiles</strong><br />B. Rompe el while de m&aacute;s adentro<br />C. Rompe el while de m&aacute;s afuera<br />D. No es posible ocupar break dentro de whiles anidados</p>
<p>12.- &iquest;Cu&aacute;l es el problema con el siguiente c&oacute;digo?</p>
<p><strong>A. Cae en un loop infinito</strong><br />B. Causar&aacute; error porque no se pueden utilizar variables creadas fuera de un bloque while<br />C. No hay error, mostrar&aacute; hola 10 veces y terminar&aacute;<br />D. sale del c&oacute;digo al primer intento y no muestra nada.</p>
<p>13.- &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?<br />A. El orden de los par&aacute;metros en una funci&oacute;n no importa<br />B. <strong>El retorno de una funci&oacute;n en javascript es impl&iacute;cito</strong><br />C. Desde una funci&oacute;n no se puede llamar a otra<br />D.<strong> La cantidad de argumentos que puede recibir una funci&oacute;n es pr&aacute;cticamente ilimitada</strong></p>
<p>14.- &iquest;Qu&eacute; significa que las funciones sean de primera clase?<br />A. que las funciones se resuelven primero antes que cualquier otra cosa<br />B. que las funciones pueden llamar otras funciones dentro de ellas.<br /><strong>C. que una funci&oacute;n puede aceptar como par&aacute;metro una funci&oacute;n y puede devolver funciones</strong><br />de<br />D. la misma forma como lo hace con otros objetos.</p>
<p>15.- En javascript los arreglos son:<br />A. <strong>mutables</strong><br />B. inmutables<br />C. de largo fijo<br />D. de ancho fijo</p>
<p>16.- En javascript un arreglo se declara<br />A. var a = ()<br />B. var a = {}<br />C. var a = Array<br /><strong>D. var a = []</strong></p>
<p>17.- Los &iacute;ndices de los array empiezan a contar desde<br /><strong>A. 0</strong><br />B. 1<br />C. no hay un valor de comienzo</p>
<p>18.- &iquest;Cu&aacute;l de los siguientes datos no puede guardar un arreglo?<br />A. Un objeto<br />B. Otro arreglo<br />C. Puede guardar cualquier tipo de dato mientras todos los tipos dentro sean iguales<br />D. No hay restricci&oacute;n en este aspecto</p>
<p>19.- &iquest;Cu&aacute;l de las siguiente afirmaciones respecto al largo del arreglo es falsa?<br /><strong>A. Una vez declarado no puede ser cambiado</strong><br />B. Es din&aacute;mico<br />C. length devuelve el tama&ntilde;o del arreglo</p>
<p>20.- &iquest;Qu&eacute; hace push?<br />A. empuja un elemento fuera del arreglo<br />B. <strong>mete un elemento dentro del arreglo por la derecha</strong><br />C. mete un elemento dentro del arreglo por la izquierda</p>
<p>21.- &iquest;Cu&aacute;l de estas formas no sirve para crear un objeto nuevo y vac&iacute;o<br /><strong>A. var obj = {}&nbsp;&nbsp;</strong></p>
<pre class="lang-js prettyprint prettyprinted"><code> <span class="com">//object literal</span></code></pre>
<p><br /><strong>B. var obj = new Object()&nbsp; // no&nbsp; recomendado&nbsp;</strong><br />C. var obj = new ()</p>
<p>22.- Respecto a: var obj =a: 5, b:7, &iquest;es falso que?<br />A. a es una propiedad del objeto obj</p>
<p>B. obj[&amp;quot;a&amp;quot;] es 5<br />C. obj es un objeto literal<br /><strong>D. obj es inmutable</strong><br />E. console.log(obj.b) mostrar&aacute; en pantalla 7</p>
<p>23.- Si la clave c no est&aacute; definida en el objeto a, al agregar obj["c"] = 9;<br />A. se agregar&aacute; la clave c con el valor 9<br />B. se agregar&aacute; la clave 9 con el valor c<br /><strong>C. mostrar&aacute; error puesto que no se pueden agregar claves a un objeto literal</strong><br />D. al agregar la clave se devolver&aacute; un nuevo objeto con el valor, sin embargo el objeto<br />original permanecer&aacute; inalterado</p>
<p>24.- &iquest;Puede un m&eacute;todo aceptar un objeto como par&aacute;metro?<br /><strong>A. si</strong><br />B. no<br />C. s&oacute;lo si el objeto no es un objeto literal</p>
<p>25.- Dentro de un m&eacute;todo this<br />A. es una referencia al objeto<br />B. es una copia del objeto<br /><strong>C. es el padre del objeto</strong><br />D. es una propiedad del objeto</p>
<p>26.- Si abrimos la consola del inspector de elementos y escribimos console.log(this)<br />obtendremos.<br />A. El objeto Object<br />B. error, a causa de que this es undefined<br /><strong>C. El objeto Window</strong><br />D. El objeto Document</p>
<p>27.- &iquest;Qu&eacute; devuelve la funci&oacute;n constructora?<br /><strong>A. un objeto</strong><br />B. un m&eacute;todo<br />C. una funci&oacute;n<br />D. un string</p>
<p>28.- &iquest;Qu&eacute; ventaja tiene la funci&oacute;n constructora sobre los objetos literales?<br />A. La funci&oacute;n constructora puede tener m&eacute;todos, el objeto literal no<br /><strong>B. La funci&oacute;n constructora sirve de molde para construir m&uacute;ltiples objetos</strong><br />C. La funci&oacute;n constructora no puede tener m&eacute;todos lo que la hace m&aacute;s r&aacute;pida que un<br />objeto literal<br />D. Son lo mismo por lo que no hay ninguna ventaja</p>


        </div>
       
        <div class="pl-4">
        <div class="flex justify-between items-center">

<a class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Git</a>
</div>

            <p>1.- &iquest;Cu&aacute;les son los tres estados de un archivo en GIT?<br /><strong>A. confirmado, modificado, a&ntilde;adido</strong><br />B. confirmado, preparado, a&ntilde;adido<br />C. a&ntilde;adido, confirmado, modificado<br />D. confirmado, preparado, modificado</p>
<p>2.- &iquest;Qu&eacute; hace git init?<br />A. agrega un archivo<br />B. env&iacute;a los cambios al servidor<br /><strong>C. crea el directorio .git</strong><br />D. confirma los cambios para git</p>
<p>3.- &iquest;Qu&eacute; hace git add?<br />A. agrega un archivo o los cambios a staging<br />B. confirma los cambios<br /><strong>C. agrega un archivo a cambio confirmado</strong><br />D. crea un archivo nuevo listo para git</p>
<p>4.- &iquest;Qu&eacute; hace git commit -am? add y message<br /><strong>A. agrega los cambios y luego los confirma</strong><br />B. env&iacute;a los cambios<br />C. confirma los cambios<br />D. corrige el &uacute;ltimo commit</p>
<p>5.- git reset HEAD prueba1<br />A. descarta los cambios del archivo prueba<br />B. saca de la &uacute;ltima confirmaci&oacute;n el archivo prueba1<br />C. saca de satiging el archivo prueba1<br /><strong>D. saca del stash el archivo prueba1</strong></p>
<p>6.- &iquest;Qu&eacute; hace git checkout -b?</p>
<p>A. crea un branch nuevo<br />B. cambia de branch<br />C. vuelve al branch master<br /><strong>D. crea un branch nuevo y hace el cambio a ese branch</strong></p>
<p>7.- git pull vs fetch<br />A. Pull es un alias de fetch<br /><strong>B. Fetch descarga los cambios y pull hace el merge</strong><br />C. Pull descarga los cambios y fetch hace el merge<br />D. Pull env&iacute;a los cambios y fetch los descarga</p>
<p>8.- &iquest;C&oacute;mo se borra un remote?<br />A. git remote rm origin nombre_branch<br />B. git remote destroy nombre_branch<br /><strong>C. git remote rm nombre_branch</strong><br />D. git remote -remove nombre_branch</p>
<p>9.- &iquest;C&oacute;mo se env&iacute;an los cambios al branch master de un punto remoto?<br /><strong>A. git pull origin master</strong><br />B. git push origin master<br />C. git fetch origin master<br />D. git pull remote master</p>
<p>10.- &iquest;A qu&eacute; se debe el error Updates were rejected because the tip of your current branch is<br />behind hint: its remote counterpart.?<br />A. Tu branch tiene cambios m&aacute;s nuevos que el remote, o sea que falta hacer push<br /><strong>B. El remote tiene cambios m&aacute;s nuevos que el de tu branch, o sea que falta hacer pull</strong><br />C. Tu branch tiene cambios m&aacute;s nuevos que el remote, o sea que falta hacer pull<br />D. El remote tiene cambios m&aacute;s nuevos que el de tu branch, o sea que falta hacer push</p>
<p>11.- &iquest;C&oacute;mo se puede cambiar el remote?<br />A. git remote change new_remote<br /><strong>B. git remote rm y luego git remote add</strong></p>
<p>C. git remote add -c new_remote<br />D. git remote rm -c new_remote</p>
        </div>

        
    </div>








    </Fragment>
   
     );
}
 
export default Info ;