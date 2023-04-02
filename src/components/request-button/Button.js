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
} from './style';
import { TextField } from '@material-ui/core';

export const ButtonStyled = () => {
  const [data, setData] = useState([]);
  const [generatedImage, setGeneratedImage] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequest = () => {
    console.log('click');
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        handleDallERequest(data.choices[0].message.content);
      });
  };

  const handleDallERequest = (prompt) => {
    console.log('Dall-e');
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
        console.log('Then');
        console.log(res.data);
        setGeneratedImage(res.data.data[0].url);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        console.log('finally');
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
      <SimpleText>{data.choices && data.choices[0].message.content}</SimpleText>
      <OutputImage
        src={generatedImage}
        alt='Imagem gerada'
      />
    </ExternalContainer>
  );
};
