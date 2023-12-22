const openModal = evt => {
  const { id } = evt.target.closest('.js-card').dataset;
};

export { openModal };
