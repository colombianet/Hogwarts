import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageNewStudent'
})
export class ImageNewStudentPipe implements PipeTransform {

  transform(value: string): string {
    if ( value === 'female') {
      return 'assets/images/woman-wizard.jpg';
    }

    return 'assets/images/man-wizard.jpg';
  }

}
