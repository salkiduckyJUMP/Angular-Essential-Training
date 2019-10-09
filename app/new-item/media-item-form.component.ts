import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaItemService } from '../media-item.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})

//OnInit is from Angular Lifecycle Events
export class MediaItemFormComponent implements OnInit {
  //Create FormGroup and FormControl for our Form Fields 
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}

    
  
  //ngOnInit using FormGroup and FormControl
  // ngOnInit() {
  //   this.form = new FormGroup({
  //     medium: new FormControl('Movies'),
  //     //name: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
  //     name: new FormControl('', Validators.compose([
  //         //Both these Validators must be true for it to show as valid!
  //         Validators.required,
  //         Validators.pattern('[\\w\\-\\s\\/]+')
  //     ])),
  //     category: new FormControl(''),
  //     //Handed second argument for validation
  //     year: new FormControl('', this.yearValidator)
  //   });
  // }

  //ngOnInit using FormBuilder constructor injection, bringing in a service instance
  //Better decouples our code than using formGroup and formControl

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      //name: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
      name: this.formBuilder.control('', Validators.compose([
        //Both these Validators must be true for it to show as valid!
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      //Handed second argument for validation
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

   //If there is a year entered, it must be between the min and max year values
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      //defines return type of year.min and year.max
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  //need to subscribe to return of add
  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem)
    .subscribe(() => {
      //expects a linked parameters array that contains parts need for router navigation
      this.router.navigate(['/', mediaItem.medium]);
    });

  }
}
