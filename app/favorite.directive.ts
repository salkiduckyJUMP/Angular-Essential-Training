import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  //Find a match on an element attribute named mwFavorite
  selector: '[mwFavorite]'
})

//Applies a class to the class we're on, host-binding
//Used to bind a Host element property to a Directive property
export class FavoriteDirective {
  //Controls where class.is-favorite css is applied to the element
  @HostBinding('class.is-favorite') isFavorite = true;

  //Handles where class.is-favorite-hovering css is appled to the element
  @HostBinding('class.is-favorite-hovering') hovering = false;

  //Listens for when the mouse enters the Favorite element
  @HostListener('mouseenter') onMouseEnter() {
    //If the mouse enters the Favorite element, hovering css is applied to it
    this.hovering = true;
  }

   //Listens for when the mouse leaves the Favorite element
  @HostListener('mouseleave') onMouseLeave() {
    //If the mouse leaves the Favorite element, hovering css is removed
    this.hovering = false;
  }

  //Angular will set a property binding, evaluate statement it's set to and pass value into this setter method
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
