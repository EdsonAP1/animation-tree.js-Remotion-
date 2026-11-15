export const FPS=30;
export const DURATION=9650;
// Scene changes aligned to locally transcribed narration, work/narracion.json.
// [start seconds, environment, actor pose, visual beat]
export const BEATS:any[]=[
 [10,'bedroom',1,'hours'],[16.2,'studio',7,'learn'],[18.08,'studio',4,'project'],[21.52,'street',2,'alone'],
 [28.24,'bedroom',8,'awake'],[35,'bedroom',8,'clock'],[40.32,'bedroom',2,'brain'],
 [46.4,'bedroom',3,'phone'],[52.72,'bedroom',3,'sunrise'],[55.48,'bedroom',10,'oops'],
 [59.88,'time',1,'plan'],[65.76,'time',1,'week'],[70.92,'time',2,'year'],[77.72,'time',1,'life'],
 [80.6,'studio',5,'exercise'],[85.52,'studio',4,'learn'],[87.6,'kitchen',6,'cook'],[90.4,'studio',4,'project'],
 [94.44,'party',1,'done'],[100.64,'bedroom',1,'organize'],[108.6,'studio',5,'power'],
 [111.72,'party',1,'friends'],[119.84,'party',2,'tired'],[124.48,'party',9,'leaving'],
 [128.48,'party',9,'empty'],[134.6,'kitchen',10,'clean'],
 [136.76,'street',9,'walk'],[142.76,'street',9,'closed'],[147.08,'street',2,'workers'],[155.48,'street',9,'lonely'],
 [159.92,'train',11,'travel'],[167.08,'hotel',11,'wait'],[173.88,'hotel',10,'schedule'],
 [177.8,'studio',7,'second'],[181.44,'party',1,'day'],[183.36,'studio',7,'paint'],[188.28,'garden',1,'garden'],
 [194,'office',1,'boss'],[201.16,'office',3,'message'],[206.96,'office',4,'tasks'],[214.08,'office',10,'overload'],
 [220.64,'office',4,'work'],[226.84,'office',10,'frustrated'],[233.88,'studio',14,'off'],
 [237.76,'studio',12,'tree'],[241.8,'studio',1,'advantage'],
 [245.04,'street',2,'everyone'],[251.32,'street',1,'celebrate'],[257.16,'party',1,'calls'],
 [262.72,'street',11,'open'],[269.04,'office',10,'shift'],[275.44,'time',2,'question'],
 [280.52,'party',1,'family'],[283.1,'studio',7,'art'],[285.68,'time',10,'obligation'],
 [293.32,'time',2,'protect'],[299.96,'bedroom',1,'return'],[305.6,'studio',13,'blank'],
 [310.36,'studio',1,'ready'],[313.44,'bedroom',3,'phone'],[317.8,'bedroom',3,'sunrise']
];
export const SHOTS:any[]=[];
// Opening uses the three approved shot boundaries. Remaining takes last <= 6 s.
for(let i=0;i<BEATS.length;i++){
 const [s,env,pose,beat]=BEATS[i];const end=BEATS[i+1]?.[0]??DURATION/FPS;
 const pieces=Math.ceil((end-s)/6);
 for(let j=0;j<pieces;j++){
  const a=Math.round((s+(end-s)*j/pieces)*FPS),b=Math.round((s+(end-s)*(j+1)/pieces)*FPS);
  SHOTS.push({a,b,env,pose,beat,view:(i+j)%5,index:SHOTS.length});
 }
}
export const shotAt=(f:number)=>SHOTS.find(s=>f>=s.a&&f<s.b)??SHOTS[SHOTS.length-1];
