import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {
    
    transform( value: boolean ): string {
        
        if ( value === true){
            return 'vuela';
        } else {
            return 'no vuela';
        }
    }
}