import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  accounts = [
    {
      name: "Root Account",
      status: "active"
    },
    {
      name: "Guest Account",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    },
  ];

  addAccount(name:string, status:string) {
    this.accounts.push({name, status});
  }

  updateStatus(id:number, status:string) {
    this.accounts[id].status = status;
  }


}
