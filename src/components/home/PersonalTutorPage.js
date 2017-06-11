import React, {PropTypes} from 'react';


class PersonalTutorPage extends React.Component {
  render() {
    return (
      <div className="iphone-sim"> 

        
        <div>
          <p>Ask your question here:</p>
          <textarea id="ask-question"></textarea>
          <p> Mady, our bot proffessor thinks that the anser is:</p>
          <div id="show-answer">42</div>
        </div>


      </div>
    );
  }
}

export default PersonalTutorPage;

