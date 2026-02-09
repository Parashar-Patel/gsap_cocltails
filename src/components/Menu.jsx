import React from "react";
import { allCocktails } from "../../Constants";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.fromTo(
      "#m-right-leaf",
      { x: 200, y: -100, rotate: 20 },
      { x: 0, y: 0, rotate: 0, ease: "power1.out" },
    );

    tl.fromTo(
      "#m-left-leaf",
      { x: -200, y: 200, rotate: -20 },
      { x: 0, y: 0, rotate: 0, ease: "power1.out" },
    );

    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, duration: 1, xPercent: -100 },
      { opacity: 1, duration: 1.2, xPercent: 0, ease: "power2.out" },
    );
    gsap.fromTo(
      ".details h2",
      { opacity: 0, duration: 1, yPercent: +100 },
      { opacity: 1, duration: 0.6, yPercent: 0, ease: "power2.out" },
    );
    gsap.fromTo(
      ".details p",
      { opacity: 0, duration: 1, yPercent: +100 },
      { opacity: 1, duration: 0.8, yPercent: 0, ease: "power1.out" },
    );
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(+1);
  const prevCocktail = getCocktailAt(-1);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="overflow-hidden"
    >
      <img className="bottom-0" src="images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img
        className="top-0"
        src="images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => {
              goToSlide(currentIndex - 1);
            }}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => {
              goToSlide(currentIndex + 1);
            }}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
