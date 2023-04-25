import { useState } from 'react';
import axios from 'axios';
import {
  Container,
  ButtonModified,
  ExternalContainer,
  OutputImage,
  ContainerPage,
  ImageText,
  ContainerLoading,
  CarouselStyled,
} from './style';
import { TextField } from '@material-ui/core';
import { LoadingBook } from '../loading-book/Loading-book';

export const ButtonStyled = () => {
  const [generatedImage, setGeneratedImage] = useState('');
  const [query, setQuery] = useState('');
  const [loadingText, setLoadingText] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [foundImage, setFoundImage] = useState(false);
  const [text, setText] = useState('');
  const [paragraphArray, setParagraphArray] = useState([]);
  const [promptArray, setPromptArray] = useState([]);
  const [storyArray, setStoryArray] = useState([]);
  const [imageArray, setImageArray] = useState([]);
  const [storyCompiled, setStoryCompiled] = useState(false);

  const handleRequest = () => {
    console.log('click');
    setLoadingText(true);
    setFoundImage(false);
    setStoryCompiled(false);
    setText('');
    setGeneratedImage('');

    let suffix =
      ', enumerating the paragraphs as in:\n' +
      '1- Paragraph content...\n' +
      '2- Paragraph content...\n' +
      '3- Paragraph content...\n' +
      'Please, divide the content in multiple short paragraphs';

    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: query + suffix,
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
        console.log(res.data);
        // handleDallERequest(res.data.choices[0].message.content);
        setText(res.data.choices[0].message.content);
        handleRawStory(res.data.choices[0].message.content);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const handleRawStory = (story) => {
    let request =
      'For each numbered paragraphs, generate a prompt for an image generator formatted like:\n' +
      '1- Prompt for paragraph 1\n' +
      '2- Prompt for paragraph 2\n' +
      '3- Prompt for paragraph 3\n' +
      'X. Prompt for paragraph X\n' +
      'and so on ...\n' +
      'Please, avoid naming characters and keep the prompts concise to the maximum\n' +
      'The prompts should never be longer than one sentence\n' +
      'Extremely IMPORTANT: If there are X paragraphs, return exactly X prompts.';

    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'assistant',
              content: story,
            },
            {
              role: 'user',
              content: request,
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
        console.log(res.data);
        handlePrompts(res.data.choices[0].message.content, story);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingText(false);
      });
  };

  const handlePrompts = (prompts, story) => {
    prompts.split(/[0-9]+- /).map((phrase) => {
      if (phrase.length > 0) {
        promptArray.push(phrase.replace('\n', ''));
      }
    });

    story.split(/[0-9]+- /).map((phrase) => {
      if (phrase.length > 0) {
        paragraphArray.push(phrase.replace('\n', ''));
      }
    });
    console.log('Paragraph array::: ', paragraphArray);
    console.log('Prompt array::: ', promptArray);
    recursiveStory(0);
  };

  const handleDallERequest = async (prompt, paragraph) => {
    console.log('Dall-e prompt: ', prompt);
    setLoadingImage(true);
    await axios
      .post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt + ' cartoon style',
          n: 1,
          size: '256x256',
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
        setFoundImage(true);
        setGeneratedImage(res.data.data[0].url);
        imageArray.push(res.data.data[0].url);
        storyArray.push({ text: paragraph, image: res.data.data[0].url });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((res) => {
        // setLoadingImage(false);
      });
  };

  const handleStory = (story) => {
    story.split('.').map((phrase) => {
      if (phrase.length > 0) {
        promptArray.push(phrase);
      }
    });
    console.log('Prompt array::: ', promptArray);
    recursiveStory(0);
  };

  const recursiveStory = (index) => {
    console.log('imageArray::: ', imageArray);
    if (index < promptArray.length) {
      handleDallERequest(promptArray[index], paragraphArray[index]);
      console.log('paragraphArray[index]: ', paragraphArray[index]);
      console.log('promptArray[index]: ', promptArray[index]);

      recursiveStory(index + 1);
    }
    console.log('Story array: ', storyArray);
    setLoadingImage(false);
    setTimeout(() => {
      setLoadingText(false);
    }, 5000);
    setStoryCompiled(true);
  };

  return (
    <ExternalContainer>
      <ContainerLoading>
        {loadingText && <LoadingBook />}

        {storyCompiled && !loadingText && (
          <CarouselStyled
            autoPlay='false'
            interval='500000'>
            {storyArray.map((item, index) => (
              <ContainerPage key={index}>
                <OutputImage
                  src={item.image}
                  alt='Imagem gerada'
                />
                <ImageText>{item.text}</ImageText>
              </ContainerPage>
            ))}
          </CarouselStyled>
        )}

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
      </ContainerLoading>
    </ExternalContainer>
  );
};
