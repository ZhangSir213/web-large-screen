import CountryData from './country-data.json';
import RunningEffect from './running-effect.json';
import { loadJSON } from '/@/utils';

const data = {
  CountryCount: loadJSON(CountryData),
  EffectGeneral: loadJSON(RunningEffect.general),
  EffectAnalysis: loadJSON(RunningEffect.analysis),
  PCStatement: loadJSON(RunningEffect.pc_statements),
};

export default data;