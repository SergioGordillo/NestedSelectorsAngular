import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: []
})
export class SelectorPageComponent implements OnInit {

  myForm:FormGroup=this.fb.group({
    continent: ['', Validators.required, ]
  })

  continents:string[]=[];

  constructor(
    private fb:FormBuilder, 
    private countriesService:CountriesService) { }

  ngOnInit(): void {
    this.continents=this.countriesService.continents;
  }

  save(){
    console.log(this.myForm.value);
  }

}
