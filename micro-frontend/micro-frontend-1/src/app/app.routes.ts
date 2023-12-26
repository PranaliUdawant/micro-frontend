import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
export const routes: Routes = [
  // { path: '', redirectTo: '/countryList', pathMatch: 'full' },
  {
    path: 'countryList',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'Microfrontend2',
        exposedModule: './CountryList',
      })
        .then((m) => m.CountryList)
        .catch((err) => console.log(err));
    },
  },
];
