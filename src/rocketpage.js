import { getAllLoadableLinks } from './listeners';

const loadableLinks = getAllLoadableLinks(document.getElementsByTagName('a'));

console.log(loadableLinks);
