// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useQuery } from 'react-query';
import { Container, ButtonModified } from './style';
import { TextField } from '@material-ui/core';

export const ButtonStyled = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const useHandleRequest = () => {
    console.log('click');
    useEffect(() => {
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
        .finally(() => {});
    }, []);
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
    <Container>
      <TextField
        id='outlined-basic'
        label="What's your story?"
        variant='outlined'
        onChange={(e) => setQuery(e.target.value)}
      />
      <ButtonModified
        variant='success'
        color='primary'
        onClick={useHandleRequest}>
        Request
      </ButtonModified>
      <p>{data.choices && data.choices[0].message.content}</p>
    </Container>
  );
};
