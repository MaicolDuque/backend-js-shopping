/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/email           ->  index
 * GET     /api/email/:id       ->  show
 * POST    /api/email           ->  create
 * PUT     /api/email           ->  actualizar
 */

const Email = require('./email.model');
const nodeMailer = require('nodemailer');
const config  = require('../../config/environment/index.js')


// Gets a list of Emails
function index(req, res) {
  return Email.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Create Email
function create(req, res) {
  return Email.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}


// Update Email
function update(req, res) {
  return Email.findByIdAndUpdate(req.params.id, req.body).exec()
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}



// Gets a single Email from the DB
function show(req, res) {
  return Email.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Delete Email
function destroy(req, res) {
  return Email.findByIdAndDelete(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}



function sendEmail(req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });
  let mailOptions = {
    from: '"Mi portafolio" <miportafolio@gmail.com>', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.body, // plain text body
    html: `<p>${req.body.body}</p>` // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    return create(req, res);
  });
}




function respondWithResult(res, code) {
  const statusCode = code || 200;
  // console.log("acaaa=>", res)
  return (entity) => {
    if (entity) {
      console.log("entity=>", entity)
      res.status(statusCode).json(entity);
    }
  };
}






function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, code) {
  const statusCode = code || 500;
  return (err) => {
    res.status(statusCode).send(err);
  };
}

module.exports = {
  create,
  show,
  index,
  update,
  destroy,
  sendEmail
};
