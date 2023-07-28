import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { ApiResponse } from '../../model/api.response';

import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Observable<ApiResponse>;

  constructor(private employeeService: EmployeeService, private router: Router) {
    setTimeout(function() {
      $(function() {
        $('#example').DataTable();
      })
    });
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    setTimeout(function() {
      $(function() {
        $('#example').DataTable();
      })
    })
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.employees = this.employeeService.getEmployees();
    }, error => {
      console.log(error);
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}
