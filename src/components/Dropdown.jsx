import checkIcon from "../assets/images/check.svg";
import { StyledDropdown } from "../constats/styles";

export const Dropdown = ({
  options,
  onSelectOption,
  open,
  footer,
  selected = "",
}) => (
  <StyledDropdown className="dropdown" open={open}>
    <div className="options">
      {options?.map((opt, i) => (
        <div
          key={i}
          onClick={() => onSelectOption(opt)}
          className={`option ${
            selected?.length > 0 && opt?.value === selected && "selected"
          }`}
        >
          {opt.title}
          {opt?.value === selected && <img src={checkIcon} alt="" />}
        </div>
      ))}
    </div>
    {footer ? <div className="footer">{footer}</div> : null}
  </StyledDropdown>
);
