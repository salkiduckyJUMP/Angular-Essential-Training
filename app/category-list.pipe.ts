import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
  //Pipe will take in data and return data without any side-effects
    //pure: true
    //This is true by default so we don't need to declare this metadata.
})

//Returning array value from pipe
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories;
  }
}