'use client';
import React from 'react'

import { useSearchParams } from 'next/navigation';

function page() {

  const searchParams = useSearchParams();
  const data = searchParams.get('data');
  const str = searchParams.get('str');

  return (
    <div>
      <h1>This is the Home Page</h1>
      <p>Data: {data}</p>
      <p>Str: Shubhranshu</p>
    </div>
  )
}

export default page