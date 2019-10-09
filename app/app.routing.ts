//Routing for MediaItemFormComponent now handled in new-item.routing.ts
import { Routes, RouterModule } from '@angular/router';
//import { MediaItemFormComponent } from './new-item/media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';
import { isNgTemplate } from '@angular/compiler';

//Route object is expected to have a path property
const appRoutes:  Routes = [
    {
        path: 'add',
        //When 'add' path is accessed, lazy load the NewItemModule
        loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)
    },
    //Represents URL path segment to match on  
    //Can use relative or absolute paths
    //{ path: 'add', component: MediaItemFormComponent },
    { path: ':medium', component: MediaItemListComponent },
    { path: '',  pathMatch: 'full', redirectTo: 'all'}
];

//forRoot takes routes and sets up router for us in the app root module
export const routing = RouterModule.forRoot(appRoutes);