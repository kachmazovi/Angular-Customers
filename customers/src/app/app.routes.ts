import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CurrentCustomerComponent } from './current-customer/current-customer.component';
import { ChildAComponent } from './login/child-a/child-a.component';
import { ChildBComponent } from './login/child-b/child-b.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    title: 'Login',
    path: 'login',
    component: LoginComponent,
    children: [
      {
        title: 'Child A',
        path: 'child-a',
        component: ChildAComponent,
      },
      {
        title: 'Child B',
        path: 'child-b',
        component: ChildBComponent,
      },
    ],
  },
  {
    title: 'Register',
    path: 'register',
    component: RegisterComponent,
  },
  {
    title: 'Customers List',
    path: 'customers-list',
    component: CustomersListComponent,
  },
  {
    title: 'Current Customer',
    path: 'current-customer/:id',
    component: CurrentCustomerComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
