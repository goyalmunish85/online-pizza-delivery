import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../../services/feedback.service';
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }
feedback;
errMess;
  ngOnInit() {
    
    this.feedbackService.getFeedback().subscribe(feedback => this.feedback = feedback,
      errmess => this.errMess = <any>errmess);
  }

}
