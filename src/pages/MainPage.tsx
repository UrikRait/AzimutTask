import { Link } from 'react-router-dom'
import { Panel } from '../components/panel'
import { MessagePanel } from '../components/MessagePanel'
import { SlideMenu } from '../components/SlideMenu'
export default function MainPage() {
  return (
    <>
      <div className="wrapper__main">
        <Panel />
        <div className="content">
          <MessagePanel />
          <SlideMenu />
        </div>
      </div>
    </>
  )
}
