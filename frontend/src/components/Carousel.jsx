import { useEffect, useState } from 'react';

const Carousel = ({ children }) => {

    const [ curr, setCurr ] = useState(0);
    
    const next = () => {
        setCurr((curr) => (curr === (children.length - 1) ? 0 : curr + 1))
    }

    useEffect(() => {
        const slideInterval = setInterval(next, 3000);
        // return () => clearInterval(slideInterval);
    }, []);

  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>{children}</div>
    </div>
  )
}

export default Carousel