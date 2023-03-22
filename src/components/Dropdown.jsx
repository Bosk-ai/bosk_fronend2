import checkIcon from "../assets/images/check.svg";
import { StyledDropdown } from "../constats/styles";

export const Dropdown = ({ options, onSelectOption, open, footer, selected, showSelected }) => (
  <StyledDropdown className="dropdown" open={open}>
    <div className="options">
      {
        options?.map((opt, i) => (
          <div
            key={i}
            onClick={() => onSelectOption(opt)}
            className="option"
          >
            {opt.title}
            {
              ((opt?.value === selected?.value) && showSelected) &&
              <img src={checkIcon} alt="" className="selected" />
            }
          </div>
        ))
      }
    </div>
    {
      footer ?
        <div className="footer">{footer}</div>
        : null
    }
  </StyledDropdown>
)
