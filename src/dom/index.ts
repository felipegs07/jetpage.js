import { filterAllAvailableLinks } from './helpers';
import { getAllLinks } from './document';

const getAllAvailableLinks = () => {
  const loadableLinks = filterAllAvailableLinks(getAllLinks());
  return loadableLinks;
};

export default {
  getAllAvailableLinks,
};
