/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMessage.className = "form-message error";
            formMessage.textContent = "Please fill out all fields.";
            return;
        }

        // Simulate sending message
        formMessage.className = "form-message loading";
        formMessage.textContent = "Sending...";

        setTimeout(() => {
            formMessage.className = "form-message success";
            formMessage.textContent = "Thank you for your message! I will get back to you soon.";
            form.reset();
        }, 1000);

    });
});

formMessage.className = "form-message error";
formMessage.textContent = "Please fill out all fields.";


// document.addEventListener("DOMContentLoaded", () => {
//   const projectContainer = document.getElementById("projects-container");   
//   const githubUsername = "Bhavik7173"; // 👈 your GitHub username

//   fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
//     .then(response => response.json())
//     .then(repos => {
//       projectContainer.innerHTML = "";

//       repos.forEach(repo => {
//         if (repo.fork) return; // skip forks

//         const card = document.createElement("div");
//         card.classList.add("work__card");

//         // Default content (will be replaced if README exists)
//         card.innerHTML = `
//           <h3 class="work__title">${repo.name}</h3>
//           <p class="work__description">${repo.description || "No description provided."}</p>
//           <a href="${repo.html_url}" target="_blank" class="button">View on GitHub</a>
//         `;

//         projectContainer.appendChild(card);

//         // Now fetch README for this repo
//         fetch(`https://api.github.com/repos/${githubUsername}/${repo.name}/readme`)
//           .then(res => res.json())
//           .then(readme => {
//             if (readme.content) {
//               const content = atob(readme.content);
//               const firstLine = content.split("\n")[0]; // first line only
//               card.querySelector(".work__description").textContent = firstLine;
//             }
//           })
//           .catch(err => {
//             console.warn(`No README for ${repo.name}`);
//           });
//       });
//     })
//     .catch(error => {
//       console.error("Error fetching repos:", error);
//       projectContainer.innerHTML = "<p>⚠️ Could not load projects.</p>";
//     });
// });
