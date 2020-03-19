import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import * as SvgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'diagram-modal',
  templateUrl: './diagram-modal.component.html',
  styleUrls: ['./diagram-modal.component.css']
})
export class DiagramModalComponent implements OnInit {
  @Input() title: string;
  @Input() svg: string;
  @Input() buttonText: string;

  svgPanZoom: SvgPanZoom.Instance = null;

  @ViewChild('diagramModal') private _modal: ModalDirective;

  constructor(private modalService: NgbModal) {
    initVars();
  }

  ngOnInit() {
  }

  open() {
    // this.modalService.open(this._modal, { size: 'lg' });
    this.modalService.open(this._modal, {windowClass : "diagram-popup"});

    setTimeout(_ => {
      if (this.svgPanZoom) {
        this.svgPanZoom.destroy();
      }
      this.svgPanZoom = SvgPanZoom('#svgDiv svg:first-child', {
        minZoom: 0.1,
        maxZoom: 10,
        onZoom: onZoom,
        onPan: onPan
      });
      if(z) {
        this.svgPanZoom.zoom(z);
      }
      if (p) {
        this.svgPanZoom.pan(p);
      }
    }, 100);
  }

}

let z = null;
function onZoom(zoom) {
  setTimeout( _ => {z = zoom; saveZoom();}, 10);
}

let p = null;
function onPan(pan) {
  setTimeout( _ => {p = pan; savePan();}, 10);
}

function saveZoom() {
  localStorage.setItem("SPOC.x", p.x.toString());
  localStorage.setItem("SPOC.y", p.y.toString());
}

function savePan() {
  localStorage.setItem("SPOC.z", z.toString());
}

function initVars() {
  if (typeof(Storage) !== "undefined") {
    z = parseFloat(localStorage.getItem("SPOC.z"));
    if (z && !isNaN(z)) {
      p = {x: parseFloat(localStorage.getItem("SPOC.x")), y: parseFloat(localStorage.getItem("SPOC.y"))};
    }
  } else {
    // Sorry! No Web Storage support..
  }
}
