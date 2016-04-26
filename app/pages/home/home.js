import {Page, NavController} from 'ionic-angular';
import {Contacts} from 'ionic-native';

import {AddcontactPage} from '../addcontact/addcontact';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    static get parameters() {
        return [NavController];
    }
  constructor(nav) {
      this.nav = nav;
      this.contacttobefound = '';
      this.contactsfound = [];
      this.search = false;
  }
  
  savefn() {
      this.nav.push(AddcontactPage);
  }
  
  findfn(val) {
      Contacts.find(['*'], {filter: val}).then((contacts) => {
          this.contactsfound = contacts;
          alert(JSON.stringify(contacts[0]));
      })
      
      if(this.contactsfound.length == 0)
      this.contactsfound.push({displayName: 'No Contacts found'});  
      this.search = true;    
  }
}
