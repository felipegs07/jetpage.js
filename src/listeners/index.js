import { verifyLoadablePage } from '../helpers';

export const getAllLoadableLinks = (anchorHtmlCollection) => {
  const allLinks = Array.from(anchorHtmlCollection);
  const preloadLinks = allLinks.filter((link) => verifyLoadablePage(link, window.location));

  return preloadLinks;
};

export default {
  getAllLoadableLinks,
};
