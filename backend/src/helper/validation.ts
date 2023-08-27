export const validateBodyFields = (body: object, ...fields: string[]): boolean => {
  for (const field of fields) {
    if (!(field in body)) return false;
  }
  return true;
};

export const validateStringFromOptions = (s: string, ...options: string[]): boolean => {
  return options.includes(s);
};

export const validateStringLength = (s: string, lowerBound: number, upperBound: number = Infinity): boolean => {
  return s.length >= lowerBound && s.length <= upperBound;
};