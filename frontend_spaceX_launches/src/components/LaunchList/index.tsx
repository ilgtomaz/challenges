import React from "react";
import { Launch } from "../../data/launch";
import LaunchCard from "../LaunchCard";
import {
  Container,
  ContainerTitle,
  ContainerContent,
  NoCardsMessage,
} from "./style";

type LaunchListProps = {
  launches: Launch[];
  backgroundColor: string;
  title: string;
  handleLaunchesScroll: any;
  columnNumber: number;
};

function LaunchList({
  launches,
  backgroundColor,
  title,
  handleLaunchesScroll,
  columnNumber,
}: LaunchListProps) {
  const cardType = /favourite/i.test(title) ? "favourite" : "normal";

  function handleCards(launches: Launch[]) {
    if (launches.length > 0) {
      return launches.map((launch, index) => (
        <LaunchCard key={index} launch={launch} cardType={cardType} />
      ));
    }

    return <NoCardsMessage>There aren't any cards to show</NoCardsMessage>;
  }

  return (
    <Container backgroundColor={backgroundColor} columNumber={columnNumber}>
      <ContainerTitle>{title}</ContainerTitle>
      <ContainerContent onScroll={handleLaunchesScroll}>
        {handleCards(launches)}
      </ContainerContent>
    </Container>
  );
}

export default LaunchList;
