import React from 'react';
import {Button} from 'reactstrap'



class ChatBot extends React.Component {

    constructor() {
        super();


        this.submit = this.submit.bind(this)
      }


    submit(){
        console.log("hii login here")
        
    }

    render() {
        console.log(this.props);
        return <div>

           
                <Button color="success" onClick={this.submit}>Send</Button>
           
        </div>
    }
}

export default ChatBot;