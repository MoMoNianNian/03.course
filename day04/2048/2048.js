var game={
  data:null,
  RN:4,
  CN:4,
  start(){//启动游戏
    this.data=[];
    for(r=0;r<this.RN;r++){
      this.data[r]=[];
      for(c=0;c<this.CN;c++){
        this.data[r][c]=0;
      }
    }
    this.randomunm();
    this.randomunm();
    console.log(this.data.join("\n"));
  },

  randomunm(){
    while(true){
    var r=Math.floor(Math.random()*this.RN);
    var c=Math.floor(Math.random()*this.CN);
    if(this.data[r][c]==0){
      this.data[r][c]=Math.random()<0.5?2:4;
      break;
    }
  }
}
}

game.start();