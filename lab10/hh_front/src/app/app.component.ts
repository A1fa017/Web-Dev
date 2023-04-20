import { Component,OnInit } from '@angular/core';
import {CompanyService} from "./company.service";
import { Company, Vacancy } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh-front';

  companies: Company[] = []
  vacancies: Vacancy[] = []

  constructor(private companyService: CompanyService) {
  }
  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies)=>{
      this.companies = companies
    })
  }
  companyVacancies(company_id: number) {
    this.companyService.getVacancies(company_id).subscribe((vacancies)=>{
      this.vacancies = vacancies
    })
  }
}
