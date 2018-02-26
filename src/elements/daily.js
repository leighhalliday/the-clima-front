import styled from "styled-components";

const DailyBox = styled.div`
  background: #000;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  text-align: center;
  padding: 5px;
  margin-bottom: 5px;
`;

const Day = styled.span`
  font-size: 1.5rem;
  display: block;
  width: 100%;
  padding-bottom: 5px;
  color: #9068be;
`;

const HighLow = styled.span`
  font-size: 1.2rem;
  display: block;
  width: 100%;
  color: #fa625f;
`;

const Small = styled.span`
  font-size: 1rem;
`;

export { DailyBox, Day, HighLow, Small };
