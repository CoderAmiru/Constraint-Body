class Chain{

constructor(BodyA,BodyB){
var options = {
bodyA: BodyA,
bodyB: BodyB,
length: 10,
stiffness: 0.04,
}
this.Chain=Constraint.create(options)
World.add(world,this.Chain)

}
    
display(){
var pointA= this.Chain.bodyA.position
var pointB= this.Chain.bodyB.position
line(pointA.x,pointA.y, pointB.x,pointB.y)
}





}
