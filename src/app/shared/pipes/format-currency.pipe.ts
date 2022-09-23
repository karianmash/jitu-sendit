import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency',
})
export class FormatCurrencyPipe implements PipeTransform {
  transform(price: string) {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
