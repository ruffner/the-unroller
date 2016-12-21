// the unroller

function Poly() {
    
    // 0,0 1,0  ...  width,0
    // 0,1 1,1  ...  1,width
    //  .   .    
    //  .   .
    //  .   .   
    // 0,height ...  width,height
    
    
    this.width = 256;
    this.height = 256;
    this.dim = 1;
    this.mod = this.width*this.height;
    this.data = [];
    
    // columns of objects
    for(var i=0; i<this.width; i++){
        this.data[i] = [];

        // make 'planes'
        if( this.dim>1 ){
            this.data[i][j] = [];
            for( var j=0; j<this.dim; j++ ){
                this.data[i][j][this.dim] = 0;
            }
        } else {
            // items in column, top down
            for(var j=0; j<this.height; j++){
                this.data[i][j] = 0;
            }
        }
    }
    
    
    return this;
}