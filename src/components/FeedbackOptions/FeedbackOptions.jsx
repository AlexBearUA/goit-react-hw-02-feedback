import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ onLeaveFeedback = {} }) => (
  <ul className={css.FeedbackOptions}>
    <li>
      <button type="button" data-value="good" onClick={onLeaveFeedback}>
        Good
      </button>
    </li>
    <li>
      <button type="button" data-value="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
    </li>
    <li>
      <button type="button" data-value="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </li>
  </ul>
);
