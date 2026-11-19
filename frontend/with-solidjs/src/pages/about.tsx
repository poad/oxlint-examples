import { createEffect, Loading } from 'solid-js';

import AboutData from './about.data.js';

export default function About() {
  const name = AboutData();

  createEffect(
    () => name(),
    (value) => {
      console.log(value);
    },
  );

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">About</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
        <Loading fallback={<span>...</span>}>
          <span>&nbsp;{name()}</span>
        </Loading>
      </p>
    </section>
  );
}
