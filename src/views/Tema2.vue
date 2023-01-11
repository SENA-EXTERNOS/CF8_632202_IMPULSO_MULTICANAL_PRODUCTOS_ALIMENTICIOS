<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Gestión de inventarios
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") Como ya hemos identificado algunas características asociadas con la gestión de la calidad de los alimentos y las consecuencias por no cumplir con los estándares de calidad en la producción y comercialización de alimentos, vamos a aprender sobre otro aspecto fundamental para el control de la calidad, y es la gestión de los inventarios.      
        .cajon.color-primario.p-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 El inventario es el proceso mediante el cual se registran los artículos o los materiales que una empresa posee, con la intención de venderlos a futuros clientes. La gestión de inventario es fundamental durante la cadena de suministro; se debe realizar un seguimiento desde el momento de la fabricación hasta los centros de distribución, y desde allí hasta los supermercados o puntos de venta. Lo que se busca con la gestión de inventario es tener los productos correctos en el momento y lugar preciso. 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='') 
    p(data-aos="fade-down").mb-5 Para llevar un control adecuado de los inventarios se deben realizar los pedidos en el momento idóneo, procurando no afectar la disponibilidad del producto en los puntos de venta, realizando la rotación adecuada para evitar productos vencidos que afecten la salud de los clientes, que contaminen otros productos, y en especial, que impacten de manera negativa la imagen de la compañía, y por consiguiente de las ventas, puesto que los clientes no querrán regresar a un lugar donde tuvieron una mala experiencia. 

    h4.mb-5(data-aos="zoom-in-left") Justificación de los inventarios

    .row.justify-content-center.align-items-center        
      .col-lg-10       
        p(data-aos="fade-down").mb-5.text-center Por lo general, no se recomienda tener altos volúmenes de inventario, ya que esto acarrea costos de almacenamiento o riesgos de deterioro en los productos. Sin embargo, hay tres razones para manejar inventarios:

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')      
      .col-lg-7.my-3(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Protección")
            .col-12
              p La administración de un inventario depende de factores como la demanda, la oferta y los tiempos de reposición. Cuando estos factores son predecibles o se comportan de una manera estable no se necesitará aumentar los inventarios, ya que el proceso dejaría de ser económico para la operación. Sin embargo, cuando nos enfrentamos a una demanda muy variable, donde no se tiene una estimación confiable, es imprescindible contar con un <i>stock</i> o protección para atender las necesidades de los clientes, puesto que de lo contrario nos enfrentaremos a incumplimientos, y por consiguiente a la posible pérdida de los compradores. 
          .row.justify-content-center.align-items-center(titulo="Economías de escala")
            .col-12
              p En algunas ocasiones es más rentable producir inventarios en lotes, es decir, distribuir los costos fijos que se tienen en la producción y el uso que se da a los recursos de manera eficiente. Para el caso del abastecimiento ocurre algo similar siempre que no se incrementen de manera exagerada los inventarios, puesto que en muchas ocasiones los proveedores ofrecen tarifas especiales, de acuerdo con la cantidad de producto a adquirir; sin embargo, se debe tener cuidado en comprar o adquirir inventarios que no se necesitan solo por perseguir descuentos. “Para minimizar los efectos, se podría establecer acuerdos comerciales mediante órdenes de compra abiertas, con entregas parciales, con lo que se traslada la tarea de inventariar a la empresa proveedora”. (Espejo, 2022, 135).  
          .row.justify-content-center.align-items-center(titulo="Ubicación del inventario")
            .col-12
              p La ubicación del producto terminado es determinante para muchas empresas, por esto se crean los llamados centros de distribución, ubicados en puntos estratégicos de acuerdo a la demanda que se tiene. Muchas empresas deciden ubicar sus centros de distribución en zonas como los centros de abasto o ciudades grandes, puesto que desde allí se realizan los envíos a los mayoristas o directamente a los puntos de venta; con esto se disminuyen costos de transporte y de almacenamiento, al no tener bodegas o puntos de reparto en cada ciudad donde se tiene una tienda. En algunas ocasiones, se opta por dejar un país como centro de distribución, y desde allí generar las reposiciones en menor tiempo, trayendo consigo ventajas sobre la competencia por la atención y efectividad en la respuesta que se le brinda a los clientes.

    h4.mb-5(data-aos="zoom-in-left") Tipos de gestión de inventario

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')      
      .col-lg-10.my-3
        p(data-aos="fade-down") El inventario puede ser considerado el activo físico más valioso de una empresa. La gestión que se le brinde a los inventarios es fundamental, con el ánimo de controlar los productos que se tiene, ya que poco inventario podría originar clientes descontentos, y un inventario excesivo genera costos y riesgos para su almacenamiento, corre el riesgo de deteriorarse, así como de robos y daños, razón por la que se recomienda asegurarlo previniendo pérdidas para la empresa. Las organizaciones deben encontrar un punto de equilibrio para el manejo del inventario y realizar una gestión adecuada que minimice los costos. 

    p(data-aos="fade-down").mb-5 A continuación, las herramientas utilizadas para la gestión de inventarios:


    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Gestión periódica de inventarios" :icono="require('@/assets/curso/temas/27.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            p El sistema periódico de inventarios consiste en realizar un recuento físico de las piezas o productos con los que se cuenta, con cierta periodicidad. Para realizarlo se toma el inventario anterior y se agregan las compras que se van realizando, además de registrar los retiros o bienes vendidos, hasta llegar a un nuevo periodo donde se realiza el recuento completo de los productos.         
          .col-lg-4 
            img.img-a.img-t(src='@/assets/curso/temas/31.png', alt='')   
      .py-4.py-md-5(titulo="Códigos de barras" :icono="require('@/assets/curso/temas/28.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            p Son etiquetas que se adhieren a los envases o recipientes que contienen el producto principal. Están dispuestas de una forma específica y tienen una estructura internacional, que por lo general contiene trece dígitos: los tres primeros corresponden al país donde se elaboró el artículo, los cuatro siguientes al código de la empresa, los siguientes cinco dígitos corresponden a la representación o características del artículo, como el tamaño, la presentación, el color, el sabor, entre otros y el último dígito, llamado dígito verificador, es un dígito de control que se genera mediante un algoritmo para corroborar la veracidad del código de barras.          
          .col-lg-4 
            img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='') 
      .py-4.py-md-5(titulo="Ejemplo" :icono="require('@/assets/curso/temas/29.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            p Una caja de cereal de 300 g tiene el código 770-9999-123456, si la empresa decide lanzar una nueva presentación o cambiar el sabor del cereal, tendrá otro código. Cabe resaltar que en el código de barras no se almacena información, como el lote o fecha de fabricación o de vencimiento.

            p Los códigos de barras suelen ser utilizados para identificar materias primas, así como activos, repuestos y la gran mayoría de productos de consumo que puede encontrar, por ejemplo, en un supermercado. Las ventajas son principalmente en tiempo y costos, ya que reduce los tiempos de actividades operativas de la empresa, como la recepción, el <i>picking</i>, la verificación, el control de los inventarios y la atención en los puntos de venta, al estandarizar los criterios de búsqueda. (Espejo, 2022, 193).         
          .col-lg-4 
            img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='') 
      .py-4.py-md-5(titulo="Gestión de inventario RFID" :icono="require('@/assets/curso/temas/30.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            p La identificación de productos por radiofrecuencia o RFID se basa en un sistema inalámbrico que transmite la identidad y características de un producto, mediante un chip al cual se le puede cargar la información, a la cual, por medio de antenas que se suelen ubicar a la entrada y salida de los almacenes, o también de pistolas diseñadas para realizar las lecturas, es posible acceder de manera muy fácil, con varios productos, a distancia y al mismo tiempo. 
 
            p Este sistema mejora la eficiencia en los procesos de inventarios, ya que permite que se realicen de manera más ágil, visibilizando el inventario y haciendo que los procesos de recepción y despacho en los centros de distribución sean más precisos. La RFID hace parte de unos de los avances más modernos en temas de logística; a futuro se espera la masificación de esta tecnología, como realizar compras mediante radiofrecuencia, al igual que muchos otros avances de la IV revolución industrial y logística.         
          .col-lg-4 
            img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')  

    h4.mb-5(data-aos="zoom-in-left") Sistemas de información 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')      
      .col-lg-9.my-3
        p(data-aos="fade-down") Para un mejor manejo de los inventarios y conociendo los extensos volúmenes de información que se manejan, se hace necesario utilizar <i>software</i> o herramientas que centralicen estos datos.

        p(data-aos="fade-down") En el proceso de mantenimiento de inventarios, con las enormes cantidades de datos y de información que se manipula, se requiere de métodos sistematizados a través de un <i>software</i>, como se describe seguidamente.

        .cajon.color-primario.p-4(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 Existen riesgos si no se planea de la forma adecuada la sistematización del inventario. Además, la programación del <i>software</i> puede tomar demasiado tiempo, en ocasiones “se termina, pero consumiendo muchos más recursos o con menos funcionalidades de las previstas”. (Piattini et al., 2020, 63).
    p(data-aos="fade-down").mb-5 Los sistemas encargados del control de inventarios se clasifican de acuerdo con el proceso logístico, ya que, por ejemplo, los inventarios en existencia hacen referencia a los productos encontrados en el almacén, y el inventario en tránsito se refiere a los productos que están en movimiento en la red logística.
    .row.justify-content-center.align-items-center     
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/36.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="75%" y="17%" numero="1")
            p Este método también se conoce como 80/20 y consiste en realizar la división de los productos existentes en tres categorías, de acuerdo con su importancia, cantidad y valor. De esta manera es más sencillo identificar los productos que tienen más rotación y los que poseen más valor.
            ul.lista-ul.mb-0.ps-3
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 <b>Clase A:</b> son los productos que no presentan un alto nivel de ventas, en cantidad representan un 20 % del total de inventario, pero su valor comercial es cercano al 80 % del inventario.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 <b>Clase B:</b> son los productos con ventas medias, representando el 40 % del total del inventario y con un valor comercial cercano al 15 %.
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 <b>Clase C:</b> productos que se venden demasiado y representan una cantidad cercana al 40 % del inventario; sin embargo, su valor comercial es cercano al 5 %.                                              
          .tarjeta.color-acento-botones.p-3(x="75%" y="83%" numero="2")
            p.mb-0 El método PEPS, también conocido como FIFO, se basa en determinar los primeros artículos en entrar al almacén, los cuales serán los primeros en salir; de esta manera se disminuyen los riesgos de echar a perder la mercancía por fechas de caducidad o deterioro generado a través del tiempo. 
          .tarjeta.color-acento-botones.p-3(x="25%" y="17%" numero="4")
            p El ERP (<i>Enterprise Resource Planning</i>) es el sistema que permite planificar todos los recursos de la empresa, se trata de un <i>software</i> que le permite a una organización centralizar la información de las actividades financieras, todo lo relacionado con la cadena de suministro, así como elaborar informes de talento humano y reporte de indicadores. En el mercado son muchos los programas que permiten gestionar los inventarios, algunos son gratuitos y otros requieren licencia, todo depende de las necesidades que se tengan. En las empresas pequeñas, medianas o grandes algunos de los programas utilizados son:
            ul.lista-ul.mb-0.ps-3
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Holded
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 ABC Inventory
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Odoo Inventory
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 TradeGecko
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 AssetExplorer
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Factusol
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 RightControl Lite
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Alegra 
          .tarjeta.color-acento-botones.p-3(x="25%" y="83%" numero="3")
            p.mb-0 El sistema EOQ (<i>Economic Order Quantity</i>) consiste en tomar una demanda conocida y constante, y con base en esto, determinar los costos de mantener un inventario y generar los puntos de reorganización, en el momento exacto y por las cantidades idóneas, teniendo en cuenta, por ejemplo, los descuentos por compras y por volumen.           

</template>

<script>
export default {
  name: 'Tema2',
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
