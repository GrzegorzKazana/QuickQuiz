import styled from "styled-components";
import { TextButton } from "./Buttons";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const TitleWrapper = styled.div`
  font-size: 2rem;
  padding: 8px;
`;

export const SubtitleWrapper = styled.div`
  font-size: 1.5rem;
  padding: 8px 8px 8px 8px;
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px -4px 0px -4px;
`;

export const ActionTextButton = styled(TextButton)`
  flex-grow: 1;
  margin: 4px;
`;
