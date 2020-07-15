import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.scss']

})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    
    starWidth:number;

    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void {
        console.log(this.rating);
        
        this.starWidth = this.rating * 75 / 5;
        console.log(this.starWidth);
        
    }

    onClick(): void {
        this.ratingClicked.emit('the rating ' + this.rating + ' was clicked');
        
    }
}