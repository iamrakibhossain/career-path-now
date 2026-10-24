import { gsap } from "../../Animations/gsapSetup";

export const aboutIntro = (root) => {
  gsap.from(root.querySelector(".about-heading"), {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: root,
      start: "top 75%",
    },
  });

  gsap.from(root.querySelectorAll(".about-card"), {
    y: 60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: "power3.out",
    clearProps: "transform",
    scrollTrigger: {
      trigger: root.querySelector(".about-cards"),
      start: "top 80%",
    },
  });

  gsap.from(root.querySelector(".about-circle"), {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: root.querySelector(".about-cards"),
      start: "top 80%",
    },
  });

 
  gsap.from(root.querySelector(".about-btn"), {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: root.querySelector(".about-btn"),
      start: "top 92%",
    },
  });
};