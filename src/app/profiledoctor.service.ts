import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
@Injectable({
  providedIn: 'root'
})
export class ProfiledoctorService {

  submitApplication(firstName: string, lastName: string, email: string,phonenumber: string, appointmentDate: string, appointmentTime: string) {
    console.log(`Application received: 
      First Name: ${firstName}, 
      Last Name: ${lastName}, 
      Email: ${email}, 
      Phonenumber: ${phonenumber},
      Appointment Date: ${appointmentDate}, 
      Appointment Time: ${appointmentTime}`);

  }
  url = 'http://localhost:3000/doctor';
 /* getAllProfile(): Housinglocation[] {
    return this.DoctorprofileList;
  }
*/

  async getAllProfile(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getProfileById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  /*getProfileById(id: number): Housinglocation | undefined {
    return this.DoctorprofileList.find(housingLocation => housingLocation.id === id);
  }
*/
}


