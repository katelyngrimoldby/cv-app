import { Component } from 'react';
import General from './components/General';
import Education from './components/Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eduInstances: [{ key: 0 }],
    };

    this.addEdu = this.addEdu.bind(this);
    this.delEdu = this.delEdu.bind(this);
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

  render() {
    const { eduInstances } = this.state;
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
      </div>
    );
  }
}

export default App;
