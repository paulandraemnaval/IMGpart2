"use client";
import { useEffect } from "react";
import "./globals.css";
interface props {
  children: React.ReactNode;
}

const layout = ({ children }: props) => {
  useEffect(() => {
    const comment = document.createComment(
      `A page so still, a web so wide,
A riddle wrapped where hints may hide.
You search the source, inspect with care,
Yet find no whispers lurking there.

The words mislead, a clever guise,
A painted mask to fool the eyes.
For those who probe, who know the way,
A silent voice begins to say—

Not in the code, not in the seams,
Not in the lines where logic gleams.
But sparks arise where shadows glow,
A fleeting trace in depths below.

So shift your gaze, let wisdom guide,
Where echoes form, and logs reside
A hidden spark, a silent call—
The secret waits where echoes fall.`
    );
    document.body.prepend(comment);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSI</title>
      </head>
      <body className="bg-black text-lg flex items-center justify-center h-[100vh]">
        {children}
      </body>
    </html>
  );
};

export default layout;
