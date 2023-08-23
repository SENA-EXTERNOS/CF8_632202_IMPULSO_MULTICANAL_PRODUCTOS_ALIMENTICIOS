<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 La cadena de valor

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/38.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La logística juega un papel fundamental en la cadena de suministro o cadena de valor, las teorías y el manejo que se le da han venido evolucionando. Por ejemplo, para el caso del manejo de almacenamiento se ha generado un cambio, ya que, anteriormente se pensaba que lo mejor era manejar grandes volúmenes de inventario sin importar el costo, lo importante era adquirir productos durante las gangas o precios bajos, hoy en día se debe ser muy inteligente para generar estas compras, porque es necesario pensar en los costos de almacenamiento y la rotación de los productos, entre otros factores. (Mauleón y Prado, 2021, 297). 

    h4.mb-5(data-aos="zoom-in-left") Eslabones de la cadena 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        p(data-aos="fade-down").text-center La cadena de suministro debe ser lo suficientemente fuerte como para no afectar ninguno de sus eslabones, porque si algo se presenta esto se refleja en el consumidor final. Los eslabones de la cadena son el abastecimiento, la fabricación y la distribución, cada uno de ellos debe ser lo suficientemente fuerte, ya que en la actualidad se menciona que la competencia no es entre una organización o empresa y otra, sino entre una cadena de suministro y otra.  

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')      
      .col-lg-7.my-3(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Abastecimiento")
            .col-12
              p Para el abastecimiento se debe tener presente la demanda. Esta es fundamental porque va a marcar el punto de inicio para los inventarios, ya sea con estudios de mercado o investigaciones que analicen el comportamiento de los clientes, con el fin de manejar cantidades idóneas; también se puede hacer uso de técnicas como <i>just-in-time</i>, la cual indica tener la cantidad necesaria en el momento indicado, sin caer en sobrecostos. Sin embargo, no se puede pensar que los inventarios son innecesarios u obsoletos, puesto que, dependiendo del tipo de actividad económica, estos van a ser necesarios en mayor o menor medida; por ejemplo, en el caso de los productos alimenticios de los supermercados se debe tener la cantidad necesaria, considerando que se van a tener clientes durante todo el día, y que es importante tener productos de diferentes variedades y presentaciones que el cliente pueda tomar en todo momento, de lo contrario, se estaría perdiendo una venta. Por esto la gestión de inventarios y la rotación de los productos debe ser precisa.  
          .row.justify-content-center.align-items-center(titulo="Fabricación")
            .col-12
              p Como segundo eslabón de la cadena de valor se tiene la fabricación. Se presenta en empresas dedicadas exclusivamente a la compra y venta de productos, o que permiten agregar valor en los diferentes procesos a ciertos artículos, pasando, por ejemplo, de una materia prima a un producto elaborado que suelen vender al por mayor. En esta etapa el control de calidad es fundamental, desde el momento en que se reciben los productos y pasando por cada una de las secciones o etapas, ya que se debe garantizar la calidad a la siguiente estación, y así entregar un producto idóneo, evitando reprocesos que se convierten en sobrecostos para la compañía.  
          .row.justify-content-center.align-items-center(titulo="Distribución")
            .col-12
              p En tercera instancia encontramos la distribución, la cual se puede dividir en diferentes secciones, desde la logística que se realiza en el interior de las bodegas, sus centros de distribución, así como la llamada logística de última milla, o la entrega final a cada uno de los clientes. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 División de la distribución
                  p.mb-0 Para ampliar la información sobre las divisiones de la distribución se le invita a revisar el siguiente anexo: Anexo 2.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_Division_de_la_distribucion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-8.bg2.p-4.my-3(data-aos="fade-left")
        p(data-aos="fade-down").mb-0.p-3 Actualmente, cada vez cobra mayor importancia la necesidad de reducir los desechos y residuos que todos generamos. Por lo general, la mayoría de los residuos sólidos son envases o recipientes, así como embalajes, como sucede en el caso de los refrescos, bebidas carbonatadas, lácteos, entre otros, y es allí donde la logística inversa busca la recuperación de los residuos originados por una actividad de consumo o productiva. (Espejo, 2022, 5).
      .col-lg-4.p-0.my-3
        img.img-t.img-m(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')

    h4.mb-5(data-aos="zoom-in-left") Logística inversa

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='')      
      .col-lg-8.my-3
        p(data-aos="fade-down") La logística inversa surgió con el ánimo de ayudar en el cuidado de nuestro medio ambiente, ya que, en este sector, al igual que en todas las industrias, se debe innovar con técnicas o estrategias que permitan ser responsable con el medio ambiente. Por esta razón existe la logística inversa, la cual se encarga de la recuperación y reciclaje de todos estos envases, embalajes y residuos considerados peligrosos; también se encarga de los procesos de retorno de los excesos de inventario y de las devoluciones por parte de los clientes, que pueden ser productos con fallas, temas de garantía, obsoletos o inventarios que se generan por temporadas, como por ejemplo en Navidad. Con la logística inversa se permite recopilar todo este tipo de materiales que se reutilizan, se reciclan permitiendo darles un segundo uso o se destruyen de manera segura.  
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 Otro tipo de elementos que se pueden recopilar mediante la logística inversa son los derivados de procesos industriales o de construcción, también los de la industria automotriz, como por ejemplo neumáticos fuera de uso y residuos de equipos electrónicos, ya que estos tipos de desechos no pueden ser depositados en la basura residencial. 
        p(data-aos="fade-down") A continuación, se listan algunas de las ventajas y desventajas de la logística inversa. 

    p(data-aos="fade-down").mb-5 Las ventajas que se obtienen al aplicar la logística inversa son:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/44.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Cuida el medio ambiente 
            p.mb-0 Al reducir los impactos medioambientales que se puedan llegar a generar por los residuos de las industrias.

      .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/45.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reduce los costos
            p.mb-0 Porque al reciclar, reutilizar e incluso fabricar productos completamente nuevos, se permite ahorrar grandes sumas de dinero, dado que no se debe invertir en los mismos volúmenes de materias primas o envases, embalajes, etc.

      .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/46.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Aumento del material reciclado
            p.mb-0 Permite aumentar la cantidad, así como la calidad de los materiales reciclados, a los que se busca darles un segundo uso, puesto que en muchas ocasiones el proceso de reciclaje no tiene la finalidad deseada.

      .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/47.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Mejora las relaciones 
            p.mb-0 Entre el cliente y los diferentes proveedores, dado que ambas partes se benefician de este proceso.

    p(data-aos="fade-down").mb-5 Algunas desventajas de la logística inversa son:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Aumenta el trabajo ") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            h4 Aumenta el trabajo  
            p Porque los procesos de logística inversa no son sencillos, requieren un esfuerzo y se debe gestionar la cadena de suministros de manera adecuada, realizando una programación que funcione correctamente. Para implementar todo este proceso de logística inversa se requiere aumentar el personal o la distribución de la jornada laboral. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')   

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Requiere la participación <br>de todas las áreas <br>de la empresa") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            h4 Requiere la participación de todas las áreas de la empresa 
            p Mediante este proceso una gran parte de la compañía debe involucrarse, de lo contrario, solo se conseguirá aumentar el trabajo sin obtener algún beneficio. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='')  
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Contar con <br>personal calificado") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            h4 Contar con personal calificado 
            p Realizar revisión para cada uno de los productos que se devuelven, esto exige contar con personal calificado para la inspección, generando un costo adicional. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='') 

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Devolución de cantidades<br> muy <br>reducidas de producto") 
        .row.justify-content-center.align-items-start
          .col-lg-8
            h4 Devolución de cantidades muy reducidas de producto
            p Esto ocasiona que los costos de recolección, transporte, inspección y manufactura sean muy elevados para cantidades que no merecen ese trabajo. 
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='')


    h4.mb-5(data-aos="zoom-in-left") Trazabilidad del producto

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img.img-h(
        :style="{'background-image': `url(${require('@/assets/curso/temas/53.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La trazabilidad hace referencia a conocer el historial que ha tenido un producto, qué lugares ha visitado, con quién ha tenido contacto y qué procedimientos o inspecciones se han realizado, pues todo esto es fundamental al momento de garantizar la autenticidad, así como la seguridad o calidad de un producto, puesto que, si se presenta una intoxicación por algún producto enlatado, por ejemplo, permite saber qué lotes se deben retirar en caso de que se compruebe la contaminación o que los productos allí contenidos estén defectuosos. 

    h4(data-aos="fade-down") Tipos de trazabilidad 
    p(data-aos="fade-down").mb-5 Al momento de conseguir la trazabilidad de un bien o producto, se debe tener presente que existen tres tipos y que deben funcionar de manera conjunta, estableciendo una cadena sin ningún tipo de interrupción; solo de esta manera se podrá obtener la trazabilidad integral del producto.

    TabsC.color-acento-contenido(data-aos="fade-right").mb-5     
      .py-3.py-md-4(titulo="Trazabilidad hacia atrás")
        .row
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='')            
          .col-md-5.mb-4.mb-md-0
            p Como lo menciona Espejo (2022) “la trazabilidad hacia atrás valida el origen del producto, así como de sus componentes” (49), es decir, se encarga de revisar las materias primas, permitiendo tener control de los productos que ingresan a la planta de producción y asegurando que cumplen con los requisitos, tanto por normativa como por lineamientos de calidad. La trazabilidad hacia atrás se obtiene respondiendo a interrogantes como:
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Qué productos he recibido?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Cuántas unidades?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿De dónde proviene la mercancía?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿En qué fecha lo he recibido?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Cuál es la fecha de vencimiento?               
      .py-3.py-md-4(titulo="Trazabilidad interna")
        .row
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.png', alt='')            
          .col-md-5.mb-4.mb-md-0
            p La trazabilidad interna requiere que los proveedores y demás implicados aporten toda la documentación, como facturas, resultados de los controles y análisis realizado a los productos, certificados obtenidos y todo tipo de material que permita conocer acerca del producto. La trazabilidad interna centra su atención principalmente en los procesos que ocurren al interior de las propias instalaciones, involucrando los procesos relacionados con abastecimiento y transformación. Para fijar la trazabilidad interna se debe conservar todos los datos que se van obteniendo durante el proceso de transformación que se realice al producto, a través de preguntas como:
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Cuándo se planea transformar los productos?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Quién es el responsable de la transformación?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Cuáles son las materias primas que emplean?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Cuál es el producto final?                
      .py-3.py-md-4(titulo="Trazabilidad hacia adelante")
        .row
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')            
          .col-md-5.mb-4.mb-md-0
            p Por último, la trazabilidad hacia adelante permite conocer la ruta del producto que se ha fabricado o al cual se le ha agregado valor. Para fijar su trazabilidad se responde a preguntas como: 
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Cuál es el producto que se envía?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Quién será el destinatario del producto?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿De qué almacén se envía el producto?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Fecha de envío y de recepción?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿Cuál es el medio de transporte?
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ¿A qué dirección se realiza el envío?

    h4(data-aos="fade-down") ¿Cómo realizar la trazabilidad de un producto?
    p(data-aos="fade-down").mb-5 A continuación, se ilustra el paso a paso para fijar la trazabilidad de un producto:   

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-7.my-3(data-aos="fade-left")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Establecer políticas de agrupación de productos") Por lo general se realiza mediante lotes, aunque no es la única manera. Con estas agrupaciones se puede generar un código y posteriormente al etiquetado del producto.<br><br> Si por alguna razón se debe retirar de circulación un producto o un lote, en cuanto más precisa hubiese sido la agrupación, más fácil será realizar el retiro y menos impacto se causará, ya que no es lo mismo retirar los productos que se fabricaran en un día completo que aquellos que se originaron en una hora específica.   
          p(numero="2" titulo="Documentar el proceso") Fijar la trazabilidad de algún producto requiere documentar todo el proceso, ya sea de forma tradicional, en papel o a través de la digitalización, y es aquí donde la automatización y las nuevas tecnologías son de gran ayuda. Adicionalmente, se debe realizar de manera conjunta con todos los miembros de la cadena de suministro, ya que todos tienen información de vital importancia para la trazabilidad.    
          p(numero="3" titulo="Herramientas y equipos") Para esta tarea se suelen emplear herramientas o equipos que faciliten el trabajo de recopilación de información, como la identificación por radiofrecuencia RFID o códigos de barras, con esto se recopilan datos asociados a lo siguiente:<br><br>
            ul.lista-ul.ps-3
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Entrada y salida de productos como materias primas u otros materiales.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Registros de las operaciones realizadas en la planta.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Información de los productos terminados.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Datos de los controles realizados.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Registrar fecha y hora de la salida de productos.           
          p(numero="4" titulo="Monitoreo constante") Por último, se debe comprobar que todo lo relacionado con la recopilación de información, así como todas las medidas para fijar la trazabilidad del producto, funcionan correctamente. Por esta razón, el monitoreo constante de los procesos es fundamental, dado que permite detectar a tiempo algún tipo de anomalía o imperfección y ser corregida en el menor tiempo posible, evitando costos o impactos mayores. Con los avances tecnológicos, actualmente se pueden utilizar monitoreos para temperatura, presión o humedad, dependiendo del proceso; asimismo, sensores o cámaras que transmiten la información en tiempo real a centrales de datos y que hacen los análisis correspondientes, con el fin de identificar desviaciones de los parámetros, permitiendo conocer, por ejemplo, si una máquina presenta avería o no está funcionando bajo los parámetros establecidos.   

      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='')                 
               
    .row.justify-content-center.align-items-center      
      .col-lg-10               
        .cajon.color-primario.p-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.                
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
