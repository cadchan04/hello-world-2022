import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Water Usage Calculator';
  question1 = 'How long do you take for showers? (minutes)'
  question2= 'In one week, how many times do you take a bath?'
  question3 = 'In one day, how many times do you use the toilet?'
  question4 = 'In one week, how many times do you use a washing machine to wash clothes?'
  question5 = 'In one day, how many times do you use the dish washer?'

  gOnInit(): void {
  }

  simpleAlert() {
    Swal.fire('This week, you have used a total of 33 gallons of water.')

  }
 }



