import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  displayedColumns: string[] = ['memberId', 'firstName', 'middleName', 'lastName', 'birthdate'];
  dataSource = new MatTableDataSource<Member>(MEMBERS);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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
    memberId: 201609, firstName: 'Vincent', 
    middleName: 'Francisco', lastName: 'Brosas',
    birthdate: '13 August 1989'
  }
];
