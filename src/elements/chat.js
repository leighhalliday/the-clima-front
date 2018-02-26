import styled, { css } from "styled-components";
import { breakpoints } from "./settings";

const ChatContainer = styled.section`
  position: absolute;
  left: 100vw;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 20vw;
  padding: 15px;
  padding-top: 0px;
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
  transition: all 0.5s ease;

  ${props =>
    props.chat &&
    css`
      left: 80vw;

      @media (max-width: ${breakpoints.mobile}) {
        left: 25vw;
        width: 75vw;
      }
    `};
`;

const MessageList = styled.ul`
  height: calc(100vh - 200px);
  margin-bottom: 15px;
  padding-top: 15px;
  overflow: scroll;
`;

const MessageItem = styled.li`
  padding-bottom: 5px;
`;

const UserInput = styled.input`
  width: calc(100% - 15px);
  padding: 0.5rem;
  border: none;
  font-size: 1.2rem;
  margin-bottom: 10px;
  border: 2px solid #ff057c;
  outline-color: #ffff00;
  color: #866667;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const TextInput = UserInput.withComponent("textarea");

const SendButton = styled.button`
  margin-top: 20px;
  padding: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.2rem;
  border: 3px solid #ff057c;
  color: #ff057c;
  text-transform: uppercase;
`;

const MessageName = styled.span`
  font-size: 0.75rem;
  padding-right: 1rem;
`;

const MessageText = styled.span``;

const ChatTrigger = styled.div`
  position: absolute;
  left: -72px;
  width: 72px;
  height: 72px;
  background: black;
  padding: 15px;
  cursor: pointer;
`;

const TriggerImage = styled.img`
  max-width: 100%;
`;

const Form = styled.form`
  position: absolute;
  bottom: 25px;
`;

export {
  ChatContainer,
  MessageList,
  MessageItem,
  UserInput,
  TextInput,
  SendButton,
  MessageName,
  MessageText,
  ChatTrigger,
  TriggerImage,
  Form
};
