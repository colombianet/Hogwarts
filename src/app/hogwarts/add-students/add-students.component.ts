import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  studentForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.minLength(3), Validators.required ] ],
    patronus: [ '', [ Validators.minLength(3), Validators.required ] ],
    age: ['', [ Validators.minLength(4), Validators.required ] ],
    gender: [ '', [ Validators.required ]]
  });
  formSubmitted = false;
  characters = [];

  constructor( private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
  }

  validField( field: string ): boolean {
    return (this.studentForm.controls[field].errors && this.studentForm.controls[field].touched) ||
    (this.formSubmitted && this.studentForm.get(field).invalid);
  }

  save(): void {
    this.formSubmitted = true;
    if ( localStorage.getItem('characters') ) {
      this.characters = JSON.parse( localStorage.getItem('characters') );
    }

    if ( this.studentForm.invalid ) {
      return;
    }

    Swal.fire({
      title: 'Added student',
      icon: 'success',
    });

    this.characters.push( this.studentForm.value);

    localStorage.setItem('characters', JSON.stringify( this.characters ) );
    this.formSubmitted = false;
    this.studentForm.reset();

    this.router.navigateByUrl('/new-students');
  }

}
