import styled from 'styled-components';

export const Table = styled.table`
  max-width: 1020px;
  width: 100%;
  background-color: whitesmoke;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
`;