import { Medikament } from '../models/Medikament';

const medikamente = [
  {
    id: 1,
    name: 'Mexalen',
    boxSize: 20,
    countSize: 0,
    tag: ['mo', 'mi', 'fr'],
    zeitpunkt: ['morgens'],
    menge: 1,
    img: '/myuri',
    isReady: false,
  },
  {
    id: 2,
    name: 'Aspirin',
    boxSize: 20,
    countSize: 0,
    tag: ['di', 'do', 'sa'],
    zeitpunkt: ['mittags', 'abends'],
    menge: 1.5,
    img: '/myuri',
    isReady: false,
  },
  {
    id: 3,
    name: 'Euthyrox',
    boxSize: 10,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt: ['morgens'],
    menge: 0.5,
    img: '/myuri',
    isReady: false,
  },
  {
    id: 2,
    name: 'Bisoprolol',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt: ['morgens'],
    menge: 1,
    img: '/myuri',
    isReady: false,
  },
];

export const MEDIKAMENTE = medikamente.map(
  (medikament) =>
    new Medikament(
      medikamente.id,
      medikamente.name,
      medikamente.boxSize,
      medikamente.countSize,
      medikamente.tag,
      medikamente.zeitpunkt,
      medikamente.menge,
      medikamente.img,
      medikamente.isReady
    )
);
