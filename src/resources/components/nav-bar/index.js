import {bindable} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;
  @bindable navType = null;

  navTypes = [
    'PRIMARY',
    'SECONDARY'
  ];

  constructor() {
    // this.navType = null;
    // debugger;
    console.log('nav called');
  }

  @computedFrom('navType')
  get navClass () {
    let cssClass = null;

    switch (this.navType) {
      case 'SECONDARY':
        cssClass = 'subnav isolate';
        break;
      case 'PRIMARY':
      default:
        cssClass = 'navbar';
        break;
    }

    return cssClass;
  }

}
