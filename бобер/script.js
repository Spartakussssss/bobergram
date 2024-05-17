document.addEventListener('DOMContentLoaded', () => {
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const postId = this.dataset.postId;
            const commentInput = this.querySelector('input');
            const commentList = document.getElementById(comments-list-l,{postId});
            const commentText = commentInput.value;

            if (commentText) {
                const newComment = document.createElement('li');
                newComment.textContent = commentText;
                commentList.appendChild(newComment);
                commentInput.value = '';
            }
        });
    });

    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentLikes = parseInt(this.textContent.split(' ')[1]);
            this.textContent = '❤️'; {currentLikes + 1};
        });
    });
});