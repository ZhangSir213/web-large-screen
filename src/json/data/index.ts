import CountryData from './country-geo.json';
import RunningEffect from './running-effect.json';
import { loadJSON } from '/@/utils';

const data = {
  CountryCount: loadJSON(CountryData.country_num),
  EffectGeneral: loadJSON(RunningEffect.general),
  EffectAnalysis: loadJSON(RunningEffect.analysis),
  PCStatement: loadJSON(RunningEffect.pc_statements),
  BreedLog: loadJSON(RunningEffect.breed_log),
};

export default data;