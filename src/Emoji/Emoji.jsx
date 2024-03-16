const Emoji = ({ emoji, classes, ariaLabel = null }) => (
    <span 
        role='img'
        className={classes}
        aria-label={ariaLabel}
    >
        {emoji}
    </span>
);

export default Emoji;