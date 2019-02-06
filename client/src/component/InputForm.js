import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState(
      {
        inputValue: event.target.value,
      },
      () => {
        console.log('input value', this.state.inputValue);
      }
    );
  }

  render() {
    return (
      <div>
        <Input
          icon={<Icon name="search" inverted circular link />}
          size="huge"
          placeholder="Insert link from Indeed for job scraping!"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputForm;
