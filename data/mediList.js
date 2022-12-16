import { Medikament } from '../models/Medikament';

const medikamente = [
  {
    name: 'Mexalen',
    boxSize: 20,
    countSize: 0,
    tag: ['mo', 'mi', 'fr'],
    zeitpunkt_menge: {
      ['morgens']: 1,
    },
    img: 'https://cdn.shop-apotheke.com/images/A39/097/80/A3909780-p14.jpg',
    isReady: false,
  },
  {
    name: 'Aspirin',
    boxSize: 20,
    countSize: 0,
    tag: ['di', 'do', 'sa'],
    zeitpunkt_menge: {
      ['mittags']: 1,
      ['abends']: 1.5,
    },
    img: 'https://cdn.shop-apotheke.com/images/A24/239/92/A2423992-p1.jpg',
    isReady: false,
  },
  {
    name: 'Euthyrox',
    boxSize: 10,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['morgens']: 0.5 },
    img: 'https://cdn.shop-apotheke.com/images/D02/754/766/D02754766-p10.jpg',
    isReady: false,
  },
  {
    name: 'Bisoprolol',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: 'https://cdn.shop-apotheke.com/images/D05/391/732/D05391732-p10.jpg',
    isReady: false,
  },
  {
    name: 'Morhphin 10mg',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: '../assets/morphin.png',
    isReady: false,
  },
  {
    name: 'Diazepam',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: '../assets/diazepam.png',
    isReady: false,
  },
  {
    name: 'Lorazepam',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: 'https://www.docpeter.it/media/catalog/product/l/o/lorazepam_dorom_1_mg_compresse_20_compresse_033227012.jpg',
    isReady: false,
  },
  {
    name: 'Fentanyl',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: 'https://cache.pressmailing.net/content/73889da0-f584-4d24-9d1e-7bfd9b798ccb/Fentanyl_100UG_BUT_2~00px_Left_Print.jpg',
    isReady: false,
  },
  {
    name: 'Hydromorphon',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: 'https://www.ratiopharm.de/assets/products/de/packpic/Hydromorphon_rtp_4mg_RET_OP20_3D_Web_quer_links_clean_06115170.png',
    isReady: false,
  },
  {
    name: 'Oxycodon',
    boxSize: 30,
    countSize: 0,
    tag: ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so'],
    zeitpunkt_menge: { ['mittags']: 1, ['abends']: 2 },
    img: 'https://www.ratiopharm.de/assets/products/de/packpic/Oxycodon_HCl_rtp_10mg_RET_OP20_3D_original_quer_links_full_02593671.png',
    isReady: false,
  },
];

export const MEDIKAMENTE = medikamente.map(
  (medikament) =>
    new Medikament(
      medikament.name,
      medikament.boxSize,
      medikament.img,
      medikament.isReady
    )
);
