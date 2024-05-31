const express = require("express");
const cors = require('cors');
const nodemailer = require("nodemailer");

const { port } = require("./constant");

const getStoriesList = require("./getStoriesList")

const data = {
    stories: {} // stories: {stories: [], title: string}
}

const fetchData = async () => {
    try {
    console.log('Server fetch data')
    const value = await getStoriesList();
    data.stories = value;
    } catch (error) {
    console.error(error);
   }
}
if (data.stories.stories) {
    console.log('data exist')
} else fetchData()


const app = express();

app.use(express.json(), cors());
app.use('/', (req, res) => {
   res.send('../client/public/index.html')
})
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 

    auth: {
      user: 'liubomyrpoland@gmail.com', 
      pass: 'qbrimpcmlbdbabas' 
    }
});

app.post('/confirm-subscription', async (req, res) => {
    const { email } = req.body;
    const mailOptions = {
        from: 'liubomyrpoland@gmail.com',
        to: email,
        subject: 'Subscription',
        html: '<strong> Congratulations! You have successfully subscribed to our service.</strong>'
      };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.error('Error occurred:', error);
          res.status(500).json({ error: 'Failed to send email' });
        } else {
          console.log('Email sent:', info.response);
          res.status(200).json({ message: 'Email sent successfully' });
        }
      });
})
app.post('/send-email', async (req, res) => {
    const { email, phone, name,  subject, message } = req.body;
  
    const mailOptions = {
      from: 'liubomyrpoland@gmail.com',
      to: email,
      subject,
      html: 
        `<div>
            Name: ${name}.
            <br />
            Phone: ${phone}. 
            <p>${message}</p>
        </div>`
       
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });
});

app.get(`/stories/list`, (req, res) => {
    const { stories } = data; // stories: {stories: [], title: string}
    if (req.query.count) {
        const storiesCount = req.query.count; 
        const sliced = stories.stories.slice(0, storiesCount)
        res.json({ ...stories, stories: sliced, })
    } else if (req.query.searchTerm) {
        const searchTerm = req.query.searchTerm;

        const filtered = stories.stories.filter(({ title }) => // stories: {stories: [], title: string}
        title.toLowerCase().includes(searchTerm.toLowerCase()))

        res.json({ ...stories, stories: filtered, })
    } else {
        res.json(stories)
    }   
})

app.listen(port, () => {
    console.log(`APP listening on port: ${port}`)
})