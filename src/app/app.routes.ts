import { Routes } from '@angular/router';
import { RoutesPath } from './model/routes/routes.model';
import { COMMON_ROUTES } from './common/common-routing.module';

const routesPaths = RoutesPath();

export const routes: Routes = [
  {path: '', redirectTo: routesPaths.COMMON.COMMON, pathMatch: 'full'},
  {path: routesPaths.LOGIN, loadChildren: () => COMMON_ROUTES},
];
