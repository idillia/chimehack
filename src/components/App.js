import React , {PropTypes}  from 'react';
import Header from './common/Header.js';
import {StyleRoot} from 'radium';

class App extends React.Component {
  render() {
    return (
      <div>
        <StyleRoot>
          <Header/>
          {this.props.children}
        </StyleRoot>
      </div>  
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;