import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
//import { link } from 'fs';

import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
              public _ajustes: SettingsService) { }

  ngOnInit() {
  }
  
  cambiarColor(tema:string, link: any){
    this._ajustes.aplicarTema( tema );
  }
   
  
}
