import styled from "styled-components"

// --- APP --- //

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 312px 1fr;
  .pages {
    padding: 32px;
    overflow: auto;
    background: #F9FAFB;
    height: 100vh;
  }
`



// --- INPUT --- //

export const StyledInput = styled.div`
  .label {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ error }) => error ? "red" : "#344054"};
  margin-bottom: 6px;
  }
  .input-wrapper {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    height: ${({ textarea }) => textarea ? 100 : 44}px;
    background: #FFFFFF;
    border: 1px solid ${({ error }) => error ? "red" : "#D0D5DD"};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    width: 100%;
    ${({ disabled }) => disabled && "opacity: 0.8; cursor: no-drop;"}
  }
  input, textarea {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ error }) => error ? "red" : "#101828"};
    ${({ disabled }) => disabled && "cursor: no-drop;"}
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(${({ calendarIcon }) => calendarIcon}) no-repeat;
    width: 10px;
    height: 12px;
    border-width: thin;
}
  textarea {
    resize: none;
    height: 100% !important;
  }
  .icon-left {
    margin-right: 10px;
  }
  .icon-right {
    margin-left: 10px;
  }
  .error-message {
    margin-top: 10px;
    font-size: 13px;
    color: red;
    font-weight: bold;
    text-align: center;
  }
`

export const StyledInputSelect = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  padding: ${({ right }) => right ? "0 0 0 10px" : "0 10px 0 0"} !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #101828;
  img {
    transition: all .3s;
    margin-left: 4px;
  }
  &:focus {
    img {
      transform: rotate(180deg);
    }
  }
  &:focus > .dropdown {
    opacity: 1;
    visibility: visible;
  }
`



// --- MODAL --- //

export const StyledModalFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  .btn {
    width: 100%;
    justify-content: center;
  }
  .save-btn {
    margin-left: 12px;
  }
`

export const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  img {
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity:  0.5;
    }
  }
`

export const StyledModal = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: rgba(52, 64, 84, 0.7);
backdrop-filter: blur(8px);
display: flex;
justify-content: center;
overflow: auto;
opacity: 0;
visibility: hidden;
transition: all .3s;
${({ open }) => open && "opacity: 1; visibility: visible;"}
padding: 30px 0;
z-index: 100;
.wrapper {
  width: 90%;
  max-width: 400px;
  background: #FFFFFF;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
  padding: 24px;
  height: max-content;
}
`



// --- SELECT --- //

export const StyledSelect = styled.div`
  .label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ error }) => error ? "red" : "#344054"} ;
    margin-bottom: 6px;
  }
  .select-wrapper {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid ${({ error }) => error ? "red" : "#D0D5DD"};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    width: 100%;
    position: relative;
  .placeholder {
    color: #667085;
  }
  .value {
    width: 100%;
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ error }) => error ? "red" : "#101828"} ;
  }
  &:focus {
    img {
      transform: rotate(180deg);
    }
  }
  &:focus > .dropdown {
    opacity: 1;
    visibility: visible;
  }
  .dropdown {
    width: 100%;
  }
  }
`



// --- SIDEBAR --- //

export const StyledAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: url(${({ avatar }) => avatar}) center/cover no-repeat;
  border-radius: 200px;
`

export const StyledProfileInfo = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-left: 12px;
  .name {
    font-weight: 600;
    color: #FFFFFF;
  }
  .role {
    font-weight: 400;
    color: #F2F4F7;
  }
`

export const StyledLogout = styled.img`
  display: block;
  margin-left: auto;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    opacity: 0.5;
  }
`

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
`

export const StyledSidebarLogo = styled.a`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
  color: #FFFFFF;
  margin-bottom: 24px;
  padding: 0 14px;
  img {
    height: 32px;
  }
  span {
    margin-left: 8px;
  }
`

export const StyledNavLink = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #F2F4F7;
    transition: all .3s;
    margin-bottom: 4px;
    span {
      margin-left: 12px;
    }
    &:hover,&.active {
      background: #42307D;
    }
  }
`

export const StyledSidebar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #101828;
min-height: 100vh;
padding: 32px 16px;
`



