import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  ngOnInit() {
    
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  private fb :FormGroup;
  constructor( ){}
  heroForm = new FormGroup ({
    name: new FormControl(),
    emailId: new FormControl()
  });
}