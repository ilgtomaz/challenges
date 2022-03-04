import styled from "styled-components";

type ContainerProps = {
  backgroundColor?: string;
  columNumber: number;
};

export const Container = styled.div`
  ${({ backgroundColor }: ContainerProps) =>
    `background-color: ${backgroundColor};`}
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: Abel, Arial, Verdana, sans-serif;
  ${({ columNumber }: ContainerProps) => `margin-left: ${columNumber * 460}px;`}
  padding: 10px;
  position: fixed;
  height: 100%;
  display: inline-block;
  width: 440px;
`;

export const ContainerTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const ContainerContent = styled.div`
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  margin-bottom: 10px;

  @media (min-width: 940px) {
    height: 85%;
  }
`;

export const NoCardsMessage = styled.p`
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  height: 100%;
`;
