export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};
