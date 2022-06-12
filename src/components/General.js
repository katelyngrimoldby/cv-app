import { Component } from 'react';
import GeneralDisplay from './GeneralDisplay';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      address: '',
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
    const { name, email, address, toDisplay } = this.state;

    return (
      <div className="gen-container">
        {toDisplay ? (
          <GeneralDisplay
            done={this.toggleDisplay}
            nameDisp={name}
            emailDisp={email}
            addressDisp={address}
          />
        ) : (
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                value={name}
                type="text"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
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

export default General;