// --- TABLE --- //

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  font-family: 'Archivo', sans-serif !important;
  position: relative;
  overflow: auto;
  border: 1px solid #EAECF0;
  border-radius: 12px;
  td {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #475467;
    text-align: center;
    padding: 25px 0;
    border-bottom: 1px solid #EAECF0;
    b {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #475467;
    }
    .large {
      font-size: 20px;
    }
    .red {
      color: #F04438;
    }
  }
  .no-borders td {
    border: none !important;
  }
`

export const StyledTableHeader = styled.tr`
  th {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #475467;
    padding: 13px 24px;
    text-align: center;
    cursor: pointer;
    background: #F9FAFB;
    border-bottom: 1px solid #EAECF0;;
    &:first-child {
      border-radius: 12px 0 0 0;
    }
    &:last-child {
      border-radius: 0 12px 0 0;
    }
  }
  span {
    margin-left: 5px;
  }
  img {
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    margin-left: 4px;
  }
  .active-arrow {
    opacity: 1;
    visibility: visible;
  }
  .arrow-up {
    transform: rotate(180deg);
    transition: all .3s;
  }
`

export const StyledTableLoading = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffffffc2;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease;
  opacity: 0;
  visibility: visible;
  z-index: -1;
  min-height: 180px;
  ${props => props.loading && `
    opacity: 1;
    visibility: visible;
    z-index: 2;
    backdrop-filter: blur(4px);
  `}
`

export const StyledTablePreloader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100px;
  }
`



// --- TABS --- //

export const StyledTabs = styled.div`
  padding: 4px;
  background: #F2F4F7;
  border: 1px solid #F2F4F7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: max-content;
`

export const StyledTab = styled.div`
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: all .3s;
  color: ${({ active }) => active ? "#344054" : "#667085"};
  background: ${({ active }) => active ? "#FFFFFF" : "none"};
  ${({ active }) => active && "box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);"}
  ${({ active }) => !active && "&:hover { opacity: 0.5; }"}
`



// --- TOGGLE CARD --- //

export const StyledToggleCard = styled.div`
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid #EAECF0;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  margin-bottom: 24px;
  height: ${({ open, headerHeight, contentHeight }) => open ? `${headerHeight + contentHeight}px` : `${headerHeight}px`};
  overflow: hidden;
  transition: all .3s; 
`

export const StyledToggleCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  transition: all .3s;
  cursor: pointer;
  img {
    transition: all .3s;
  }
  margin-bottom: 24px;
  ${({ open }) => open && "img{transform: rotate(180deg);}"}
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  height: 44px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${({ color }) => color === "primary" ? "#FFFF" : "#344054"};
  border: 1px solid ${({ color }) => color === "primary" ? "#7F56D9" : "#D0D5DD"};
  background: ${({ color }) => color === "primary" ? "#7F56D9" : "#FFFFFF"};
  cursor: pointer;
  .icon {
    margin-right: 8px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`
export const StyledCheckbox = styled.div`
  .label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    margin-left: 8px;
  }
`
export const StyledDropdown = styled.div`
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
    &:hover, &.selected {
      background: #3440541c;
    }
  }
  img {
    margin-left: 8px;
    transform: rotate(0deg) !important;
  }
  ${({ open }) => open && "opacity: 1 !important; visibility: visible !important;"}
`
export const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
`



// --- CREATE CUSTOMER --- //

export const StyledCreateCustomer = styled.div`
  text-align: left !important;
  .tabs {
    margin: 0 auto 20px;
  }
`

export const StyledCreateCustomerMore = styled.div`
  .input {
    margin-bottom: 16px;
  }
`

export const StyledShipping = styled.div`
  .checkbox {
    margin-bottom: 20px;
  }
  .input {
    margin-bottom: 16px;
  }
`

export const StyledBilings = styled.div`
  .input {
    margin-bottom: 16px;
  }
`

export const StyledContact = styled.div`
  .input {
    margin-bottom: 16px;
  }
