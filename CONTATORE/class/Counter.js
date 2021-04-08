class Counter {
    
    constructor(value=0,min=null,max=null){
        if(max != null && value>=max){
            this.value=max;
        }
        else if(min != null && value<=min){
            this.value=min;
        }
        else{
            this.value = value;
        }
        
        this.max = max;
        //console.log("MAX",this.max)
        this.min = min;
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
}

export default Counter;