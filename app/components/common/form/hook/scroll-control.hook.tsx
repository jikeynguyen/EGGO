export const useScrollControl = () => {
  const onFocus = () => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
  };

  const onBlur = () => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'auto';
    }
  };

  return {
    onFocus,
    onBlur,
  };
};
