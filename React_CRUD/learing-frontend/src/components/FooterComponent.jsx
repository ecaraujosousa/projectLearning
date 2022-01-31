import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = { }

    }
    

  render() {
    return <div>
        <footer className='footer'>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div> <a href="" className="navbar-brand"> All Rights Reserved 2022 JavaBuilders</a></div>
            </nav>
         
        </footer>
    </div>;
  }
} 

export default FooterComponent