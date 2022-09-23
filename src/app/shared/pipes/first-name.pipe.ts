import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName',
})
export class FirstNamePipe implements PipeTransform {
  transform(fullname: string): string {
    let name = fullname.split(' ');

    return name[0].charAt(0).toUpperCase() + name[0].slice(1);
  }
}
