import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const newItemRoutes: Routes = [
    //In root level we're calling at path 'add' already
    //{ path: 'add', component: MediaItemFormComponent }
    { path: '', component: MediaItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);