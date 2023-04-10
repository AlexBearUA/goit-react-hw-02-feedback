export const FeedbackOptions = ({ onLeaveFeedback = {} }) => (
  <ul>
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
