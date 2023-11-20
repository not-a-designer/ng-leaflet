import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'map',
        loadComponent: () => import('./components/map/map.component').then( m => m.MapComponent)
    },
    
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'map'
    }
];
