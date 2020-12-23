window.onload=function(){
    let link="";
    function conect(){
        const data={nome:"DF",
                    preco:"12,00"}
        const dados=JSON.stringify(data)
        const ajax=new XMLHttpRequest();
        ajax.open('POST','http://localhost:3333/gui')
        ajax.setRequestHeader('Content-Type','application/json')
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status==200){
                link=ajax.responseText
                window.location.href=link
                console.log(link)
            }
        }
        ajax.send(dados)
    }
    
    document.querySelector("#button").addEventListener('click',function(e){
        console.log("sf")
        conect();
    })
}