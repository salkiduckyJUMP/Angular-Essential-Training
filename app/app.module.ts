//First two commented out items are now handled at feature module level
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
//import { MediaItemFormComponent } from './new-item/media-item-form.component';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';
//Handled in app.routing.ts now
//import { NewItemModule } from './new-item/new-item.module';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [
    BrowserModule,
    //ReactiveFormsModule,
    HttpClientModule,
    routing
    //We want Angular to build it in a separate bundle and then deliver it when a route is requested for it
    //NewItemModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    CategoryListComponent,
    FavoriteDirective,
    CategoryListPipe
    //MediaItemFormComponent
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
