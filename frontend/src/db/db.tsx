//import Mushrooms from './mushrooms';

//export const allmush = Mushrooms.mushrooms;
//

const IMGPATH = "./images/"
const FILEPATH = "./mushrooms/"

const FAMILIES = require ( "./families.json" ).families
const ZONES = require ("./zones.json" ).zones

function getFamilie ( index: number ){
  return FAMILIES[index]
}

function getZoneName ( index: number ){
  return ZONES[index]
}

//console.log( ZONES )

export class Mushroom {
  
  public readonly appendDate: Date;
  public readonly name: string;
  public readonly zones: string;
  public readonly gmapsLink: string;
  public readonly redBook: boolean | string;
  public readonly eatable: boolean | string;
  public readonly description: string;
  public readonly familie: number[];
  public readonly index: number

  constructor ( obj: { time: string; name: string, zones: string, gmapsLink: string, redBook: string, eatable: string, description: string, familie:string, }, i: number ){ // id: string

    this.appendDate= new Date ( Date.parse( obj.time ));
    this.name= obj.name;

    this.zones = obj.zones.slice(0,-1).split(";").map ( item => getZoneName ( +item )).join(", ");

    this.gmapsLink= obj.gmapsLink;

    if ( obj.redBook == "1" ) this.redBook = "Да";
    else if ( obj.redBook == "0" ) this.redBook = "Нет";
    else this.redBook = obj.redBook;

    if ( obj.eatable == "1" ) this.eatable = "Да";
    else if ( obj.eatable == "0" ) this.eatable = "Нет";
    else this.eatable = "50/50";

    this.description = obj.description;

    this.familie = obj.familie.slice(0,-1).split(";").map ( item => getFamilie ( +item)).join("");
    this.index = i

  }

  show () {
    console.log ( "\n=== " + this.name + " ===\n" );
    console.log ( "Append date: " + this.appendDate.toString() );
    console.log ( this.zones );
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

