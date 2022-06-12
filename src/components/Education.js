import { Component } from 'react';
import EducationDisplay from './EducationDisplay';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      title: '',
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
    const { school, title, dateStart, dateEnd, toDisplay } = this.state;
    const { keyID } = this.props;

    return (
      <div className="edu-container" key={keyID}>
        {toDisplay ? (
          <EducationDisplay
            done={this.toggleDisplay}
            schoolDisp={school}
            titleDisp={title}
            dateStartDisp={dateStart}
            dateEndDisp={dateEnd}
          />
        ) : (
          <form action="">
            <div>
              <label htmlFor="title">Title of Study</label>
              <input
                onChange={this.handleChange}
                value={title}
                type="text"
                id="title"
              />
            </div>
            <div>
              <label htmlFor="school">School Attended</label>
              <input
                type="text"
                id="school"
                value={school}
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
            <button type="button" onClick={this.toggleDisplay}>
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Education;
