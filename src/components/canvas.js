import React, { Component } from 'react';
import { fabric } from 'fabric';


  class ShowCanvas extends Component {



    state = {
      canvas:null
    }


mouseDown = (e) => {
console.log("mousedown");

}

    componentDidMount() {

/*
jsfiddle hint
https://jsfiddle.net/STHayden/2pncoLb5/
*/

const canvas = new fabric.Canvas('c');
canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
var rect = new fabric.Rect({ angle: 45,  left: 100, top: 100,});
rect.set({ width: 200, height: 200, fill: '#f55', opacity: 0.7 });
var rect2 = new fabric.Rect({ angle: -45 });
rect2.set({ width: 200, height: 200, fill: '#f55', opacity: 0.7 });

var rect3 = new fabric.Rect();
rect3.set({ width: 200, height: 200, fill: '#f55', opacity: 0.7 });
canvas.add(rect);
canvas.add(rect2);
canvas.add(rect3);
console.log(canvas._objects)
setTimeout(function(){
  console.log("changing")
  canvas._objects[0].set({angle:60,fill:'green'})
 canvas.renderAll();
}, 3000);

setTimeout(function(){
  console.log("changing")
  canvas._objects[0].set({angle:90,fill:'blue'})
 canvas.renderAll();
}, 6000);

/*canvas.on('mouse:up', () => {
    console.log("moousedown")
     });
*/
canvas.on('object:moving', (eventName) => {
  console.log(eventName)
          console.log("canvas mouse up ")
          console.log(canvas._objects)
          console.log(canvas._activeObject)
          canvas._activeObject.set({fill:'pink'})
          });

          canvas.on('mouse:up', (eventName) => {
            console.log(eventName)

                    console.log("canvas mouse up ")
                //    console.log(canvas._objects)
                //    console.log(canvas._activeObject)
                  console.log(canvas._activeObject)
                  if (canvas._activeObject !== undefined) {
                    canvas._activeObject.set({fill:'orange'})
                  }
                });
/*
canvas.on('mouse:down', function (options) {
    if (options.target) {
       showInfo('an object was clicked! ', options.target.type);
    }

*/
console.log(this.context);

}


colorStripClick = (e) => {
    var ctx = e.target.getContext('2d')
    ctx.set({color:'blue'})
    console.log("clicked")
}

    handleClick(e) {
           e.stopPropagation();
           console.log('INSIDE');
           this.setState({inside: 'inside'});
           var ctx = e.target.getContext('2d')
           ctx.set({color:'blue'})
           console.log("clicked")
       }

    render() {
      return (
        <div style={{width:'100%', height:'100%',color:'red'}}>
          <canvas id="c" onClick= {((e)=>this.handleClick)} ref={(c) => this.context = c.getContext('2d')}
          style={{width:'100%', height:'100%',color:'red'}}
          />
        </div>

      );
    }
  }



export default ShowCanvas;
