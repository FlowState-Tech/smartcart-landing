/**
 * SmartCart landing — i18n (es / en). Compatible con ruta feature/i18n: claves estables y UI re-aplicable.
 */

const STORAGE_KEY = "smartcart_locale";
const SUPPORTED = /** @type {const} */ (["es", "en"]);

/** @type {Record<string, Record<string, unknown>>} */
const MESSAGES = {
  es: {
    meta: {
      title: "SmartCart — Ahorro real en tu ruta de compra | FlowState Tech",
      description:
        "SmartCart es la app para comparar precios en góndola, armar rutas con varias tiendas y confiar en datos revisados por la comunidad. FlowState Tech, Perú.",
    },
    a11y: {
      skipContent: "Saltar al contenido",
      menu: "Menú",
      toolbar: "Navegación principal",
      mainNav: "Secciones del sitio",
      langGroup: "Idioma",
      bottomNav: "Navegación móvil",
      closeModal: "Cerrar",
      backTop: "Volver arriba",
      faqCategories: "Categorías",
      logoAlt: "SmartCart — logotipo",
    },
    nav: {
      inicio: "Inicio",
      beneficios: "Beneficios",
      nosotros: "Sobre nosotros",
      descarga: "Descarga aquí",
      colaboradores: "Colaboradores",
      dominio: "Dominio DDD",
      demo: "Demo ahorro",
      mapa: "Cobertura",
      informe: "Informe",
      lista: "Lista de espera",
      toolbarDdd: "DDD",
      toolbarDemo: "Demo",
      toolbarMapa: "Mapa",
      toolbarFaq: "FAQ",
      toolbarRegistro: "Registro",
      toolbarNosotros: "Nosotros",
      toolbarDescarga: "Descarga",
      bottomLista: "Lista",
      bottomAyuda: "Ayuda",
      bottomBenef: "Beneficios",
      bottomNosotros: "Nosotros",
      bottomDescarga: "Descarga",
      bottomColab: "Equipo",
    },
    footer: {
      tag: "Claridad financiera, metas de ahorro y navegación GPS rápida.",
      linksTitle: "Enlaces",
      linkReport: "Documentación y código (GitHub)",
      linkNosotros: "Sobre nosotros",
      linkDescarga: "Descarga la app",
      linkFaq: "Preguntas frecuentes",
      linkColab: "Colaboradores",
      startupTitle: "FlowState Tech",
      startupBody:
        "Startup peruana. SmartCart está en desarrollo activo: comparación en tienda, rutas inteligentes y datos validados por la comunidad.",
    },
    hero: {
      eyebrow: "Comparador de góndola y rutas multi-tienda",
      title1: "Tu canasta,",
      title2: "más barata",
      title3: "y en menos tiempo",
      leadHtml:
        'SmartCart es una <strong>app móvil</strong> que centraliza precios presenciales entre supermercados y tiendas de conveniencia, calcula tu <strong>ruta óptima</strong> y refuerza datos con validación comunitaria. Más detalle en nuestro <a href="https://github.com/FlowState-Tech/smartcart-report" target="_blank" rel="noopener">repositorio público</a>.',
      ctaDescarga: "Descarga aquí",
      ctaSobre: "Sobre nosotros",
      ctaHow: "Cómo funciona",
      stat1n: "~7%",
      stat1l: "ahorro potencial en canasta (referencia sectorial)",
      stat2n: "25%",
      stat2l: "meta de reducción de tiempo en ruta multi-tienda",
      badgeTitle: "Ahorro total",
      badgeValue: "S/ 42.30",
      badgeHint: "vs. precio de referencia de mercado",
      imgAlt: "Persona revisando lista de compras en supermercado",
    },
    home: {
      whyTitle: 'Por qué no es “una app más de delivery”',
      whyIntro:
        "Las apps de reparto priorizan comodidad; los catálogos digitales suelen ser estáticos. SmartCart apunta al <strong>ahorro monetario</strong> en compra presencial y a la <strong>logística de tu recorrido</strong>.",
      c1t: "Comparador de canasta universal",
      c1p: "Transparencia entre cadenas: el mismo SKU o su equivalente, precio por kg y ticket total.",
      c1cta: "Cómo funciona →",
      c2t: "Smart-ruta multi-tienda",
      c2p: "Puntos de parada, tiempos estimados y alternativas 24h cuando un local cierra.",
      c2cta: "Ver detalle →",
      c3t: "Validación en tienda",
      c3p: "La comunidad confirma precios de góndola; gamificación para mantener datos vivos.",
      c3cta: "Experiencia y reputación →",
      segTitle: "Segmentos que diseñamos",
      seg1t: "Shoppers planificadores",
      seg1p:
        "Familias y profesionales urbanos que comparan formatos de proximidad vs. volumen y quieren claridad presupuestaria.",
      seg2t: "Retail y conveniencia",
      seg2p: "Gerentes de sede que publican ofertas, reducen merma y justifican precios con analítica de conversión.",
      btnBenef: "Ver beneficios completos",
      btnDownload: "Descarga aquí",
      btnHowSteps: "Ver pasos interactivos",
      statsSr: "Cifras orientativas",
      statStrip1: "Ahorro orientativo en canasta",
      statStrip2: "Meta de tiempo en ruta multi-tienda",
      statStrip3: "Paradas inteligentes por recorrido",
      stepsTitle: "Cómo funciona en tu móvil",
      stepsIntro: "Toca cada paso para ver el detalle — flujo pensado para compra presencial, no delivery.",
      step1t: "Arma tu canasta",
      step1p: "Lista y presupuesto: comparas el mismo producto o equivalente entre cadenas y formatos cercanos.",
      step2t: "Compara precios de góndola",
      step2p: "Ves ticket estimado y precio por unidad de medida para decidir dónde conviene más.",
      step3t: "Ruta óptima",
      step3p: "SmartCart ordena paradas, tiempos y alternativas 24h si un local está cerrado.",
      step4t: "Validación en tienda",
      step4p: "La comunidad confirma precios; ganas confianza y ayudas a mantener los datos al día.",
      stepsCta: "Quiero descargar la app",
      deepTitle: "Qué resuelve SmartCart en el mundo real",
      deepIntro:
        "El producto une <strong>planificación</strong>, <strong>comparación de góndola</strong> y <strong>ejecución en ruta</strong>. No sustituye al cajero: te ayuda a decidir dónde y en qué orden comprar.",
      deepLi1: "Comparación de canasta entre cadenas con el mismo SKU o equivalente reconocido por el usuario.",
      deepLi2: "Rutas con varias paradas y estimación de tiempo según formato de tienda (supermercado vs. conveniencia).",
      deepLi3: "Reporte de error de precio y validación en tienda para mantener datos de góndola creíbles.",
      deepLi4: "Listas compartidas y techo de presupuesto para que la compra familiar sea negociable y transparente.",
      asideEyebrow: "Cómo trabajamos",
      asideTitle: "Producto con rigor",
      asideP1:
        "Diseñamos pantallas y flujos a partir de entrevistas con compradores y retail, prototipos iterados y métricas claras de ahorro y tiempo. La documentación de producto y arquitectura vive en GitHub para que el roadmap sea trazable.",
      asideP2: "No sustituimos al cajero ni al delivery: potenciamos la decisión antes y durante tu salida a comprar.",
      asideReport: "Ver repositorio en GitHub",
      segImgAlt: "Familia planificando compras en casa",
      colabEyebrow: "Personas detrás del producto",
      colabTitle: "Colaboradores",
      colabBody:
        "Anjali, Joseph, Katherine, Kevin y Stephano — ingeniería, diseño y producto detrás de SmartCart.",
      colabCta: "Ver colaboradores",
      colabTeaserAlt: "Equipo colaborando en proyecto (imagen referencial)",
      colabGroupAlt: "Grupo de personas trabajando en equipo en oficina (imagen referencial)",
    },
    demo: {
      title: "Simulador de ahorro",
      lead: "Ajusta los valores para ver un <strong>ejemplo ilustrativo</strong> de ahorro (sin conexión a servidor).",
      basket: "Monto referencial de tu canasta (S/)",
      pct: "Porcentaje de ahorro al comparar y optimizar ruta (%)",
      time: "Tiempo ahorrado en ruta (min / mes)",
      outMin: "{{n}} min",
      resultLabel: "Ahorro monetario estimado",
      reset: "Restablecer",
      ctaApp: "Quiero la app",
      hintFmt:
        "Ahorro por comparar canasta ({{pct}}%): {{money}}. Ilustrativo: {{mins}} min de ruta a S/ {{rate}}/min → S/ {{timeval}}.",
    },
    beneficios: {
      title: "Beneficios que notarás en la calle",
      lead: "Cada función responde a compradores y retail: presupuesto claro, menos vueltas y datos en los que puedes confiar.",
      lead2:
        "Desde la lista en casa hasta la última parada del día, SmartCart ordena la información para que decidas rápido.",
      b1t: "Presupuesto y canasta familiar",
      b1p: "Listas compartidas, presupuesto máximo y comparación por peso o unidad para decisiones justas.",
      b1e: "Incluye alertas cuando un ítem se acerca al tope y sugerencias de sustitutos más baratos por zona.",
      b2t: "Menos traslado, misma lista",
      b2p: "Rutas que combinan supermercado y conveniencia cercana; el sistema prioriza desplazamiento y disponibilidad.",
      b2e: "Si un local cierra o no tiene stock, la app propone la siguiente mejor parada sin recomenzar desde cero.",
      b3t: "Datos que puedes confiar",
      b3p: "Alertas de oferta, reporte de error de precio y Trust Profile alimentado por calificaciones y reseñas.",
      b3e: "La reputación de tienda verificada y la comunidad refuerzan la calidad del comparador de góndola.",
      proTitle: "Propuesta de valor en tres capas",
      proIntro:
        "Organizamos el valor en tres capas que ves en la app: <strong>ahorro monetario</strong>, <strong>ahorro de tiempo</strong> y <strong>confianza en los datos</strong>.",
      pro1t: "Ahorro monetario",
      pro1p: "Comparación explícita de ticket y unidad de medida para que el ahorro sea medible, no solo “sensación”.",
      pro2t: "Ahorro de tiempo",
      pro2p: "Menos zigzag entre góndolas y calles: la ruta ordena paradas y reduce esperas improductivas.",
      proLi1: "Integración con GPS para guiar el recorrido físico, no solo listas estáticas.",
      proLi2: "Roles diferenciados: consumidor planifica; gerente de sede publica ofertas y stock.",
      proLi3: "Transparencia: decisiones de producto y arquitectura abiertas en GitHub.",
      ctaDescarga: "Llévame a la descarga",
      heroImgAlt: "Cliente usando smartphone en tienda",
      bannerAlt: "Personas comparando opciones de compra",
    },
    dominio: {
      title: "Arquitectura del producto",
      lead: "SmartCart separa responsabilidades en <strong>módulos</strong> (identidad, tiendas, planificación, recorrido, experiencia de usuario, notificaciones…) conectados por flujos claros. El mapa completo está en el repositorio público.",
      classTitle: "Clasificación estratégica",
      pillCore: "Core",
      pillSupport: "Supporting",
      pillGeneric: "Generic",
      flowsTitle: "Flujos entre contextos",
      flowsIntro: "Escenarios de integración entre módulos (vista resumida).",
      sc1: "Registro y verificación de tienda",
      sc2: "Planificación de compra",
      sc3: "Recorrido y ruta óptima",
      sc4: "Post-compra y experiencia",
    },
    contextDetail: {
      back: "← Arquitectura del producto",
      resp: "Responsabilidad",
      layers: "Capas tácticas",
      github: "Abrir repositorio en GitHub",
    },
    mapa: {
      title: "Cobertura y zonas piloto",
      lead: "Referencia de diseño: alta densidad comercial en distritos como <strong>Lince</strong> y <strong>Surquillo</strong> (user stories del backlog).",
      h2: "Ruta multi-parada",
      p: "El recorrido conecta puntos de parada verificados: conveniencia para compras rápidas y supermercado para volumen y marca blanca.",
      li1: "Priorización de calles con acceso vehicular cuando aplica",
      li2: "Sustitución sugerida a tienda 24h si un local está cerrado",
      li3: "Estimación de tiempo según formato de tienda",
      cta: "Quiero acceso anticipado",
    },
    informe: {
      title: "Documentación técnica",
      lead: "Repositorio abierto con historias de usuario, diagramas de arquitectura y notas de implementación.",
      cta: "Ver repositorio smartcart-report",
      esTitle: "Visión general del producto",
      esBody: "Diagrama de flujo entre comprador, tiendas y validaciones en tienda: cómo se conectan listas, precios y recorridos.",
      ubTitle: "Glosario de la app",
      ubBody: "Términos que verás en SmartCart: canasta, ruta óptima, error de precio, perfil de confianza, recorrido guardado…",
      ubBtn: "Leer glosario en el README",
      esAlt: "Diagrama de flujos del producto SmartCart",
    },
    waitlist: {
      title: "Lista de espera",
      lead: "Déjanos tu correo para avisarte del lanzamiento (demo local — no se envía a ningún servidor).",
      email: "Correo electrónico",
      placeholderPh: "tu@correo.com",
      hint: "Validación de formato como en US03; en producción se conectaría a tu API.",
      submit: "Registrarme",
      errFmt: "Introduce un correo válido.",
      dup: "Este correo ya está en la lista de espera (demo local).",
      ok: "¡Listo! Te avisaremos en el lanzamiento (simulación en este navegador).",
    },
    descarga: {
      title: "Descarga SmartCart",
      lead: "La experiencia completa está pensada para <strong>móvil</strong>: comparar, planificar y recorrer con GPS y datos de góndola.",
      sublead:
        "La app está pensada para usarse en la calle: manos ocupadas, decisiones rápidas y datos que se actualizan con la comunidad.",
      storesLead: "Próximamente en tiendas oficiales. Mientras tanto, reserva tu acceso:",
      play: "Google Play",
      apple: "App Store",
      storesHint: "Enlaces genéricos a tiendas (la ficha de la app se publicará en el lanzamiento).",
      notifyTitle: "Avísame al lanzamiento",
      notifyLead: "Déjanos tu correo; en esta página la reserva se guarda solo en tu navegador (localStorage), sin servidor propio.",
      linkNosotros: "Conocer al equipo",
      featuresTitle: "Qué podrás hacer en la app",
      f1t: "Planificar",
      f1p: "Listas, presupuesto y comparación de canasta antes de salir de casa.",
      f2t: "Recorrer",
      f2p: "Ruta con paradas ordenadas, tiempos estimados y alternativas 24h.",
      f3t: "Validar",
      f3p: "Confirmar precios en góndola y reportar discrepancias con pocos toques.",
      privacyTitle: "Privacidad",
      privacyP:
        "El formulario de aviso en esta landing solo guarda correos en tu navegador (localStorage) para simular un registro; no hay backend propio. En producción aplicaríamos consentimiento explícito y política de datos personales según normativa peruana.",
      heroImgAlt: "Persona usando teléfono móvil",
    },
    nosotros: {
      title: "Sobre FlowState Tech",
      lead: "Somos el equipo detrás de <strong>SmartCart</strong>: producto móvil para ahorrar en compras presenciales con datos comparables y rutas inteligentes.",
      missionTitle: "Misión",
      missionBody:
        "Devolver claridad al presupuesto familiar y al retail de proximidad con datos de góndola comparables y rutas que respetan tu tiempo.",
      visionTitle: "Visión",
      visionBody:
        "Una app móvil referente en Perú para compras presenciales inteligentes: menos vueltas, mejor ticket y comunidad que valida precios en tienda.",
      valuesTitle: "Valores",
      valuesBody:
        "Transparencia, diseño centrado en la persona usuaria e ingeniería disciplinada: decisiones de producto documentadas para que el roadmap sea coherente y auditable.",
      teamTitle: "Equipo y enfoque",
      teamIntro:
        "FlowState Tech construye SmartCart para el comprador peruano que sale a tienda: comparar antes de pagar, recorrer menos y confiar en lo que ve en góndola — sin convertirnos en delivery.",
      card1t: "Producto",
      card1p: "Historias de usuario, prototipos y métricas de valor alineadas a ahorro y tiempo en ruta.",
      card2t: "Tecnología",
      card2p: "Arquitectura preparada para escalar: comparación de canasta, mapa de paradas y validación comunitaria.",
      cta: "Descargar SmartCart",
      ctaHome: "Volver al inicio",
      storyTitle: "Por qué existe SmartCart",
      storyP1:
        "SmartCart surge como respuesta a una frustración cotidiana: comparar precios entre tiendas físicas implica anotar, desplazarse y confiar en memoria o fotos sueltas. Queremos centralizar esa experiencia en una app móvil pensada para Perú.",
      storyP2:
        "FlowState Tech combina producto, experiencia de usuario e ingeniería. Priorizamos iteración con usuarios reales, métricas de ahorro y un roadmap público en GitHub.",
      impactTitle: "Impacto que buscamos",
      im1t: "Familias",
      im1p: "Claridad presupuestaria y menos horas perdidas en traslados innecesarios.",
      im2t: "Retail",
      im2p: "Visibilidad de ofertas y demanda por zona para afinar surtido y precios.",
      im3t: "Datos",
      im3p: "Ciclo virtuoso: más validaciones comunitarias, mejor confianza en el comparador.",
      heroImgAlt: "Profesionales en entorno de trabajo moderno",
    },
    colab: {
      eyebrow: "FlowState Tech",
      title: "Colaboradores",
      lead:
        "Las personas que transforman la propuesta de SmartCart en experiencia móvil: visión de producto, diseño centrado en el usuario y construcción técnica sólida.",
      heroImgAlt: "Mosaico con las fotos del equipo SmartCart",
      heroMosaicAria: "Grupo de cinco integrantes de FlowState Tech que desarrollan SmartCart",
      gridTitle: "Quién construye SmartCart",
      gridIntro:
        "Equipo de ingeniería de software y diseño de FlowState Tech que construye SmartCart para compradores y retail en Perú.",
      tapPhotoHint: "Pulsa la foto de cada persona para leer su biografía completa.",
      m1photoAria: "Ver biografía completa de Anjali Amaro Villar",
      m2photoAria: "Ver biografía completa de Joseph Manuel Chavez Viera",
      m3photoAria: "Ver biografía completa de Katherine Maryory Mejia Aliaga",
      m4photoAria: "Ver biografía completa de Kevin Patrick Pardo Chumpitazi",
      m5photoAria: "Ver biografía completa de Stephano Renan Valdivia Quispe",
      m1name: "Anjali Amaro Villar",
      m1meta: "U20221G044 · Ingeniería de Software",
      m1bio:
        "Mi nombre es Anjali Amaro, tengo 20 años y curso el sexto ciclo de Ingeniería de Software. Cuento con habilidades en desarrollo web y sólida base en el área de backend utilizando Java con Spring Boot. Me caracterizo por mi escucha activa y mi compromiso con el equipo, manteniendo siempre una disposición constante para apoyar a mis compañeros y asegurar que los objetivos del proyecto se cumplan de manera colaborativa.",
      m1alt: "Fotografía de Anjali Amaro Villar",
      m2name: "Joseph Manuel Chavez Viera",
      m2meta: "U202314019 · Ingeniería de Software",
      m2bio:
        "Mi nombre es Joseph Chavez, tengo 19 años y curso el séptimo ciclo de Ingeniería de Software. Domino C++, Python y tengo bases en JavaScript. Creo que el esfuerzo en formación se nota en el trabajo profesional; por eso busco experiencias que me acerquen a productos reales como SmartCart.",
      m2alt: "Fotografía de Joseph Manuel Chavez Viera",
      m3name: "Katherine Maryory Mejia Aliaga",
      m3meta: "U20221A118 · Ingeniería de Software",
      m3bio:
        "Mi nombre es Katherine Mejia, tengo 21 años, curso el sexto ciclo de la carrera de ingeniería de software. Tengo conocimientos en C++, Python y HTML. Me gusta trabajar en equipo y a la vez sacar lo mejor de mis compañeros para hacer un buen trabajo. Además, tengo capacidad y aptitud para generar nuevas e innovadoras ideas y siempre estoy dispuesta a adquirir nuevas habilidades y conocimientos.",
      m3alt: "Fotografía de Katherine Maryory Mejia Aliaga",
      m4name: "Kevin Patrick Pardo Chumpitazi",
      m4meta: "U20221A525 · Ingeniería de Software",
      m4bio:
        "Soy estudiante de Ingeniería de Software de 21 años. Cuento con conocimientos en lenguajes de programación como Java y Python, además de fundamentos en tecnologías web como HTML. Aunque me considero una persona reservada y a veces me cuesta interactuar, trato de mejorar constantemente mi desempeño en el trabajo en equipo mediante el apoyo técnico y la colaboración activa en el desarrollo del proyecto, buscando siempre aportar valor al grupo mientras fortalezco mis habilidades interpersonales.",
      m4alt: "Fotografía de Kevin Patrick Pardo Chumpitazi",
      m5name: "Stephano Renan Valdivia Quispe",
      m5meta: "U202311294 · Ingeniería de Software",
      m5bio:
        "Estudiante y desarrollador full stack con sólida visión arquitectónica. Experto en backend (Java/Spring Boot, C#/.NET Core) y frontend (Vue.js, Angular, Next.js). Fuerte en diseño de sistemas modernos, modelado claro del negocio, arquitecturas de microservicios y bases de datos relacionales y NoSQL. Experiencia práctica con metodologías ágiles para convertir requerimientos complejos en soluciones robustas.",
      m5alt: "Fotografía de Stephano Renan Valdivia Quispe",
      note: "Fotografías aportadas por el equipo FlowState Tech.",
      ctaAbout: "Sobre la startup",
      ctaGithub: "Ver en GitHub",
    },
    faq: {
      title: "Preguntas frecuentes",
      lead: "Respuestas claras según tu perfil: compras en tienda, retail o curiosidad por el proyecto.",
      lead2:
        "Si no encuentras lo que buscas, visita Colaboradores o el repositorio público en GitHub.",
      heroImgAlt: "Personas revisando dudas y documentación en equipo",
      tabC: "Consumidor",
      tabR: "Retail",
      tabT: "Proyecto",
      c1q: "¿SmartCart vende productos o cobra delivery?",
      c1a:
        "No. SmartCart te ayuda a <strong>comparar precios en góndola</strong> y a <strong>ordenar tu ruta</strong> entre tiendas físicas. El pago siempre lo haces en cada local, como hoy.",
      c2q: "¿Cómo me ayuda a ahorrar?",
      c2a:
        "Comparando tu <strong>canasta</strong> entre cadenas cercanas y proponiendo un <strong>recorrido con varias paradas</strong> para que gastes menos y pierdas menos tiempo en el camino.",
      c3q: "¿Los precios son confiables?",
      c3a:
        "Combinamos <strong>datos publicados por tiendas afiliadas</strong> con <strong>reportes y confirmaciones de personas en tienda</strong>. Si algo no cuadra, se puede marcar un posible error de precio para mejorar la información.",
      c4q: "¿Necesito varias cuentas o una por tienda?",
      c4a:
        "No. Con <strong>una cuenta de consumidor</strong> basta para tus listas, tu ruta y tu participación al validar precios; no pedimos repetir registro por cada cadena.",
      r1q: "¿Cómo afilio mi sucursal?",
      r1a:
        "Con una <strong>solicitud de afiliación</strong> y verificación de <strong>RUC</strong> frente a fuentes oficiales. Cuando quedas como <strong>tienda verificada</strong>, puedes aparecer en mapa y comparador según las reglas del producto.",
      r2q: "¿Puedo publicar ofertas relámpago?",
      r2a:
        "Sí. El flujo prevé que el <strong>gerente de sede</strong> publique <strong>ofertas</strong> con vigencia y stock, para rotar producto y reducir merma.",
      r3q: "¿Tendré reportes o métricas de mi tienda?",
      r3a:
        "La visión del producto incluye <strong>indicadores de demanda por zona</strong> y reportes que apoyan decisiones de <strong>precio y surtido</strong>; el detalle evoluciona con cada versión de la app.",
      r4q: "¿Dónde ven los clientes mis ofertas?",
      r4a:
        "En el <strong>comparador de canasta</strong> y en <strong>avisos</strong> cuando encajan con la lista del usuario. Tú defines vigencia y qué stock acompaña cada oferta.",
      t1q: "¿Dónde está la documentación técnica?",
      t1a:
        'En el repositorio público <a href="https://github.com/FlowState-Tech/smartcart-report" target="_blank" rel="noopener noreferrer">smartcart-report</a> en GitHub: historias de usuario, diagramas y notas de arquitectura.',
      t2q: "¿Qué guarda esta landing en mi navegador?",
      t2a:
        "Solo lo que indiques en el formulario de <strong>aviso de descarga</strong>: se guarda en <strong>localStorage</strong> en tu equipo, sin servidor propio en esta página. En producción habría consentimiento explícito y política de datos.",
      t3q: "¿Para qué escenario está pensada la app?",
      t3a:
        "Para <strong>compras presenciales en Perú</strong>: comparar antes de salir, recorrer varias tiendas con una ruta ordenada y apoyarse en la comunidad para mantener precios de góndola útiles.",
      t4q: "¿Cómo está organizado SmartCart por dentro?",
      t4a:
        "En <strong>módulos independientes</strong> (identidad, tiendas, planificación, recorrido, experiencia de usuario, notificaciones…) con interfaces bien definidas, para escalar y mantener el producto con claridad. Los diagramas están en GitHub.",
    },
    layers: {
      Domain: "Domain",
      Application: "Application",
      Interface: "Interface",
      Infrastructure: "Infrastructure",
    },
    bc: {
      "store-management": {
        tagline:
          "Motor de inventario, precios y analítica por tienda verificada.",
        description:
          "Catálogo, stock y precios de góndola. Base del comparador y de los reportes de demanda para gerentes. Es el repositorio central de datos consumido por planificación, recorrido y notificaciones.",
      },
      "shopping-journey": {
        tagline: "Ejecución del recorrido físico: paradas, llegadas y tiempos estimados.",
        description:
          "Optimización de ruta, puntos de parada y registro de llegada. Entrega la propuesta de valor de ahorro de tiempo en compras multicanal presenciales.",
      },
      "shopping-planning": {
        tagline: "Listas, canasta, presupuesto máximo y comparación entre formatos.",
        description:
          "Donde el usuario define intención de compra: lista de compras, canasta familiar y reglas de ahorro antes de salir a tienda.",
      },
      experience: {
        tagline: "Validación comunitaria, calificaciones, reseñas y Trust Profile.",
        description:
          "Refuerza la veracidad del core: error de precio, reportes y reputación. Conecta la voz del usuario con la confianza en los datos.",
      },
      notification: {
        tagline: "Alertas de oferta, canales y límites de frecuencia (rate limiting).",
        description:
          "Comunicación oportuna cuando cambian precios o hay oportunidades en la canasta, sin saturar al usuario.",
      },
      iam: {
        tagline: "Identidad, credenciales, sesiones y roles (Consumer / StoreManager).",
        description:
          "Contexto transversal necesario para operar la plataforma, sin ser el diferenciador del negocio retail.",
      },
      verification: {
        tagline: "Solicitud de afiliación, RUC y tienda verificada frente a fuentes oficiales.",
        description:
          "Cumplimiento y validación legal de establecimientos antes de exponerlos en el mapa público.",
      },
    },
    modal: {
      comparador: {
        title: "Comparador de canasta universal",
        html: `<p>Lee precios de góndola entre cadenas y formatos (volumen vs. proximidad). Incluye comparación por unidad de medida cuando hay datos de peso o volumen.</p><p><a href="https://github.com/FlowState-Tech/smartcart-report" target="_blank" rel="noopener noreferrer">Ver documentación en GitHub →</a></p>`,
      },
      ruta: {
        title: "Smart-ruta multi-tienda",
        html: "<p>La app ordena tus <strong>paradas</strong>, estima <strong>tiempos</strong> entre locales y puede sugerir <strong>alternativas</strong> (por ejemplo, si un local está cerrado o no tiene stock).</p>",
      },
      crowd: {
        title: "Validación y Experience",
        html: "<p>Los usuarios confirman precios en tienda (cercanía GPS), reportan discrepancias y alimentan el <strong>Trust Profile</strong> de cada local verificado.</p>",
      },
      flow1: {
        title: "Escenario: tienda nueva en SmartCart",
        html: `<p>Flujo desde solicitud de afiliación (<strong>Verification</strong>) hasta inventario visible (<strong>Store Management</strong>), pasando por identidades de gerente (<strong>IAM</strong>).</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/inventory-management.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>`,
      },
      flow2: {
        title: "Escenario: planificación",
        html: '<p>Lista → canasta → comparación entre tiendas antes de iniciar el recorrido.</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/shopping-planning.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>',
      },
      flow3: {
        title: "Escenario: recorrido",
        html: '<p>Navegación por la <strong>ruta óptima</strong> con llegadas registradas en cada punto de parada.</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/shopping-journey.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>',
      },
      flow4: {
        title: "Escenario: post-compra",
        html: '<p>Calificación, reseña y cierre del <em>recorrido finalizado</em>; retroalimentación al ecosistema de datos.</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/post-purchase-experience.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>',
      },
      bodyPlaceholder:
        "Puedes cerrar con la X, Esc o el fondo. Más detalle en Beneficios y en el repositorio de GitHub.",
    },
  },
  en: {
    meta: {
      title: "SmartCart — Real savings on your shopping route | FlowState Tech",
      description:
        "SmartCart is the app to compare shelf prices, build multi-store routes, and trust community-checked data. FlowState Tech, Peru.",
    },
    a11y: {
      skipContent: "Skip to content",
      menu: "Menu",
      toolbar: "Main navigation",
      mainNav: "Site sections",
      langGroup: "Language",
      bottomNav: "Mobile navigation",
      closeModal: "Close",
      backTop: "Back to top",
      faqCategories: "Categories",
      logoAlt: "SmartCart logo",
    },
    nav: {
      inicio: "Home",
      beneficios: "Benefits",
      nosotros: "About us",
      descarga: "Download",
      colaboradores: "Team",
      dominio: "DDD domain",
      demo: "Savings demo",
      mapa: "Coverage",
      informe: "Report",
      lista: "Waitlist",
      toolbarDdd: "DDD",
      toolbarDemo: "Demo",
      toolbarMapa: "Map",
      toolbarFaq: "FAQ",
      toolbarRegistro: "Sign up",
      toolbarNosotros: "About",
      toolbarDescarga: "Download",
      bottomLista: "Waitlist",
      bottomAyuda: "Help",
      bottomBenef: "Benefits",
      bottomNosotros: "About",
      bottomDescarga: "Download",
      bottomColab: "Team",
    },
    footer: {
      tag: "Financial clarity, savings goals, and fast GPS navigation.",
      linksTitle: "Links",
      linkReport: "Docs & code (GitHub)",
      linkNosotros: "About us",
      linkDescarga: "Download the app",
      linkFaq: "FAQ",
      linkColab: "Team",
      startupTitle: "FlowState Tech",
      startupBody:
        "Peruvian startup. SmartCart is in active development: in-store comparison, smart routes, and community-validated data.",
    },
    hero: {
      eyebrow: "Shelf comparison & multi-store routes",
      title1: "Your basket,",
      title2: "cheaper",
      title3: "in less time",
      leadHtml:
        'SmartCart is a <strong>mobile app</strong> that centralizes in-store prices across supermarkets and convenience stores, builds your <strong>optimal route</strong>, and reinforces data with community validation. More detail in our <a href="https://github.com/FlowState-Tech/smartcart-report" target="_blank" rel="noopener">public repository</a>.',
      ctaDescarga: "Download here",
      ctaSobre: "About us",
      ctaHow: "How it works",
      stat1n: "~7%",
      stat1l: "potential basket savings (industry reference)",
      stat2n: "25%",
      stat2l: "target reduction in multi-store route time",
      badgeTitle: "Total savings",
      badgeValue: "PEN 42.30",
      badgeHint: "vs. market reference price",
      imgAlt: "Person reviewing a grocery list in a supermarket",
    },
    home: {
      whyTitle: "Why we are not “just another delivery app”",
      whyIntro:
        "Delivery apps optimize comfort; digital catalogs are often static. SmartCart focuses on <strong>monetary savings</strong> for in-store shopping and your <strong>trip logistics</strong>.",
      c1t: "Universal basket comparator",
      c1p: "Transparency across chains: same SKU or equivalent, price per kg, and total ticket.",
      c1cta: "How it works →",
      c2t: "Multi-store smart route",
      c2p: "Stops, ETA, and 24h alternatives when a store is closed.",
      c2cta: "See details →",
      c3t: "In-store validation",
      c3p: "The community confirms shelf prices; light gamification to keep data fresh.",
      c3cta: "Experience & reputation →",
      segTitle: "Segments we design for",
      seg1t: "Planning shoppers",
      seg1p: "Urban families and professionals comparing proximity vs. bulk formats who want budget clarity.",
      seg2t: "Retail & convenience",
      seg2p: "Store managers publishing offers, cutting shrink, and justifying prices with conversion analytics.",
      btnBenef: "See full benefits",
      btnDownload: "Download here",
      btnHowSteps: "See interactive steps",
      statsSr: "Reference figures",
      statStrip1: "Illustrative basket savings",
      statStrip2: "Multi-store route time goal",
      statStrip3: "Smart stops per trip",
      stepsTitle: "How it works on your phone",
      stepsIntro: "Tap each step for details — built for in-store shopping, not delivery.",
      step1t: "Build your basket",
      step1p: "List and budget: compare the same product or equivalent across nearby chains and formats.",
      step2t: "Compare shelf prices",
      step2p: "See estimated ticket and price per unit to decide where it pays off.",
      step3t: "Optimal route",
      step3p: "SmartCart orders stops, timings, and 24h alternatives if a store is closed.",
      step4t: "In-store validation",
      step4p: "The community confirms prices; you help keep data fresh and earn trust.",
      stepsCta: "I want to download the app",
      deepTitle: "What SmartCart solves in the real world",
      deepIntro:
        "The product connects <strong>planning</strong>, <strong>shelf comparison</strong>, and <strong>route execution</strong>. We do not replace the cashier: we help you decide where and in what order to shop.",
      deepLi1: "Basket comparison across chains with the same SKU or a user-recognized equivalent.",
      deepLi2: "Multi-stop routes with time estimates by store format (supermarket vs. convenience).",
      deepLi3: "Price mismatch reports and in-store validation to keep shelf data trustworthy.",
      deepLi4: "Shared lists and budget caps so household shopping is negotiable and transparent.",
      asideEyebrow: "How we build",
      asideTitle: "Rigorous product craft",
      asideP1:
        "We design screens and flows from shopper and retail interviews, iterated prototypes, and clear savings/time metrics. Product and architecture notes live on GitHub so the roadmap stays traceable.",
      asideP2: "We do not replace cashiers or delivery: we strengthen decisions before and during your trip to the store.",
      asideReport: "View repository on GitHub",
      segImgAlt: "Family planning shopping at home",
      colabEyebrow: "People behind the product",
      colabTitle: "Collaborators",
      colabBody:
        "Anjali, Joseph, Katherine, Kevin, and Stephano — engineering, design, and product behind SmartCart.",
      colabCta: "Meet the team",
      colabTeaserAlt: "Team collaborating on a project (reference photo)",
      colabGroupAlt: "Group of people working together in an office (reference photo)",
    },
    demo: {
      title: "Savings simulator",
      lead: "Adjust the sliders to see an <strong>illustrative</strong> savings example (no server connection).",
      basket: "Reference basket amount (PEN)",
      pct: "Savings % from comparing and optimizing the route",
      time: "Time saved on route (min / month)",
      outMin: "{{n}} min",
      resultLabel: "Estimated monetary savings",
      reset: "Reset",
      ctaApp: "I want the app",
      hintFmt:
        "Basket savings ({{pct}}%): {{money}}. Illustrative: {{mins}} min route at PEN {{rate}}/min → PEN {{timeval}}.",
    },
    beneficios: {
      title: "Benefits you feel on the street",
      lead: "Every feature answers real shopper and retail needs: clearer budgets, fewer detours, and data you can trust.",
      lead2: "From your list at home to the last stop of the day, SmartCart organizes information so you decide fast.",
      b1t: "Budget & household basket",
      b1p: "Shared lists, max budget, and fair comparisons by weight or unit.",
      b1e: "Includes alerts as items approach the cap and cheaper substitute suggestions by area.",
      b2t: "Less travel, same list",
      b2p: "Routes that combine supermarket and nearby convenience; the system prioritizes travel and availability.",
      b2e: "If a store closes or is out of stock, the app suggests the next best stop without starting over.",
      b3t: "Data you can trust",
      b3p: "Offer alerts, price mismatch reports, and a Trust Profile powered by ratings and reviews.",
      b3e: "Verified-store reputation and the community reinforce shelf-comparison quality.",
      proTitle: "Value proposition in three layers",
      proIntro:
        "We structure value in three layers you see in the app: <strong>monetary savings</strong>, <strong>time savings</strong>, and <strong>trust in data</strong>.",
      pro1t: "Monetary savings",
      pro1p: "Explicit ticket and unit comparisons so savings are measurable, not just a feeling.",
      pro2t: "Time savings",
      pro2p: "Less zigzag across aisles and streets: the route orders stops and cuts unproductive waiting.",
      proLi1: "GPS integration to guide the physical trip, not just static lists.",
      proLi2: "Different roles: shoppers plan; store managers publish offers and stock.",
      proLi3: "Transparency: product and architecture decisions tracked on GitHub.",
      ctaDescarga: "Take me to download",
      heroImgAlt: "Customer using a smartphone in a store",
      bannerAlt: "People comparing purchase options",
    },
    dominio: {
      title: "Product architecture",
      lead: "SmartCart splits responsibilities into <strong>modules</strong> (identity, stores, planning, journey, shopper experience, notifications…) with clear interfaces. The full map lives in the public repository.",
      classTitle: "Strategic classification",
      pillCore: "Core",
      pillSupport: "Supporting",
      pillGeneric: "Generic",
      flowsTitle: "Cross-context flows",
      flowsIntro: "Integration scenarios between modules (summary view).",
      sc1: "Store registration & verification",
      sc2: "Purchase planning",
      sc3: "Journey & optimal route",
      sc4: "Post-purchase experience",
    },
    contextDetail: {
      back: "← Product architecture",
      resp: "Responsibility",
      layers: "Tactical layers",
      github: "Open repository on GitHub",
    },
    mapa: {
      title: "Coverage & pilot zones",
      lead: "Design reference: high retail density in districts such as <strong>Lince</strong> and <strong>Surquillo</strong> (backlog user stories).",
      h2: "Multi-stop route",
      p: "The journey connects verified stops: convenience for quick trips and supermarket for volume and private label.",
      li1: "Prioritize vehicle-friendly streets when relevant",
      li2: "Suggest a 24h store if one stop is closed",
      li3: "Time estimates by store format",
      cta: "I want early access",
    },
    informe: {
      title: "Technical documentation",
      lead: "Open repository with user stories, architecture diagrams, and implementation notes.",
      cta: "View smartcart-report repository",
      esTitle: "Product overview",
      esBody: "Flow diagram between shoppers, stores, and in-store validations: how lists, prices, and trips connect.",
      ubTitle: "In-app glossary",
      ubBody: "Terms you will see in SmartCart: basket, optimal route, price mismatch, trust profile, saved trip…",
      ubBtn: "Read glossary in README",
      esAlt: "SmartCart product flow diagram",
    },
    waitlist: {
      title: "Waitlist",
      lead: "Leave your email to hear about launch (local demo — not sent to any server).",
      email: "Email",
      placeholderPh: "you@example.com",
      hint: "Format validation like US03; in production this would call your API.",
      submit: "Sign me up",
      errFmt: "Enter a valid email.",
      dup: "This email is already on the waitlist (local demo).",
      ok: "Done! We will notify you at launch (simulated in this browser).",
    },
    descarga: {
      title: "Download SmartCart",
      lead: "The full experience is designed for <strong>mobile</strong>: compare, plan, and navigate with GPS and shelf-level data.",
      sublead:
        "The app is meant to be used on the go: busy hands, fast decisions, and data refreshed by the community.",
      storesLead: "Coming soon to official stores. Meanwhile, reserve your spot:",
      play: "Google Play",
      apple: "App Store",
      storesHint: "Generic store links (the app listing will go live at launch).",
      notifyTitle: "Notify me at launch",
      notifyLead: "Leave your email; on this page the signup is stored only in your browser (localStorage), with no custom backend.",
      linkNosotros: "Meet the team",
      featuresTitle: "What you will do in the app",
      f1t: "Plan",
      f1p: "Lists, budget, and basket comparison before you leave home.",
      f2t: "Travel",
      f2p: "Route with ordered stops, ETAs, and 24h alternatives.",
      f3t: "Validate",
      f3p: "Confirm shelf prices and report mismatches in a few taps.",
      privacyTitle: "Privacy",
      privacyP:
        "The launch-notify form on this page only stores emails in your browser (localStorage) to simulate signup; there is no custom backend. In production we would add explicit consent and a privacy policy aligned with Peruvian regulation.",
      heroImgAlt: "Person using a mobile phone",
    },
    nosotros: {
      title: "About FlowState Tech",
      lead: "We are the team behind <strong>SmartCart</strong>: a mobile product to save on in-store shopping with comparable data and smart routes.",
      missionTitle: "Mission",
      missionBody:
        "Bring clarity to household budgets and proximity retail with comparable shelf data and routes that respect your time.",
      visionTitle: "Vision",
      visionBody:
        "A reference mobile app in Peru for smart in-store shopping: fewer detours, a better ticket, and a community that validates prices in store.",
      valuesTitle: "Values",
      valuesBody:
        "Transparency, human-centered design, and disciplined engineering — product decisions stay documented so the roadmap stays coherent and auditable.",
      teamTitle: "Team & focus",
      teamIntro:
        "FlowState Tech builds SmartCart for Peruvian shoppers who still visit stores: compare before you pay, travel less, and trust what you see on the shelf — without becoming a delivery app.",
      card1t: "Product",
      card1p: "User stories, prototypes, and value metrics aligned to savings and route time.",
      card2t: "Technology",
      card2p: "Architecture ready to scale: basket comparison, stop map, and community validation.",
      cta: "Download SmartCart",
      ctaHome: "Back to home",
      storyTitle: "Why SmartCart exists",
      storyP1:
        "SmartCart responds to an everyday pain: comparing physical-store prices means notes, travel, and trusting memory or loose photos. We want that flow in one mobile app designed for Peru.",
      storyP2:
        "FlowState Tech blends product, UX, and engineering. We prioritize iteration with real shoppers, savings metrics, and a public roadmap on GitHub.",
      impactTitle: "Impact we aim for",
      im1t: "Households",
      im1p: "Budget clarity and fewer hours lost on unnecessary travel.",
      im2t: "Retail",
      im2p: "Offer visibility and zone demand signals to tune assortment and prices.",
      im3t: "Data",
      im3p: "Virtuous cycle: more community validation, higher trust in the comparator.",
      heroImgAlt: "Professionals in a modern workplace",
    },
    colab: {
      eyebrow: "FlowState Tech",
      title: "Collaborators",
      lead:
        "The people turning the SmartCart vision into a mobile experience: product, user-centered design, and solid engineering.",
      heroImgAlt: "Collage of SmartCart team photos",
      heroMosaicAria: "Group of five FlowState Tech members building SmartCart",
      gridTitle: "Who builds SmartCart",
      gridIntro:
        "Software and design engineers at FlowState Tech building SmartCart for shoppers and retail in Peru.",
      tapPhotoHint: "Tap someone’s photo to read their full biography.",
      m1photoAria: "View full biography of Anjali Amaro Villar",
      m2photoAria: "View full biography of Joseph Manuel Chavez Viera",
      m3photoAria: "View full biography of Katherine Maryory Mejia Aliaga",
      m4photoAria: "View full biography of Kevin Patrick Pardo Chumpitazi",
      m5photoAria: "View full biography of Stephano Renan Valdivia Quispe",
      m1name: "Anjali Amaro Villar",
      m1meta: "U20221G044 · Software Engineering",
      m1bio:
        "I'm Anjali Amaro, 20, in my sixth cycle of Software Engineering. I have web development skills and a solid backend foundation with Java and Spring Boot. I'm known for active listening and commitment to the team, always ready to support my peers so we meet project goals together.",
      m1alt: "Portrait photo of Anjali Amaro Villar",
      m2name: "Joseph Manuel Chavez Viera",
      m2meta: "U202314019 · Software Engineering",
      m2bio:
        "I'm Joseph Chavez, 19, in my seventh cycle of Software Engineering. I work with C++ and Python and have basic JavaScript knowledge. I believe consistent practice in learning shows up in professional work, so I seek experiences that bring me closer to real products like SmartCart.",
      m2alt: "Portrait photo of Joseph Manuel Chavez Viera",
      m3name: "Katherine Maryory Mejia Aliaga",
      m3meta: "U20221A118 · Software Engineering",
      m3bio:
        "I'm Katherine Mejia, 21, in my sixth cycle of Software Engineering. I know C++, Python, and HTML. I like teamwork and bringing out the best in my classmates. I can generate fresh ideas and I'm always open to learning new skills.",
      m3alt: "Portrait photo of Katherine Maryory Mejia Aliaga",
      m4name: "Kevin Patrick Pardo Chumpitazi",
      m4meta: "U20221A525 · Software Engineering",
      m4bio:
        "I'm a 21-year-old Software Engineering student with Java and Python skills and foundations in web technologies like HTML. Although I'm reserved and sometimes find interaction hard, I keep improving teamwork through technical support and active collaboration, aiming to add value while growing interpersonal skills.",
      m4alt: "Portrait photo of Kevin Patrick Pardo Chumpitazi",
      m5name: "Stephano Renan Valdivia Quispe",
      m5meta: "U202311294 · Software Engineering",
      m5bio:
        "Student and full-stack developer with a strong architectural mindset. Strong in backend (Java/Spring Boot, C#/.NET Core) and frontend (Vue.js, Angular, Next.js). I design modern systems with clear business modeling, microservices, and relational/NoSQL databases. Hands-on experience with agile methods to turn complex requirements into robust solutions.",
      m5alt: "Portrait photo of Stephano Renan Valdivia Quispe",
      note: "Photos provided by the FlowState Tech team.",
      ctaAbout: "About the startup",
      ctaGithub: "View on GitHub",
    },
    faq: {
      title: "Frequently asked questions",
      lead: "Clear answers by profile: in-store shopping, retail, or learning about the project.",
      lead2: "If you need more detail, visit Collaborators or the public repository on GitHub.",
      heroImgAlt: "Team reviewing questions and notes together",
      tabC: "Consumer",
      tabR: "Retail",
      tabT: "Project",
      c1q: "Does SmartCart sell products or charge delivery?",
      c1a:
        "No. SmartCart helps you <strong>compare shelf prices</strong> and <strong>plan a route</strong> across physical stores. You always pay at each retailer, as you do today.",
      c2q: "How does it help me save?",
      c2a:
        "By comparing your <strong>basket</strong> across nearby chains and suggesting a <strong>multi-stop trip</strong> so you spend less money and less time getting around.",
      c3q: "Are prices reliable?",
      c3a:
        "We combine <strong>data from affiliated stores</strong> with <strong>reports and confirmations from shoppers in store</strong>. If something looks wrong, you can flag a possible price mismatch to improve quality.",
      c4q: "Do I need separate accounts per store?",
      c4a:
        "No. <strong>One consumer account</strong> covers your lists, your route, and your participation validating prices — no duplicate sign-ups per chain.",
      r1q: "How do I affiliate my branch?",
      r1a:
        "Through an <strong>affiliation request</strong> and <strong>RUC</strong> verification against official sources. As a <strong>verified store</strong>, you can appear on the map and comparator according to product rules.",
      r2q: "Can I publish flash offers?",
      r2a:
        "Yes. The flow assumes a <strong>store manager</strong> can publish <strong>offers</strong> with validity and stock to rotate product and reduce spoilage.",
      r3q: "Will I get reports or metrics?",
      r3a:
        "The product vision includes <strong>zone demand signals</strong> and reports to support <strong>pricing and assortment</strong>; specifics evolve with each app release.",
      r4q: "Where do shoppers see my offers?",
      r4a:
        "In the <strong>basket comparator</strong> and in <strong>notifications</strong> when they match a shopper’s list. You control validity and linked stock.",
      t1q: "Where is the technical documentation?",
      t1a:
        'In the public <a href="https://github.com/FlowState-Tech/smartcart-report" target="_blank" rel="noopener noreferrer">smartcart-report</a> repository on GitHub: user stories, diagrams, and architecture notes.',
      t2q: "What does this landing store in my browser?",
      t2a:
        "Only what you submit in the <strong>download notice</strong> form: it’s saved in <strong>localStorage</strong> on your device — there is no custom backend on this page. A production app would add explicit consent and a privacy policy.",
      t3q: "What use case is the app designed for?",
      t3a:
        "<strong>In-store shopping in Peru</strong>: compare before you leave, visit several stores with an ordered route, and lean on the community to keep shelf prices useful.",
      t4q: "How is SmartCart organized internally?",
      t4a:
        "As <strong>independent modules</strong> (identity, stores, planning, journey, shopper experience, notifications…) with clear interfaces so the product can scale cleanly. Diagrams live on GitHub.",
    },
    layers: {
      Domain: "Domain",
      Application: "Application",
      Interface: "Interface",
      Infrastructure: "Infrastructure",
    },
    bc: {
      "store-management": {
        tagline: "Inventory, pricing, and analytics engine for verified stores.",
        description:
          "Catalog, stock, and shelf prices. Foundation of the comparator and demand reports for managers. Central data repository consumed by planning, journey, and notifications.",
      },
      "shopping-journey": {
        tagline: "In-store execution: stops, arrivals, and timings.",
        description:
          "Route optimization, stops, and arrival logging. Delivers the core promise of saving time on multi-channel in-store trips.",
      },
      "shopping-planning": {
        tagline: "Lists, basket, max budget, and comparisons across formats.",
        description:
          "Where shoppers define intent: shopping list, household basket, and savings rules before heading out.",
      },
      experience: {
        tagline: "Community validation, ratings, reviews, and Trust Profile.",
        description:
          "Strengthens core data quality: price mismatch, reports, and reputation. Connects user voice to data trust.",
      },
      notification: {
        tagline: "Offer alerts, channels, and frequency limits (rate limiting).",
        description:
          "Timely communication when prices move or basket opportunities appear, without spamming users.",
      },
      iam: {
        tagline: "Identity, credentials, sessions, and roles (Consumer / StoreManager).",
        description:
          "Cross-cutting context required to run the platform, not the retail differentiator itself.",
      },
      verification: {
        tagline: "Affiliation request, RUC, and verified store against official sources.",
        description:
          "Compliance and legal validation of stores before they appear on the public map.",
      },
    },
    modal: {
      comparador: {
        title: "Universal basket comparator",
        html: `<p>Shelf prices across chains and formats (proximity vs. bulk). Includes per-kg or per-unit comparison when weight/volume data exists.</p><p><a href="https://github.com/FlowState-Tech/smartcart-report" target="_blank" rel="noopener noreferrer">View documentation on GitHub →</a></p>`,
      },
      ruta: {
        title: "Multi-store smart route",
        html: "<p>The app orders your <strong>stops</strong>, estimates <strong>travel time</strong> between stores, and can suggest <strong>alternatives</strong> (for example, if a store is closed or out of stock).</p>",
      },
      crowd: {
        title: "Validation & Experience",
        html: "<p>Users confirm in-store prices (GPS proximity), report discrepancies, and feed each <strong>verified store’s Trust Profile</strong>.</p>",
      },
      flow1: {
        title: "Scenario: new store on SmartCart",
        html: `<p>From affiliation request (<strong>Verification</strong>) to visible inventory (<strong>Store Management</strong>), including manager identities (<strong>IAM</strong>).</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/inventory-management.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>`,
      },
      flow2: {
        title: "Scenario: planning",
        html: '<p>List → basket → cross-store comparison before starting the trip.</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/shopping-planning.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>',
      },
      flow3: {
        title: "Scenario: journey",
        html: '<p>Navigation along the <strong>optimal route</strong> with logged arrivals at each stop.</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/shopping-journey.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>',
      },
      flow4: {
        title: "Scenario: post-purchase",
        html: '<p>Ratings, reviews, and <em>completed journey</em> closure; feedback into the data ecosystem.</p><p><img src="https://raw.githubusercontent.com/FlowState-Tech/smartcart-report/main/assets/domain-message-flows/post-purchase-experience.png" alt="" style="width:100%;border-radius:8px;margin-top:8px" loading="lazy" /></p>',
      },
      bodyPlaceholder:
        "Close with X, Esc, or the dimmed background. More detail under Benefits and in the GitHub repository.",
    },
  },
};

