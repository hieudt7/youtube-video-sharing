'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-purple-secondary text-white flex items-center">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0 w-full">
        <div className="py-6 text-xs flex justify-center items-center flex-col">
          <div>
            <Link href="#">Privacy</Link> | <Link href="#">Terms</Link>
          </div>
          <p className="text-center">Copyright © 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
