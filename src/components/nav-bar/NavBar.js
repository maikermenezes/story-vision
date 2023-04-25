import {
  NavBarWrapper,
  NavBarLogo,
  NavBarTitle,
  RepoLink,
  LinkRepo,
} from './style';
import logo from '../../story-vision.png';
import { BsGithub } from 'react-icons/bs';

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLogo src={logo} />
      <NavBarTitle>Story Vision</NavBarTitle>

      <LinkRepo
        href='https://github.com/maikermenezes/story-vision'
        target='_blank'>
        <BsGithub />
      </LinkRepo>
    </NavBarWrapper>
  );
};
