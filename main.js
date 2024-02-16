function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/NTUXSGqjj/model.json', modelReady);
}
function modelReady(){
  console.log("modelo carregado! :D")
}
function gotResults(error, results){
  if(error){
  console.log(error)
  }
  else{
    console.log(results)
    r= Math.floor(Math.random()*255)+1
    g= Math.floor(Math.random()*255)+1
    b= Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML="Posso ouvir: "+results[0].label
    document.getElementById("result_confidence").innerHTML="Precisão: "+results[0].confidence
    document.getElementById("result_label").style.color= "rgb("+r+","+g+","+b+")";  
    document.getElementById("result_confidence").style.color= "rgb("+r+","+g+","+b+")"; 
  }
}