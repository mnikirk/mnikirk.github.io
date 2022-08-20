import { FaSquare } from 'react-icons/fa';

function Skills() {
    return (
      <>
      <ul>
        <li><FaSquare className='skillsIcon'/>The basics: HTML, CSS, Javascript (ES6)</li>
        <li><FaSquare className='skillsIcon'/>Front-End Libraries: React, jQuery, Bootstrap (Vue is next to learn)</li>
        <li><FaSquare className='skillsIcon'/>Other Programming: Python, C#, Powershell, Bash</li>
        <li><FaSquare className='skillsIcon'/>AWS administration and development with API Gateway, Lambda, S3, EC2, IAM, etc</li>
        <li><FaSquare className='skillsIcon'/>Security: OWASP Top 10, testing tools on Kali Linux, SIEMs, vulnerability scanning</li>
      </ul>
      <p>My overall experience in IT is quite broad and I like to think it gives me a more holistic view of the entire IT stack and user experience. (Seriously, is there anything worse than IT without good customer service?)
      </p><p> 
        I've done application support, PC repair, printer repair, server room hardware, network wiring and config, 
        mobile device management, Windows and Linux server administration, writing documentation and policies, security alert analysis, active vulnerability scanning,
        managed others, trained IT staff, ran trainings for users, and kept my head above water doing it all.  
        There's always something new to do and new to learn, but web development was my first IT love.
      </p>
      </>
    );
}

export default Skills;