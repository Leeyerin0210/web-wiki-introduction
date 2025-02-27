document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");
    const modal = document.getElementById("modal");
    const videoFrame = document.getElementById("video-frame");

    gridItems.forEach(item => {
        item.addEventListener("click", function() {
            const videoURL = this.getAttribute("data-video");
            videoFrame.src = videoURL;
            modal.style.display = "flex";
        });
    });

    // 모달 닫기 함수
    window.closeModal = function() {
        modal.style.display = "none";
        videoFrame.src = ""; // 비디오 정지
    };

    // 모달 바깥 클릭 시 닫기
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.querySelector(".commentInput");
    const commentInput = commentForm.querySelector("input[type='text']");
    const commentList = document.querySelector(".comment-list");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();

        if (commentText === "") {
            alert("댓글을 입력해주세요.");
            return;
        }

        const commentItem = document.createElement("li");
        commentItem.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${commentText}</div>
      </div>
    `;

        commentList.appendChild(commentItem);
        commentInput.value = "";
        alert("댓글이 입력되었습니다.");
    });

    commentForm.addEventListener("reset", function () {
        commentInput.value = "";
    });
});
