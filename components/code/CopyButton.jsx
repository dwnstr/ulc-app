import React, { useState } from "react";
import { ClipboardCopy } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = (props) => {
  const { content } = props;
  const [justCopied, setJustCopied] = useState(false);

  return (
    <CopyToClipboard
      text={content}
      onCopy={() => {
        console.log("Copied!");
        setJustCopied(true);
        setTimeout(() => {
          setJustCopied(false);
        }, 1000);
      }}
    >
      <button
        className={`flex gap-2 text-sm px-4 pb-1 items-center justify-center h-8 w-full aspect-square rounded hover:animate-pulse hover:brightness-125 border-t border-shark-500 transition duration-500
                ${justCopied ? "bg-emerald-500" : "bg-shark-600"}
            `}
      >
        {!justCopied ? "Copy" : "Copied!"}
        <ClipboardCopy size={17} />
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
