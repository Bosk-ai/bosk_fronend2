import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import styled from "styled-components";
import { Header } from "./Header";

const HEADER_MARGIN_BUTTOM = 24;
const CARD_PADDING_TOP_AND_BUTTOM = 24 + 24;

export const ToggleCard = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0)
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleGetHeights = () => {
    setHeaderHeight(headerRef.current.offsetHeight);
    setContentHeight(contentRef.current.offsetHeight)

  }

  useEffect(() => {
    handleGetHeights();
    window.addEventListener("resize", handleGetHeights);
    return () => window.removeEventListener("resize", handleGetHeights);
  }, [])

  return (
    <StyledToggleCard
      open={open}
      headerHeight={open ? headerHeight + HEADER_MARGIN_BUTTOM + CARD_PADDING_TOP_AND_BUTTOM : headerHeight + CARD_PADDING_TOP_AND_BUTTOM}
      contentHeight={contentHeight}
    >
      <Header
        title={title}
        open={open}
        onToggleOpen={() => setOpen(!open)}
        innerRef={headerRef}
      />
      <div className="content" ref={contentRef}>
        {children}
      </div>
    </StyledToggleCard>
  )
}

const StyledToggleCard = styled.div`
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