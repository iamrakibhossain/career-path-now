import { gsap } from "../../Animations/gsapSetup";

export const footerIntro = (root) => {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: root,
      start: "top 95%",
    },
  });

 
  tl.from(root.querySelectorAll(".ft-col"), {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    clearProps: "transform",
  })

    .from(root.querySelectorAll(".ft-icon"), {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(2)",
      clearProps: "transform",
    }, "-=0.4")
    
    .from(root.querySelector(".ft-line"), {
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
      clearProps: "transform",
    }, "-=0.3")
    
    .from(root.querySelector(".ft-copy"), {
      opacity: 0,
      y: 10,
      duration: 0.5,
    }, "-=0.3");
};