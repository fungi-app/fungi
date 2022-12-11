//import Mushrooms from './mushrooms';

//export const allmush = Mushrooms.mushrooms;

const IMGPATH = "./images/"
const FILEPATH = "./mushrooms/"

//const FAMILIES: string[] = fs.readFileSync( "./families" ,'utf8').trim().split("\n");
//const ZONES: string[] = fs.readFileSync( "./zones" ,'utf8').trim().split("\n");

//console.log( ZONES )

export class Mushroom {
  public readonly appendDate: Date;
  public readonly name: string;
  //public readonly id: number | string;
  public readonly zone: number[];
  public readonly gmapsLink: string;
  public readonly redBook: boolean | string;
  public readonly eatable: boolean | string;
  public readonly description: string;
  public readonly familie: number[];
  public readonly index: number

  constructor ( obj: { time: string; name: string, zones: string, gmapsLink: string, redBook: string, eatable: string, description: string, familie:string, }, index: number ){ // id: string

    this.appendDate= new Date ( Date.parse( obj.time ));
    this.name= obj.name;
    //this.id= obj.id; 

    this.zone = obj.zones.slice(0,-1).split(";").map ( item => +item);

    this.gmapsLink= obj.gmapsLink;

    if ( obj.redBook == "1" ) this.redBook = true;
    else if ( obj.redBook == "0" ) this.redBook = false;
    else this.redBook = obj.redBook;

    if ( obj.eatable == "1" ) this.eatable = true;
    else if ( obj.eatable == "0" ) this.eatable = false;
    else this.eatable = "50/50";

    this.description = obj.description;

    this.familie = obj.familie.slice(0,-1).split(";").map ( item => +item);
    this.index = index

  }

  show () {
    console.log ( "\n=== " + this.name + " ===\n" );
    console.log ( "Append date: " + this.appendDate.toString() );
    //console.log ( this.id );
    console.log ( this.zone );
    console.log ( this.gmapsLink );
    console.log ( this.redBook );
    console.log ( this.eatable );
    console.log ( this.description );
    console.log ( this.familie );
  }

  //getImgSrc () {
  //  return IMGPATH + this.id.toString () + ".jpg";
  //}
}

export function getAllMushrooms ( mushrooms: Mushroom[] ): Mushroom[]{
  //let mushrooms = Mushrooms.mushrooms;
  //let Mushrooms =  require ( "./mushrooms.json" ).mushrooms//JSON.parse (
  let output: Mushroom[] = [];
  for ( let i = 0; i < mushrooms.length; i++ ){
    output.push ( new Mushroom ( mushrooms[i], i )); 
  }
  return output;
}


//let mushrooms = getAllMushrooms ()
//console.log ( getFileList () )


//for ( let i = 0; i < mushrooms.length; i++ ){
//  mushrooms[i].show()
//}

