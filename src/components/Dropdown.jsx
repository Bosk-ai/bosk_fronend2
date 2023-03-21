import styled from "styled-components"
import checkIcon from "../assets/images/check.svg";

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

const StyledDropdown = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: #FFFFFF;
  border: 1px solid #EAECF0;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
  transition: all .3s;
  opacity: 0;
  z-index: 10;
  visibility: hidden;
  .options {
    max-height: 200px;
    overflow: auto;
  }
  .footer {
    padding: 12px;
  }
  .option {
    padding: 10px 15px;
    text-align: left;
    transition: all .3s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      background: #3440541c;
    }
  }
  .selected {
    margin-left: 8px;
  }
  ${({ open }) => open && "opacity: 1 !important; visibility: visible !important;"}
`