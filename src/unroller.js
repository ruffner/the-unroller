// the unroller
//
// coordinate system:
// 0,0 1,0  ...  width,0
// 0,1 1,1  ...  1,width
//  .   .    
//  .   .
//  .   .   
// 0,height ...  width,height


var C = {
    colors: {
        black: '#000',
    }
}


// cell object creation method
function cell(data, xcoord, ycoord){
    return {'data':data, 'x':xcoord, 'y':ycoord};
}


// FiniteGraph contructor
function FiniteGraph(size) {
    this.cells = [];
    this.width = size;
    this.height = size;
    this.mod = size*size;
    this.dataType = Number;
}


// fill cells with a number/object
FiniteGraph.prototype.fill = function(toFill) {
    var pos = 0;
    
    for( var i=0; i<this.width; i++ ){
        for( var j=0; j<this.height; j++ ){
            this.cells[pos++] = cell(toFill, i, j);
        }
    }
}


// fill the cells with the 'identity' matrix
FiniteGraph.prototype.ident = function() {
    var pos=0, pc=0;
    
    for( var i=0; i<this.width; i++ ){
        for( var j=0; j<this.height; j++ ){
            if( pc==i && pc==j ){
                this.cells[pos] = cell(1, i, j);
                pc++;
            } else {
                this.cells[pos] = cell(0, i, j);
            }
            
            pos++;
        }
    }
}
