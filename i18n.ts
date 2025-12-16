import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Removing language detector to strictly enforce Spanish default as requested
// import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        services: 'Servicios',
        security: 'Problema',
        features: 'Funcionalidad',
        contact: 'Contacto',
        start: 'Comenzar Ahora'
      },
      hero: {
        badge: 'Laboratorio de Robótica en la Nube',
        title: 'Programe Robots',
        titleHighlight: 'Físicos Reales',
        titleSuffix: 'a Distancia.',
        description: '<strong>Su código. Nuestros robots. Ejecución instantánea.</strong><br/>Rent A Robot le permite programar, probar y monitorear hardware real en tiempo real desde su navegador, como si el laboratorio estuviera en su computadora.',
        ctaPrimary: 'Empezar a Programar',
        ctaSecondary: 'Ver Robots Disponibles',
        statsLatency: 'Latencia',
        statsConnection: 'Conexión'
      },
      problem: {
        badge: 'Rompiendo Barreras de Entrada',
        description: 'Sabemos que el hardware es caro y el acceso a laboratorios es limitado. Rent A Robot democratiza la ingeniería robótica.',
        feat1Title: 'Adiós al Hardware Costoso',
        feat1Desc: 'Olvídese de invertir miles de dólares en robots, baterías y refacciones. Pague solo por el tiempo de uso. Acceda a equipos de última generación sin riesgo de capital ni mantenimiento.',
        feat2Title: 'Más allá de la Simulación',
        feat2Desc: 'Los simuladores (Gazebo, Webots) son útiles, pero no representan la fricción, el ruido de los sensores o la física real. Valide sus algoritmos en el mundo real, donde importa, desde cualquier lugar del mundo.'
      },
      workflow: {
        badge: 'Flujo de Trabajo',
        title: 'Del Código a la Realidad',
        description: 'Eliminamos la barrera física. Usted se concentra en la lógica y los algoritmos; nosotros ponemos el hardware y la infraestructura.',
        step1Title: '1. Suba su Código',
        step1Desc: 'Acceda a nuestra plataforma, seleccione un robot disponible y despliegue su script (Python, C++, ROS). Todo desde la nube.',
        step2Title: '2. Ejecución en Tiempo Real',
        step2Desc: 'El código se ejecuta instantáneamente en el procesador del robot físico. Sin emuladores. Sin demoras. Hardware real reaccionando a su lógica.',
        step3Title: '3. Monitoreo y Ajuste',
        step3Desc: 'Observe a través de cámaras de alta velocidad y reciba telemetría de sensores (LiDAR, IMU, Odometría) en su dashboard. Corrija y re-ejecute al instante.',
        terminal: {
          connected: 'Conectado',
          init: 'Iniciando conexión...',
          drivers: 'Controladores de motor activos.',
          stream: 'Stream OK. Latencia: 21ms'
        }
      },
      models: {
        badge: 'Versatilidad',
        title: 'Adaptable a su Imagen Corporativa',
        description: 'Nuestra flota no solo es inteligente, también es elegante. Disponemos de múltiples configuraciones para alinearse perfectamente con la identidad visual de su marca.',
        colors: {
          white: 'Blanco Minimal',
          black: 'Negro Tech',
          yellow: 'Amarillo Marca'
        }
      },
      contact: {
        title: 'Empiece a Programar Ahora',
        subtitle: 'Solicite acceso a la API, documentación del SDK y reserve sus primeras horas de laboratorio remoto.',
        nameLabel: 'Nombre / Organización',
        namePlace: 'Ej. Desarrollador Independiente / Universidad X',
        emailLabel: 'Correo Electrónico',
        interestLabel: 'Tipo de Uso Principal',
        submit: 'Solicitar Acceso a la Plataforma',
        processing: 'Procesando...',
        disclaimer: 'Recibirá credenciales de acceso y documentación del SDK tras la verificación.',
        successTitle: '✓ Solicitud Recibida',
        another: 'Enviar otra consulta',
        interests: {
          dev: 'Desarrollo y Prototipado',
          research: 'Investigación (R&D)',
          edu: 'Educación / Académico',
          ent: 'Uso Corporativo a Escala'
        }
      },
      footer: {
        desc: 'Democratizando la automatización industrial a través del modelo Robot as a Service. Soluciones limpias, seguras y escalables.',
        company: 'Empresa',
        about: 'Sobre Nosotros',
        careers: 'Carreras',
        press: 'Prensa',
        legal: 'Legal',
        privacy: 'Privacidad',
        terms: 'Términos de Servicio',
        security: 'Seguridad',
        contact: 'Contacto',
        rights: 'Todos los derechos reservados.',
        design: 'Diseñado con enfoque Mobile-First & Security-First.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        services: 'Services',
        security: 'Problem',
        features: 'How it Works',
        contact: 'Contact',
        start: 'Start Now'
      },
      hero: {
        badge: 'Cloud Robotics Lab',
        title: 'Program Real',
        titleHighlight: 'Physical Robots',
        titleSuffix: 'Remotely.',
        description: '<strong>Your code. Our robots. Instant execution.</strong><br/>Rent A Robot allows you to program, test, and monitor real hardware in real-time from your browser, as if the lab were in your computer.',
        ctaPrimary: 'Start Programming',
        ctaSecondary: 'View Available Robots',
        statsLatency: 'Latency',
        statsConnection: 'Connection'
      },
      problem: {
        badge: 'Breaking Entry Barriers',
        description: 'We know hardware is expensive and lab access is limited. Rent A Robot democratizes robotics engineering.',
        feat1Title: 'Goodbye Expensive Hardware',
        feat1Desc: 'Forget investing thousands in robots, batteries, and spare parts. Pay only for usage time. Access state-of-the-art equipment with no capital risk or maintenance.',
        feat2Title: 'Beyond Simulation',
        feat2Desc: 'Simulators (Gazebo, Webots) are useful but don\'t represent friction, sensor noise, or real physics. Validate your algorithms in the real world, where it matters, from anywhere.'
      },
      workflow: {
        badge: 'Workflow',
        title: 'From Code to Reality',
        description: 'We remove the physical barrier. You focus on logic and algorithms; we provide the hardware and infrastructure.',
        step1Title: '1. Upload Your Code',
        step1Desc: 'Access our platform, select an available robot, and deploy your script (Python, C++, ROS). All from the cloud.',
        step2Title: '2. Real-Time Execution',
        step2Desc: 'Code runs instantly on the physical robot\'s processor. No emulators. No delays. Real hardware reacting to your logic.',
        step3Title: '3. Monitor & Tweak',
        step3Desc: 'Watch through high-speed cameras and receive sensor telemetry (LiDAR, IMU, Odometry) on your dashboard. Fix and re-run instantly.',
        terminal: {
          connected: 'Connected',
          init: 'Initializing connection...',
          drivers: 'Motor drivers active.',
          stream: 'Stream OK. Latency: 21ms'
        }
      },
      models: {
        badge: 'Versatility',
        title: 'Adaptable to Your Corporate Image',
        description: 'Our fleet is not only smart, but elegant. We have multiple configurations to align perfectly with your brand identity.',
        colors: {
          white: 'Minimal White',
          black: 'Tech Black',
          yellow: 'Brand Yellow'
        }
      },
      contact: {
        title: 'Start Programming Now',
        subtitle: 'Request API access, SDK documentation, and reserve your first remote lab hours.',
        nameLabel: 'Name / Organization',
        namePlace: 'Ex. Independent Developer / University X',
        emailLabel: 'Email Address',
        interestLabel: 'Primary Use Case',
        submit: 'Request Platform Access',
        processing: 'Processing...',
        disclaimer: 'You will receive access credentials and SDK docs after verification.',
        successTitle: '✓ Request Received',
        another: 'Send another inquiry',
        interests: {
          dev: 'Development & Prototyping',
          research: 'Research (R&D)',
          edu: 'Education / Academic',
          ent: 'Enterprise Scale'
        }
      },
      footer: {
        desc: 'Democratizing industrial automation through the Robot as a Service model. Clean, secure, and scalable solutions.',
        company: 'Company',
        about: 'About Us',
        careers: 'Careers',
        press: 'Press',
        legal: 'Legal',
        privacy: 'Privacy',
        terms: 'Terms of Service',
        security: 'Security',
        contact: 'Contact',
        rights: 'All rights reserved.',
        design: 'Designed with Mobile-First & Security-First approach.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Force Spanish by default
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;