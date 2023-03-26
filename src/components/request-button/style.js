import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ButtonSC = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const ButtonModified = styled(Button)`
  background-color: #4caf50 !important; /* Green */
  color: white !important;
`;
