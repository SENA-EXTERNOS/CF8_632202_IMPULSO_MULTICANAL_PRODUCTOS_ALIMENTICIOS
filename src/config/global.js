export default {
  global: {
    componenteFormativo: 'Control de calidad de alimentos',
    descripcionCurso:
      'La calidad de los alimentos depende de todos los procesos y derroteros que se lleven a cabo, iniciando con el manejo de las materias primas, la conservación, la transformación de los productos, hasta la gestión que se realice con los inventarios, garantizando alimentos idóneos para el consumo y evitando la contaminación que afecte la imagen de la compañía y la salud de los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Responsables de la calidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Calidad en alimentos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de inventarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La cadena de valor',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Calidad en alimentos',
      referencia:
        'Minsalud. (2019). <i>Enfermedades transmitidas por alimentos ETA</i>.',
      tipo: 'Artículo',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ET/abece-eta-final.pdf',
    },
    {
      tema: 'Gestión de inventarios',
      referencia:
        'Encalada, E. E. V., Lozano, R. A. R., Oscco, F. G., & Aguirre, F. D. M. S. (2019). Sistemas de información como herramienta para reorganizar procesos de manufactura.<i> Revista Venezolana de Gerencia</i>, 24(85). ',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/journal/290/29058864015/29058864015.pdf',
    },
    {
      tema: 'La cadena de valor',
      referencia:
        'Oyarzún, B. R. (2018). <i>La logística 4.0. Revista de Marina</i> (964), p. 39-44.',
      tipo: 'Artículo',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25808w/Rec/Riquelme_S1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de suministro',
      significado:
        'es la Integración a través del flujo de la información de la empresa con los clientes y proveedores.',
    },
    {
      termino: 'Conformidad del producto',
      significado:
        'se trata de aquel que cumple con todos los requisitos estipulados. Esta evaluación de la conformidad se puede dividir en la fase de diseño y fabricación de los productos. ',
    },
    {
      termino: 'Control de la Calidad',
      significado:
        'es la parte de la gestión de calidad que se encuentra orientada a cumplir con los requisitos de calidad. ',
    },
    {
      termino: 'Corrección',
      significado:
        'es una acción tomada con el fin de eliminar una no conformidad que se haya detectado, por ejemplo, un reproceso se puede ver como corrección. ',
    },
    {
      termino: 'Defecto',
      significado:
        'artículo que exhibe una desviación de las estipulaciones o especificaciones previstas. Un defecto no limita el uso de un producto, solo indica que no es exactamente lo que se esperaba.',
    },
    {
      termino: 'Defectuoso',
      significado:
        'artículo considerado completamente inaceptable o inviable para su uso.',
    },
    {
      termino: 'Efecto látigo',
      significado:
        'es la distorsión de la información al transmitirse de un eslabón a otro en la cadena de suministro.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'grado de cumplimiento del resultado de un indicador u objetivo sobre la meta o lo planeado.',
    },
    {
      termino: 'Estacionales',
      significado:
        'la demanda sufre incrementos en un período o temporada determinada del año.',
    },
    {
      termino: 'Mejora',
      significado:
        'cambio de un estado previo a uno más favorable, donde se observan unos resultados más cercanos a la meta.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'controlar, vigilar el estado de una acción o suceso mediante algún tipo de mecanismo.',
    },
    {
      termino: 'Norma ISO 9001',
      significado:
        'conjunto de normas internacionales y directrices de calidad que se pueden llevar a cabo en un proceso u organización sin importar su tamaño.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cortés, J. (2017). <i>Sistemas de gestión de calidad (ISO 9001:2015).</i> (1ª Ed.). ICB.',
      link:
        'https://www.alphaeditorialcloud.com/reader/sistemas-de-gestion-de-calidad-iso-90012015?location=16',
    },
    {
      referencia:
        'Espejo, M. (2022). <i>Gestión de inventarios - Métodos cuantitativos.</i> (2ª Ed.). MARGE.',
      link:
        'https://www.alphaeditorialcloud.com/reader/gestion-de-inventarios-metodos-cuantitativos-1652384359?location=124',
    },
    {
      referencia:
        'Mauleón Torres, M. y Prado Larburu, M. (2021). <i>Logística Inbound: logística para el siglo XXI</i>. Ediciones Díaz de Santos.',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://www.ebooks7-24.com%2f%3fil%3d13463',
    },
    {
      referencia:
        'Piattini, M., Pino, F., García, I. y García, F. (2020).<i> Calidad de Sistemas de Información 5ª Edición ampliada y actualizada</i>. RAMA. ',
      link:
        'https://www.alphaeditorialcloud.com/reader/calidad-de-sistemas-de-informacion-5a-edicion-ampliada-y-actualizada?location=58',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
