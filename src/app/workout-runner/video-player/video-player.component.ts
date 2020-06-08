import { Component, OnInit, OnChanges,Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer }  from '@angular/platform-browser';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styles: [
  ]
})
export class VideoPlayerComponent implements OnInit,OnChanges {
  private youtubeUrlPrefix='//www.youtube.com/embed/';
  // title:string='<script>console.log("school")</script>';
  title:string='<div><style>.firstItem{color:"green"}</style><p class="firstItem">Im a paragraph</p></div>';
  
  @Input() videos:Array<string>;
  safeVideoUrls:Array<SafeResourceUrl>;

  constructor(private sanitizer:DomSanitizer) { }

  // ['Eh00_rniF8E', 'ZWdBqFLNljc', 'UwRLWMcOdwI', 'ynPwl6qyUNM', 'OicNTT2xzMI']
  // //www.youtube.com/embed/Eh00_rniF8E
  ngOnChanges(): void{
    this.safeVideoUrls=this.videos ? 
      this.videos.map(video =>
        this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + video)
      ) : this.videos
  }


  ngOnInit(): void {
   
  }

}
