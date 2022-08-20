import ColorLines from './ColorLines.js';

function Header() {
    const lineList = ["lineRdr1","lineYlw1","lineAzr1"];
    return (
        <header>
        <h1>Matthew R Nikirk</h1>
        <h2>Web Developer & IT Professional</h2>
        <ColorLines lines={lineList}/>
    </header>
    );
}

export default Header;