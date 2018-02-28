import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

 subcription: Subscription;

  constructor() {

    this.subcription = this.regresaObservable()
      .subscribe( 
        numero => console.log(' sub ' , numero),
        error => console.log('Hubo un error en el observador', error),
        () => console.log('El observador Termino')   
      );
   
  }

  ngOnInit() {}
  
  ngOnDestroy(){
    this.subcription.unsubscribe();
  } 

   regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        
        contador += 1;
        
        let salida = {
          valor: contador
        };
        
        observer.next( salida );

        // if (contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2)
        //   {
        //     observer.error('Auxilio!');
        //     clearInterval(intervalo);
        //   }

      }, 500 );
      
    })
    .retry(2)
    .map( (resp:any) => {
      return resp.valor + 1;

    })
    .filter( (valor, index) => {
      //console.log('Filter', valor, index);
      
      if ( ( valor % 2 ) === 1 ){
        //impar
        return true
      } else{
        //par
        return false
      }
      

    });      
     
    
  }

}
