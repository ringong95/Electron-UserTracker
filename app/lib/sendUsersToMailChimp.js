import axios from 'axios';

export const toMailChimp = (firstTen, _callback) =>{
    console.log(this, firstTen)
    console.log('hello?')
    const formatedRequestBody = firstTen.map((i)=>{
        const FirstName = i.user.name.split(' ')[0]
        const LastName = i.user.name.split(' ')[1]
        // console.log (, i.order.product[0].name)
        let orderAmount = `${i.order.product[0].name[0].substring(0,1)}-`
        if(i.order.product[0].name[0].substring(0,1)>=4){
          orderAmount = '4-'
        }else if (i.order.product[0].name[0].substring(0,1)== 1){
          orderAmount = ''
        }
        const rock = { 
            email_address: i.user_email, 
            status: 'subscribed',
            merge_fields:{
              EMAIL: i.user_email,
              FNAME: FirstName,
              LNAME: LastName,
              PHONE: i.user.phone_number,
              PRODUCT: i.order.product[0].name,
              PRODLINK: `https://72hours.ca/collections/essential-emergency-kits/products/${orderAmount}person-food-and-water-replacement-kit` 
            }
          }
          console.log (rock)
       return rock 
      })
      console.log(formatedRequestBody)
      const url = 'https://us18.api.mailchimp.com/3.0/lists/ba2bacf526'
      axios({
        method: 'post',
        url: url,    
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Basic dGV4eHh4dDozOWZiNjlhNDg5YzM2NzAwZmI2OTkxOWY1ZjlkYzM1ZC11czE4' 
        },
        data:{
          members: formatedRequestBody,
          update_existing: true
        }
      })
      .catch(error => {
        console.log(error);
      })
      .then(response =>{
        _callback(response)
      });

}