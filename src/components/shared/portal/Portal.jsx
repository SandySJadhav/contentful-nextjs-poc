import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children, id = 'portal' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector(`#${id}`) || document.body) : null;
};
