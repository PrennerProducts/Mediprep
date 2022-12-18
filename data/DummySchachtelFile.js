import { Schachtel } from '../models/Schachtel';

export const DummySchachtel = {
  DummySchachtel: new Schachtel('Meine Dummy Schachtel', 28),
  starten() {
    this.DummySchachtel.befuellen(0, 1, 3);
    this.DummySchachtel.befuellen(3, 1, 1);
    this.DummySchachtel.befuellen(4, 1, 3);
    this.DummySchachtel.befuellen(7, 1, 3);
    this.DummySchachtel.befuellen(24, 1, 2.5);

    this.DummySchachtel.befuellen(0, 2, 2);
    this.DummySchachtel.befuellen(3, 2, 2);
    this.DummySchachtel.befuellen(1, 2, 22);
    this.DummySchachtel.befuellen(5, 2, 2);
    this.DummySchachtel.befuellen(8, 2, 2);
    this.DummySchachtel.befuellen(13, 2, 2);

    this.DummySchachtel.befuellen(0, 3, 1);
    this.DummySchachtel.befuellen(4, 3, 0.5);
    this.DummySchachtel.befuellen(6, 3, 3);
    this.DummySchachtel.befuellen(7, 3, 1);
    this.DummySchachtel.befuellen(10, 3, 3);

    this.DummySchachtel.befuellen(0, 4, 2);
    this.DummySchachtel.befuellen(2, 4, 2);
    this.DummySchachtel.befuellen(3, 4, 2);
    this.DummySchachtel.befuellen(14, 4, 2);
    this.DummySchachtel.befuellen(15, 4, 2);

    this.DummySchachtel.befuellen(0, 6, 1);
    this.DummySchachtel.befuellen(15, 6, 1);
    this.DummySchachtel.befuellen(15, 6, 1);
    this.DummySchachtel.befuellen(15, 6, 3);

    this.DummySchachtel.befuellen(18, 7, 1);
    this.DummySchachtel.befuellen(18, 7, 2);
    this.DummySchachtel.befuellen(18, 7, 5);
    this.DummySchachtel.befuellen(18, 7, 7);

    this.DummySchachtel.befuellen(24, 8, 0.5);
    this.DummySchachtel.befuellen(24, 8, 1.5);
    this.DummySchachtel.befuellen(24, 8, 2.5);
    this.DummySchachtel.befuellen(24, 8, 3.5);

    this.DummySchachtel.befuellen(0, 9, 3);
    this.DummySchachtel.befuellen(3, 9, 1);
    this.DummySchachtel.befuellen(4, 9, 3);
    this.DummySchachtel.befuellen(7, 9, 3);
    this.DummySchachtel.befuellen(24, 9, 2.5);

    this.DummySchachtel.befuellen(0, 10, 2);
    this.DummySchachtel.befuellen(3, 10, 2);
    this.DummySchachtel.befuellen(1, 10, 22);
    this.DummySchachtel.befuellen(5, 10, 2);
    this.DummySchachtel.befuellen(8, 10, 2);
    this.DummySchachtel.befuellen(13, 10, 2);

    //this.DummySchachtel.anzeigen();
  },
};
