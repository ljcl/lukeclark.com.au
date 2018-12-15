// @flow

const observerStorage: Object = new Map();
const instanceMap: Object = new Map();

export const destroy = () => {
  observerStorage.forEach(observer => {
    observer.disconnect();
  });
  observerStorage.clear();
  instanceMap.clear();
};

const handleIntersection = (
  entries: Array<IntersectionObserverEntry>,
  observer: IntersectionObserver
) => {
  if (!entries) {
    destroy();
  }
  entries.forEach(entry => {
    const { isIntersecting, intersectionRatio, target } = entry;
    const instance = instanceMap.get(target);
    const { threshold } = instance.options;

    let inView = false;
    if (observer && instance) {
      if (intersectionRatio >= threshold) {
        inView = true;
      }
      if (isIntersecting !== undefined) {
        inView = inView && isIntersecting;
      }
    }
    instance.callback(inView);
  });
};

const initObserver = (
  observerId: string,
  callback: Function,
  options: Object
) => {
  let observerInstance: ?IntersectionObserver = observerId
    ? observerStorage.get(observerId)
    : null;
  if (!observerInstance) {
    observerInstance = new IntersectionObserver(callback, options);
    if (observerId && observerInstance)
      observerStorage.set(observerId, observerInstance);
  }
  return observerInstance;
};

export const observe = (
  element: HTMLElement,
  options: Object,
  observerId: string,
  callback: Function
) => {
  const observer = initObserver(observerId, handleIntersection, options);
  const instance = {
    options,
    observerId,
    observer,
    callback
  };

  instanceMap.set(element, instance);
  observer.observe(element);
};

export const unobserve = (element: HTMLElement) => {
  const instance = instanceMap.get(element);
  let { observer, observerId } = instance;
  if (!observer && observerId) {
    observer = observerStorage.get(observerId);
  }

  observer.unobserve(element);
  instanceMap.delete(element);

  if (instanceMap.size === 0 || observerStorage.size === 0) {
    destroy();
  }
};
