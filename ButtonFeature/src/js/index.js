const card = document.querySelector('#card');
const checkStatus = document.querySelector("h5");
const addFriend = document.querySelector("#add");
const removeFriends = document.querySelector('#remove');
let messageDiv = document.querySelector('.message');
let text = document.querySelector('#text');
let send = document.querySelector('#send');
let Messages = document.querySelector('.messages');
let userName = ''; 
let user = 1000;

let link = document.getElementById('link');
link.addEventListener('click', () => {
   messageDiv.style.display = 'none';
})

addFriend.addEventListener('click', () => {
  checkStatus.innerHTML = "Friends";
  addFriend.innerHTML = "Message";
  checkStatus.style.color = 'green';
  if(checkStatus.innerHTML === 'Friends') {
    addFriend.addEventListener('click', () => {
      messageDiv.style.display = 'block';
      });
    }
});


removeFriends.addEventListener('click', () => {
  checkStatus.innerHTML = "Stranger";
  addFriend.innerHTML = "Add Friend";
  checkStatus.style.color = "red";
  if(checkStatus.innerHTML === 'Stranger'){
    addFriend.addEventListener('click', () => {
      messageDiv.style.display = 'none';
   });
  }
});

send.addEventListener('click', () => {
  Messages = text.innerHTML; 
})





