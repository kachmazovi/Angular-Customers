import { Routes } from '@angular/router';
import { userLoggedGuard } from './core/guards/user-logged.guard';
import { customersResolver } from './core/resolvers/customers.resolver';
import { of } from 'rxjs';
import { currentCustomerResolver } from './core/resolvers/current-customer.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    title: 'Login',
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
    children: [
      {
        title: 'Child A',
        path: 'child-a',
        loadComponent: () =>
          import('./login/child-a/child-a.component').then(
            (m) => m.ChildAComponent
          ),
      },
      {
        title: 'Child B',
        path: 'child-b',
        loadComponent: () =>
          import('./login/child-b/child-b.component').then(
            (m) => m.ChildBComponent
          ),
      },
    ],
  },
  {
    title: 'Register',
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    title: 'Customers List',
    path: 'customers-list',
    loadComponent: () =>
      import('./customers-list/customers-list.component').then(
        (m) => m.CustomersListComponent
      ),
    canActivate: [userLoggedGuard],
    resolve: {
      customers: customersResolver,
    },
    data: {
      list: [1, 2, 3],
    },
  },
  {
    title: 'Current Customer',
    path: 'current-customer/:id',
    loadComponent: () =>
      import('./current-customer/current-customer.component').then(
        (m) => m.CurrentCustomerComponent
      ),
    canActivate: [userLoggedGuard],
    resolve: {
      currentCustomer: currentCustomerResolver,
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
