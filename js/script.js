;(function(){
  'use strict';

  var closeFeedbackFormButton = document.getElementsByClassName('feedback-form__close-button')[0],
      openFeedbackFormButton = document.getElementsByClassName('contacts__button')[0],
      feedbackModal = document.getElementsByClassName('feedback-modal')[0];

  var onOpenClick = function onOpenClick(event) {
    event.preventDefault();
    feedbackModal.classList.add('feedback-modal_active');
  };

  var onCloseClick = function onCloseClick(event) {
    event.preventDefault();
    feedbackModal.classList.remove('feedback-modal_active');
  };

  closeFeedbackFormButton.addEventListener('click', onCloseClick);
  openFeedbackFormButton.addEventListener('click', onOpenClick);
}());
