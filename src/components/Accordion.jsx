import React, { useState } from "react";
import accordionItems from "../components/AccordionsItems";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      // Clicked on the currently active item, so close it.
      setActiveIndex(null);
    } else {
      // Clicked on a different item, open it.
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      <div className="faqs-container">
        <div className="faqs">
          <p>Support</p>
          <h1>FAQs</h1>
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking <br /> for? Please{" "}
            <span>chat to our friendly team.</span>{" "}
          </p>
        </div>
      </div>
      <div className="accordion-container">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-item-title ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleItemClick(index)}
          >
           <div className="item-title">{item.title} <p>+</p></div> 
          </div>
          {index === activeIndex && (
            <div className="accordion-item-content">{item.content}</div>
          )}
        </div>  
      ))}
      </div>
    </div>
  );
};
export default Accordion;
