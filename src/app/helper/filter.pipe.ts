import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    items: Array<any>,
    locationName: string,
    ramName: string,
    hardDiskName: string
  ) {
    if (items && items.length) {
      return items.filter((item) => {
        if (
          locationName &&
          item.location.toLowerCase().indexOf(locationName.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          ramName &&
          item.ram.toLowerCase().indexOf(ramName.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          hardDiskName &&
          item.hdd.toLowerCase().indexOf(hardDiskName.toLowerCase()) === -1
        ) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }
}
