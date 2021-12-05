import './MainView.css';
import { BsSearch, BsFillBellFill, BsFillFlagFill } from 'react-icons/bs';
import Post from '../Post/Post';

export default function MainView() {

  let posts = [
    {
      userName: 'David Cantillo',
      userPhoto: 'https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg',
      description: 'Nuevo post yaaayy',
      content: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
      time: '12:30 pm'
    },
    {
      userName: 'Sara Kane',
      userPhoto: 'https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg',
      description: 'welcome team',
      content: 'https://media.sproutsocial.com/uploads/landscape-hero-bg-1.jpg',
      time: '10:12 am'
    },
    {
      userName: 'William Roger',
      userPhoto: 'https://imgv3.fotor.com/images/homepage-feature-card/one-tap-photo-enhancer.jpg',
      description: 'im so happy!!!!!!!!',
      content: 'https://www.mmcite.com/upload/2378-01-lpc-landscape-compact-wood-parkbench-07-1-gallery-large-1024x0.jpg',
      time: '9:30 am'
    }
  ]

  posts.push(...posts);

  return (
    <div className="main-view-container">
      <div className="main-view">
        <div className="search-bar">
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <BsSearch className="bg-icon" size="20" />
            <input className="custome-input" type="text" name="search" placeholder="Search..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', columnGap: '12px' }}>
            <BsFillFlagFill className="bg-icon" />
            <BsFillBellFill className="bg-icon" />
          </div>
        </div>
        <div className="inner-content">
        {
          posts.map((post, index) => (
            <Post info={post} key={index} />
          ))
        }
        </div>
      </div>
    </div>
  )
}
