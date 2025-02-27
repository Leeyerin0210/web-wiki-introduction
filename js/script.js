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
