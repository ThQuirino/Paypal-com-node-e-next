//const db=require('../connect')
const { express } = require("express");
const db=require('../connect')
const paypal=require("paypal-rest-sdk")

module.exports={
    async index(req,res,next){
        const {nome,preco}=req.body
        const valor=parseInt(preco)
        
        try{
            db.connect()
            const resas="INSERT INTO produtosNovos(nome,preco) VALUES($1,$2)"
            await db.query(resas,[nome,valor])
            
           const resa = await db.query('SELECT nome,preco FROM produtosNovos')
             
           console.log(resa.rows[8].nome) // Hello world!
           const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3333/list",
		        "cancel_url": "http://localhost:3333/gui"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": `${resa.rows[8].nome}`,
                        "sku": `${resa.rows[8].id}`,
                        "price": `${resa.rows[8].preco}`,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": `${resa.rows[8].preco}`
                },
                "description": "This is the payment description."
            }]
        };
       

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
            } else {
            
               for(let i=0;i<payment.links.length;i++){
                    if(payment.links[i].rel==='approval_url'){
                       // res.redirect(payment.links[i].href);
                        res.send(payment.links[i].href)
                    }
               }
            }
        });
    
      
        }catch(e){
            console.log(e)
        }
    
    
       
},
    async Listen (req,res){
        try{
           
            const resa = await db.query('SELECT nome,preco FROM produtosNovos')
            const payerId=req.query.PayerID
            const paymentId=req.query.paymentId
          /*  const execute_payment_json={
                "payer_id":payerId,
                'transactions':[{
                    "amount":{
                        "currency":"USD",
                        "total":`${resa.rows[8].preco}`
                    }
                }]
            }
    */
            paypal.payment.execute(paymentId,execute_payment_json,(err,payment)=> {
                if(err){
                 console.log("Erro cometido",err.response);
                }else{
                    console.log("Pagamento concluido com sucesso");
                    console.log(JSON.stringify(payment))
                    res.send("enviado")
                }
            })
       //     res.render("Success")
            await db.end()
        }catch(e){
            console.log(e)
        }
       
    }
    
}