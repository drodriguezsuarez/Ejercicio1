var app = new Vue({
  // Daniel Rodriguez S.
    el: '#app',
    data: {
      kilos:0,
      total:0
    },
    methods: {
    promedio: function(){  
      var precioK=1200
      var dto=0  
    if(this.kilos<2){
      this.total=parseInt(this.kilos)*parseInt(precioK);
    }else if(this.kilos>=2.01 && this.kilos<=5){
      dto=parseInt(this.kilos)*parseInt(precioK)
      this.total=(parseInt(dto)*parseInt*(0.1))-parseInt(dto);
      }else if(this.kilos>=5.01 && this.kilos<=10){
        dto=parseInt(this.kilos)*parseInt(precioK)
      this.total=(parseInt(dto)*parseInt(0.15))-parseInt(dto);
          }else{
            dto=parseInt(this.kilos)*parseInt(precioK)
      this.total=(parseInt(dto)*parseInt(0.2))-parseInt(dto);
          }     
    }       
  },
})