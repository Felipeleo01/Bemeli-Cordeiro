import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 font-sans tracking-wide font-medium flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-700 shadow-lg hover:shadow-xl",
    secondary: "bg-rose-300 text-stone-900 hover:bg-rose-400 shadow-md",
    outline: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};