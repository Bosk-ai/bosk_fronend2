import { useState } from "react";
import { StyledCheckbox } from "../constats/styles";
import checkedIcon from "../assets/images/checked.svg";

export const Checkbox = ({ label, className }) => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledCheckbox className={className} checked={checked}>
      <div className="checkbox" onClick={() => setChecked(!checked)}>
        <img src={checkedIcon} alt="" />
      </div>
      <span className="label">{label}</span>
    </StyledCheckbox>
  );
};
