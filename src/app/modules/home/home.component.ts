import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'src/app/services/google-tag-manager/google-tag-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private gtmService: GoogleTagManagerService
  ) { }

  ngOnInit() {
  }

  free(){
    this.gtmService.setEvent(
      {
        plano: 'free',
        event: 'free selection',
      }
    )
  }

  pro(){
    this.gtmService.setEvent(
      {
        plano: 'pro'
      }
    )
  }

  enterprise(){
    this.gtmService.setEvent(
      {
        plano: 'enterprise'
      }
    )
  }
}
