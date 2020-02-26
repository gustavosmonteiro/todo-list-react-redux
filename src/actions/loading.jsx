const show = () => ({
  type: "SHOW_LOADING"
});

const hide = () => ({
  type: "HIDE_LOADING"
});

export const loadingActions = { show, hide };
