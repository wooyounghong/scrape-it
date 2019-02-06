import React from 'react';
import { Input } from 'semantic-ui-react';

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: null,
    };
  }

  render() {
    return (
      <div>
        <Input icon="search" placeholder="Search..." inverted circular link />
      </div>
    );
  }
}

export default InputForm;
