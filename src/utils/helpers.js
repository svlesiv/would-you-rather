export function formatDate (timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

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
