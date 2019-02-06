import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

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
        <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default InputForm;
