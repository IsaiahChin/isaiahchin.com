'use client';

import { useState } from 'react';
import EmailIcon from '../assets/EmailIcon';
import ClickableIcon from '../assets/ClickableIcon';

export default function ShowEmailButton() {
  const [isShowingEmail, setIsShowingEmail] = useState(false);
  const email = 'hello@isaiahchin.com';

  function showEmail() {
    if (isShowingEmail == false) {
      setIsShowingEmail(true);
    } else {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      className="my-2 sm:my-0 p-2 px-3 inline-flex gap-1 hover:scale-105 active:scale-100 clickable"
      onClick={() => showEmail()}
      type="button"
    >
      {isShowingEmail ? (
        <>
          {email}
          <EmailIcon />
        </>
      ) : (
        <>
          Show email
          <ClickableIcon />
        </>
      )}
    </button>
  );
}
