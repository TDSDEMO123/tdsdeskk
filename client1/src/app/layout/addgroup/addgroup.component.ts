import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertService, UserService } from '../../_services/index';


@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    ngOnInit(){
        this.dropdownList = [
                              {"id":1,"itemName":"India"},
                              {"id":2,"itemName":"Singapore"},
                              {"id":3,"itemName":"Australia"},
                              {"id":4,"itemName":"Canada"},
                              {"id":5,"itemName":"South Korea"},
                              {"id":6,"itemName":"Germany"},
                              {"id":7,"itemName":"France"},
                              {"id":8,"itemName":"Russia"},
                              {"id":9,"itemName":"Italy"},
                              {"id":10,"itemName":"Sweden"}
                            ];
        this.selectedItems = [
                                {"id":2,"itemName":"Singapore"},
                                {"id":3,"itemName":"Australia"},
                                {"id":4,"itemName":"Canada"},
                                {"id":5,"itemName":"South Korea"}
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Countries",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };            
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }

  model: any = {};
  loading = false;

  arrBirds: any [] = [
    { id:1, name: 'Bells Sparrow' },
    { id:2, name: 'Mourning Dove'},
    { id:3, name: 'Bald Eagle' }
  ];

  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

      group() {
     alert(this.model.members);
      console.log(this.selectedItems);
      this.loading = true;
      this.userService.addGroup(this.model)
          .subscribe(
              data => {
                  this.alertService.success('Group Created successfully', true);
                  this.router.navigate(['/dashboard']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}

