import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import { listOfInterest } from "../../lib/data";

const Interests = () => {
  return (
    <section>
      <SectionHeading>Mis interes</SectionHeading>
      <div>
        {listOfInterest.map((interest, index) => (
          <div key={index}>
            <p>{interest.title}</p>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
