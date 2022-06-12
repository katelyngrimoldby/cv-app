/* eslint-disable operator-linebreak */
import { Component } from 'react';

class ExperienceDisplay extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.done();
  }

  render() {
    const { companyDisp, titleDisp, dateStartDisp, dateEndDisp, detailsDisp } =
      this.props;
    return (
      <div>
        <h2>{titleDisp}</h2>
        <h3>{companyDisp}</h3>
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
        <p>{detailsDisp}</p>
        <button type="button" onClick={this.onSubmit}>
          Edit
        </button>
      </div>
    );
  }
}

export default ExperienceDisplay;
