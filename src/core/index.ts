import dom from '../dom';
import { Config } from '../utils/types';

export const startListeners = (config: Config) => {
  //console.log('all available links', dom.getAllAvailableLinks());
  dom.getAllAvailableLinks();
  //console.log('Config', config);
};
