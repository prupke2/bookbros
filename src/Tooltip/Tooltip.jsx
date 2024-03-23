import Emoji from '../Emoji/Emoji';
import { ReactComponent as QuestionMarkIcon } from '../assets/question-mark.svg';

import './Tooltip.scss';

const Tooltip = ({ content, emoji }) => (
    <span className='tooltip'>
        { !emoji ? <QuestionMarkIcon /> : (
            <Emoji 
                emoji={emoji}
                ariaLabel='tooltip icon'
                classes='tooltip-icon'
            />
        )  }
        <div className='tooltip-content above-tooltip'>
            ▲
        </div>
        <div
            className='tooltip-content'
            aria-label='tooltip content'
        >
            {content}
        </div>
    </span>
);

export default Tooltip;
