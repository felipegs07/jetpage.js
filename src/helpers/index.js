const clearSpecialCharacter = (text) => text.replace(/[^0-9a-zA-Z:,]+/g, '');

const newPageFactory = (link) => ({
  pathname: clearSpecialCharacter(link.pathname),
  protocol: link.protocol,
  hostname: link.hostname,
  target: link.target,
  download: link.hasAttribute('download'),
  blocked: link.hasAttribute('data-no-rocketpage'),
});

const actualPageFactory = (location) => ({
  pathname: clearSpecialCharacter(location.pathname),
  protocol: location.protocol,
  hostname: location.hostname,
});

const verifyNewPageProps = (newPage, actualPage) => {
  if (newPage.protocol !== actualPage.protocol) return false;
  if (newPage.hostname !== actualPage.hostname) return false;
  if (newPage.pathname === actualPage.pathname) return false;
  if (newPage.download || newPage.target !== '' || newPage.blocked) return false;

  return true;
};

export const verifyLoadablePage = (link, location) => {
  const newPage = newPageFactory(link);
  const actualPage = actualPageFactory(location);

  return verifyNewPageProps(newPage, actualPage);
};

export default {
  verifyLoadablePage,
};
