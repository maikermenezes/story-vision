import styled from 'styled-components';
import { keyframes } from 'styled-components';
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

export const ExternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
  font-size: 14px;
  margin: 0;
`;

export const OutputImage = styled.img`
  width: 250px;
  height: 250px;
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

//Book animation

// $images:
//     url('https://picsum.photos/420/300?random=1'),
//     url('https://picsum.photos/420/300?random=2'),
//     url('https://picsum.photos/420/300?random=3'),
//     url('https://picsum.photos/420/300?random=4'),
//     url('https://picsum.photos/420/300?random=5'),
//     url('https://picsum.photos/420/300?random=1');

export const BookContainer = styled.div`
  position: relative;
  perspective: 630px;
  perspective-origin: center 50px;
  transform: scale(1.2);
  filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.25));
`;

export const BookGap = styled.div`
  width: 10px;
  height: 300px;
  background: none;
  transform: rotateX(60deg);
  transform-origin: bottom;
  position: absolute;
  top: 0px;
  left: calc(50% - 5px);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #555;
    width: 10px;
    height: 5px;
    border-radius: 50%;
  }
`;

export const BookPages = styled.div`
  transform-style: preserve-3d;
`;

export const BookPage = styled.div`
  width: 210px;
  height: 300px;
  background-color: #f5f5f5;
  position: absolute;
  top: 0px;
  right: 50%;
  transform-origin: 100% 100%;
  border: solid #555 2px;
  background-size: 420px 300px;
  background-position: center;
  transform-style: preserve-3d;

  &:nth-child(1) {
    transform: rotateX(40deg) rotateY(3deg);
  }
  &:nth-child(2) {
    transform: rotateX(40deg) rotateY(6deg);
  }
  &:nth-child(3) {
    transform: rotateX(40deg) rotateY(9deg);
    animation: nextPage 5s * 5 infinite 5s * -4.8 steps(1);
    background-size: 420px 300px;
    background-position: -2px -2px;
  }

  &:nth-child(4) {
    transform: rotateX(40deg) rotateY(177deg);
  }
  &:nth-child(5) {
    transform: rotateX(40deg) rotateY(174deg);
  }
  &:nth-child(6) {
    transform: rotateX(40deg) rotateY(171deg);
    overflow: hidden;

    &::after {
      content: '';
      width: 210px;
      height: 300px;
      position: absolute;
      top: 0px;
      right: 0%;
      transform-origin: center;
      transform: rotateY(180deg);
      animation: nextPage 5s * 5 5s * -4 infinite steps(1);
      background-size: 420px 300px;
      background-position: 100% -2px;
    }
  }

  /* @keyframes nextPage {
        @for $i from 0 through 4 {
            #{$i * 20}% { background-image: nth($images, ($i + 1)); }
        }
    } */
`;

const nextFlip1 = keyframes`
      #{$i * 20}% { background-image: nth($images, ($i + 1)); background-position: -178px -2px; transform: rotateY(0deg); }
      #{10 + ($i * 20)}% { background-image: nth($images, ($i + 2)); background-position: -210px -2px; transform: rotateY(180deg); 
`;

export const BookFlips = styled.div`
  transform-style: preserve-3d;
`;

export const BookFlip = styled.div`
  width: 32px;
  height: 300px;
  position: absolute;
  top: 0px;
  transform-origin: 100% 100%;
  right: 100%;
  border: solid #555;
  border-width: 2px 0px;
  perspective: 4200px;
  perspective-origin: center;
  transform-style: preserve-3d;
  background-size: 420px 300px;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0%;
    width: 100%;
    height: 100%;
    transform-origin: center;
    background-size: 420px 300px;
  }

  &.flip1 {
    right: 50%;
    animation: flip1 5s infinite ease-in-out;
    border-width: 2px 2px 2px 0;

    &::after {
      animation: nextFlip1 5s * 5 infinite 5s * -4.8 steps(1);
    }
  }

  &:not(.flip1) {
    right: calc(100% - 2px);
    top: -2px;
    transform-origin: right;
    animation: flip2 5s ease-in-out infinite;
  }

  /* @for $i from 2 through 7 {
        &.flip#{$i}::after { animation: nextFlip#{$i} 5s*5 5s*-4 infinite steps(1); }
    } */

  &.flip7 {
    width: 30px;
    border-width: 2px 0px 2px 2px;
    &::after {
      animation: nextFlip7 5s * 5 5s * -4 infinite steps(1);
    }
  }

  @keyframes flip1 {
    0%,
    20% {
      transform: rotateX(60deg) rotateY(6deg);
    }
    80%,
    100% {
      transform: rotateX(60deg) rotateY(174deg);
    }
  }

  @keyframes flip2 {
    0%,
    20% {
      transform: rotateY(0deg) translateY(0px);
    }
    50% {
      transform: rotateY(-15deg) translateY(0px);
    }
  }
`;

export const BookFlip1 = styled.div``;

export const BookFlip2 = styled.div``;

// Keyframes

// @for $i from 2 through 6 {
//   @keyframes nextFlip#{$i} {
//       @for $j from 0 through 4 {
//           #{$j * 20}% { background-image: nth($images, ($j + 1)); background-position: #{-148 + (($i - 2) * 30)}px -2px; transform: rotateY(0deg); }
//           #{((10 + ($j * 20)) + (($i - 1) * 0.5))}% { background-image: nth($images, ($j + 2)); background-position: #{-238 - (($i - 2) * 30)}px -2px; transform: rotateY(180deg); }
//       }
//   }
// }

// @keyframes nextFlip7 {
//   @for $i from 0 through 4 {
//       #{$i * 20}% { background-image: nth($images, ($i + 1)); background-position: -2px -2px; transform: rotateY(0deg); }
//       #{13 + ($i * 20)}% { background-image: nth($images, ($i + 2)); background-position: -388px -2px; transform: rotateY(180deg); }
//   }
// }
