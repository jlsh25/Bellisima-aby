// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar el estado del modo oscuro en el localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }
});

// Cerrar Sesión con confirmación
document.getElementById("logoutButton").addEventListener("click", () => {
  const confirmation = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmation) {
    window.location.href = "index.html";
  }
});

// Navegación entre secciones
const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".content-section");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Oculta todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Muestra la sección seleccionada
    document.getElementById(targetId).classList.add("active");

    // Marca el enlace como activo
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Mostrar/Ocultar Sidebar
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("load", () => {
  // Recuperar la fecha de aniversario desde el localStorage
  const anniversaryDate = localStorage.getItem("anniversaryDate");
if (anniversaryDate) {
    const anniversary = new Date(anniversaryDate);
    const today = new Date();

    // Calcular la diferencia en años, meses y días
    let years = today.getFullYear() - anniversary.getFullYear();
    let months = today.getMonth() - anniversary.getMonth();
    let days = today.getDate() - anniversary.getDate();

    // Si el mes actual es anterior al mes de aniversario, restamos 1 año
    if (months < 10) {
      years--;
      months += 12; // Ajustamos los meses a 12 si restamos un año
    }

    // Si el día actual es anterior al día de aniversario, restamos 1 mes
    if (days < 18) {
      months--;
      // Ajustamos los días al último día del mes anterior
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Función para manejar singular o plural
    const yearText = years === 1 ? "año" : "años";
    const monthText = months === 1 ? "mes" : "meses";
    const dayText = days === 1 ? "día" : "días";

    // Mostrar el número de años, meses y días en el dashboard
    document.getElementById(
      "daysCount"
    ).innerText = `Jsjsjs Se que practicamente todos los que estan aqui son tus crush pero ni modos jsjsjsjs en cada imagen hay mensajito pon el cursor encima de cada una para  saber que dice sjsjjs - `;
  }
});



particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // Número de partículas (corazones)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "https://img.icons8.com/?size=100&id=12306&format=png&color=000000", // Aquí puedes usar cualquier imagen de corazón
        width: 2,
        height: 2,
      },
    },
    move: {
      enable: true,
      speed: 1, // Velocidad de caída
      direction: "top", // Dirección hacia abajo
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
});

const mensajes = [
  "Eres mi razón de sonreír cada día lit siempre que veo que llega un mensajito tuyo jmmm si me vieras ajsjsajsa. 💖",
  "Contigo incluso 5 segundos valen más que horas con cualquier otra persona. 🌟",
  "Tu eres mi mayor tesoro. 🏆",
  "Jmmm mas les vale a esos compañeritos del trabajo no molestarte jmmmm es mas que ni te miren jasjsajsa. 🌹",
  "Gracias por hacerme tan feliz por llegar a mi vida. 😊",
  "Eres la mejor parte de mi día. ☀️",
  "Mi corazón late por ti. 💓",
  "I love you in all the universes. 💓",
  "Quiero que estes bien y ya. 🌹",
  "una vida junto a ti es todo lo que podria desear. ☀️",
  "Eres mi mundo. 💖",
  "Eres my reason. 💓",
  "Eres mi sueño hecho realidad 🏆 .",
  "Tu sonrisa es mi felicidad. 😊",
  "Tienes los ojos mas hermosos que he visto en mi vida. 🌟",
  "Si existieran portales entre mundos, cruzaría todos solo para encontrarte otra vez 💫",
  "Te esperaría el tiempo que hiciera falta, porque contigo todo vale la pena ⏳💖",
  "Siempre te veré maravillosa aunque el mundo no lo entienda ⚡🌸",
  "Si el mundo se pone en tu contra, yo me pongo en tu equipo sin dudarlo 🖤",
  "Eres perfecta tal como eres, no necesitas cambiar nada  💫",
  "Siempre voy a proteger tu corazón 🗡️💖",
  "No sé qué hice para merecerte pero gracias a Dios que llegaste a mi vida. 🌹",
  "Tu existencia ya mejora mi día automáticamente ☀️",
  "Te quiero muchisimo más de lo que debería admitir jsjsjs ni te imaginas 💖",
  "Tal vez no tenga las palabras correctas... ni las manos más firmes, pero tengo este sentimiento que no sabe rendirse... Te elegiría en los días buenos y también en los que el cielo se cae, Te elegiría cuando sonríes, y cuando no sabes cómo seguir...  Hay algo en ti que hace que todo duela menos Como si tu existencia le diera sentido a cada paso que di antes de encontrarte... Prometo quedarme, ser ese lugar al que puedas volver cuando el mundo te falle... Y si alguna vez dudas, tan solo mírame, Aquí estare para ti, Siempre."
];

let mensajesDisponibles = [...mensajes];

const mensajeTexto = document.getElementById("mensaje-texto");
const nuevoMensajeBtn = document.getElementById("nuevo-mensaje-btn");

function mostrarMensajeAleatorio() {
  if (mensajesDisponibles.length === 0) {
    mensajesDisponibles = [...mensajes];
  }

  const indiceAleatorio = Math.floor(Math.random() * mensajesDisponibles.length);
  const mensajeAleatorio = mensajesDisponibles[indiceAleatorio];

  mensajeTexto.textContent = mensajeAleatorio;

  mensajesDisponibles.splice(indiceAleatorio, 1);
}


// Mostrar un mensaje al cargar la página
mostrarMensajeAleatorio();

// Cambiar mensaje al hacer clic en el botón
nuevoMensajeBtn.addEventListener("click", mostrarMensajeAleatorio);


document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playlistItems = document.querySelectorAll('.playlist ul li');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
        });
    });
});


// JavaScript para mostrar la sorpresa
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("sorpresa-btn");
    const countdown = document.getElementById("countdown");
    const content = document.getElementById("sorpresa-content");

    btn.addEventListener("click", () => {
        btn.style.display = "none";
        countdown.classList.remove("hidden");
    });

    const fechaObjetivo = new Date("2026-07-10T00:00:00").getTime();

    setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            countdown.classList.add("hidden");
            content.classList.remove("hidden");
            return;
        }

        document.getElementById("days").textContent =
            Math.floor(diferencia / (1000 * 60 * 60 * 24));
        document.getElementById("hours").textContent =
            Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        document.getElementById("minutes").textContent =
            Math.floor((diferencia / (1000 * 60)) % 60);
        document.getElementById("seconds").textContent =
            Math.floor((diferencia / 1000) % 60);

    }, 1000);

});


document.getElementById('sorpresa-btn').addEventListener('click', function() {
    const contenido = document.getElementById('sorpresa-content');
    contenido.classList.toggle('hidden'); // Muestra u oculta la sorpresa
});


