export function formatQuestion (question) {
  const { id, author, timestamp, optionOne, optionTwo } = question;
  return {
    id,
    author,
    timestamp,
    optionOne,
    optionTwo,
  };
}
