```javascript
/* ==========================
   Cursor Glow Effect
========================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


/* ==========================
   Scroll Reveal Animation
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  revealElements
);

window.addEventListener(
  "load",
  revealElements
);


/* ==========================
   Magnetic Buttons
========================== */

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        button.getBoundingClientRect();

      const x =
        e.clientX -
        rect.left -
        rect.width / 2;

      const y =
        e.clientY -
        rect.top -
        rect.height / 2;

      button.style.transform =
        `translate(${x * 0.15}px,
                   ${y * 0.15}px)`;

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.transform =
        "translate(0px,0px)";

    }
  );

});


/* ==========================
   Navbar Blur on Scroll
========================== */

const navbar =
  document.querySelector(".navbar");

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 40) {

      navbar.style.background =
        "rgba(10,10,10,.85)";

      navbar.style.backdropFilter =
        "blur(24px)";

      navbar.style.borderBottom =
        "1px solid rgba(255,255,255,.08)";

    }
    else {

      navbar.style.background =
        "rgba(10,10,10,.6)";

      navbar.style.borderBottom =
        "1px solid rgba(255,255,255,.05)";
    }

  }
);


/* ==========================
   Hero Fade Animation
========================== */

window.addEventListener(
  "load",
  () => {

    const hero =
      document.querySelector(".hero-content");

    hero.animate(
      [
        {
          opacity: 0,
          transform:
            "translateY(40px)"
        },

        {
          opacity: 1,
          transform:
            "translateY(0)"
        }
      ],
      {
        duration: 1000,
        easing:
          "cubic-bezier(.2,.8,.2,1)",
        fill: "forwards"
      }
    );

  }
);


/* ==========================
   Project Hover Tilt
========================== */

const cards =
  document.querySelectorAll(
    ".project-card"
  );

cards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        (y - centerY) / 20;

      const rotateY =
        (centerX - x) / 20;

      card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
        `;

    }
  );

});


/* ==========================
   Active Nav Highlight
========================== */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav a");

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 150;

      if (
        pageYOffset >= sectionTop
      ) {
        current =
          section.getAttribute("id");
      }

    });

    navLinks.forEach((link) => {

      link.classList.remove(
        "active-link"
      );

      if (
        link.getAttribute("href")
        === `#${current}`
      ) {
        link.classList.add(
          "active-link"
        );
      }

    });

  }
);
```
