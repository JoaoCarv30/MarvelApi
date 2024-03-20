import React from "react";
import "./home.css";

import { IoMdSearch } from "react-icons/io";

export const Home = () => {
  return (
    <main>
      <section className="banner_section ">
        <div className="content_banner">
          <h1 id="title-banner">
            Explore the most powerful <br/> characters in Marvel{" "}
          </h1>

          <form>
            <input type="text" placeholder="Type in a character name" />
            <button>
              {" "}
              <IoMdSearch />{" "}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
