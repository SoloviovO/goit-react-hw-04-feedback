import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnWrap}>
      {options.map(option => {
        return (
          <button
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
