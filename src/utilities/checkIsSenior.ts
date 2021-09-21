export const checkIsSenior = (age: string): string => {
  if (parseInt(age) >= 65) {
    return "Yes";
  }

  return "No";
};
