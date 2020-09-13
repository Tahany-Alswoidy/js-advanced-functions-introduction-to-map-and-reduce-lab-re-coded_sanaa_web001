// Your code here
const mapToNegativize=(sourceArray)=>{
    return sourceArray.map(element=>-element);
}
const mapToNoChange=(sourceArray)=>{
    return sourceArray.map(element=>element);
}
const mapToDouble=(sourceArray)=>{
    return sourceArray.map(element=>2*element);
}
const mapToSquare=(sourceArray)=>{
    return sourceArray.map(element=>element**2);
}
function reduceToTotal(sourceArray, startingPoint){
  return sourceArray.reduce(function(acc,),startingPoint)
}