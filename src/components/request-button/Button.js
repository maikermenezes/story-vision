import { useState } from 'react';
import axios from 'axios';
import {
  Container,
  ButtonModified,
  ExternalContainer,
  SimpleText,
  OutputImage,
  LoadingButton,
  ContainerPage,
  BookContainer,
  BookPage,
  BookGap,
  BookPages,
  PageImage,
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

  const mockData = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680881618730-49c208698e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680951103843-a370c042fb03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://plus.unsplash.com/premium_photo-1670895801174-8278045808f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680948675952-61e8fbf22e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680992284454-74dcc2b29410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680731066845-989f546845a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680535969614-405c1b519db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680881618730-49c208698e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680881618730-49c208698e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  const mockStory = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680951103843-a370c042fb03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://plus.unsplash.com/premium_photo-1670895801174-8278045808f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680948675952-61e8fbf22e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680992284454-74dcc2b29410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680731066845-989f546845a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://images.unsplash.com/photo-1680535969614-405c1b519db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    // {
    //   text: ' The old woman cackled and said that she was, and that she had been waiting for them',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-mclgjnbfdvMZZvSle1jiIrax.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T21%3A23%3A47Z&ske=2023-04-09T21%3A23%3A47Z&sks=b&skv=2021-08-06&sig=mrnr0TMnc9nT6uRkdw3ZGqezmGelVW%2BJdNI64VIYksA%3D',
    // },
    // {
    //   text: "Suddenly, the woman's eyes turned red, and she muttered a curse",
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-TWNjw48nQXcPenC0bfg4Fj1Y.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A11%3A11Z&ske=2023-04-09T18%3A11%3A11Z&sks=b&skv=2021-08-06&sig=jHK/jVUx%2Bw5CcbsKB9XIxlpQ%2BE67r4zjOK/5I6AqE9Y%3D',
    // },
    // {
    //   text: " The teens were paralyzed and couldn't move or scream",
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-lygH6S104KnVhlQ7NVb6qO5N.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A23%3A54Z&ske=2023-04-09T18%3A23%3A54Z&sks=b&skv=2021-08-06&sig=CFA2OfIBU8OYW%2BHX4aixZ3mLT%2BoTTemCT3JzLOMWrk4%3D',
    // },
    // {
    //   text: ' The witch dragged them inside her hut and began performing a ritual on them',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-CHQe5ActyjeP6ZoSqXHepDqI.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T20%3A22%3A50Z&ske=2023-04-09T20%3A22%3A50Z&sks=b&skv=2021-08-06&sig=W0VOoL1g7pm3TllsuLDp6KZWc2jEN/f5mMue8P%2Br52E%3D',
    // },
    // {
    //   text: "\n\nDays turned into weeks, and the teens' families began to worry about their disappearance",
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-zcj7rFZTllgA7ZUZ8pI2UOSt.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A47%3A37Z&ske=2023-04-09T19%3A47%3A37Z&sks=b&skv=2021-08-06&sig=IEbgfnqUTeYEuuTEyAKrUtnQJqxjHZmRQZC%2BOkd3vwg%3D',
    // },
    // {
    //   text: " They searched everywhere but couldn't find any sign of them, until one night when they heard eerie chanting coming from the forest",
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-AppVV2S5Iwrmx99wku0XkIZa.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A53%3A22Z&ske=2023-04-09T19%3A53%3A22Z&sks=b&skv=2021-08-06&sig=wjUcdDE9bIZL5cd7Q%2BpvgFwG9WTzemWmjf60D4eElBk%3D',
    // },
    // {
    //   text: '\n\nThey cautiously approached the hut and found it surrounded by a ring of fire',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-RCyl2mWnUvDHdIhZ5pVmm7ha.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A28%3A41Z&ske=2023-04-09T19%3A28%3A41Z&sks=b&skv=2021-08-06&sig=Np574cs9HfgiiDTcIka8hFZ4L2khq5E4ZTPdBdkJ8aw%3D',
    // },
    // {
    //   text: ' Inside, they could see the witch performing a dark deed on their children',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-N1BxIZe0ldHWOYOhmkTIeEFr.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T17%3A03%3A07Z&ske=2023-04-09T17%3A03%3A07Z&sks=b&skv=2021-08-06&sig=mshwh69idD0yxDxSPMmVvIJZajykOmuQ4n8pUCwNhmM%3D',
    // },
    // {
    //   text: ' The townspeople were filled with terror and quickly retreated, but they could hear the screams of their children echoing through the forest',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-wp1Ydq872SeOSSjdx4IkCvYq.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T11%3A57%3A35Z&ske=2023-04-10T11%3A57%3A35Z&sks=b&skv=2021-08-06&sig=/ToCBof0xCqcVU9D5jLp9T1/znMoVEbleSmtCwP5c90%3D',
    // },
    // {
    //   text: "\n\nFrom that day on, the residents of the town warned others to stay away from the forest, and they vowed to never venture near the witch's domain again",
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-DFY7RoROMnorFNEnFKBQydNA.png?st=2023-04-09T11%3A24%3A32Z&se=2023-04-09T13%3A24%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A16%3A00Z&ske=2023-04-09T18%3A16%3A00Z&sks=b&skv=2021-08-06&sig=kVwP4eorA8inzrNtALzCX%2BGrKwpdiGGwV/cvOqnygbI%3D',
    // },
    // {
    //   text: ' But the witch would always be there, waiting for unsuspecting victims to come her way',
    // },
    // {
    //   text: ' They were a family of four, a father, mother, and two children, a boy and a girl',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-8GIIkdZUBjhbMFvFzB1JaNI5.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A34%3A53Z&ske=2023-04-09T18%3A34%3A53Z&sks=b&skv=2021-08-06&sig=CLrpndmqYsax8%2B2VHm0Wjha/2vng86bx6yaqCYFWEjI%3D',
    // },
    // {
    //   text: ' Inside, they could see the witch performing a dark deed on their children',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-dm49qiF1BzyXOHU5mkGSsi9k.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T12%3A25%3A42Z&ske=2023-04-10T12%3A25%3A42Z&sks=b&skv=2021-08-06&sig=utErk6CTa%2B%2Bl3jfh%2BouFR2A46JhCHmC40GxATE3gqhI%3D',
    // },
    // {
    //   text: ' They hacked their way through the thick underbrush and soon found themselves in a small clearing',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-EaRCJhLVwNjRZquZO9DiXmM8.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T10%3A49%3A28Z&ske=2023-04-10T10%3A49%3A28Z&sks=b&skv=2021-08-06&sig=Dsd7XHRrdsB/t6W0AhH%2BbBcSNtT%2BOyrv02UVBMlwh/Q%3D',
    // },
    // {
    //   text: '\n\nAs it grew dark, they returned to the cabin, but they noticed something was off',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-2UHDYShYkYiS9JTcZMUuzPDd.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A10%3A11Z&ske=2023-04-09T18%3A10%3A11Z&sks=b&skv=2021-08-06&sig=tXAa62T9hzqMiqlXn0nDDkWyWMs4ocik2BlClvHkYtA%3D',
    // },
    // {
    //   text: ' They were dragged away, and their screams went unanswered',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-SWY6G8KzBUrlR5WLag7bFjv5.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T00%3A48%3A59Z&ske=2023-04-10T00%3A48%3A59Z&sks=b&skv=2021-08-06&sig=v3BFkoGgrJO4GGE5MOmYaOVSGVl4eCYtdwwTVFjuqxA%3D',
    // },
    // {
    //   text: ' Nancy spent the evening watching scary movies, eating popcorn and enjoying her alone time',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-kxsgCxkxrq8QjtmFxwFnwOrH.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T11%3A47%3A23Z&ske=2023-04-10T11%3A47%3A23Z&sks=b&skv=2021-08-06&sig=/TgQyzsWzL%2BivEaIGaSBp6VeX6R6sOKa/ziNOKvSZM8%3D',
    // },
    // {
    //   text: '\n\nThey cautiously approached the hut and found it surrounded by a ring of fire',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-s6aK7lW8zcRG21jI9R8hzxWs.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A08%3A17Z&ske=2023-04-09T19%3A08%3A17Z&sks=b&skv=2021-08-06&sig=QL%2BepVFP%2BOFlYhd1tzlWizo80v7NvftHvsr3sn3Coec%3D',
    // },
    // {
    //   text: ' But they never saw the new family again',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-DCwOQz9UrNvgZuGcoVDsdX7c.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T10%3A27%3A06Z&ske=2023-04-10T10%3A27%3A06Z&sks=b&skv=2021-08-06&sig=WbrGafAYKzMwQuuxrStHfRkQRO2r3s60V0ybxRoLMzs%3D',
    // },
    // {
    //   text: ' Inside, they found their belongings scattered around the room, and the kitchen a mess',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-LScKkgMqDtN9HaTNr6sVYLZT.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T09%3A13%3A32Z&ske=2023-04-10T09%3A13%3A32Z&sks=b&skv=2021-08-06&sig=HHsOwhQIZ5sDzsyiSZe7gO%2Blem5m33dzTuOWPtO8XXU%3D',
    // },
    // {
    //   text: "\n\nDays turned into weeks, and the teens' families began to worry about their disappearance",
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-50c2UAiEXgLwtKPTxpJWrRWo.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T20%3A58%3A55Z&ske=2023-04-09T20%3A58%3A55Z&sks=b&skv=2021-08-06&sig=nAMnRwe849oBypORpa3JI1OrFL%2BUmpH%2BGJLMJpn0jhc%3D',
    // },
    // {
    //   text: ' But the witch would always be there, waiting for unsuspecting victims to come her way',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-ruXMoCRKWCUKdF6B5BHAXJFe.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T11%3A11%3A57Z&ske=2023-04-10T11%3A11%3A57Z&sks=b&skv=2021-08-06&sig=Rvhjk9QEdQXo1ET22AX7A6sObcHUbluipvSeT4yoMRA%3D',
    // },
    // {
    //   text: ' The disappearance of the family and the weird happenings in the town continued, and no one could explain what had happened',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-9qFU36EkNIGCUZuU4MufI59Z.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A20%3A43Z&ske=2023-04-09T18%3A20%3A43Z&sks=b&skv=2021-08-06&sig=mISp%2BxIM0rS7Tnajagx4CcWg2L/QuCOwpPvB1VR2voI%3D',
    // },
    // {
    //   text: ' They were a strange family, and the townsfolk were wary of them',
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-9MCVTzrskCLCS0dwqnD7LtjA.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T03%3A30%3A23Z&ske=2023-04-10T03%3A30%3A23Z&sks=b&skv=2021-08-06&sig=513slNYqfygNqk30RZUfuxPcX1td7g2KkaoDL9DfsYY%3D',
    // },
    // {
    //   text: " The teens were paralyzed and couldn't move or scream",
    //   image:
    //     'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-w4ap8SSIIYE5aLpkH7NUm4Cb.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A34%3A18Z&ske=2023-04-09T19%3A34%3A18Z&sks=b&skv=2021-08-06&sig=jC7ymM1DvWu4CYS/uEee/Xu%2BMfbmIU777juEZcNfi6E%3D',
    // },
  ];

  const mockStory2 = [
    {
      text: 'Once there was a secluded cabin in the woods, where a family of six went for a vacation',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-QbI5PmjlZ5srNFy57MI2ytZh.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A31%3A33Z&ske=2023-04-09T19%3A31%3A33Z&sks=b&skv=2021-08-06&sig=79hKd9b05s9HTXakoHATyAmC3JeWmPlaAffytcxtrfM%3D',
    },
    {
      text: ' Her parents had gone out of town for the weekend, and she was to stay at their old farmhouse',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-FTaq4gL8feWGepxkv5EtsEot.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A45%3A11Z&ske=2023-04-09T18%3A45%3A11Z&sks=b&skv=2021-08-06&sig=lQxFR5A1KBhsqvNjFv2m%2BPC07snCEUUlke6s78grMqU%3D',
    },
    {
      text: ' But as she opened the bedroom door, she froze in terror',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-W07Rhrsn06xLwIAEHiVrqNjh.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A06%3A35Z&ske=2023-04-09T18%3A06%3A35Z&sks=b&skv=2021-08-06&sig=DNmxfklVU5m%2BcW%2B36CGmUAuR7Eh4dP/c7U9WNpOe81I%3D',
    },
    {
      text: 'Once upon a time, there was a small town surrounded by dense, dark forest',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-EmFeea9yedJYBdWCc3Ttvosr.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T07%3A42%3A38Z&ske=2023-04-10T07%3A42%3A38Z&sks=b&skv=2021-08-06&sig=IQx1YyHQBpkGpIWJpPv3tQiOna0SlFSG/%2Bgm6pdTc0s%3D',
    },
    {
      text: "\n\nSuddenly, the woman's eyes turned red, and she muttered a curse",
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-QK7IJ1aALAXD3SxqDt3TxNBv.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A40%3A53Z&ske=2023-04-09T18%3A40%3A53Z&sks=b&skv=2021-08-06&sig=V2/M9HhRIsnkqkX1vscYSQkt885lf6/NBwrgoc/K70c%3D',
    },
    {
      text: '\n\nAs time went by, strange things started happening in the town',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-NMG8PrWD2y34NYCtQRHc577M.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T12%3A03%3A19Z&ske=2023-04-10T12%3A03%3A19Z&sks=b&skv=2021-08-06&sig=zZi5P5EtJ0zdZseIlDdpTP7UvK3r6jpxqSz4JZoTyYw%3D',
    },
    {
      text: ' They kept to themselves and never interacted with anyone else in the town',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-mthD8JKZy0XY4KILfTKgZnoj.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T17%3A19%3A16Z&ske=2023-04-09T17%3A19%3A16Z&sks=b&skv=2021-08-06&sig=kDm%2B8tgdIStmm4bLnqNj1Bh8C0ZxShvhLjO7P6uG3KY%3D',
    },
    {
      text: " They searched everywhere but couldn't find any sign of them, until one night when they heard eerie chanting coming from the forest",
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-IwDWwZBlnKHRI3qLtWGl0Ogw.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A31%3A46Z&ske=2023-04-09T18%3A31%3A46Z&sks=b&skv=2021-08-06&sig=7NOUk9jjfB4E9cxZZBv9bbuLIUJYw17rvELDkv%2BQka0%3D',
    },
    {
      text: '\n\nOne day, the father of the new family was seen walking alone in the woods near the town',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-0NbLuTgq24BmeaShAu1GHaBe.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-09T12%3A32%3A27Z&ske=2023-04-10T12%3A32%3A27Z&sks=b&skv=2021-08-06&sig=D%2B2RkNmbh7ogSuUaJpC6qLyb8smS6Eqg7f%2BYMVcmG/E%3D',
    },
    {
      text: "\n\nThe next day, she told her parents what had happened, but they didn't believe her",
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-dgkxSreCSdtUMaviGNMgHS4k.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A58%3A17Z&ske=2023-04-09T19%3A58%3A17Z&sks=b&skv=2021-08-06&sig=VE7iXNN1KuZ5IZt0wzt%2BDPpaJ1SYflHvg%2Bt8FQx6dkE%3D',
    },
    {
      text: ' Yet, they continued to hear footsteps, creaking floorboards, rattling doorknobs, and whispered threats',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-cusQ9Wla6eBerZ2Q3pC2KKLw.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T19%3A07%3A40Z&ske=2023-04-09T19%3A07%3A40Z&sks=b&skv=2021-08-06&sig=T5BaIbQ43LNGNa5RBCjLSGzTLFhMSEgS8%2Bqijua5EHc%3D',
    },
    {
      text: ' It was a quiet place with a few shops, a school, and a small church',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-dANbGhACoHPvSz66fvDgq7c5.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T21%3A46%3A38Z&ske=2023-04-09T21%3A46%3A38Z&sks=b&skv=2021-08-06&sig=WdeAMhHuoLtsVOZoCE50YtuKF%2Bn/nnUJxK/7LgZjVkE%3D',
    },
    {
      text: ' But as she did, she saw a figure standing in the doorway - tall, dark, and looming',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-zSWrS2m4rPt349tl9kIHKork.png?st=2023-04-09T11%3A43%3A03Z&se=2023-04-09T13%3A43%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A55%3A30Z&ske=2023-04-09T18%3A55%3A30Z&sks=b&skv=2021-08-06&sig=DX07se0fOgyfO1ckKwka2Yq4Q0kRKntdOKjmh9rRz6o%3D',
    },
    {
      text: ' There was a popular urban legend that there was a witch who lived deep in the forest, and anyone who dared to venture into her territory ended up disappearing',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-ZDV7rXS1HyqbNnpOHibHxHBY.png?st=2023-04-09T11%3A43%3A04Z&se=2023-04-09T13%3A43%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T17%3A07%3A57Z&ske=2023-04-09T17%3A07%3A57Z&sks=b&skv=2021-08-06&sig=cHHkXgQ/t9/ORbUxXKW3omo%2BEIU3L/e3XqjF4JqHONs%3D',
    },
    {
      text: ' The figure let out a wicked laugh as it moved closer to her, and then it vanished into thin air',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-UavKWA6GFEHRTPeW1pcwvnag.png?st=2023-04-09T11%3A43%3A04Z&se=2023-04-09T13%3A43%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T18%3A49%3A44Z&ske=2023-04-09T18%3A49%3A44Z&sks=b&skv=2021-08-06&sig=X2rdAoN37w4/khXS%2BHGvJ5aH9ifU2DLtUM7WVIM/3eg%3D',
    },
    {
      text: ' It was a haunting tale she would recount for years to come, and it was a horror story that would stick with her for the rest of her life',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-dloIamFLzCaj1Pu9UYId2Ten.png?st=2023-04-09T11%3A43%3A04Z&se=2023-04-09T13%3A43%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T17%3A53%3A59Z&ske=2023-04-09T17%3A53%3A59Z&sks=b&skv=2021-08-06&sig=FC1K%2BSfNH3z7RPQpdJsqFUcUBVItad8OXAySR7xLtqw%3D',
    },
    {
      text: ' The townspeople were filled with terror and quickly retreated, but they could hear the screams of their children echoing through the forest',
      image:
        'https://oaidalleapiprodscus.blob.core.windows.net/private/org-TOcA13azdubTJ0H7KL49EJV8/user-BR6toHGfDNRmqkHmr2wATrQ5/img-OBVlsO9Gf6ayLeAq6ruXlHLV.png?st=2023-04-09T11%3A43%3A04Z&se=2023-04-09T13%3A43%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-08T17%3A59%3A53Z&ske=2023-04-09T17%3A59%3A53Z&sks=b&skv=2021-08-06&sig=/7tmBskZuRcG2kd%2BaYRgaqRGJf4h9NA8j3BIMgNJ4vE%3D',
    },
  ];

  const handleRequest = () => {
    console.log('click');
    setLoadingText(true);
    setFoundImage(false);
    setStoryCompiled(false);
    setText('');
    setGeneratedImage('');

    let suffix = ', enumerating the paragraphs as in:\n'
      + '1- Paragraph content...\n'
      + '2- Paragraph content...\n'
      + '3- Paragraph content...\n'
      + 'Please, divide the content in multiple short paragraphs'

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
    let request = 'For each numbered paragraphs, generate a prompt for an image generator formatted like:\n'
      + '1- Prompt for paragraph 1\n'
      + '2- Prompt for paragraph 2\n'
      + '3- Prompt for paragraph 3\n'
      + 'X. Prompt for paragraph X\n'
      + 'and so on ...\n'
      + 'Please, avoid naming characters and keep the prompts concise to the maximum\n'
      + 'The prompts should never be longer than one sentence\n'
      + 'Extremely IMPORTANT: If there are X paragraphs, return exactly X prompts.';
    
    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'assistant',
              content: story
            },
            {
              role: 'user',
              content: request
            }
          ]
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
        promptArray.push(phrase.replace("\n", ""));
      }
    });

    story.split(/[0-9]+- /).map((phrase) => {
      if (phrase.length > 0) {
        paragraphArray.push(phrase.replace("\n", ""));
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
