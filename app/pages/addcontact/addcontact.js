import {Page, NavController} from 'ionic-angular';
import {Contacts} from 'ionic-native';

/*
  Generated class for the AddcontactPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/addcontact/addcontact.html',
})
export class AddcontactPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.newcontact = {
        displayName: '',
        nickname: '',
        phnumber: '',
        phtype: ''
    }
    
  }
  
  addcontact(newct) {
      var contact = Contacts.create();
      contact.displayName = newct.displayName;
      contact.nickname = newct.nickname;
      
      var contactfield = new ContactField();
      contactfield.type = newct.phtype;
      contactfield.value = newct.phnumber;
      contactfield.pref = true;
      
      var numbersection = [];
      numbersection.push(contactfield);
      contact.phoneNumbers = numbersection;
      
      contact.save().then((contact) => {
          alert('saved');
      }, (error) => {
      alert(error);
      })
      
  }
}
