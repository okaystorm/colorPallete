const updateColorsHash = (colors = []) => {
  document.location.hash = colors.map((i) => i.substring(1)).join("-");
};

const getHashColors = () => {
  if (document.location.hash.length > 1) {
    return document.location.hash.slice(1).split("-");
  }
  return [];
};

export { updateColorsHash, getHashColors };
