import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;

  webColumns: string[] = ['memberId', 'firstName', 'middleName', 'lastName', 'birthdate', 'actions'];
  mobileColumns: string[] = ['mobile'];
  members = new MatTableDataSource<Member>(MEMBERS);
  memberDetail: Member;

  member: Member;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.members.paginator = this.paginator;
  }

  search(search: string) {
    this.members.filter = search.trim().toLowerCase();
  }

  openForm(): void {
    const dialogRef = this.dialog.open(MemberFormDialog, {
      width: '250px',
      data: this.member
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

@Component({
  selector: 'member-form',
  templateUrl: 'member-form.component.html',
})
export class MemberFormDialog {

  constructor(
    public dialogRef: MatDialogRef<MemberFormDialog>,

    @Inject(MAT_DIALOG_DATA) public member: Member) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface Member {
  memberId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  birthdate: any;
}

const MEMBERS: Member[] = [
  {
    memberId: 201601, firstName: 'Rodelito',
    middleName: 'Guevarra', lastName: 'Castro',
    birthdate: '04 February 1989'
  },
  {
    memberId: 201602, firstName: 'Maria Divina',
    middleName: 'Marmol', lastName: 'Suyom',
    birthdate: '10 December 1988'
  },
  {
    memberId: 201603, firstName: 'Camille',
    middleName: 'Salonga', lastName: 'Requillo',
    birthdate: '05 December 1988'
  },
  {
    memberId: 201604, firstName: 'Regin',
    middleName: '', lastName: 'Regalado',
    birthdate: '23 November 1988'
  },
  {
    memberId: 201605, firstName: 'Joselito',
    middleName: 'Mabunga', lastName: 'Ebro',
    birthdate: '30 November 1988'
  },
  {
    memberId: 201606, firstName: 'Grace',
    middleName: 'Mabunga', lastName: 'Ebro',
    birthdate: '27 June 1985'
  },
  {
    memberId: 201607, firstName: 'Joy',
    middleName: 'Mabunga', lastName: 'Ebro',
    birthdate: '03 November 1986'
  },
  {
    memberId: 201608, firstName: 'John Aldeen',
    middleName: 'Pontillas', lastName: 'Cawas',
    birthdate: '11 January 1988'
  },
  {
    memberId: 201609, firstName: 'Rodney',
    middleName: '', lastName: 'Espenida',
    birthdate: ''
  },
  {
    memberId: 201701, firstName: 'Vincent',
    middleName: 'Francisco', lastName: 'Brosas',
    birthdate: '13 August 1989'
  }
];