function readHashLang() {
  const hash = window.location.hash || "";
  const q = hash.includes("?") ? hash.split("?")[1] : "";
  const lang = new URLSearchParams(q).get("lang");
  if (lang && SUPPORTED.includes(/** @type {*} */ (lang))) return lang;
  return null;
}

export function getLocale() {
  const fromUrl = readHashLang();
  if (fromUrl) return /** @type {"es"|"en"} */ (fromUrl);
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(/** @type {*} */ (stored))) return /** @type {"es"|"en"} */ (stored);
  return "es";
}

export function setLocale(lang) {
  if (!SUPPORTED.includes(/** @type {*} */ (lang))) return;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  syncLangControls();
  applyHeadMeta();
  window.dispatchEvent(new CustomEvent("smartcart:locale", { detail: { lang } }));
}

export function t(key) {
  const locale = getLocale();
  const bundle = MESSAGES[locale] || MESSAGES.es;
  const val = key.split(".").reduce((o, k) => (o && typeof o === "object" && k in o ? o[k] : null), bundle);
  if (val == null || typeof val === "object") return key;
  return String(val);
}

/** Reemplaza {{placeholders}} en una cadena traducida */
export function tf(key, vars) {
  let s = t(key);
  Object.entries(vars).forEach(([k, v]) => {
    s = s.split(`{{${k}}}`).join(String(v));
  });
  return s;
}