`



// --- AUTH --- //

export const StyledAuth = styled.div`
  width: 90%;
  max-width: 420px;
  margin: 0 auto;
`
export const StyledAuthButton = styled.button`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  background: #7F56D9;
  border: 1px solid #7F56D9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  &:hover {
    background: #6037b7;
  }
`

export const StyledAuthCardFooter = styled.div`
  margin-top: 32px;
  text-align: center;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    margin-right: 4px;
  }
  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
  }
`
export const StyledAuthLogo = styled.img`
  display: block;
  margin: 96px auto 24px;
`
export const StyledAuthSubtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #475467;
  margin-bottom: 32px;
`

export const StyledAuthTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #101828;
  margin-bottom: 12px;
`



// --- LOGIN CARD --- //

export const StyledLoginCard = styled.div`
  padding: 32px 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  .input-email {
    margin-bottom: 20px;
  }
  .input-password {
    margin-bottom: 24px;
  }
`

export const StyledLoginCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .remeber {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    margin-left: 8px;
  }
  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
  }
`



// --- SING UP CARD --- //

export const StyledSingUpCard = styled.div`
  padding: 32px 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  .input {
    margin-bottom: 20px;
  }
  .input-password {
    margin-bottom: 6px;
  }
`

export const StyledSingUpCardFooter = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
  margin-bottom: 24px;
`



// --- CREATE INVOICE --- //

export const StyledCreateInvoiceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 34px;
  .btn {
    height: 40px;
  }
  .btn-preview {
    margin-right: 12px;
  }
`
export const StyledCreateInvoiceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
  .btns-wrapper{
    display: flex;
    align-items: center;
  }
  .btn {
    height: 40px;
  }
  .btn-preview {
    margin-right: 12px;
  }
`

export const StyledInvoiceFooter = styled.div`
  .textarea .input-wrapper{
  height: 100px;
  background: #F9FAFB;
  }
`



// --- CREATE INVOICE => DETAILS --- //

export const StyledDetails = styled.div`
  text-align: right;
  .sumary-input {
    width: 100%;
    max-width: 670px;
    margin-left: auto;
    margin-bottom: 16px;
    input {
      text-align: right;
    }
  }
`
export const StyledCreateInvoiceDetailsInfo = styled.div`
  text-align: right;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
  .name {
    font-weight: 600;
  }
`

export const StyledCreateInvoiceDetailsTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #475467;
  margin-bottom: 16px;
`

export const StyledCreateInvoiceDetailEdit = styled.div`
  text-align: left !important;
  .tabs {
    margin: 0 auto 20px;
  }
`

export const StyledCreateInvoiceEditDetailsEditButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #7F56D9;
  transition: all .3s;
  img {
    margin-right: 8px;
  }
  &:hover {
    opacity: .5;
  }
`

export const StyledCreateInvoiceEditDetailseMore = styled.div`
  .input {
    margin-bottom: 16px;
  }
`


// --- CREATE INVOICE => MAININFO --- //

export const StyledMainInfo = styled.div`
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid #EAECF0;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  margin-bottom: 24px;
`

export const StyledMainInfoBilings = styled.div`
  .input {
    margin-bottom: 16px;
  }
`

export const StyledMainInfoContact = styled.div`
  .input {
    margin-bottom: 16px;
  }
`
export const StyledEditBusinessDetails = styled.div`
  text-align: left !important;
  .tabs {
    margin: 0 auto 20px;
  }
`

export const StyledEditDetailsButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #7F56D9;
  transition: all .3s;
  img {
    margin-right: 8px;
  }
  &:hover {
    opacity: .5;
  }
  .tabs {
    
  }
`

export const StyledCreateInvoiceCustomerMore = styled.div`
  .input {
    margin-bottom: 16px;
  }
`

export const StyledMaininfoShipping = styled.div`
  .checkbox {
    margin-bottom: 20px;
  }
  .input {
    margin-bottom: 16px;
  }
`

export const StyledCreateCustomerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #7F56D9;
  cursor: pointer;
  &:hover {
    background: #FFFF !important;
  }
  img {
    margin-right: 8px;
  }
