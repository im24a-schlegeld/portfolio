import Image from 'next/image';

export default function GamePreview({ src, poster, title }) {
  return (
    <div className="mediaFrame gamePreview">
      <a
        className="gamePreviewScreen"
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} in neuem Tab spielen`}
      >
        <Image
          className="gamePoster"
          src={poster}
          alt="Wheelie Escape: Motorradfahrer beim Wheelie auf einer Stadtstrasse"
          fill
          sizes="(max-width: 980px) 100vw, 650px"
        />
      </a>
      <div className="gamePreviewBar">
        <span>3D-Arcadespiel</span>
        <a href={src} target="_blank" rel="noopener noreferrer">
          Spiel starten <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
