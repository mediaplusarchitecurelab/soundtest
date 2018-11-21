var arraydot;
var mic;
const basicdia = 15;

function setup() {
  
  createCanvas(1024,768);
  //textAlign(LEFT,CENTER);
  ellipseMode(CENTER);
  //dot=
  mic = new p5.AudioIn()
  mic.start();
  arraydot = new ARRAYDOT(64,0,height/3,width,height/3);
}

function draw() {
  background(0);
  micLevel = mic.getLevel()*25;
  //micLevel = 33;

  //console.log(micLevel);
  //ellipse(width/2,600,50,50);
  arraydot.display(micLevel);
}

function DOT(x,y,dx,dy){
	this.dia = basicdia;
	this.life=100;
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;

	this.display = function(){
		

		noStroke();
		fill(200,50,50);
		ellipse(this.x,this.y,this.dia,this.dia);
		this.life-=0.5;
		this.x+=dx;
		this.y+=dy;
		
	}
}

function ARRAYDOT(num,xs,ys,xe,ye){
	this.xs=xs;
	this.ys=ys;
	this.xe=xe;
	this.ye=ye;
	this.num=num;
	this.arr=[];
	this.dx = (xe-xs)/num;
	this.dy = (ye-ys)/num;
		
	for(let i=0;i<num;i+=1){		
		this.arr.push(new DOT(this.xs+this.dx*i,this.ys+this.dy*i,this.dx,this.dy));
	}
	//}

	this.display = function(dias){
		for(let i=0;i<this.arr.length;i+=1){
			let val=this.arr[i];
			val.display();
			if (val.x > this.xe +this.dx){
				val.x= this.xs+this.dx*2;	
			}
			/*
			if (val.x < this.xs-basicdia/2 || val.x > this.xs+basicdia/2){
				val.y=this.ys;
				val.x=this.xs;
				val.dia=basicdia;
				//if (dias>1){val.dia=basicdia*dias} 
				console.log(val.x);
			}
			
			*/
		}
	}
}