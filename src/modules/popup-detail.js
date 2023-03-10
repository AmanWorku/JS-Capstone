import getComments from './get-comments.js';
import addComment from './add-comment.js';
import countComment from './comment-counter.js';

const popup = document.querySelector('.popup');
const gallery = document.querySelector('.gallery');
const closeBtn = document.querySelector('.close-btn');
const API_URL = 'https://www.amiiboapi.com/api/amiibo';
const popImage = document.querySelector('.popup-img');
const popTitle = document.querySelector('.pop-name');
const series = document.querySelector('.series');
const gameSeries = document.querySelector('.game-series');
const newComment = document.querySelector('.new-comment');
const submit = document.querySelector('.submit');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const numberOfComments = document.getElementById('number-of-comments');

const getItem = async (itemId) => {
  const result = await fetch(`${API_URL}/?id=${itemId}`);
  const data = await result.json();
  popImage.src = data.amiibo.image;
  popTitle.innerHTML = data.amiibo.name;
  series.innerHTML = data.amiibo.amiiboSeries;
  gameSeries.innerHTML = data.amiibo.gameSeries;
  let nOfComments = 0;
  try {
    const comment = await getComments('dRuHy6BFXNSTiZHMOETw', itemId);
    newComment.innerHTML = '';
    if (comment) {
      comment.forEach((element) => {
        if (element.username !== '' && element.comment !== '') {
          newComment.innerHTML += `<li>${element.creation_date} <b>${element.username} </b>: ${element.comment}</li>`;
        }
      });
      nOfComments = countComment(comment);
    }
  } catch (error) {
    nOfComments = 0;
  }

  numberOfComments.innerHTML = nOfComments;
  submit.addEventListener('click', () => {
    const uname = document.getElementById('name').value;
    const ucomment = document.getElementById('comment').value;
    if (uname !== '' && ucomment !== '') {
      addComment('dRuHy6BFXNSTiZHMOETw', itemId, uname, ucomment);
      successMessage.innerHTML = 'Comment succesfully added. Please reload to see changes.';
    } else {
      errorMessage.innerHTML = 'Please fill in all the fields.';
    }
  });
};

const showPopup = (e) => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
  const itemId = e.target.id;
  getItem(itemId);
};

const closePopup = () => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
};

closeBtn.addEventListener('click', closePopup);

export default showPopup;
