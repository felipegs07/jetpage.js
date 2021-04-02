import { startListeners } from './core';
import { Config } from './utils/types';

export type CreateJetPage = {
  start: (config: Config) => void;
};

const createJetPage = (function () {
  return (config: Config) => {
    return {
      start: () => {
        startListeners(config);
      },
    };
  };
})();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).createJetPage = createJetPage;
