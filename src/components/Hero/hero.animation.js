import { gsap } from "../../Animations/gsapSetup";

export const heroIntro = (root) => {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.4,
  });

  tl.from(root.querySelector(".heroLeft"), {
    x: -100,
    opacity: 0,
    duration: 0.9,
  }).from(root.querySelector(".heroRight"), {
    x: 100,
    opacity: 0,
    duration: 0.9,
  }, "<") .from(root.querySelectorAll(".hero-card"), {
      y: 40,
      scale: 0.6,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "back.out(1.4)",
      transformOrigin: "left center",
      clearProps: "transform",
    }, "-=0.4")
    .from(root.querySelectorAll(".hero-avatar"), {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "back.out(1.7)",
      clearProps: "transform",
    }, "-=0.3")

  gsap.to(root.querySelector(".hero-img"), {
    y: -10,
    duration: 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1.5,
  });
  
};