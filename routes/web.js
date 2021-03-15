 const express = require("express")
 const router = express.Router()
 var nodemailer = require("nodemailer");
 const Contact = require('../models/contact')

router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/download', function(req, res){ 
    res.download('resume.pdf'); 
}); 

router.get('/email', function(req, res){ 
    res.render('home'); 
}); 
router.post('/email', function(req, res){ 
    const user = new Contact({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })
   
    user.save().then(user =>{
        
        return res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })   
    return res.redirect('/')
}); 



// router.post("/email", (req,res)=>{
//     console.log(req.body)
//      const output = `
//         <p>You have new contact request</p>
//         <h3>Contact Detail</h3>
//         <ul>
//             <li>Name: ${req.body.name}</li>
//             <li>Email: ${req.body.email}</li>
//             <li>Phne: ${req.body.phone}</li>
//         </ul>

//         <h3>Message</h3>
//         <p>${req.body.message}</p>
        
//      `  
//      var sender = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'rohitgalande45@gamil.com',
//           pass: '9307942508'
//         },
//         tls:
//         {rejectUnauthorised:false}
//       });
       
//       var mail = {
//         from: "rohitgalande45@gmail.com",
//         to: "birnalepavan@gmail.com",
//         subject: "Sending Email using Node.js",
//         text: "That was easy!",
//         html:output
//       };
       
//       sender.sendMail(mail, function(error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Email sent successfully: "
//                        + info.response);
//           return res.render('home',{msg:'message has bee sent'})             
//         }
//       }); 
// })


module.exports = router