import styled from "styled-components";
import { Preloader } from "./Preloader";

export const Loading = ({ loading }) => (
  <StyledLoading loading={loading}>
    <Preloader />
  </StyledLoading>
)

const StyledLoading = styled.div`
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