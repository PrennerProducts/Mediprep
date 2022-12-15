import { Medikament } from '../models/Medikament';

const medikamente = [
  {
    name: 'Test-Medikament',
    boxSize: 30,
    img: 'Test-url',
    isReady: false,
  },
  {
    id: 1,
    name: 'Mexalen',
    boxSize: 20,
    countSize: 0,
    tag: ['mo', 'mi', 'fr'],
    zeitpunkt_menge: {
      ['morgens']: 1,
    },
    img: '/myuri',
    isReady: false,
  },
  {
    id: 2,
    name: 'Aspirin',
    boxSize: 20,
    countSize: 0,
    tag: ['di', 'do', 'sa'],
    zeitpunkt_menge: {
      ['mittags']: 1,
      ['abends']: 1.5,
    },
    img: '/myuri',
    isReady: false,
  },
  {
    id: 3,
    name: 'Euthyrox',
    boxSize: 10,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['morgens']: 0.5 },
    img: '/myuri',
    isReady: false,
  },
  {
    id: 2,
    name: 'Bisoprolol',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: '/myuri',
    isReady: false,
  },
];

export const MEDIKAMENTE = medikamente.map( (medikament) =>
    new Medikament(
      medikament.name,
      medikament.boxSize,
      //medikamente.countSize,
      //medikamente.tag,
      //medikamente.zeitpunkt_menge,
      medikament.img,
      medikament.isReady
    )
);
