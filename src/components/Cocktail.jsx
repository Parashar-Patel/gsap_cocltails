import { cocktailLists, mockTailLists } from "../../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktail = () => {
  useGSAP(() => {
    const parallexTimeline = gsap.timeline({
      scrollTrigger: {
        target: "#cocktails",
        start: "20% top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallexTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    },"0");
    parallexTimeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    },"0");
  });

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="l-leaf "
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Loved Mocktail</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
