import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	courses = COURSES;

	onCourseSelected(course:Course){
		console.log("App Component - Course Card Clicked!", course);
	}

	title = COURSES[0].description

	price = 9.992352322;

	rate = 0.67 //not number and %

	course = COURSES[0]

	startDate = new Date(2000, 0, 1); //Jan 1 2000

}
