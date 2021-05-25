import Avatar from '../component/Avatar'
import FrequestComponent from '../component/friend/Frequest'
import FriendList from '../component/friend/Friends'
import Loading from '../component/Loading'
import Profile from './Profile'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

function getJournalsByFriend(flist, journals) {
  let journalsByFriend = {}
  for (let i = 0; i < flist.length; i++) {
    let f = flist[i]
    journalsByFriend[f.id] = journals.filter(
      (j) => j.friends && j.friends.includes(f.id)
    )
  }
  console.log(journalsByFriend)

  return journalsByFriend
}

const useStyles = makeStyles({
  page: {
    position: 'relative',
    // maxWidth: "550px",
    margin: '0 auto',
    // border: "solid 1px blue",
  },
  verticalAlign: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'inline-block',
  },
  header: {
    position: 'relative',
    height: '49px',
    fontSize: '30px',
    fontWeight: 'bold',
    borderBottom: 'solid 1px black',
    textAlign: 'center',
  },
  avatar: {
    position: 'relative',
    height: '50px',
    // border: "solid 1px black",
  },
  content: {
    position: 'relative',
    height: 'calc(100vh - 160px)',
    overflow: 'scroll',
    // border: "solid 1px black",
  },
})

export default function Friends({ friendRef, frequestRef, journalRef }) {
  const classes = useStyles()

  const [frequests, setFrequests] = React.useState([])
  const [friendlist, setFriendlist] = React.useState([])
  const [journalsByFriend, setJournalsByFriend] = React.useState(null)

  const acceptFrequest = (fid) => {
    var newFriend = {
      id: 'f' + friendlist.length,
      picture: '',
      name: '',
      total_intimacy: 0,
    }
    for (var i = 0; i < frequests.length; i++) {
      if (frequests[i].id === fid) {
        newFriend.name = frequests[i].name
        newFriend.picture = frequests[i].picture
      }
    }
    friendRef.child('f' + friendlist.length).set(newFriend)
    frequestRef.child(fid).remove()
  }

  React.useEffect(() => {
    friendRef.on('value', (snapshot) => {
      const friendData = snapshot.val()
      journalRef.once('value', (snapshot) => {
        console.log(friendData)
        setFriendlist(Object.values(friendData))
        const journals = snapshot.val()
        setJournalsByFriend(
          getJournalsByFriend(
            Object.values(friendData),
            Object.values(journals)
          )
        )
      })
    })

    frequestRef.on('value', (snapshot) => {
      const frequestData = snapshot.val()
      console.log(frequestData)
      setFrequests(frequestData === null ? [] : Object.values(frequestData))
    })
  }, [])

  const rejectFrequest = (fid) => {
    frequestRef.child(fid).remove()
  }

  if (!journalsByFriend) return <Loading/>;
  
  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.verticalAlign}>Friends</div>
      </div>

      <Profile/>

      <div className={classes.content}>
        <FrequestComponent
          frequests={frequests}
          onRejectClick={rejectFrequest}
          onAcceptClick={acceptFrequest}
        />
        <FriendList flist={friendlist} journalsByFriend={journalsByFriend} />
      </div>
    </div>
  )
}
