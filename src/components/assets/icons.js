import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons'; // Java icon
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Download icon
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {faPython} from '@fortawesome/free-brands-svg-icons';

const icons = {
    Download: (
      <span className="icon-box">
        <FontAwesomeIcon icon={faDownload} className='download' />
      </span>
    ),
    Java: (
      <span className="icon-box">
        <FontAwesomeIcon icon={faJava} className='skillsIcons'/>
      </span>
    ),
    Js: (
        <span className='icon-box'>
            <FontAwesomeIcon icon={faJs} className='skillsIcons'/>
        </span>
    ),
    React: (
        <span className='icon-box'>
            <FontAwesomeIcon icon={faReact} className='skillsIcons' />
        </span>
    ),
    Python: (
      <span className='icon-box'>
        <FontAwesomeIcon icon={faPython} className='skillsIcons'/>
      </span> 
    )
}

export default icons;
