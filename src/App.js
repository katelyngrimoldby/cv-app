import { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eduInstances: [{ key: 0 }],
      expInstances: [{ key: 0 }],
    };

    this.addEdu = this.addEdu.bind(this);
    this.delEdu = this.delEdu.bind(this);
    this.addExp = this.addExp.bind(this);
    this.delExp = this.delExp.bind(this);
  }

  addEdu() {
    this.setState((prevState) => ({
      eduInstances: prevState.eduInstances.concat({
        key: prevState.eduInstances.length,
      }),
    }));
  }

  delEdu() {
    this.setState((prevState) => ({
      eduInstances: prevState.eduInstances.slice(
        0,
        prevState.eduInstances.length - 1
      ),
    }));
  }

  addExp() {
    this.setState((prevState) => ({
      expInstances: prevState.expInstances.concat({
        key: prevState.expInstances.length,
      }),
    }));
  }

  delExp() {
    this.setState((prevState) => ({
      expInstances: prevState.expInstances.slice(
        0,
        prevState.expInstances.length - 1
      ),
    }));
  }

  render() {
    const { eduInstances, expInstances } = this.state;
    return (
      <div className="App">
        <General />
        {eduInstances.map((item) => (
          <Education key={item.key} />
        ))}
        <button type="button" onClick={this.addEdu}>
          Add section
        </button>
        <button type="button" onClick={this.delEdu}>
          Remove
        </button>

        {expInstances.map((item) => (
          <Experience key={item.key} />
        ))}
        <button type="button" onClick={this.addExp}>
          Add section
        </button>
        <button type="button" onClick={this.delExp}>
          Remove
        </button>
      </div>
    );
  }
}

export default App;
