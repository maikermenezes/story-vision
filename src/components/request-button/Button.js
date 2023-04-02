// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useQuery } from 'react-query';
import {
  Container,
  ButtonModified,
  ExternalContainer,
  SimpleText,
  OutputImage,
  LoadingButton,
} from './style';
import { TextField } from '@material-ui/core';

export const ButtonStyled = () => {
  const [data, setData] = useState([]);
  const [generatedImage, setGeneratedImage] = useState('');
  const [query, setQuery] = useState('');
  const [loadingText, setLoadingText] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [foundImage, setFoundImage] = useState(false);
  const [text, setText] = useState('');

  const handleRequest = () => {
    console.log('click');
    setLoadingText(true);
    setFoundImage(false);
    setText('');
    setGeneratedImage('');
    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: query,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setText(data.choices[0].message.content);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingText(false);
        handleDallERequest(data.choices[0].message.content);
      });
  };

  const handleDallERequest = (prompt) => {
    console.log('Dall-e');
    setLoadingImage(true);
    axios
      .post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt,
          n: 1,
          size: '1024x1024',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setFoundImage(true);
        setGeneratedImage(res.data.data[0].url);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        setLoadingImage(false);
      });
  };

  return (
    <ExternalContainer>
      <Container>
        <TextField
          id='outlined-basic'
          label="What's your story?"
          variant='outlined'
          onChange={(e) => setQuery(e.target.value)}
        />
        <ButtonModified
          color='primary'
          onClick={handleRequest}>
          Request
        </ButtonModified>
      </Container>
      {loadingText && <LoadingButton />}
      <SimpleText>{text}</SimpleText>
      {loadingImage && <LoadingButton />}
      {foundImage && (
        <OutputImage
          src={generatedImage}
          alt='Imagem gerada'
        />
      )}
    </ExternalContainer>
  );
};
