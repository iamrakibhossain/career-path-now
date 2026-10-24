import { gsap } from "../../Animations/gsapSetup";

export const reviewIntro = (root) => {
  gsap.from([root.querySelector(".rv-title"), root.querySelector(".rv-text")], {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: root,
      start: "top 75%",
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root.querySelector(".rv-list"),
      start: "top 80%",
    },
  });

  tl.from(root.querySelectorAll(".rv-card"), {
    y: 60,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: "power3.out",
    clearProps: "transform",
  }).from(root.querySelectorAll(".rv-avatar"), {
    scale: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",
  }, "<0.3");

  gsap.from(root.querySelector(".rv-arrow"), {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: root.querySelector(".rv-arrow"),
      start: "top 95%",
    },
  });
};