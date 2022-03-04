import styled, { css } from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Abel");
  background-color: #fef7ff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: Abel, Arial, Verdana, sans-serif;
  height: 100%;
  padding: 10px;
  position: fixed;
  width: 440px;
`;

export const FiltersTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const FilterList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const FilterGroup = styled.div`
  align-items: center;
  border: 1px solid rgba(165, 124, 228, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px;
  width: 300px;
`;

export const FilterLabel = styled.label`
  color: #673dff;
  font-weight: bold;
`;

const defaultInputCss = css`
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 8px 5px 8px 5px;
`;

export const FilterSelectDate = styled.select`
  ${defaultInputCss}
`;

export const FilterInput = styled.input`
  ${defaultInputCss}
`;

export const FilterSelectResult = styled.select`
  ${defaultInputCss}
  width: 80%;
`;

export const FilterButton = styled.button`
  background-color: #673dff;
  border: 1px solid #673dff;
  border-radius: 5px;
  color: #fef7ff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
  padding: 5px;
  transition: background-color 400ms, color 400ms;
  width: 80px;

  :hover {
    background-color: #fef7ff;
    border: 1px solid #673dff;
    color: #673dff;
  }
`;
