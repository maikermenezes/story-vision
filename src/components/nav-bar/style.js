import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 5rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

export const NavBarLogo = styled.img`
  font-size: 1em;
  font-weight: 700;
  color: #333;
  width: 60px;
  margin: 0;
`;

export const NavBarTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  width: 200px;
`;

export const RepoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
`;

export const LinkRepo = styled.a`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  justify-self: flex-end;
  margin-left: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
