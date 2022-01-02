import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../home-dasboard/home-dasboard.module').then(m => m.HomeDasboardModule),
    },

    {
        path: 'assign',
        loadChildren: () => import('../../component/assign/assign.module').then(m => m.AssignModule),
    },
    {
      path: 'potential_recovery',
      loadChildren: () => import('../../component/potential-recovery/potential-recovery.module').then(m => m.PotentialRecoveryModule),
  },
];
