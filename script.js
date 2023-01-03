var n=10;
for(var i=1;i<10;i++){
    fetch(`https://dog-api.kinduff.com/api/facts?number=${i}`)
    .then((res)=>res.json())
    .then((data)=>Data(data))
    let Data=(data)=>{
            console.log(data.facts)

            const pElement=document.createElement('p');
            pElement.innerHTML=data.facts;
            document.getElementById("root").appendChild(pElement);
    }
}