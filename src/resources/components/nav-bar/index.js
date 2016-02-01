import {bindable} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;
  @bindable navType = null;

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
