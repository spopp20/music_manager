import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const A = 65; // ASCII character code

const Alphabet = (props) => {
  let input;

  const handleClick = (e) => {
    props.onSearch(e.target.dataset.letter);
  };
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i));

  return (
    <ButtonToolbar>
      {letters.map((letter) => (
        <Button key={letter} data-letter={letter} onClick={handleClick} size="sm">
          {letter}
        </Button>
      ))}
    </ButtonToolbar>
  );
};

export default Alphabet;
