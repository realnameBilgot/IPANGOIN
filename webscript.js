document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.dropbtn').addEventListener('click', function() {
        var dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });

    function handleTransitionEnd() {
        if (!dropdownContent.classList.contains('show')) {
            dropdownContent.removeEventListener('transitionend', handleTransitionEnd);
            dropdownContent.style.display = 'none';
        }
    }

    document.querySelector('.dropbtn').addEventListener('click', function(){

        if (dropdownContent.classList.contains('show')) {
            dropdownContent.addEventListener('transitionend', handleTransitionEnd);
        } else {
            dropdownContent.classList.toggle('show');
    }})

    window.showSubmitMessage = function(){
        var submitMessage = document.querySelector('#contactMessage')
        submitMessage.style.visibility = 'visible';
    }
});