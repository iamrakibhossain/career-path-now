import { gsap } from "../../Animations/gsapSetup";

export const navbarIntro = (root) => {

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(root.querySelector(".nav-logo"), {
    x: -50,
    opacity: 0,
    duration: 0.6,
  })
    .from(root.querySelectorAll(".nav-item"), {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    }, "-=0.3")
    .from(root.querySelector(".nav-actions"), {
      x: 30,
      opacity: 0,
      duration: 0.6,
    }, "-=0.4");
};