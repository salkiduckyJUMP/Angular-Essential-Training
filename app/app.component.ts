import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  //Defines innerHTML to be inserted when it finds the selector of 'mw-app' in index.html
  selector: 'mw-app',
    //Backticks allow you to do line breaks between elements.
    //Using Template Property
    /*template: `
    <h1>My App</h1>
    <p>Keeping track of the media I want to watch.</p>
    `
    */
   
    //Using TemplateURL property
   //Relative path to where your template is. Angular handles it for you.
  templateUrl: './app.component.html',
  //Can contain any CSS needed in the Styles property
   //Using Styles property
   /*styles: [`
        h1 { color: #ffffff; }
        `,`
        .description {
             font-style: italic;
             color: green;
        }
   `]
   */

   //Using StyleURLs Property
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
