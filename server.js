const express = require('express');
const app = express();

app.use(express.json())

const mockUserData=[
  {name: 'Mark'},
  {name: 'Jill'}
]

app.get('/users', function(req, res){
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

app.get('/users/:id', function(req, res){
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got one user',
    users: req.params.id
  })
})

app.post('/login', function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword){
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      success: false,
      message: 'password and username do not match'
    })
  }
})

app.post('/signup', function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  if (username.length < 5){
    res.json({
      success: false,
      message: 'username must be at least 5 characters'
    })
  } else if (password.length < 8){
    res.json({
      success: false,
      message: 'password must be at least 8 characters'
    })
  } else {
    res.json({
      success: true,
      message: 'account created!'
    })
  }
})

app.listen(8000, function(){
  console.log("server is running")
})