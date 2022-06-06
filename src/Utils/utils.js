export const formatDate = (time) => {
  const date = time.slice(0, 10);
  return new Date(date).toLocaleDateString();
};

export const TAGS_OPTIONS = ["work", "fun", "house", "study", "other"];
