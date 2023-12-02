document.addEventListener("DOMContentLoaded", function () {
    let counter = document.getElementById('counter');
    let count = parseInt(counter.innerText);
  
    let timer = setInterval(function () {
      if (document.getElementById('pause').innerText === 'pause') {
        count++;
        counter.innerText = count;
      }
    }, 1000);

/////////////////////////////////

    document.getElementById('plus').addEventListener('click', function () {
      count++;
      counter.innerText = count;
    });

/////////////////////////////////

    document.getElementById('minus').addEventListener('click', function () {
      count--;
      counter.innerText = count;
    });
    
/////////////////////////////////    
  
  let likes = {};
  document.getElementById('heart').addEventListener('click', function () {
    if (likes[count] === undefined) {
      likes[count] = 1;
    } else {
      likes[count]++;
    }

    updateLikeDisplay();
  });

  function updateLikeDisplay() {
    let likesList = document.querySelector('.likes');
    likesList.innerHTML = ''; 

    for (let number in likes) {
      let likeItem = document.createElement('li');
      likeItem.innerText = `${number} has ${likes[number]} likes`;
      likesList.appendChild(likeItem);
    }
  }
/////////////////////////////////

    document.getElementById('pause').addEventListener('click', function () {
      if (this.innerText === 'pause') {
        clearInterval(timer);
        this.innerText = 'resume';
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
      } else {
        timer = setInterval(function () {
          count++;
          counter.innerText = count;
        }, 1000);
        this.innerText = 'pause';
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
      }
    });
/////////////////////////////////

    document.getElementById('comment-form').addEventListener('submit', function (event) {
      event.preventDefault();
      let commentInput = document.getElementById('comment-input').value;
      if (commentInput.trim() !== '') {
        let commentList = document.getElementById('list');
        let commentItem = document.createElement('div');
        commentItem.innerText = commentInput;
        commentList.appendChild(commentItem);
        document.getElementById('comment-input').value = '';
      }
    });
  });