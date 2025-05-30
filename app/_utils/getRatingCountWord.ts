export default (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "оценок";
  }
  if (lastDigit === 1) {
    return "оценка";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return "оценки";
  }
  return "оценок";
};
