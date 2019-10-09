import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {

  //Property and method that was used in the view through interpolation
  /* name = 'The Redemption';
  wasWatched() {
    return true;
  }
  */

  /*Want to support property binding on elements where property name is mediaItem
  Can Use Alias to effect only property name exposed for use by other components
  Isn't recommended except for special cases
  @Input('mediaItemToWatch') mediaItem;
  */

  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
