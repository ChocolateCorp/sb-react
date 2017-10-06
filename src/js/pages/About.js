import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router';

class About extends React.Component {

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
            <h1>Login</h1>
            <Link to="/darbot">
                <Button color="success" onClick={this.submit}>Login</Button>
            </Link>
        </div>
    }
}

export default About;