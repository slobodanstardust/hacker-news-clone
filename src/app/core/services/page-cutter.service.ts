import  { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class PageCutterService {

    constructor() { }

    cutToPages(list: number[], pageSize: number): number[][] {
        let pageList: number[][] = [];

        // It takes an array of IDs and cuts it into arrays with 'pageSize' number of elements.
        // Then it group these new smaller arrays into one.
        for (let i = 0; i < list.length; i += pageSize) {
            pageList.push(list.slice(i, i + pageSize));
        }

        return pageList;
    }
}