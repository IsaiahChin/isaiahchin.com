"use client";

import { MdOutlineEmail } from "react-icons/md";

export default function EmailButton() {
  return (
    <a
      href="mailto:hello@isaiahchin.com"
      className="bg-inherit p-2 rounded-xl hover:scale-125 active:scale-100 transition-transform"
    >
      <MdOutlineEmail size="1.6rem" />
    </a>
  );
}
