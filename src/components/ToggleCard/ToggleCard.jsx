import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyledToggleCard } from "../../constats/styles";
import { Header } from "./Header";

const HEADER_MARGIN_BUTTOM = 24;
const CARD_PADDING_TOP_AND_BUTTOM = 24 + 24;

export const ToggleCard = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const headerRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleGetHeights = () => {
    setHeaderHeight(headerRef.current.offsetHeight);
    setContentHeight(contentRef.current.offsetHeight);
  };

  const handleToggleOpen = () => {
    setOpen(!open);
    handleGetHeights();
  };

  useEffect(() => {
    handleGetHeights();
    window.addEventListener("resize", handleGetHeights);
    return () => window.removeEventListener("resize", handleGetHeights);
  }, []);

  return (
    <StyledToggleCard
      open={open}
      headerHeight={
        open
          ? headerHeight + HEADER_MARGIN_BUTTOM + CARD_PADDING_TOP_AND_BUTTOM
          : headerHeight + CARD_PADDING_TOP_AND_BUTTOM
      }
      contentHeight={contentHeight}
    >
      <Header
        title={title}
        open={open}
        onToggleOpen={handleToggleOpen}
        innerRef={headerRef}
      />
      <div className="content" ref={contentRef}>
        {children}
      </div>
    </StyledToggleCard>
  );
};
