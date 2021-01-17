import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const A = 65; // ASCII character code

class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    return (
      <div>
        <ButtonToolbar>
          {this.state.letters.map((letter) => (
            <Button key={letter} data-letter={letter} onClick={this.handleClick} size="sm">
              {letter}
            </Button>
          ))}
        </ButtonToolbar>
        Just clicked: {this.state.justClicked}
      </div>
    );
  }
}

export default Alphabet;
