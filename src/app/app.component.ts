import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openTextBox1:Boolean = false;
  public box1:String='';
  public boxweatherdata1;
  public showTemp1 = false;
  public openPlus1 = true;
  
  public openTextBox2:Boolean = false;
  public box2:String='';
  public boxweatherdata2;
  public showTemp2 = false;
  public openPlus2 = true;

  public openTextBox3:Boolean = false;
  public box3:String='';
  public boxweatherdata3;
  public showTemp3 = false;
  public openPlus3 = true;

  
  public openTextBox4:Boolean = false;
  public box4:String='';
  public boxweatherdata4;
  public showTemp4 = false;
  public openPlus4 = true;

  
  public openTextBox5:Boolean = false;
  public box5:String='';
  public boxweatherdata5;
  public showTemp5 = false;
  public openPlus5 = true;

  public openTextBox6:Boolean = false;
  public box6:String='';
  public boxweatherdata6;
  public showTemp6 = false;
  public openPlus6 = true;


  public openTextBox7:Boolean = false;
  public box7:String='';
  public boxweatherdata7;
  public showTemp7 = false;
  public openPlus7 = true;

  public openTextBox8:Boolean = false;
  public box8:String='';
  public boxweatherdata8;
  public showTemp8 = false;
  public openPlus8 = true;

  public openTextBox9:Boolean = false;
  public box9:String='';
  public boxweatherdata9;
  public showTemp9 = false;
  public openPlus9 = true;

  title = 'weather';

  constructor(public appService:AppService,public Toastr:ToastrManager){
    

  }

  openTextBox = (data) =>{
    if(data == '1'){
      this.openTextBox1 = true;
      this.openPlus1 = false;
    }
    if(data == '2'){
      this.openTextBox2=true;
      this.openPlus2=false;
      console.log(this.openTextBox2)
    }
    
    if(data == '3'){
      this.openTextBox3=true;
      this.openPlus3=false;
      console.log(this.openTextBox2)
    }
    
    if(data == '4'){
      this.openTextBox4=true;
      this.openPlus4=false;
      console.log(this.openTextBox2)
    }
    
    if(data == '5'){
      this.openTextBox5=true;
      this.openPlus5=false;
      console.log(this.openTextBox2)
    }

    
    if(data == '6'){
      this.openTextBox6=true;
      this.openPlus6=false;
      console.log(this.openTextBox2)
    }

    
    if(data == '7'){
      this.openTextBox7=true;
      this.openPlus7=false;
      console.log(this.openTextBox2)
    }

    
    if(data == '8'){
      this.openTextBox8=true;
      this.openPlus8=false;
      console.log(this.openTextBox2)
    }
    
    if(data == '9'){
      this.openTextBox9=true;
      this.openPlus9=false;
      console.log(this.openTextBox2)
    }
  }

  callApi = (data) =>{
    if(data == 1 && this.box1){
      this.appService.getWeather(this.box1).subscribe((apiResponse)=>{
        this.boxweatherdata1 = apiResponse
        this.openTextBox1 = false;
        this.showTemp1=true
        this.Interval1()
        console.log(this.boxweatherdata1.weather[0].main)
      },(err)=>{
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })
     
    }
    if(data == 2 && this.box2){
      this.appService.getWeather(this.box2).subscribe((apiResponse)=>{
        this.boxweatherdata2 = apiResponse
        this.openTextBox2 = false;
        this.showTemp2=true
        this.Interval2()
        console.log(this.boxweatherdata2.weather[0].main)
      },(err)=>{
        
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })
     
    }
    
    if(data == 3 && this.box3){
      this.appService.getWeather(this.box3).subscribe((apiResponse)=>{
        this.boxweatherdata3 = apiResponse
        this.openTextBox3 = false;
        this.showTemp3=true
        this.Interval3()
        console.log(this.boxweatherdata3.weather[0].main)
      },(err)=>{
        
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })
     
    }
    
    if(data == 4 && this.box4){
      this.appService.getWeather(this.box4).subscribe((apiResponse)=>{
        this.boxweatherdata4 = apiResponse
        this.openTextBox4 = false;
        this.showTemp4=true
        this.Interval4()
        console.log(this.boxweatherdata3.weather[0].main)
      },(err)=>{
      
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })


     
    }

    
    if(data == 5 && this.box5){
      this.appService.getWeather(this.box5).subscribe((apiResponse)=>{
        this.boxweatherdata5 = apiResponse
        this.openTextBox5 = false;
        this.showTemp5=true
        this.Interval5()
        console.log(this.boxweatherdata3.weather[0].main)
      },(err)=>{
        
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })
     
    }

    
    if(data == 6 && this.box6){
      this.appService.getWeather(this.box6).subscribe((apiResponse)=>{
        this.boxweatherdata6 = apiResponse
        this.openTextBox6 = false;
        this.showTemp6=true
        this.Interval7()
        console.log(this.boxweatherdata3.weather[0].main)
      },(err)=>{
        
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })
     
    }

    
    if(data == 7 && this.box7){
      this.appService.getWeather(this.box7).subscribe((apiResponse)=>{
        this.boxweatherdata7 = apiResponse
        this.openTextBox7 = false;
        this.showTemp7=true
        this.Interval7()
        console.log(this.boxweatherdata3.weather[0].main)
      },(err)=>{
        
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })

      
     
    }

    
    if(data == 8 && this.box8){
      this.appService.getWeather(this.box8).subscribe((apiResponse)=>{
        this.boxweatherdata8 = apiResponse
        this.openTextBox8 = false;
        this.showTemp8=true
        this.Interval8()
        console.log(this.boxweatherdata3.weather[0].main)
      },(err)=>{
        
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })

      
     
    }
  
  
    if(data == 9 && this.box9){
      this.appService.getWeather(this.box9).subscribe((apiResponse)=>{
        this.boxweatherdata9 = apiResponse
        this.openTextBox9 = false;
        this.showTemp9=true
        this.Interval9()
        console.log(this.boxweatherdata3.weather[0].main)
      },(err)=>{
        
        this.Toastr.customToastr(
          '<span style="color: red; font-size: 16px; text-align: center;font-family:Montserrat">No city found !</span>',
          null,
          { enableHTML: true }
          );
      })

      
     
    }
  }


  edit = (data) =>{
    if(data ==1){
      this.showTemp1=false;
      this.openTextBox1=true;
    }
    
    if(data ==2){
      this.showTemp2=false;
      this.openTextBox2=true;
    }
    
    if(data ==3){
      this.showTemp3=false;
      this.openTextBox3=true;
    }
    
    if(data ==4){
      this.showTemp4=false;
      this.openTextBox4=true;
    }
    if(data ==5){
      this.showTemp5=false;
      this.openTextBox5=true;
    }
    if(data ==6){
      this.showTemp6=false;
      this.openTextBox6=true;
    }
    if(data ==7){
      this.showTemp7=false;
      this.openTextBox7=true;
    }
    if(data ==8){
      this.showTemp8=false;
      this.openTextBox8=true;
    }
    if(data ==9){
      this.showTemp9=false;
      this.openTextBox9=true;
    }


    
  }

   Interval1 = () =>{
    this.appService.secondsCounter1.subscribe((apiResponse)=>{
      this.callApi('1')
    })
  }
  
  Interval2 = () =>{
    this.appService.secondsCounter2.subscribe((apiResponse)=>{
      this.callApi('2')
    })
  }
  
  Interval3 = () =>{
    this.appService.secondsCounter3.subscribe((apiResponse)=>{
      this.callApi('3')
    })
  }

  
  Interval4 = () =>{
    this.appService.secondsCounter4.subscribe((apiResponse)=>{
      this.callApi('4')
    })
  }

  
  Interval5 = () =>{
    this.appService.secondsCounter5.subscribe((apiResponse)=>{
      this.callApi('5')
    })
  }

  
  Interval6 = () =>{
    this.appService.secondsCounter6.subscribe((apiResponse)=>{
      this.callApi('6')
    })
  }

  
  Interval7 = () =>{
    this.appService.secondsCounter7.subscribe((apiResponse)=>{
      this.callApi('7')
    })
  }

  
  Interval8 = () =>{
    this.appService.secondsCounter8.subscribe((apiResponse)=>{
      this.callApi('8')
    })
  }

  
  Interval9 = () =>{
    this.appService.secondsCounter9.subscribe((apiResponse)=>{
      this.callApi('9')
    })
  }
}
