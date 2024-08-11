// function fetchData(callback_fn){
//     setTimeout(()=> callback_fn("KJKR"),1000);
// }
// console.log('Program is executing');
// fetchData((name)=>{
//     console.log("Hello "+name)
// }
// )

function fetchData(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const data = {name:"KJKR",dept:"ECE",year:"2022 - 2026 (III)"}
                resolve(data)
            },1000)
        })    
}

async function getData(){
    var data
    try{
        data = await fetchData()
        console.log(data);
    }catch(error){
        console.error(error);
    }
}
getData()