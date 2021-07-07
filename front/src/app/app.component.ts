import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorService } from './services/color/color.service';
import tinycolor from 'tinycolor2';
import { ColorInterface } from './models/interface/color.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primaryColor = '#ffd43d';
  accentColor = '#2b475e';
  primaryColorPalette: ColorInterface[] = [];
  accentColorPalette: ColorInterface[] = [];
  primaryEvent: Subscription;
  secundaryEvent: Subscription;


  constructor(
    private colorService: ColorService) {
    this.savePrimaryColor();
    this.saveAccentColor();
    this.primaryEvent = this.colorService.getPrimaryEvent().subscribe(primary => {
      if (primary != 'null') {
        this.primaryColor = primary;
      }
      else {
        this.primaryColor = '#ffd43d';
        this.accentColor = '#2b475e';
      }
      this.savePrimaryColor();
    })
    this.secundaryEvent = this.colorService.getSecundaryEvent().subscribe(secundary => {
      if (secundary != 'null') {
        this.accentColor = secundary;
      }
      else {
        this.primaryColor = '#ffd43d';
        this.accentColor = '#2b475e';
      }
      this.saveAccentColor();
    })
  }

  savePrimaryColor() {
    this.primaryColorPalette = computeColors(this.primaryColor);
    updateTheme(this.primaryColorPalette, 'primary');
  }

  saveAccentColor() {
    this.accentColorPalette = computeColors(this.accentColor);
    updateTheme(this.accentColorPalette, 'accent');
  }

  // onClick(evt: any) {
  //   if (evt != 'close') {
  //     this.sidenav.open();
  //   }
  //   if (this.usuario != null) {
  //     this.login = !this.sidenav.toggleStatus();
  //     this.sidenav.exibeMenu(!this.login);
  //   }
  //   else {
  //     this.login = false;
  //   }
  // }

  ngOnDestroy() {
    this.primaryEvent.unsubscribe();
    this.secundaryEvent.unsubscribe();
  }
}

function updateTheme(colors: ColorInterface[], theme: string) {
  colors.forEach(color => {
    document.documentElement.style.setProperty(
      `--theme-${theme}-${color.name}`,
      color.hex
    );
    document.documentElement.style.setProperty(
      `--theme-${theme}-contrast-${color.name}`,
      color.darkContrast ? 'rgba(black, 0.87)' : 'white'
    );
  });
}

function computeColors(hex: string): ColorInterface[] {
  return [
    getColorObject(tinycolor(hex).lighten(52), '50'),
    getColorObject(tinycolor(hex).lighten(37), '100'),
    getColorObject(tinycolor(hex).lighten(26), '200'),
    getColorObject(tinycolor(hex).lighten(12), '300'),
    getColorObject(tinycolor(hex).lighten(6), '400'),
    getColorObject(tinycolor(hex), '500'),
    getColorObject(tinycolor(hex).darken(6), '600'),
    getColorObject(tinycolor(hex).darken(12), '700'),
    getColorObject(tinycolor(hex).darken(18), '800'),
    getColorObject(tinycolor(hex).darken(24), '900'),
    getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
    getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
    getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
    getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
  ];
}

function getColorObject(value: any, name: any): ColorInterface {
  const c = tinycolor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}
