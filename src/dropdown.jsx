
import { useState } from "react";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"];

   const hoverEvent = (isVisible,duration)=>{setTimeout(() => setIsActive(isVisible), duration)};

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        // onClick={(e) => setIsActive(!isActive)}
        onMouseOver={(e) => hoverEvent(true,350)}
        onMouseOut={(e) => hoverEvent(false,350)}
      >
        {selected || "Choose One"}
      </div>

      {isActive && (
        <div className="dropdown-content"  onMouseOver={(e) => hoverEvent(true,350)}
        onMouseOut={(e) => hoverEvent(false,350)}>
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
