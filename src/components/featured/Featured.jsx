import { Info, PlayArrow } from '@mui/icons-material'
import './featured.scss'
    
export default function Featured  ({type})  {
    return (
        <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === 'movie' ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="">Adventure</option>
                    <option value="">Comedy</option>
                    <option value="">Crime</option>
                    <option value="">Fantasy</option>
                    <option value="">Historical</option>
                    <option value="">Horror</option>
                    <option value="">Romance</option>
                    <option value="">Sci-fi</option>
                    <option value="">Thriller</option>
                    <option value="">Western</option>
                    <option value="">Animation</option>
                    <option value="">Drama</option>
                    <option value="">Documentary</option>
                </select>
            </div>
        )}
            <img src="https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=740&t=st=1702917804~exp=1702918404~hmac=23882df49cc086a620bf2d9d0a930b00f492e3ce1150f6ce56321dfd7bcd87cc" alt="" />

            <div className='info'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_fgkUENiTYBfLbJFLUon3-sL9TQWfwSb_Q&usqp=CAU" alt="" />

                <span className='desc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, itaque commodi nulla consequuntur quod eos, voluptatibus odio eaque soluta praesentium distinctio eum omnis sed natus assumenda libero nisi magnam modi, rem minus! Veritatis nisi eos eum ullam atque! Quia, aliquam.
                </span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <Info/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>

    )
}


