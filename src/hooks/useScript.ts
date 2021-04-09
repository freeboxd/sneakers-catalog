import {
  useEffect,
} from 'react';

const loadScript = (url: string, target) => new Promise(resolve => {
  const tag = document.createElement('script');
  tag.async = false;
  tag.src = url;
  target.appendChild(tag);
  tag.addEventListener('load', resolve, {
    once: true
  });
});

const useScript = (url: string, cb: () => void = () => {}, deps) => {
  useEffect(() => {
    const body = document.body;
  
    Promise.all([loadScript(url, body)])
      .then(cb);
  }, deps);
}

export default useScript;