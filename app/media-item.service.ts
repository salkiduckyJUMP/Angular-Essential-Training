import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


//Will instantiate single instance of this service in the root injector and provide it to any service that asks for it
//Preferred method to register it because it provides optimization for the Angular compiler as it will be excluded from the build if it's not requested by any other service

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  // mediaItems = [
  //   {
  //     id: 1,
  //     name: 'Firebug',
  //     medium: 'Series',
  //     category: 'Science Fiction',
  //     year: 2010,
  //     watchedOn: 1294166565384,
  //     isFavorite: false
  //   },
  //   {
  //     id: 2,
  //     name: 'The Small Tall',
  //     medium: 'Movies',
  //     category: 'Comedy',
  //     year: 2015,
  //     watchedOn: null,
  //     isFavorite: true
  //   }, {
  //     id: 3,
  //     name: 'The Redemption',
  //     medium: 'Movies',
  //     category: 'Action',
  //     year: 2016,
  //     watchedOn: null,
  //     isFavorite: false
  //   }, {
  //     id: 4,
  //     name: 'Hoopers',
  //     medium: 'Series',
  //     category: 'Drama',
  //     year: null,
  //     watchedOn: null,
  //     isFavorite: true
  //   }, {
  //     id: 5,
  //     name: 'Happy Joe: Cheery Road',
  //     medium: 'Movies',
  //     category: 'Action',
  //     year: 2015,
  //     watchedOn: 1457166565384,
  //     isFavorite: false
  //   }
  // ];

   //return media items
  get(medium) {
    const getOptions = {
      params: { medium }
    };

    //Normally returns an observable of http responses
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        //Extract media items from the response payload
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        //Takes in function that will run if the observable emits an error
        //We don't want to call the error here, so no () we just want to pass it
        catchError(this.handleError)
      );
  }

  add(mediaItem: MediaItem) {
    //OLD:
    //take in media item and push it on media items array
    //this.mediaItems.push(mediaItem);

    //Takes URL String as first parameter from mock backend
    //Second parameter: body of post, handed contentType to handle contentType header
    return this.http.post('mediaItems', mediaItem)
    .pipe(catchError(this.handleError));
  }

  delete(mediaItem: MediaItem) {
    //OLD:
    //Take in media item, find index in list and if index is found, splice it out of the list.
    // const index = this.mediaItems.indexOf(mediaItem);
    // if (index >= 0) {
    //   this.mediaItems.splice(index, 1);
    // }

    //Need a URL from mock-backend
    //$ and {} means to put the variable in the String buildout
    return this.http.delete(`mediaItems/${mediaItem.id}`)
    .pipe(catchError(this.handleError));
  }

  //Specify the type of error by using typescript to specify that when an error happens it will emit a type of HttpErrorResponse
  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('A data error has occured; please try again.');
  }
}

//Creates interface that the property mediaItems has an array of MediaItems
interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

//Create interface for the properties that a mediaItem has
export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
