import { Fragment } from 'react';
import Emoji from '../Emoji/Emoji';
import './Tooltip.scss';

const Tooltip = ({ content, emoji='ℹ️' }) => (
    <Fragment>
        <div className='tooltip'>
            <Emoji 
                emoji={emoji}
                ariaLabel='tooltip'
            />
            <div
                className='tooltip-content'>{content}
            </div>
        </div>
    </Fragment>
);

export default Tooltip;