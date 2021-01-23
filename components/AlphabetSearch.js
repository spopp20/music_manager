import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const A = 65; // ASCII character code

const AlphabetSearch = (props) => {
  const handleClick = (e) => {
    props.onSearch(e.target.dataset.letter);
  };
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i));

  return (
    <ButtonToolbar>
      {letters.map((letter) => (
        <Button variant="info" key={letter} data-letter={letter} onClick={handleClick} size="sm">
          {letter}
        </Button>
      ))}
    </ButtonToolbar>
  );
};

export default AlphabetSearch;
