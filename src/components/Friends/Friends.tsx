import { BsPlusLg } from 'react-icons/bs'
import SectionTab from '../SectionTab/SectionTab'
import UserIcon from '../UserIcon/UserIcon'
import './Friends.css'

export default function Friends() {

  const admin = [
    {
      userName: 'David Cantillo',
      userPhoto: 'https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg',
      description: 'Nuevo post yaaayy',
      content: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
      time: '12:30 pm'
    },
  ];

  const members = [
    {
      userName: 'Sara Kane',
      userPhoto: 'https://media.sproutsocial.com/uploads/landscape-hero-bg-1.jpg',
      description: 'welcome team',
      content: 'https://media.sproutsocial.com/uploads/landscape-hero-bg-1.jpg',
      time: '10:12 am'
    },
    {
      userName: 'William Roger',
      userPhoto: 'https://www.mmcite.com/upload/2378-01-lpc-landscape-compact-wood-parkbench-07-1-gallery-large-1024x0.jpg',
      description: 'im so happy!!!!!!!!',
      content: 'https://www.mmcite.com/upload/2378-01-lpc-landscape-compact-wood-parkbench-07-1-gallery-large-1024x0.jpg',
      time: '9:30 am'
    }
  ]

  const online = [
    {
      userName: 'Nate Jones',
      userPhoto: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
      description: 'Nuevo post yaaayy',
      content: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
      time: '12:30 pm'
    },
  ]
  return (
    <div className="friends-container">
      <SectionTab title="Friend List" secondaryIcon={
        <div className="rectangular-icon">
          <BsPlusLg />
        </div>
      } />
      <div className="user-list">
        <h4 className="admin">ADMIN</h4>
        {
          admin.map((user,index) => (
            <div className="user-box" key={index}>
              <UserIcon photo={user.userPhoto}/>
              <div className="user-info">
                <h4 className="admin">{user.userName}</h4>
                <p>{user.description}</p>
              </div>
            </div>
          ))
        }
        
      </div>
      <div className="user-list">
        <h4 className="members">MEMBERS</h4>
        {
          members.map((user, index) => (
            <div className="user-box" key={index}>
              <UserIcon photo={user.userPhoto}/>
              <div className="user-info">
                <h4 className="members">{user.userName}</h4>
                <p>{user.description}</p>
              </div>
            </div>
          ))
        }
        
      </div>
      <div className="user-list">
        <h4 className="online">ONLINE</h4>
        {
          online.map((user, index) => (
            <div className="user-box" key={index}>
              <UserIcon photo={user.userPhoto}/>
              <div className="user-info">
                <h4 className="online">{user.userName}</h4>
                <p>{user.description}</p>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}
