import { Component, OnInit } from '@angular/core';
import { DataService, Item } from '../services/data.service';
import { RAM, HARD_DISK, RANGE_SLIDER } from '../../enum';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  csvData: Item[];
  public records: any[] = [];
  ramList = RAM;
  isFilterdForRam;
  hardDiskList = HARD_DISK;
  rangeOfSlider = RANGE_SLIDER;
  uniqueLocation = [];
  itemFilter;
  searchText;
  carbrand;
  locationName = '';
  ramName = '';
  hardDiskName = '';
  constructor(private data: DataService) {}
  ngOnInit() {
    this.ramList = this.ramList.map((itemInfo) =>
      Object.assign(itemInfo, { isChecked: false })
    );
    this.getMessages();
  }

  checkedRam($ev, item) {
    this.ramName = '';
    console.log($ev.target.checked);
    this.isFilterdForRam = $ev.target.checked;
    this.ramName = $ev.target.checked ? item : '';
  }

  getMessages(): any {
    this.data.getMessages().subscribe((data) => {
      let csvRecordsArray = data.split(/\r\n|\n/);
      let headersRow = this.getHeaderArray(csvRecordsArray);
      this.records = this.getDataRecordsArrayFromCSVFile(
        csvRecordsArray,
        headersRow.length
      );
      this.uniqueLocation = [...new Set(this.records.map((o) => o.location))];
    });
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  onChange(selectedValue) {
    this.locationName = selectedValue;
  }
  onHardDiskChange(selectedValue) {
    this.hardDiskName = '';
    this.hardDiskName = selectedValue;
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = csvRecordsArray[i].split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: Item = new Item();
        csvRecord.modelName = curruntRecord[0];
        csvRecord.ram = curruntRecord[1];
        csvRecord.hdd = curruntRecord[2];
        csvRecord.location = curruntRecord[3];
        csvRecord.price = curruntRecord[4];
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }
}
