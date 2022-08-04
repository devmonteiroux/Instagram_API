import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.scss']
})
export class MediaFormComponent implements OnInit {
  socialForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required, Validators.email],
    instagram: [""]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
