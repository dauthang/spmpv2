import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id : any;

  constructor(private router: Router) { }

  ngOnInit() {
    const subPaths = this.router.url.split('/');
    if(subPaths.length === 3){
      this.id =  Number(subPaths[2]);
    }
  }

  public backHome() {
    return this.router.navigate(['']);
  }

  public onGoToPageFb(){
    window.location.href='https://www.facebook.com/LuonCoKySuTuVanTrucTiep';
  }

}
