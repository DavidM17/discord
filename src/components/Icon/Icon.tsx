import './Icon.css';

export default function Icon({ src, isActive, func }: { src: string, isActive: boolean, func?: () => void }) {
  return (
    <div className="icon-container" onClick={func}>
      <div className={isActive ? "active-icon" : "active-icon hide-icon"}></div>
      <div className={isActive ? "icon active-icon-tab" : "icon"}>
        <img src={src} className="icon-image" alt="" />
      </div>
    </div>
  )
}
