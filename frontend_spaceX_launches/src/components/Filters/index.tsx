import React, { useState } from "react";
import {
  Container,
  FilterGroup,
  FilterInput,
  FilterLabel,
  FilterList,
  FilterSelectDate,
  FiltersTitle,
  FilterSelectResult,
  FilterButton,
} from "./style";

type FiltersProps = {
  handleFilterLaunches: any;
};

function Filters({ handleFilterLaunches }: FiltersProps) {
  const [dateFilter, setDateFilter] = useState("none");
  const [result, setResult] = useState("none");
  const [launchType, setLaunchType] = useState("none");
  const [date, setDate] = useState("");

  function handleDateFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setDateFilter(event.target.value);
  }

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
  }

  function handleResultChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setResult(event.target.value);
  }
  function handleLaunchType(event: React.ChangeEvent<HTMLSelectElement>) {
    setLaunchType(event.target.value);
  }

  function handleClickFilter() {
    handleFilterLaunches({
      dateFilter,
      date,
      result,
      launchType,
    });
  }

  return (
    <Container>
      <FiltersTitle>Filters</FiltersTitle>
      <FilterList>
        <FilterGroup>
          <FilterLabel>Date</FilterLabel>
          <FilterSelectDate onChange={handleDateFilterChange}>
            <option value="none">None</option>
            <option value="after">After</option>
            <option value="before">Before</option>
          </FilterSelectDate>
          <FilterInput type="date" onChange={handleDateChange} />
        </FilterGroup>
        <FilterGroup>
          <FilterLabel>Result</FilterLabel>
          <FilterSelectResult onChange={handleResultChange}>
            <option value="none">None</option>
            <option value="failed">Failed</option>
            <option value="success">Success</option>
          </FilterSelectResult>
        </FilterGroup>
        <FilterGroup>
          <FilterLabel>Launch Type</FilterLabel>
          <FilterSelectResult onChange={handleLaunchType}>
            <option value="none">None</option>
            <option value="past">Past</option>
            <option value="upcoming">Upcoming</option>
          </FilterSelectResult>
        </FilterGroup>
        <FilterButton onClick={handleClickFilter}>Filter</FilterButton>
      </FilterList>
    </Container>
  );
}

export default Filters;