export function applyHeadMeta() {
  const title = t("meta.title");
  const desc = t("meta.description");
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", desc);
}

/** Recorre nodos con data-i18n (texto), data-i18n-html, data-i18n-placeholder, data-i18n-aria-label */
export function applyI18n(root) {
  if (!root) return;
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key);
  });
  root.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (!key) return;
    el.innerHTML = t(key);
  });
  root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key || !(el instanceof HTMLInputElement)) return;
    el.placeholder = t(key);
  });
  root.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    el.setAttribute("aria-label", t(key));
  });
  root.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (!key) return;
    el.setAttribute("title", t(key));
  });
  root.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (!key || !(el instanceof HTMLImageElement)) return;
    el.alt = t(key);
  });
}

export function syncLangControls() {
  const cur = getLocale();
  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    const l = btn.getAttribute("data-set-lang");
    btn.classList.toggle("is-active", l === cur);
    if (btn instanceof HTMLButtonElement) btn.setAttribute("aria-pressed", l === cur ? "true" : "false");
  });
}

export function formatDemoMin(n) {
  return t("demo.outMin").replace("{{n}}", String(n));
}

export function getModalCopy(key) {
  const title = t(`modal.${key}.title`);
  const html = t(`modal.${key}.html`);
  return { title, html };
}

export function getBcCopy(slug) {
  return {
    tagline: t(`bc.${slug}.tagline`),
    description: t(`bc.${slug}.description`),
  };
}

export function translateLayerName(name) {
  const k = `layers.${name}`;
  const v = t(k);
  return v === k ? name : v;
}
