import WorldCountryGeo from './world-country-geo-updated.json';
import { loadJSON } from '/@/utils';

const geo = {
  WorldCountryGeo: loadJSON(WorldCountryGeo),
};

export default geo;