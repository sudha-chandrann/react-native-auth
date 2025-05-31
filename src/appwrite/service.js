import {Client, Account, ID} from 'appwrite';
import Config from 'react-native-config';

const endpoint = Config.APPWRITE_ENDPOINT;
const projectId = Config.APPWRITE_PROJECT_ID;

const appwriteclient = new Client();

class appwriteservice {
  account;
  constructor() {
    appwriteclient.setEndpoint(endpoint).setProject(projectId);
    this.account = new Account(Client);
  }

  async CreateAcounnt({email, password, name}) {
    try {
      const user = await this.account.create.apply(
        ID.unique(),
        email,
        password,
        name,
      );
      if(user){
        return this.LoginUser({email,password});
      }
      else{
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async LoginUser({email,password}){
    try{
        return  this.account.createEmailPasswordSession(email,password);
    }
    catch(error){
        console.log(' the error during the login',error);
    }
  }

  async getCurrentUserDetails(){
     try{
       return  await this.account.get();
     }
     catch(error){
        console.log(' the error in geting currentuser',error);
     }
  }

  async logout(){
    try{
       await this.account.deleteSession('current');
    }
    catch(error){
        console.log(' the error during logout is ',error);
    }
  }

}

export default appwriteservice;
