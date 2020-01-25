export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
    console.log(`👍 IntersectionObserver is polyfilled`);
  }
};

require('./src/utils/theme.css');
