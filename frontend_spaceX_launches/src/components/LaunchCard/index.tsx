import React, { useContext, useState } from "react";
import { AddFavouritesContext } from "../../contexts/AddFavourites";
import { Launch } from "../../data/launch";
import {
  Container,
  DataContainer,
  FlightNumber,
  ImageContainer,
  MissionResult,
  MissionTitle,
  MissionYear,
  RocketImage,
  RocketName,
  VisualContainer,
  HoverDataContainer,
  HoverDataToKnowMoreLink,
  BackgroundColorContainer,
  HoverAddToFavourites,
} from "./style";

type LaunchCardProps = {
  launch: Launch;
  cardType: string;
};

function LaunchCard({ launch, cardType }: LaunchCardProps) {
  const [hover, setHover] = useState(false);
  const { state, setState } = useContext(AddFavouritesContext);
  const { missionResult } = launch;

  function isThereLaunchInFavouriteArray(
    state: Launch[],
    launch: Launch
  ): boolean {
    const { flightNumber, missionName } = launch;
    const result = state.findIndex(
      (element) =>
        element.flightNumber === flightNumber &&
        element.missionName === missionName
    );
    return result >= 0;
  }

  function isPossibleToMoveCard(
    cardType: string,
    isFoundLaunchInFavouriteArray: boolean
  ): boolean {
    if (cardType === "normal" && !isFoundLaunchInFavouriteArray) {
      return true;
    }

    if (cardType === "favourite" && isFoundLaunchInFavouriteArray) {
      return true;
    }

    return false;
  }

  function getNewStateArray(
    cardType: string,
    state: Launch[],
    launch: Launch
  ): Launch[] {
    const { flightNumber, missionName } = launch;

    if (cardType === "normal") {
      return [...state, launch];
    }

    return state.filter((element) => {
      if (
        element.flightNumber === flightNumber &&
        element.missionName === missionName
      ) {
        return false;
      }

      return true;
    });
  }

  function handleFavourites() {
    const isFoundLaunchInFavouriteArray = isThereLaunchInFavouriteArray(
      state,
      launch
    );

    if (!isPossibleToMoveCard(cardType, isFoundLaunchInFavouriteArray)) {
      return;
    }

    const newState = getNewStateArray(cardType, state, launch);
    setState(newState);
  }

  return (
    <Container
      onMouseOver={(event) => {
        setHover(true);
      }}
      onMouseLeave={(event) => {
        setHover(false);
      }}
    >
      <BackgroundColorContainer hover={hover}>
        <VisualContainer>
          <FlightNumber>{launch.flightNumber}</FlightNumber>
          <ImageContainer>
            <RocketImage
              src={launch.missionPatchImage}
              isTherePatchImage={launch.isTherePatchImage}
            />
          </ImageContainer>
          <RocketName>{launch.rocketName}</RocketName>
        </VisualContainer>
        <HoverDataContainer hover={hover}>
          <HoverAddToFavourites onClick={handleFavourites}>
            {cardType === "normal"
              ? `Add To Favourite`
              : `Remove from Favourite`}
          </HoverAddToFavourites>
          <HoverDataToKnowMoreLink
            href={launch.articleLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            Click To Know More About
          </HoverDataToKnowMoreLink>
        </HoverDataContainer>
      </BackgroundColorContainer>
      <DataContainer hover={hover}>
        <MissionTitle>{launch.missionName}</MissionTitle>
        <MissionYear>{launch.missionYear}</MissionYear>
        <MissionResult result={missionResult}>{missionResult}</MissionResult>
      </DataContainer>
    </Container>
  );
}

export default LaunchCard;
