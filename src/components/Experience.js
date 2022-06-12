/* eslint-disable operator-linebreak */
import { Component } from 'react';
import ExperienceDisplay from './ExperienceDisplay';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      title: '',
      details: '',
      dateStart: '',
      dateEnd: '',
      toDisplay: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  toggleDisplay() {
    this.setState((prevState) => ({ toDisplay: !prevState.toDisplay }));
  }

  render() {
    const { company, title, dateStart, dateEnd, details, toDisplay } =
      this.state;
    const { keyID } = this.props;

    return (
      <div className="edu-container" key={keyID}>
        {toDisplay ? (
          <ExperienceDisplay
            done={this.toggleDisplay}
            companyDisp={company}
            titleDisp={title}
            dateStartDisp={dateStart}
            dateEndDisp={dateEnd}
            detailsDisp={details}
          />
        ) : (
          <form action="">
            <div>
              <label htmlFor="title">Job Title</label>
              <input
                onChange={this.handleChange}
                value={title}
                type="text"
                id="title"
              />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="dateStart">Start Date</label>
              <input
                type="date"
                id="dateStart"
                value={dateStart}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="dateEnd">
                End Date (If still active leave empty)
              </label>
              <input
                type="date"
                id="dateEnd"
                value={dateEnd}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="details">Job Responsibilities</label>
              <textarea
                id="details"
                onChange={this.handleChange}
                value={details}
              />
            </div>
            <button type="button" onClick={this.toggleDisplay}>
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Experience;
