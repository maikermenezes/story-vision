// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useQuery } from 'react-query';
import { Container, ButtonModified, ExternalContainer, SimpleText } from './style';
import { TextField } from '@material-ui/core';

export const ButtonStyled = () => {
  const [data, setData] = useState([]);
  const [generatedImage, setGeneratedImage] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const useHandleRequest = () => {
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
          handleDallERequest(data);
        });

  };


  const handleDallERequest = (prompt) => {
    console.log('click');
      axios
        .post(
          'https://api.openai.com/v1/images/generations',
          {
            prompt: prompt,
            n: 1,
            size: "1024x1024",
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
          console.log("Then");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log('finally');
        });
  };

  // const useHandleRequest = (query) => {
  //   console.log('click');
  //   setLoading(true);
  //   axios
  //     .post(
  //       'https://api.openai.com/v1/chat/completions',
  //       {
  //         model: 'gpt-3.5-turbo',
  //         messages: [
  //           {
  //             role: 'user',
  //             content: query,
  //           },
  //         ],
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization:
  //             'Bearer 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',
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

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
        onClick={useHandleRequest}>
        Request
      </ButtonModified>
      {/* <ButtonModified
        color='primary'
        onClick={handleDallERequest}>
        Dall-E
      </ButtonModified> */}
      </Container>
      <SimpleText>{data.choices && data.choices[0].message.content}</SimpleText>
    </ExternalContainer>
  );
};
