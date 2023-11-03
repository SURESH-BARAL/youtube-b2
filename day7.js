async function fetchdata(){
    console.log("async function excuted")
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("async function complete",data)
}