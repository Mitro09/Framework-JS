class Counter {
    
    constructor(value=0,min=null,max=null){

        this.diventaInt(value,min,max);
        //this.value = parseInt(value);
        
        this.checkMax(value,max);
        this.checkMin(value,min);
        
        this.max = (max);
        //console.log("MAX",this.max)
        this.min = (min);
    }

    increment(){
        if(this.max == null){
            this.value++;
        }
        else if(this.value<this.max){
            this.value++;
        }

    }

    decrement(){
        if(this.min==null){
            this.value--;
        }
        else if(this.value>this.min){
            this.value--;
        }
    }

    checkMax(value,max){
        if(max != null && max<value){
            this.value = (max);
            //throw new Error("initial è maggiore di max")
        }
        else{
            this.value = (value);
        }
    }

    checkMin(value,min){
        if(min != null && min>value){
            this.value = (min)
            throw new Error("initial è minore di min")
        }
        else{
            this.value = (value);
        }
    }

    diventaInt(value,min,max){
        value = parseInt(value);
        if(min != null){
            min = parseInt(min);
        }
        if(max != null){
            max = parseInt(max)
        }
    }
}

export default Counter;