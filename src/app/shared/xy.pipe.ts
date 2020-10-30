import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xy'
})
export class XyPipe implements PipeTransform {

  transform(value: string, x: number, y: number): unknown {
    return `${value} (${x} ${y})`;
  }

}
