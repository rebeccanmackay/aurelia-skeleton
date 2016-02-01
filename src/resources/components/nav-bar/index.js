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
        cssClass = 'nav-pills';
        break;
      case 'PRIMARY':
      default:
        cssClass = 'navbar-nav';
        break;
    }

    return cssClass;
  }

}
