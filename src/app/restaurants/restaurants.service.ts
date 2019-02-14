import { MEAT_API } from './../app.api';
import { ErrorHandler } from './../app.error-handler';
import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/catch'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';






@Injectable()
export class RestaurantServices {

    constructor(private http: HttpClient) { }

    
    
    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().set('q',search)
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants/`,{params:params})      
        
        
    }
    
    restaurantById(id: string): Observable<Restaurant> {
        
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
        
    }
    
    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      
    }
    
    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
       
    }
}
                    // restaurants(search?: string): Observable<Restaurant[]> {
                
                    //     return this.http.get(`${MEAT_API}/restaurants/.json`,{params:{q:search}})
                    //         .map(response => response.json())
                    //         .catch(ErrorHandler.handlerError)
                
                    // }
                
                    // restaurantById(id: string): Observable<Restaurant> {
                
                    //     return this.http.get(`${MEAT_API}/restaurants.json?orderBy="id"&equalTo="${id}"`)
                    //         //return this.http.get(`${MEAT_API}/restaurants/0.json`)
                    //         .map(response => {
                    //             var output ; 
                    //             for (var property in response.json()) {
                                    
                    //                  output =response.json()[property];
                    //             }
                    //             // response = output;
                    //             console.log(response.json());
                    //             console.log(output);
                    //             return output;
                    //         })
                    //         .catch(ErrorHandler.handlerError)
                    // }
                
                    // reviewsOfRestaurant(id: string): Observable<any> {
                    //     return this.http.get(`${MEAT_API}/reviews.json?orderBy="restaurantId"&equalTo="${id}"`)
                    //         .map(response => {
                    //             var output = new Array(); 
                    //             for (var property in response.json()) {
                                    
                    //                  output.push(response.json()[property]);
                    //             }
                    //             // response = output;
                    //             //console.log(response.json());
                    //             //console.log(output);
                    //             return output;
                    //         })
                    //         .catch(ErrorHandler.handlerError)
                    // }
                
                    // menuOfRestaurant(id: string): Observable<MenuItem[]> {
                    //     return this.http.get(`${MEAT_API}/menu.json?orderBy="restaurantId"&equalTo="${id}"`)
                    //         .map(response => {
                
                    //             // let output;
                    //             var output = new Array(); 
                    //             for (var property in response.json()) {
                                    
                    //                  output.push(response.json()[property]);
                    //             }
                    //             // response = output;
                    //             //console.log(response.json());
                    //             //console.log(output);
                    //             return output;
                    //         }
                
                    //         )
                    //         .catch(ErrorHandler.handlerError)
                    // }