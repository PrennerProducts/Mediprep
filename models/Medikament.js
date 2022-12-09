export class Medikament {
  constructor(
    id,
    name,
    boxsize,
    countSize,
    tag,
    zeitpunkt,
    menge,
    img,
    isReady
  ) {
    this.id = id;
    this.name = name;
    this.boxsize = boxsize;
    this.countSize = countSize;
    this.tag = tag;
    this.zeitpunkt = zeitpunkt;
    this.menge = menge;
    this.img = img;
    this.isReady = isReady;
  }
}
