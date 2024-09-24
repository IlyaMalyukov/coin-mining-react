import { makeAutoObservable } from 'mobx';
import type { Skin } from './types';

class CoinsStore {
  constructor() {
    makeAutoObservable(this);
  }

  totalBalance: number = 0;
  profitPerTap: number = 1;
  isBoostPowerActive: boolean = false;
  activeSkin: Skin = 'bitcoin';

  updateTotalBalance(coinsAmount: number) {
    this.totalBalance += coinsAmount;
  }

  boostPower() {
    this.profitPerTap *= 10;
    this.isBoostPowerActive = true;
  }

  stopBoostPower() {
    this.profitPerTap = 1;
    this.isBoostPowerActive = false;
  }

  setSkin(skin: Skin) {
    this.activeSkin = skin;
  }
}

export const coinsStore = new CoinsStore();

export type { Skin };