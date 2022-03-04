import React, { useState, useEffect, useCallback } from "react";
import { format } from "date-fns";
import LaunchList from "../../components/LaunchList";
import LaunchItems from "../../data/launchItems";
import { Container } from "./style";
import Filters from "../../components/Filters";
import { Launch } from "../../data/launch";
import {
  AddFavouritesContext,
  addFavouritesCtxDefaultValue,
} from "../../contexts/AddFavourites";
import { FiltersType, LaunchType } from "../../types";
var isRendering = false;

type FilterProps = {
  dateFilter: string;
  date: string;
  result: string;
  launchType: string;
};

function Home() {
  const SEARCH_LIMIT = 4;
  const DEFAULT_ITEMS: { items: Launch[] } = { items: [] };
  const [spaceXLaunches, setSpaceXLaunches] = useState(DEFAULT_ITEMS);
  const [offset, setOffset] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [filters, setFilters] = useState({});
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isRenderActive, SetIsRenderActive] = useState(false);
  const [state, setState] = useState(addFavouritesCtxDefaultValue.state);

  function isScrollToBottom(event: React.UIEvent<HTMLDivElement>) {
    const actualScrollHeight = Number(
      (
        event.currentTarget.scrollHeight - event.currentTarget.scrollTop
      ).toFixed(0)
    );
    const scrollHeight = Number(
      (event.currentTarget.clientHeight + 1).toFixed(0)
    );
    const heightDiff = actualScrollHeight - scrollHeight;
    return heightDiff <= 40;
  }

  function handleSpaceXLaunchesScroll(event: React.UIEvent<HTMLDivElement>) {
    const isScrollTargetBottom = isScrollToBottom(event);

    if (!isScrollTargetBottom) {
      return;
    }

    if (!isRenderActive) {
      setIsScrollActive(!isScrollActive);
      SetIsRenderActive(true);
    }
  }

  function handleFilterLaunches(data: FilterProps): void {
    setFilters(data);
    setOffset(0);
    setSpaceXLaunches({
      items: [],
    });
  }

  function setQueryParameters(
    url: URL,
    filters: FiltersType
  ) {
    const { dateFilter, date: searchedDate, result, launchType } = filters;

    if (launchType !== "none") {
      url.href += `/${launchType}`;
    }

    if (dateFilter !== "none" && searchedDate) {
      let start = "1970-01-01";
      let end = format(new Date(), "yyyy-MM-dd");

      if (dateFilter === "after") {
        start = searchedDate;
      } else {
        end = searchedDate;
      }

      url.searchParams.append("start", start);
      url.searchParams.append("end", end);
    }

    if (result !== "none") {
      const launch_success = result === "success" ? "true" : "false";
      url.searchParams.append("launch_success", launch_success);
    }
  }

  function generateURL(filters: FiltersType) {
    let url = new URL("https://api.spacexdata.com/v3/launches");

    if (filters) {
      setQueryParameters(url, filters);
    }
    
    url.searchParams.append("limit", SEARCH_LIMIT.toString());
    url.searchParams.append("offset", offset.toString());

    return url;
  }

  const getSpaceXLaunches = useCallback(
    ({ filters }) => {
      let url = generateURL(filters);

      fetch(url.href)
        .then((response) => response.json())
        .then((data) => {
          const resultLength = data.length;

          if (resultLength > 0) {
            getSpaceXLaunchesResult(data);
            setOffset(offset + resultLength);
            SetIsRenderActive(false);
          }

          isRendering = false;
        })
        .catch((error) => console.log(error));
    },
    [offset, spaceXLaunches]
  );

  useEffect(() => {
    if (
      !firstLoad &&
      (!isRenderActive || isRendering || Object.keys(filters).length > 0)
    ) {
      return;
    }

    if (firstLoad) {
      setFirstLoad(false);
    } else {
      isRendering = true;
    }

    getSpaceXLaunches({});
  }, [isScrollActive, getSpaceXLaunches]);

  useEffect(() => {
    if (firstLoad || Object.keys(filters).length === 0 || isRendering) {
      return;
    }

    isRendering = true;

    getSpaceXLaunches({ filters });
  }, [filters, isScrollActive, getSpaceXLaunches]);

  return (
    <Container>
      <Filters handleFilterLaunches={handleFilterLaunches} />
      <AddFavouritesContext.Provider value={{ state, setState }}>
        <LaunchList
          columnNumber={1}
          launches={spaceXLaunches.items}
          backgroundColor="#f7f0ff"
          title="SpaceX Launches"
          handleLaunchesScroll={handleSpaceXLaunchesScroll}
        />
        <LaunchList
          columnNumber={2}
          launches={state}
          backgroundColor="#f7f0ff"
          title="User Favourite Launches"
          handleLaunchesScroll={handleSpaceXLaunchesScroll}
        />
      </AddFavouritesContext.Provider>
    </Container>
  );

  function getSpaceXLaunchesResult(data: LaunchType[]): void {
    const launchItems = new LaunchItems(data);
    const items = [...spaceXLaunches.items, ...launchItems.items];
    launchItems.items = items;
    setSpaceXLaunches(launchItems);
  }
}

export default Home;