`

export const StyledCustomer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

export const StyledEmptyCustomer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 325px;
  height: 164px;
  background: #FCFAFF;
  border: 1px dashed #6941C6;
  border-radius: 12px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    opacity: 0.5;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #F9F5FF;
    border: 6px solid #F9F5FF;
    border-radius: 28px;
    margin-bottom: 12px;
  }
  .text {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
  }
`

export const StyledMainInfoInfo = styled.div`
  .info-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .info-item-label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #667085;
  }
`

export const StyledCreateInvoiceSearching = styled.div`
  width: 320px;
  position: relative;
  height: max-content;
  .dropdown {
    width: 100%;
  }
`
export const StyledAddItem = styled.tr`
  ${({ border }) => border && `
    td {
      width: 100%;
    }
    td:nth-child(1) {
      border-left: 1px solid #EAECF0;
    }
    td:nth-child(5) {
      border-right: 1px solid #EAECF0;
    }
  `}
  .add-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #7F56D9;
    transition: all .3s;
    &:hover {
      opacity: .5;
    }
  }
  img {
    margin-right: 8px;
  }
`

export const StyledEmptyItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  font-size: 20px;
  font-weight: bold;
  opacity: .5;
  border: 1px solid rgb(216, 218, 220);
  border-top: none;
  border-bottom: none;
`

export const StyledTax = styled.div`
  display: flex;
  align-items: center;
  b {
    margin-right: 8px;
  }
  .select {
    width: 160px;
  }
`

export const StyledItemRow = styled.tr`
  .delete-btn {
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .5;
    }
  }
`

export const StyledItemsTable = styled.div`
  .items-column {
    width: 50%;
  }
  table {
    border-radius: 12px 12px 0 0;
  }
  th {
    text-align: left;
    line-height: 1;
    vertical-align: center;
    img {
      display: none;
    }
  }
  td {
    padding: 16px 12px;
  }
`

export const StyledNotes = styled.div`
  padding: 16px 24px;
  border: 1px solid #EAECF0;
  border-radius: 0 0 12px 10px;
  border-top: none;
  .textarea .input-wrapper{
    height: 154px;
    background: #F9FAFB;
  }
`


// --- CUSTOMERS --- //

export const StyledCustomersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  .add-customer-btn {
    height: 40px;
  }
`

export const StyledCustomersManageBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .search-input {
    margin-right: 12px;
    width: 90%;
    max-width: 320px;
  }
 .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #101828;
    margin-right: 20px;
 }
`

export const StyledCustomersTable = styled.div`
  .phone-column {
    width: 30%;
  }
  .actions-coumn {
    width: 100px;
  }
  `

export const StyledCustomersRow = styled.tr`
  .status {
    display: flex;
    align-items: center;
    padding: 2px 8px 2px 6px;
    background: #ECFDF3;
    mix-blend-mode: multiply;
    border-radius: 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #12B76A;
    width: max-content;
    margin: 0 auto;
    img {
      margin-right: 4px;
    }
  }
  .actions-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actions-btn {
    margin-left: 12px;
    cursor: pointer;
    position: relative;
    &:focus {
      .dropdown {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .dropdown {
    width: 136px;
  }
  .edit {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .5;
    }
  }
`



// --- INVOICES --- //

export const StyledInvoicesManageBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .search-input {
    margin-right: 12px;
    width: 100%;
  }
  .filters-btns {
    display: flex;
    align-items: center;
    width: 40%;
  }
  .filter-btn {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
`

export const StyledInvoicesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  .create-invoice-btn {
    height: 40px;
  }
`

export const StyledInvoicesRow = styled.tr`
  .status {
    display: flex;
    align-items: center;
    padding: 2px 8px 2px 6px;
    background: #ECFDF3;
    mix-blend-mode: multiply;
    border-radius: 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #12B76A;
    width: max-content;
    margin: 0 auto;
    img {
      margin-right: 4px;
    }
  }
  .actions-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actions-btn {
    margin-left: 12px;
    cursor: pointer;
    position: relative;
    &:focus {
      .dropdown {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`