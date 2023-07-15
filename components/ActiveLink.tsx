'use client';
import { useRouter } from "next/router";
import React, { CSSProperties } from 'react';
import Link from "next/link"

interface Props {
  text: string;
  href: string;
  className?: string;  // Añadimos aquí la prop className
}

const style: CSSProperties = {
  color: 'red',
  textDecoration:'none',
};

const ActiveLink: React.FC<Props> = ({ text, href, className }) => {
  const router = useRouter();

  // Añade la className al componente Link
  return (
    <Link href={href} style={router.pathname === href ? style : undefined} className={className}>
      {text}
    </Link>
  );
}

export default ActiveLink;