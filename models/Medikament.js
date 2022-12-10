export class Medikament {
  constructor(
    id,
    name,
    boxsize,
    countSize,
    tag,
    zeitpunkt_menge,
    img,
    isReady
  ) {
    this.id = id;
    this.name = name;
    this.boxsize = boxsize;
    this.countSize = countSize;
    this.tag = tag;
    this.zeitpunkt_menge = zeitpunkt_menge;
    this.img = img;
    this.isReady = isReady;
  }
}
