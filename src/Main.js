import About from "./About.js";
import Portfolio from "./Portfolio.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";

import { useState } from "react";

function Main() {
    const [active, setActive] = useState("About Me");

    let activeClass, innerSectionHTML; 
    switch (active) {
        case "About Me":
            activeClass = "border-azr";
            innerSectionHTML = <About />   
            break;
        case "Skills":
            activeClass="border-rdr";
            innerSectionHTML = <Skills />
            break;
        case "Portfolio":
            activeClass = "border-ylw";
            innerSectionHTML = <Portfolio />
            break;
        case "Contact":
            activeClass="border-grn";
            innerSectionHTML = <Contact />
            break;
        default:
        break;
    };

    return (
        <>
        <main>
        <nav>
            <button 
                className="nav-azr"
                onClick={() => setActive("About Me")}>
                About Me
            </button>
            <button 
                className="nav-rdr"
                onClick={() => setActive("Skills")}>
                Skills
            </button>
            <button 
                className="nav-ylw"
                onClick={() => setActive("Portfolio") }>
                Portfolio
            </button>
            <button 
                className="nav-grn"
                onClick={() => setActive("Contact")}>
                Contact
            </button>
        </nav>
        <section className={activeClass}>
            <h3 className={activeClass}>{active}</h3>
            {innerSectionHTML}
        </section>
     </main>
     </>
    );
}

export default Main;