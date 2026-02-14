import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { ServicesComponent } from './pages/services/services.component';
// import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  // },
  // {
  //   path: 'services',
  //   component: ServicesComponent,
  // },
  // {
  //   path: 'services/:id',
  //   component: ServiceDetailsComponent,
  // },

  // Routes with lazy loading
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent,
      ),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (c) => c.ServicesComponent,
      ),
  },
  {
    path: 'services/:id',
    loadComponent: () =>
      import('./pages/services/service-details/service-details.component').then(
        (c) => c.ServiceDetailsComponent,
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((c) => c.AdminComponent),
  },
];
