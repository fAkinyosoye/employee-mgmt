import styled from "styled-components";

import { Colors } from "./Colors";

interface TextType {
  color?: string;
  mb?: string;
  mt?: string;
}

export const Header1 = styled.h1<TextType>`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ color }: TextType) => color ?? Colors.boiGreen};
  margin-top: ${({ mt }: TextType) => mt ?? "2rem"};
  margin-bottom: ${({ mb }: TextType) => mb ?? "2rem"};
`;

export const Label = styled.p<TextType>`
  font-weight: bold;
  color: ${({ color }: TextType) => color ?? Colors.boiGreen};
  margin-bottom: ${({ mb }: TextType) => mb ?? "0.5rem"};
`;

export const Subtitle = styled.p<TextType>`
  // font-weight: bold;
  color: ${({ color }: TextType) => color ?? Colors.muted};
  margin-bottom: ${({ mb }: TextType) => mb ?? "1rem"};
`;
