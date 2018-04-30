import {Routes} from '@angular/router';
import {NavbarMenuComponent} from './module/navbar-menu/navbar-menu.component';
import {HOME_ROUTE} from './common/constantes/navigation-constant';

const appRoutes: Routes = [
  {
    path: HOME_ROUTE,
    component: NavbarMenuComponent
  }
]
