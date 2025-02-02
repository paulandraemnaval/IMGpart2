"use client";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log(
      "%cSilence speaks where words fail.",
      " font-weight: regular; font-size: 14px;"
    );
  }, []);

  return (
    <div>
      A page so plain, a sc<span className="text-red-500">re</span>en so still,
      <br />
      Just wor<span className="text-red-500">d</span>s and colors, dressed to
      thrill. <br />
      But <span className="text-red-500">h</span>idd
      <span className="text-red-500">e</span>n deep, behind the veil,
      <br />A sec<span className="text-red-500">r</span>et waits—a bu
      <span className="text-red-500">r</span>ied trail.
      <br />
      <br />
      The page invites no second glance, <br />
      No flicker, h<span className="text-red-500">i</span>nt, or circumstance.{" "}
      <br />
      Yet those who know, who dare to seek, <br />
      Will find the whispers i<span className="text-red-500">n</span> the sleek—{" "}
      <br />
      <br />
      With the ri<span className="text-red-500">g</span>ht action something
      appears, <br />
      Something that our kind does not fear <br />
      Through tangled texts and start of lines, <br />
      A message lies between the signs. <br />
      <br />
      A comment left, a subtle trace, <br />
      A cryptic note, a hidden place. <br />
      Not meant for all, but meant for you, <br />
      A puzzle only seekers view. <br />
      <br />
      So dig beneath, decode, reveal, <br />
      What’s hidden here was placed with skill. <br />
      A game of minds, a quiet test, <br />
      For those who seek beyond the rest. <br />
      <br />
    </div>
  );
};

export default Page;
