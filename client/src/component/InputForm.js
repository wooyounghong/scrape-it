import React from 'react';
import { Icon, Button, Form } from 'semantic-ui-react';
import '../css/InputForm.css';
class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('button was clicked');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-container">
        <Form.Input
          icon={<Icon name="search" />}
          size="huge"
          placeholder="Insert link from Indeed for job scraping!"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <Button type="submit" onSubmit={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default InputForm;
