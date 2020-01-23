import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'scrollindicator',
	templateUrl: './scrollindicator.component.html',
	styleUrls: ['./scrollindicator.component.css']
})
export class ScrollindicatorComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }
	@Input() height: string;
	@Input() color: string;
	@Input() bgcolor: string;

	//@ViewChild('scrollindicator') el: ElementRef;

	main = {
		'position': 'fixed',
        'top': 0,
        'z-index': 1,
        'width': '100%',
        'background-color': '#f1f1f1'
	}

	container = {
		'background': this.bgcolor,
        'height': this.height + "px",
        'width': '100%'
        }

    scrollColor = {
        'background': this.color,
        'height': this.height + "px",
        'width': '0%'
    }

	constructor() { }

	ngOnInit() {

		window.onscroll = function() {
			processScrollIndicator()
		};

		function processScrollIndicator() {
			var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrollPosition = (windowScroll / documentHeight) * 100;
			document.getElementById("scrollIndicator").style.width = scrollPosition + "%";
		}

	}

}
