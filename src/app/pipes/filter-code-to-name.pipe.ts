import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCodeToName'
})

export class FilterCodeToNamePipe implements PipeTransform {

  transform(array: Array<any>, filterCode: any, isNotCodeType?:boolean): any {

    if (Array.isArray(filterCode)) return this.transformArray(array, filterCode, isNotCodeType);

    if(!isNotCodeType) {
      return array &&(array.length > 0) ? array.find(i=>i.code == filterCode) ?
             array.find(i=>i.code == filterCode).name : null : null;
    }
    else {
      return array &&(array.length > 0) ? array.find(i=>i.processCode == filterCode) ?
             array.find(i=>i.processCode == filterCode).processName : null : null;
    }
  }

  private transformArray(array: Array<any>, filterCodes: Array<any>, isNotCodeType?:boolean): any {
    if(!isNotCodeType) {
      if (array && array.length > 0) {
        let res: string = "";
        for (let i in filterCodes) {
          let code = array.find(el => el.code == filterCodes[i]);
          res += code != null ? code.name : '';
          if (parseInt(i) < filterCodes.length -1) res += ', ';
        }
        return res;
      }
      return null;
    }
    else {
      if (array && array.length > 0) {
        let res: string = "";
        for (let i in filterCodes) {
          let code = array.find(el => el.code == filterCodes[i]);
          res += code != null ? code.processName : '';
          if (parseInt(i) < filterCodes.length -1) res += ', ';
        }
        return res;
      }
      return null;
    }
  }

}
