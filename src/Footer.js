import ColorLines from './ColorLines.js';

function Footer () {
    let currentYear = new Date().getFullYear();
    const lineList = ["lineGrn2","lineAzr2","lineYlw2"]

    return (
        <>
        <footer>
            <ColorLines lines={lineList} />
            <p>Copyright &copy; {currentYear} Matthew R Nikirk. All rights reserved.</p>
        </footer>
        </>  
    );
}

export default Footer;