import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Trainer';
  promptEvent:any;

  ngOnInit(){
      this.displayNetworkStatus();
      window.addEventListener('online',this.displayNetworkStatus);
      window.addEventListener('offline', this.displayNetworkStatus);
      window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
      });
  }

  displayNetworkStatus=()=>{
    if (navigator.onLine){
        document.querySelector('body').style.filter='';
    }
    else{
      document.querySelector('body').style.filter='grayscale(1)';
    }
  }

  installPwaApp=()=>{
    this.promptEvent.prompt()
  }
}
