interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, onClose }: LightboxProps) {
  if (!isOpen) return <div className="lightbox"></div>;

  return (
    <div className={`lightbox${isOpen ? ' open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <img src={imageSrc} alt="" />
    </div>
  );
}