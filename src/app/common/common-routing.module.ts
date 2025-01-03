import { Routes } from '@angular/router';
import { RoutePaths } from '@app-models/routes/routes.model';
import { LoginComponent } from './login/login.component';

const routesPaths = RoutePaths();

export const COMMON_ROUTES: Routes = [
  {path: routesPaths.LOGIN.LOGIN, pathMatch: 'full', redirectTo: routesPaths.LOGIN.LOGIN},
  {path: routesPaths.LOGIN.LOGIN, component: LoginComponent, title: 'Log-in'}
]
