const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Recaptcha = require('express-recaptcha').RecaptchaV2
const {check, validationResult}= require("express-validator")
const mailgun = require(mailgun.js)

//application variable to allow express to run in this file
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded(e{extend: false}))
app.use(bodyParser.json())
const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY)


const requestValidation = [
  check("email", "A valid email is required.").isEmail().normalizeEmail(),
  check("name", "a Valid name is requred.").not().isEmpty().trim().escape(),
  check("subject").optional().trim().escape,
  check("message", "A message is required to send an email.").not().isEmpty().trim().escape().isLength({max:2000})
]

const indexRoute = express.Router()
const indexRouteMiddleware = (request, response, nextFunction)  => {
  console.log("request", request)
  nextFunction()
}


const handleEmailPost = function(request, response, nextFunction){
  response.append('Content-Type', 'text/html')
  if(request.recaptcha.err) {
    return response.send('<div class='alert alert-danger' role='alert'><strong>Oh Snap!</strong>There was an error with Recaptcha please try again</div>')
  }
  const errors=validationResult(request)

  if(!errors.isempty()) {
    const currentError=errors.array()[0]
  }
}

const mg=mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})
const {email, subject, name, message} = request.body

const mailgunData = {
  to: process.env.MAIl-RECIPIENT,
  from: 'Mailgun Sandbox <postermaster@${domain}>',
  subject: '${name} - ${email} : ${subject}',
  text: message
}



indexRoute.route('/').get(indexRouteMiddleware)
  .post(recaptcha.middleware.verify, requestValidation, handleEmailPost)

app.use('/apis', indexRoute)

app.listen(4200, ()=> {console.log("express server was successfully built")})