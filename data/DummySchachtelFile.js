import { Schachtel } from "../models/Schachtel";

export const DummySchachtel = {
  DummySchachtel: new Schachtel('Meine Dummy Schachtel', 28),
  starten(){
  this.DummySchachtel.befuellen(0, 1, 3);
  this.DummySchachtel.befuellen(0, 3, 1);
  this.DummySchachtel.befuellen(1, 2, 2);
  this.DummySchachtel.befuellen(2, 4, 2);
  this.DummySchachtel.befuellen(3, 4, 2);

  this.DummySchachtel.befuellen(4, 3, 0.5);
  this.DummySchachtel.befuellen(5, 2, 2);

  this.DummySchachtel.befuellen(8, 1, 3);

  this.DummySchachtel.befuellen(13, 2, 2);
  this.DummySchachtel.befuellen(14, 4, 2);
  this.DummySchachtel.befuellen(15, 3, 3);
  this.DummySchachtel.befuellen(15, 4, 2);
  this.DummySchachtel.befuellen(15, 6, 5);

  this.DummySchachtel.befuellen(16, 1, 3);
  this.DummySchachtel.befuellen(16, 3, 1);
  this.DummySchachtel.befuellen(17, 2, 2);
  this.DummySchachtel.befuellen(18, 7, 5);

  this.DummySchachtel.befuellen(24, 1, 2.5);
  this.DummySchachtel.befuellen(27, 3, 3);

  //this.DummySchachtel.anzeigen();
  },
};
