import styled from "styled-components";
import { TextButton } from "../Common/Buttons";

export const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Content = styled.div`
  position: absolute;
  top: ${props => props.theme.sizing.navBarSize};
  left: 0px;
  right: 0px;
  bottom: ${props => props.theme.sizing.navBarSize};
  overflow: auto;
`;

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: ${props => props.theme.sizing.navBarSize};
  background-color: ${props => props.theme.color.primary};
`;

export const BottomBarButton = styled(TextButton)`
  width: 100%;
  height: 100%;
`;
