import './UserIcon.css';

export default function UserIcon({photo}: {photo: string}) {
  return (
    <div className="image-container">
      <img className="img-user" src={photo} alt="">
      </img>
    </div>
  )
}
