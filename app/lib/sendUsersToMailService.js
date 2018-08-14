import axios from 'axios';

export default(firstTen, _callback, failureCallback, _secondCallback) =>{
    const formatedRequestBody = firstTen.map((i)=>{
        const FirstName = i.user.name.split(' ')[0]
        const LastName = i.user.name.split(' ')[1]

        let orderAmount = `${i.order.product[0].name[0].substring(0,1)}-`
        if(i.order.product[0].name[0].substring(0,1)>=4){
          orderAmount = '4-'
        }else if (i.order.product[0].name[0].substring(0,1) === 1){
          orderAmount = ''
        }
        const rock = { 
            email: i.user_email, 
            status: 'subscribed',
              FNAME: FirstName,
              LNAME: LastName,
              PHONE: i.user.phone_number,
              PRODUCT: i.order.product[0].name,
              PRODLINK: `https://72hours.ca/collections/essential-emergency-kits/products/${orderAmount}person-food-and-water-replacement-kit` 
          }

       return rock 
      })
      // 
      const url = 'https://a.klaviyo.com/api/v2/list/KgytC4'
      axios({
        method: 'post',
        url: `${url}/members`,    
        headers:{
          'Content-Type': 'application/json',
        },
        data:{
          profiles: formatedRequestBody,
        	api_key: "pk_ba589c187b63ed8c810099bddc99371972",
        }
      })
      .catch(error => {
        failureCallback(error)
      })
      .then(() =>(
        axios({
          method: 'post',
          url: `${url}/subscribe`,    
          headers:{
            'Content-Type': 'application/json',
          },
          data:{
            profiles: formatedRequestBody,
            api_key: "pk_ba589c187b63ed8c810099bddc99371972",
          }
        })
        .catch(error => (
          (failureCallback(error))
        ))
        .then(response =>(
          _callback(response, _secondCallback)

        ))
      ))
}