<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')      
      .col-lg-10.my-3
        p(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará todo lo relacionado con la calidad de los productos alimenticios, como también la importancia de la gestión de los inventarios y la trazabilidad de los productos, mediante ejemplos y análisis de tecnologías actuales, buscando imperfecciones, desviaciones o defectos, durante la transformación de los productos alimenticios. Todo esto forma parte del Sistema de Gestión de la Calidad, el cual debe ser trabajado, en conjunto, con los entes que participan en la cadena de suministro, con el objetivo de evitar afectaciones a los clientes, tales como enfermedades transmitidas por alimentos, y también para evitar pérdidas económicas a la empresa, debido a las repercusiones que pueden tener este tipo de incidentes, en la imagen y el prestigio de la marca.

        p(data-aos="fade-down") En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

        h5(data-aos="fade-down") ¡Muchos éxitos en este proceso de aprendizaje! 
        
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/mZafXr-oPec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: La importancia de la calidad de los alimentos
          
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
