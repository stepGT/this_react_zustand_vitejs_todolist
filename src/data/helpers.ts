type GenerateID = () => string;
export const generateID: GenerateID = () =>
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36);
