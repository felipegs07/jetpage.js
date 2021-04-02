type newPageType = {
  pathname: string;
  protocol: string;
  hostname: string;
  target: string;
  download: boolean;
  blocked: boolean;
};

type actualPageType = {
  pathname: string;
  protocol: string;
  hostname: string;
};

const clearSpecialCharacter = (text: string) =>
  text.replace(/[^0-9a-zA-Z:,]+/g, '');

const newPageFactory = (link: HTMLAnchorElement) => ({
  pathname: clearSpecialCharacter(link.pathname),
  protocol: link.protocol,
  hostname: link.hostname,
  target: link.target,
  download: link.hasAttribute('download'),
  blocked: link.hasAttribute('data-no-rocketpage'),
});

const actualPageFactory = (location: Location) => ({
  pathname: clearSpecialCharacter(location.pathname),
  protocol: location.protocol,
  hostname: location.hostname,
});

const verifyNewPageProps = (
  newPage: newPageType,
  actualPage: actualPageType
) => {
  if (newPage.protocol !== actualPage.protocol) return false;
  if (newPage.hostname !== actualPage.hostname) return false;
  if (newPage.pathname === actualPage.pathname) return false;
  if (newPage.download || newPage.target !== '' || newPage.blocked)
    return false;

  return true;
};

export const verifyLoadablePage = (
  link: HTMLAnchorElement,
  location: Location
) => {
  const newPage = newPageFactory(link);
  const actualPage = actualPageFactory(location);

  return verifyNewPageProps(newPage, actualPage);
};

export const filterAllAvailableLinks = (
  anchorHtmlCollection: HTMLCollectionOf<HTMLAnchorElement>
) => {
  const allLinks = Array.from(anchorHtmlCollection);
  const preloadLinks = allLinks.filter((link) =>
    verifyLoadablePage(link, window.location)
  );

  return preloadLinks;
};

export default {
  verifyLoadablePage,
};
