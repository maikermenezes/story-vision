import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

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
  height: 100;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ExternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  margin-top: 2em;
  width: 100%;
`;

export const ButtonModified = styled(Button)`
  background-color: #4caf50 !important; /* Green */
  color: white !important;
`;

export const SimpleText = styled.p`
  color: black;
  font-size: 14px;
`;

export const ImageLegend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 15%;
  background-color: #f5f5f5;
`;

export const ImageText = styled.p`
  color: black;
  font-size: 24px;
  margin: 0;
`;

export const OutputImage = styled.img`
  width: 600px;
  height: 500px;
`;

export const PageImage = styled.img`
  width: 100%;
  height: 85%;
`;

export const LoadingButton = styled.span`
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  &:before {
    -webkit-animation: spin 0.5s infinite linear;
    animation: spin 0.5s infinite linear;
    border-radius: 100%;
    -webkit-box-shadow: inset -2px 0 0 0px black;
    box-shadow: inset -2px 0 0 0px black;
    content: '';
    height: 50px;
    position: absolute;
    width: 50px;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 56px;
  min-height: 600px;
`;

export const CarouselStyled = styled(Carousel)`
  width: 50%;
`;
