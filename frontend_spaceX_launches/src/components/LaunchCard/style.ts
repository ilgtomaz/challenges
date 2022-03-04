import styled, { css } from "styled-components";

type MissionResultProps = {
  result: string;
};

type HoverProps = {
  hover: boolean;
};

type RocketImageProps = {
  isTherePatchImage: boolean;
};

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Abel");
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-family: Abel, Arial, Verdana, sans-serif;
  display: flex;
  height: 200px;
  margin: 0 0 10px 0;
  width: 400px;
`;

export const BackgroundColorContainer = styled.div`
  background-color: #673dff;
  display: flex;
  transition: width 400ms;
  ${({ hover }: HoverProps) => (hover ? "width: 100%;" : "width: 35%;")}
`;

export const VisualContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  max-width: 139px;
`;

export const FlightNumber = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  align-items: center;
  background-color: #b38bff;
  border-radius: 50%;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100px;
`;

export const RocketImage = styled.img`
  height: 75px;
  width: 75px;
  ${({ isTherePatchImage }: RocketImageProps) =>
    isTherePatchImage
      ? `border-radius: 0;`
      : `filter: invert(100%); -webkit-filter: invert(100%); background: transparent; border-radius: 50%;`}
`;

export const DataContainer = styled.div`
  ${({ hover }: HoverProps) => (hover ? "display: none;" : "display: flex;")}
  align-items: center;
  background-color: #f5f5f5;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 65%;
`;

export const HoverDataContainer = styled(DataContainer)`
  background-color: transparent;
  ${({ hover }: HoverProps) => {
    if (hover) {
      return "visibility: visible; opacity: 1; display: flex;";
    }

    return "visibility: hidden; opacity: 0; display: none;";
  }}

  transition: visibility 0s, opacity 0.5s linear;
`;

const commonInvertCardCss = css`
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: font-size 500ms;

  :hover {
    font-size: 18px;
  }
`;

export const HoverDataToKnowMoreLink = styled.a`
  ${commonInvertCardCss}
`;

export const HoverAddToFavourites = styled.p`
  ${commonInvertCardCss}
  margin-bottom: 20px;
`;

export const RocketName = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-top: 20px;
  text-transform: capitalize;
`;

export const MissionTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
  position: absolute;
  text-align: center;
  top: 0;
`;

export const MissionYear = styled.p`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
`;

export const MissionResult = styled.p`
  ${({ result }: MissionResultProps) => {
    if (result === "success") {
      return "color: green;";
    }

    if (result === "failed") {
      return "color: red;";
    }

    return "color: orange;";
  }}

  bottom: 20px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  text-transform: capitalize;
`;
