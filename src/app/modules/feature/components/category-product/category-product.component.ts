import { Component } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { womensareeData } from '../../../../../Data/Women/women_saree';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.scss'
})
export class CategoryProductComponent {
    filterData : any
    singleFilterData : any
    womenSaree : any
    
    constructor(private router: Router,private activatedRoute:ActivatedRoute) {}

    ngOnInit(){
      this.filterData = filters;
      this.singleFilterData = singleFilter
      this.womenSaree = womensareeData
    }

    handleMultipleSelectFilter(value:string, sectionId:string) {
      const queryParams = {...this.activatedRoute.snapshot.queryParams};
      console.log("query params:",queryParams)
      const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];
      
      const valueIndex = filterValues.indexOf(value);

      if(valueIndex != -1) {
        filterValues.splice(valueIndex,1)
      }
      else {
        filterValues.push(value);
      }

      if(filterValues.length > 0) {
        queryParams[sectionId]=filterValues.join(",")
      }
      else {
        delete queryParams[sectionId]
      }

      this.router.navigate([],{queryParams})
    }

    handleSingleSelectFilter(value:string, sectionId:string) {
      const queryParams = {...this.activatedRoute.snapshot.queryParams};
      queryParams[sectionId] = value;

      this.router.navigate([],{queryParams})

      console.log(queryParams)
    }

}
