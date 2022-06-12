import { Component } from 'react';

class GeneralDisplay extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.done();
  }

  render() {
    const { nameDisp, emailDisp, addressDisp } = this.props;
    return (
      <div>
        <h1>{nameDisp}</h1>
        <span>{emailDisp}</span>
        <br />
        <span>{addressDisp}</span>
        <br />
        <button type="button" onClick={this.onSubmit}>
          Edit
        </button>
      </div>
    );
  }
}

export default GeneralDisplay;
