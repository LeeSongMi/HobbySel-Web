'use client';
import { MouseEventHandler, useState } from 'react';
import '@/styles/components/Burger.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler;
}

const Burger = (props: ButtonProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <button
      className={`burger button-empty p-0 cursor-pointer  ${opened ? 'active-burger' : ''}`}
      type="button"
      {...props}
      onClick={(e) => {
        setOpened(!opened);
        props.onClick(e);
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Burger">
          <rect id="Rectangle1" x="5" y="8" width="40" height="8" rx="4" fill="#FFE8D6" />
          <rect id="Rectangle2" x="5" y="21" width="40" height="8" rx="4" fill="#DDBEA9" />
          <rect id="Rectangle3" x="5" y="34" width="40" height="8" rx="4" fill="#FFE8D6" />
        </g>
      </svg>
    </button>
  );
};

export default Burger;
