import styled, { css } from "styled-components";
import { breakpoints } from "./settings";

const Loading = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    -225deg,
    #ff057c 0%,
    #8d0b93 50%,
    #321575 100%
  );
  color: rgb(245, 245, 245);
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const CityContainer = styled.div`
  margin-right: 0vw;
  position: relative;
  transition: all 0.5s ease;
  width: 100vw;
  overflow: hidden;

  ${props =>
    props.chat &&
    css`
      margin-right: 20vw;
    `};
`;

const CityBackground = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
    -225deg,
    #ff057c 0%,
    #8d0b93 50%,
    #321575 100%
  );

  @media (max-width: ${breakpoints.mobile}) {
    top: 72px;
  }
`;

const Forecast = styled.section`
  position: absolute;
  left: 25px;
  bottom: 25px;
  margin-bottom: -5px;
  z-index: 10;
`;

export { Loading, CityContainer, CityBackground, Forecast };
