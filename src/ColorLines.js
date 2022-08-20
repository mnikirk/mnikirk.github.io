//takes an array of strings representing css id styles

function ColorLines (props) {
const linesDivs = props.lines.map(id => (
    <div className={id}></div>
));
    return (
        <div>
            {linesDivs}
      </div>
    );
}

export default ColorLines;