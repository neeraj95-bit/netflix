import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      <video className="video"
       autoPlay 
       progress 
       controls 
       src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"/>
    </div>
  )
}
