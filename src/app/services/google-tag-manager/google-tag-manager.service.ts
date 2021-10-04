import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTagManagerService {

  constructor() { }

  setEvent(datalayerContent: object) {
    (<any>window).dataLayer.push(
      datalayerContent
    );
    console.log('dataLayer', (<any>window).dataLayer);
    console.log('datalayerContent', datalayerContent);
  }
}
