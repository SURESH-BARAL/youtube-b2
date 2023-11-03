function fetchData(){
    console.log("Fetch data Called ")

    let d = null;

     fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data){
        console.log("Promise success", data);
       
        return data.json()
    })
    .then(function(data){

        console.log("Final data[0].username", data[0].username);
        let para =document.getElementById('username')
        for(let i=0;i < data.length; i++){
            let eachuser = document.createElement('h6');
            eachuser.innerHTML="welcome"+ data[i].username.toUpperCase().trim().substring(1,2)

            para.appendChild(eachuser)
        
        }
        para.style.color="red"
        para.style.fontFamily="monospace"
        para.style.background="green"
        para.style.fontSize="100"
       
        d = data;
    })
    .catch(function(err){
        console.log("Promise failed")
    });
    
  console.log(d)
   
}
 // timebomb implementation
 let timerInSeconds=130;
 let interval;                 //seconds
 function updateTimer(){
    if(timerInSeconds<0){
        clearInterval(interval); //stop the timer
        alert('bom!!!')
    }
    else{
    const minutes = Math.floor(timerInSeconds/60);
    const  second =timerInseconds%60;

    const formattedTime = (minutes +":" +second)
    document.get;ElementById('timebomb').innerHTML=formattedTime;  
    document.get;ElementById('timebomb').style.color="red";
    timerInSeconds=timerInSeconds=1;
 }
}
interval= setInterval(updateTimer, 1000);