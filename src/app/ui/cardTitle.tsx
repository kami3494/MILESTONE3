"use client";

import React from "react";

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
  );
};

export default CardTitle;
