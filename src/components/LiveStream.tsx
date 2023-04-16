import { UserType } from "../types"

type PropsType = {
  liveUsers: UserType[]
}

const LiveStream = ({ liveUsers }: PropsType) => {
  return (
    <div className='live-stream'>
      <img className="live-stream__img" src="/images/live-stream-poster.jpg" alt="Live Stream Poster" />
      <div className="live-stream__info">
        <h2>Fornite New Season</h2>
        <p className="space-outer-1">Join Live Stream</p>
      </div>
      <div className="live-stream__time">
        <div className="f-icon-2 live-stream__icon">
          <svg width="100%" height="100%" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"></path><path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h8Zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1Zm-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"></path></g></svg>
        </div>
        <span>11</span>
        <span>:</span>
        <span>45</span>
      </div>
      <div className="live-stream__users">
        {liveUsers.map((u, index) => (
          <div key={`live-user${index}`} className="live-stream__user" data-title={u.name}>
            <span>{ u.name.substr(0,1) }</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveStream
