undécimo-crítico-css
versión npm descargas npm Licencia Más bonita

Once plugin para extraer y insertar CSS crítico (en la mitad superior de la página) de sus plantillas HTML.

¡Puede agregar fácilmente este complemento a su proyecto Eleventy en solo dos pasos o puede usarlo index.jscomo referencia para su propia implementación de CSS crítico!

Empezar
Instalar en pc eleventy-critical-css
npm install eleventy-critic-css --save
Agregue el complemento a su configuración de Eleventy en .eleventy.js
const  criticalCss  =  requiere ( "eleventy-crítico-css" ) ;

módulo . exportaciones  =  función  ( eleventyConfig )  { 
  eleventyConfig . addPlugin ( criticalCss ) ; 
} ;
Configuración
Este complemento utiliza Critical de Addy Osmani para extraer un elemento crítico en línea de las plantillas HTML, es decir, cualquier plantilla con una ruta de salida que termine en .html.

Puede pasar opciones a Critical como un segundo parámetro de addPlugin:

const  criticalCss  =  requiere ( "eleventy-crítico-css" ) ;

módulo . exportaciones  =  función  ( eleventyConfig )  { 
  eleventyConfig . addPlugin ( criticalCss ,  { 
    minify : verdadero , 
    altura : 1.080 , 
    anchura : 1920 , 
  } ) ; 
} ;
Puede ver todas las opciones para Critical en el repositorio de GitHub .

Opciones predeterminadas
Las opciones predeterminadas que se pasan a Critical son:

{ 
  assetPaths : [ ruta . dirname ( outputPath ) ] , 
  base : esto . _config . dir . output , 
  html : content , 
  inline : true , 
  minify : false , 
  rebase : ( {  originalUrl  } )  =>  originalUrl , 
}
Donde contenty outputPathson los argumentos pasados ​​a Eleventy transforma .

Lanzamientos 6
v0.2.2
Último
