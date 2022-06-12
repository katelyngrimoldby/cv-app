import { Component } from 'react';

class EducationDisplay extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.done();
  }

  render() {
    const { schoolDisp, titleDisp, dateStartDisp, dateEndDisp } = this.props;
    return (
      <div>
        <h2>{titleDisp}</h2>
        <h3>{schoolDisp}</h3>
        <span>{dateStartDisp}</span>
        {dateEndDisp.length > 0 ? (
          <span>
            &nbsp;to&nbsp;
            {dateEndDisp}
          </span>
        ) : (
          <span> to present </span>
        )}
        <br />
        <button type="button" onClick={this.onSubmit}>
          Edit
        </button>
      </div>
    );
  }
}

export default EducationDisplay;
