import React from "react";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";

import {
  ChatContainer, // Wraps the entire chat component's content (div)
  MessageList, // The wrapper (ul) which wraps the message items
  MessageItem, // The message (li) itself
  MessageName, // The name of the person displayed in the message
  MessageText, // The message the person wrote
  Form, // Form tag wrapping the name and message inputs
  UserInput, // An input tag asking for the user's name
  TextInput, // An input tag asking for the user's message
  SendButton, // The button to submit the form
  ChatTrigger, // Icon displayed which will open/close chat section (hidden off screen)
  TriggerImage // Image displayed inside ChatTrigger
} from "../elements/chat";

import chatImage from "../images/chat.png";
import database from "../firebase";

/* props:
- city (string)
*/

@inject("UiStore")
@observer
export default class Chat extends React.Component {
  static propTypes = {
    city: PropTypes.string.isRequired
  };

  state = {
    messages: []
  };

  componentDidMount() {
    const city = this.props.city.toLowerCase();
    database
      .ref(`cities/${city}`)
      .limitToLast(20)
      .on("value", snapshot => {
        this.setState({
          messages: Object.values(snapshot.val() || {})
        });
      });
  }

  handleSubmit = e => {
    e.preventDefault();

    const city = this.props.city.toLowerCase();
    const text = this.textInput.value;
    const user = this.userInput.value;

    // add a new empty message and get its ref
    const messageRef = database.ref(`cities/${city}`).push();

    messageRef.set({
      text,
      user,
      time: new Date().getTime()
    });

    this.textInput.value = "";
    this.textInput.focus();
  };

  render() {
    return (
      <ChatContainer chat={this.props.UiStore.showChat}>
        <ChatTrigger
          onClick={() => {
            this.props.UiStore.toggleChat();
          }}
        >
          <TriggerImage src={chatImage} />
        </ChatTrigger>

        <MessageList>
          {this.state.messages.map(message => (
            <MessageItem key={message.time}>
              <MessageName>{message.user}</MessageName>
              <MessageText>{message.text}</MessageText>
            </MessageItem>
          ))}
        </MessageList>

        <Form onSubmit={e => this.handleSubmit(e)}>
          <TextInput
            placeholder="your message"
            innerRef={input => (this.textInput = input)}
          />
          <UserInput
            placeholder="your name"
            innerRef={input => (this.userInput = input)}
          />
          <SendButton>Send</SendButton>
        </Form>
      </ChatContainer>
    );
  }
}
