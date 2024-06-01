import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  @Input() urlpdf:any|undefined;
  pdfUrl:any|undefined;
  constructor(private userService: UserService) {
    this.pdfUrl=userService.pdfurl;

  }

  

}
