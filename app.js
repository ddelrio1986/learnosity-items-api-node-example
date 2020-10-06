var Learnosity = require('learnosity-sdk-nodejs');
var express = require('express');
var app = express();
const { v4: uuidv4 } = require('uuid')

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const learnositySdk = new Learnosity()
  const learnosityRequest = learnositySdk.init(
    // service type
    'items',

    // security details
    {
      consumer_key: 'yis0TYCu7U9V4o7M',
      domain: 'localhost'
    },

    // secret
    '74c5fd430cf1242a527f6223aebd42d30464be22',

    // request details
    {
      rendering_type: 'assess',
      type: 'submit_practice',
      name: 'Items API Quickstart',
      state: 'initial',
      user_id: 'student_00012',
      activity_template_id: 'quickstart_examples_activity_template_001',
      session_id: uuidv4(),
      activity_id: 'quickstart_examples_activity_001'
    }
  )

  res.render('index', { learnosityRequest })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
