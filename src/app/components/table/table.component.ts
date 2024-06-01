import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  pdfUrl: any | undefined;
  @Input() users: User[] = [];
  @Output() userDeleted = new EventEmitter<number>();
  @Output() genpdf = new EventEmitter<any>();

  constructor(private userService: UserService,private sanitizer: DomSanitizer) {}

  deleteUser(id: number) {
    this.userDeleted.emit(id);
  }

  // generatePdf() {
  //   this.userService.generatePdf().subscribe(pdf => {
  //     const blob = new Blob([pdf], { type: 'application/pdf' });
  //     const url = window.URL.createObjectURL(blob);
  //     window.open(url);
  //   });
  // }

  generatePdf() {
    this.userService.generatePdf().subscribe(pdf => {
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.userService.pdfurl=this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.genpdf.emit(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    });
  }
  closepdf(){
    this.userService.pdfurl=undefined;
    this.pdfUrl=undefined;
  }
}
