export const getAllLinks = () => {
  return document.getElementsByTagName('a');
};

export const getBodyData = () => {
  return document.getElementsByTagName('body')[0].getAttribute('data-jetpage');
};

export default {
  getAllLinks,
  getBodyData,
};
