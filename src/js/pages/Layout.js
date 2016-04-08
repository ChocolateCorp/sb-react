import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Layout extends React.Component {

    render() {
        return <div>
            <Nav />
            <div class="container">
                <h1>Hello</h1>
                {this.props.children}
            </div>
            <Footer />
        </div>
    }
}

export default Layout;