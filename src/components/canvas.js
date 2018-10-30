import React, {
  Component
} from 'react';
import {
  fabric
} from 'fabric';


class ShowCanvas extends Component {



  state = {
    canvas: null
  }


  mouseDown = (e) => {
    console.log("mousedown");

  }



  moveIt(canvas, o) {
//    console.log(JSON.stringify(canvas))
    console.log(canvas.toObject())
    setTimeout(function() {
      console.log("changing")
      console.log(o.angle)
      o.set({
        angle: o.angle + 15,
        fill: 'green'
      })
      canvas.renderAll();
    }, 3000);

    setTimeout(function() {
      console.log("changing")
      o.set({
        angle: o.angle + 30,
        fill: 'blue'
      })
      canvas.renderAll();
    }, 6000);
  }

createNamedRect(angle,left,top){
  var rect = new fabric.Rect({
    angle: 45,
    left: 200,
    top: 200,
  });

  rect.toObject = (function(toObject) {
    return function() {
      return fabric.util.object.extend(toObject.call(this), {
        name: this.name
      });
    };
  })(rect.toObject);

return rect;

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

    /*var rect = new fabric.Rect({
      angle: 45,
      left: 200,
      top: 200,
    });*/
    var rect = this.createNamedRect(45,200,200);

    rect.set({
      width: 200,
      height: 200,
      fill: '#f55',
      opacity: 0.7
    });



    canvas.add(rect);
    rect.name = 1;

    /*
    var rect2 = new fabric.Rect({ angle: -45, left: 400, top:400 });
    rect2.set({ width: 200, height: 200, fill: '#f55', opacity: 0.7 });
    */

    rect = this.createNamedRect(-45,400,400)

    rect.set({
      width: 200,
      height: 200,
      fill: '#f55',
      opacity: 0.7
    });

    canvas.add(rect);
    rect.name = 2;

    rect = this.createNamedRect(-90,300,300)
    rect.set({
      width: 200,
      height: 200,
      left: 500,
      top: 500,
      fill: '#f55',
      opacity: 0.7
    });
    canvas.add(rect);

    rect.name = 3;

    console.log(canvas._objects)
    setTimeout(function() {
      console.log("changing")
      canvas._objects[0].set({
        angle: 60,
        fill: 'green'
      })
      canvas.renderAll();
    }, 3000);

    setTimeout(function() {
      console.log("changing")
      canvas._objects[0].set({
        angle: 90,
        fill: 'blue'
      })
      canvas.renderAll();
    }, 6000);

    /*canvas.on('mouse:up', () => {
        console.log("moousedown")
         });
    */
    canvas.on('object:moving', (eventName) => {
      console.log(eventName)
      console.log("canvas moving " + canvas._activeObject.name)
      canvas._activeObject.set({
        fill: 'pink'
      })
    });

    canvas.on('mouse:down', (eventName) => {
      console.log(eventName)

      console.log("canvas mouse down ")
      //    console.log(canvas._objects)
      //    console.log(canvas._activeObject)
      if ((canvas._activeObject !== undefined) && (canvas._activeObject !== null)) {
        console.log("name" + canvas._activeObject.name)
        canvas._activeObject.set({
          fill: 'orange'
        })
      }
      else {
        console.log("clicked on canvas")
      }
    });

    canvas.on('mouse:up', (eventName) => {
      console.log(eventName)

      console.log("canvas mouse up ")
      //    console.log(canvas._objects)
      //    console.log(canvas._activeObject)
      console.log(canvas._activeObject)
      if ((canvas._activeObject !== undefined) && (canvas._activeObject !== null)) {
        canvas._activeObject.set({
          fill: 'blue'
        })
        this.moveIt(canvas, canvas._activeObject)
      }
    });
    /*
    canvas.on('mouse:down', function (options) {
        if (options.target) {
           showInfo('an object was clicked! ', options.target.type);
        }

    */
    console.log("context next")
    console.log(this.context);
    //this.setState({context)


  }


  colorStripClick = (e) => {
    var ctx = e.target.getContext('2d')
    ctx.set({
      color: 'blue'
    })
    console.log("clicked")
  }

  handleClick(e) {
    e.stopPropagation();
    console.log('INSIDE');
    this.setState({
      inside: 'inside'
    });
    var ctx = e.target.getContext('2d')
    ctx.set({
      color: 'blue'
    })
    console.log("clicked")
  }

  render() {
    return ( <
      div style = {
        {
          width: '100%',
          height: '100%',
          color: 'red'
        }
      } >
      <
      canvas id = "c"
      onClick = {
        ((e) => this.handleClick)
      }
      ref = {
        (c) => this.context = c.getContext('2d')
      }
      style = {
        {
          width: '100%',
          height: '100%',
          color: 'red'
        }
      }
      /> <
      /div>

    );
  }
}



export default ShowCanvas;
