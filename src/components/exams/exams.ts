import { Component, Input } from '@angular/core';

import {Exam} from "../../models/exam";

@Component({
  selector: 'exams',
  templateUrl: 'exams.html'
})
export class ExamsComponent {

  @Input()
  exam: Exam;

}
