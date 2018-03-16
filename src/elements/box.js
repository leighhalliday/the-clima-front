import styled from "styled-components";
import { breakpoints } from "./settings";

const defaultWidth = "200px";

const Box = styled.div`
  width: ${defaultWidth};
  height: ${defaultWidth};
  position: absolute;
  padding: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  color: #ffffff;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #000000,
    #212121
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #000000,
    #212121
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (max-width: ${breakpoints.mobile}) {
    left: 0px;
    right: 0px;
    width: 100vw;
    padding: 5px;
    height: calc(${defaultWidth} / 2);
    display: flex;
  }
`;

const TemperatureBox = styled(Box)`
  bottom: calc(50px + ${defaultWidth});
  right: 25px;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    bottom: calc(${defaultWidth} / 2 * 2 - 2px);
  }
`;

const TimeBox = styled(Box)`
  bottom: 25px;
  right: 25px;

  @media (max-width: ${breakpoints.mobile}) {
    bottom: calc(${defaultWidth} / 2 * 1 - 1px);
  }
`;

const TodayBox = styled(Box)`
  bottom: 25px;
  right: calc(50px + ${defaultWidth});

  @media (max-width: ${breakpoints.mobile}) {
    bottom: calc(${defaultWidth} / 2 * 0);
  }
`;

const LargeText = styled.span`
  margin-top: 30px;
  text-align: center;
  font-size: 4rem;
  display: block;
  color: #ff1361;
  background: -webkit-linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  -webkit-background-clip: text;

  @media (min-width: ${breakpoints.mobile}) {
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 10px;
    font-size: 3rem;
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
LargeText.displayName = "LargeText";

const SmallText = styled.span`
  font-size: 1.4rem;
  display: block;
  text-align: center;
  text-transform: uppercase;
  margin-top: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
`;
SmallText.displayName = "SmallText";

export { TemperatureBox, TimeBox, TodayBox, LargeText, SmallText };
