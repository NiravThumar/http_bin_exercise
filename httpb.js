//anything :  https://httpbin.org/anything/{anything}
// get : https://httpbin.org/uuid
// delay : https://httpbin.org/delay/20


async function postData(){
    // let get_uuid; 
     fetch('https://httpbin.org/uuid')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>
    {        
        let get_uuid = data.uuid
        console.log('uuid : ', get_uuid);

        call_post(get_uuid);
    })
// 1)
    fetch('https://httpbin.org/delay/10').then(()=>{
        console.log('delay response')
    });
// 2)    

// 3)
    function call_post(get_uuid){
        
        fetch(`https://httpbin.org/anything/{${get_uuid}}`,{
            method:'POST',
        }).then((response)=>{
        if(response.status == 200){
            console.log('post data succesfully');
            console.log('post response : ',response);
        }
        })
    }
    


}


postData();