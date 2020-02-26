const lazyLoadPage = view => {
  return () => import(`@/views/${view}.vue`);
};

export { lazyLoadPage };
