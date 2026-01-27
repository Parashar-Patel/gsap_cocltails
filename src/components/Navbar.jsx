import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../../Constants/index.js";

const Navbar = () => {


  useGSAP(() => {
    const navTween = gsap.timeline({
      ScrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div className="px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="" />
          Velvet Pour
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key="link.id">
              <a href="`#${link.id]}`">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
