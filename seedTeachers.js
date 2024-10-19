const mongoose = require('mongoose');
const Teacher = require('./models/Teacher');

mongoose.connect('mongodb://localhost:27017/teachers', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const teachers = [
      { name: 'John Doe' },
      { name: 'Jane Smith' },
      { name: 'Michael Johnson' },
      { name: 'Emily Davis' },
      { name: 'Jessica Brown' }
    ];

    await Teacher.insertMany(teachers);
    console.log('Teachers seeded!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
