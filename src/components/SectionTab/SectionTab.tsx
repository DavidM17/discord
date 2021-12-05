import './SectionTab.css';

export default function SectionTab({ title, primaryIcon, secondaryIcon }: { title: string, primaryIcon?: JSX.Element, secondaryIcon?: JSX.Element }) {
  return (
    <div className="section-tab">
      <div className="section-title">
        {primaryIcon}
        <h4>{title}</h4>
      </div>
      <div>
        {secondaryIcon}
      </div>
    </div>
  )
}
