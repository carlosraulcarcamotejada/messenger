"use client";
import { FC } from "react";
import Image from "next/image";

interface IAvatarProps {
  src: string;
  size?: number;
}

const Avatar: FC<IAvatarProps> = ({
  src,
  size = 30,
}): JSX.Element => {
  return (
    <Image
      alt="avatar"
      className="rounded-full"
      height={size}
      priority
      src={src}
      width={size}
    />
  );
};

export { Avatar };
