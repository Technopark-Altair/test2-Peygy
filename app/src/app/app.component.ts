import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  first: number;
  second: number;
  operatorNo: string;
  operatorMain: string;
  result: number;
  errorMes: string;

  doCalc()
  {
    if(this.first != null && this.second != null && this.operatorMain !=  null)
    {
      this.errorMes = "Ошибки нет";
      if(this.operatorMain == "&&")
      {
        if(this.first == this.second && this.first == 1)
        {
          this.result = 1;
        }
        else
        {
          this.result = 0;
        }
      }

      if(this.operatorMain == "||")
      {
        if(this.first != this.second)
        {
          this.result = 1;
        }
        else if(this.first == this.second && this.first == 0)
        {
          this.result = 0;
        }
        else if(this.first == this.second && this.first == 1)
        {
          this.result = 1;
        }
      }

      if(this.operatorNo == "!")
      {
        if(this.result == 1)
        {
          this.result = 0;
        }
        else if(this.result == 0)
        {
          this.result = 1;
        }
      }
    }
    
    else
    {
      if(this.first == null)
      {
        this.errorMes = "Нет первого числа";
      }
      else if(this.second == null)
      {
        this.errorMes = "Нет второго числа";
      }
      else if(this.operatorMain == null)
      {
        this.errorMes = "Нет оператора действия";
      }
    }
  }
}
