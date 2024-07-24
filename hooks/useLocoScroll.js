'use client'; 
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocoScroll = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp: 0.1,  // Adjust the easing function for smoother scrolling
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);
};

export default useLocoScroll;
