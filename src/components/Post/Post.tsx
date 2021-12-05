import UserIcon from '../UserIcon/UserIcon';
import './Post.css';

interface PostProp {
    userName: string;
    userPhoto: string;
    description: string;
    content: string;
    time: string;
}

export default function Post({info}: {info: PostProp}) {
  return (
    <div className="post-container">
      <UserIcon photo={info.userPhoto}/>
      <div className="post-content">
        <div className="post-title">
          <h4>{info.userName}</h4>
          <p>{info.time}</p>
        </div>
        <p>{info.description}</p>
        <img className="post-image" src={info.content} alt=""/>
      </div>
      
    </div>
  )
}
