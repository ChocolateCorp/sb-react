import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import io from 'socket.io-client';
import uuid from 'node-uuid'



class ChatBot extends React.Component {

    constructor() {
        super();
        this.state = {
            data: {
              messages: []
            },
          }

        this.submit = this.submit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(name, value) {
        if (name == 'message') {
            this.setState({
                message: value
            });
        }
    }


    submit(e){
        console.log("hii login here")
        e.preventDefault()
        const data = this.state.data
        if (data.author)
          this.createMessage()
        else
          this.setAuthor()
        
    }

    setAuthor() {
        const author = 'Guest'
        if (!author)
          return
       
        const messages = this.state.data.messages
        this.setState({
          data: {
            author,
            messages
          }
        })
      }

    createMessage() {
        console.log("hello message")
        const data = this.state.data
        const messages = data.messages
        console.log(this.state.messages)
       
        const message_text = this.state.message
        this.setState({
          data: {
            author: data.author,
            messages
          }
        })
        
      }

    render() {
        console.log(this.props);
        const data = this.state.data
        let form_input
        if (!data.author) {
            form_input = (
            <div>
                Hi, what is your name?<br />
                <Input type="text" ref="author" />
            </div>
            )
        } else {
            form_input = (
            <div>
                Hello { data.author }, type a message:<br />
                <Input name="message" type="text" ref="message" />
            </div>
            )
        }

        return <div>
            <form onSubmit={ this.submit.bind(this) }>
            { form_input }
          </form>
        </div>
    }
}

export default ChatBot;