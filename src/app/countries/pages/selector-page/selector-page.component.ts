import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: []
})
export class SelectorPageComponent implements OnInit {

  myForm:FormGroup=this.fb.group({
    continent: ['', Validators.required, ]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.myForm.value);
  }

}
