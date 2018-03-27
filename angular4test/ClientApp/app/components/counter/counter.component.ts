import { Component } from '@angular/core';
import * as $ from 'jquery';
//import 'tempusdominus-bootstrap-3'
import 'bootstrap-daterangepicker';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
        console.log($('#idtest'));
        //$('#datetimepicker5').datetimepicker();
    }

    ngOnInit() {
        $('input[name="birthdate"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true
        });
    }
}
