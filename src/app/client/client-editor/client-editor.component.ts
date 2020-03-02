import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-editor',
  templateUrl: './client-editor.component.html',
  styleUrls: ['./client-editor.component.css']
})
export class ClientEditorComponent implements OnInit {

  id = null;

  getUrlParameter = (parameterName: string) => {
    return this.route.snapshot.paramMap.get(parameterName); /* Obtiene el párametro que se envia por url */
  }

  client = {
    id: null,
    name: null,
    age: null,
    email: null,
    phone: null
  }
  

  constructor(private  route: ActivatedRoute, private clientService: ClientService) { 
  
  }

  ngOnInit(){
    let id = this.getUrlParameter("clientId");
    let clientFound = this.clientService.searchClient(id);
    this.client.id = clientFound._id;
    this.client.name = clientFound.name;
    this.client.age = clientFound.age;
    this.client.email = clientFound.email;
    this.client.phone = clientFound.phone;
  }

}
