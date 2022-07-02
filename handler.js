'use strict';
// top of handler.js
require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const connectToDatabase = require('./db');
const Guide = require('./resources/guide/guide')

module.exports.create = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connectToDatabase()
    const guide = new Guide({
        _id: new mongoose.Types.ObjectId(),
        data: JSON.parse(event.body).data
    })
    let saved = null
    try {
    saved = await guide.save();
    } catch (error) {
        callback(null, {
            statusCode: err.statusCode || 500,

            headers: { 'Content-Type': 'text/plain',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true, 
                    },
            body: 'Could not create the guide.'
        })
    }
    callback(null, {
        statusCode: 200,
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true, 
        },
        body: JSON.stringify(guide)
    })
};

module.exports.getOne = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase()
  const id = event.pathParameters.id
  try {
    const guide = await Guide.findById(id)
    callback(null, {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true, 
                    },
                body: JSON.stringify(guide)  
              })
  } catch (error) {
        callback(null, {
            statusCode: err.statusCode || 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true, 
                },
            body: 'Could not find the guide.'
        })
  }
 
};

module.exports.getAll = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase()
  const guides = await Guide.find()
  callback(null, {
              statusCode: 200,
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true, 
                },
              body: JSON.stringify(guides)  
            })
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

//   connectToDatabase()
//     .then(() => {
//       Note.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
//         .then(note => callback(null, {
//           statusCode: 200,
//           body: JSON.stringify(note)
//         }))
//         .catch(err => callback(null, {
//           statusCode: err.statusCode || 500,
//           headers: { 'Content-Type': 'text/plain' },
//           body: 'Could not fetch the notes.'
//         }));
//     });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

//   connectToDatabase()
//     .then(() => {
//       Note.findByIdAndRemove(event.pathParameters.id)
//         .then(note => callback(null, {
//           statusCode: 200,
//           body: JSON.stringify({ message: 'Removed note with id: ' + note._id, note: note })
//         }))
//         .catch(err => callback(null, {
//           statusCode: err.statusCode || 500,
//           headers: { 'Content-Type': 'text/plain' },
//           body: 'Could not fetch the notes.'
//         }));
//     });
};