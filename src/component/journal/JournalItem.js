import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import FriendSimpleView from './FriendSimpleView'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import React from 'react'
import { nullToList } from '../../util/format'
import { getIconComponent } from '../../util/icon'
import DateComponent from './DateComponent'
import StaticMap from '../home/StaticMap'

export function getDivs(items) {
  if (!items) return <div> empty </div>
  return items.map((item) => (
    <div style={{ display: 'inline' }} key={item}>
      {' '}
      {item}{' '}
    </div>
  ))
}

export function getHashtags(hashtags) {
  var temp = hashtags.map((hashtag) => <div key={hashtag}>#{`${hashtag}`}</div>)
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {temp}
    </div>
  )
}

export function getFriends(friends) {
  if (!friends) return <div> no friends... </div>
  var temp = friends.map((friend) => (
    <FriendSimpleView key={friend.id} friend={friend} />
  ))
  return (
    <div
      style={{
        display: 'flex',
        float: 'right',
      }}
    >
      {temp}
    </div>
  )
}

export function getMetaphors(metaphor) {
  if (!metaphor) return <div> empty metaphor </div>
  // var randomIndex = Math.floor(Math.random() * 3);
  var randomIndex = 2
  if (randomIndex === 0) {
    return (
      <Card
        style={{
          background: 'linear-gradient(45deg, #73A15D, #94C25A)',
          height: '70px',
          borderRadius: '15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/tree.png'}
            style={{
              position: 'absolute',
              top: '17px',
              left: '15px',
              height: '35px',
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: '1.2em',
              color: 'white',
              position: 'relative',
              top: '20px',
              left: '70px',
            }}
          >
            {metaphor.tree} trees
          </Typography>
        </div>
      </Card>
    )
  } else if (randomIndex === 1) {
    return (
      <Card
        style={{
          background: 'linear-gradient(45deg, #A0BFE3, #F0A2B0)',
          height: '70px',
          borderRadius: '15px',
        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/images/taxi.png'}
          style={{
            position: 'absolute',
            top: '17px',
            left: '15px',
            height: '35px',
          }}
        />
        <Typography
          variant="body1"
          style={{
            fontSize: '1.1em',
            color: 'white',
            position: 'absolute',
            top: '22px',
            left: '61px',
          }}
        >
          {metaphor.taxi} won
        </Typography>
      </Card>
    )
  } else {
    return (
      <Card
        style={{
          background: 'linear-gradient(45deg, #EED28B, #DB7E61)',
          height: '70px',
          borderRadius: '15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/hamburger.png'}
            style={{
              position: 'absolute',
              top: '17px',
              left: '15px',
              height: '35px',
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: '1.15em',
              color: 'white',
              position: 'relative',
              top: '21px',
              left: '65px',
            }}
          >
            {metaphor.burger} burgers
          </Typography>
        </div>
      </Card>
    )
  }
}

export default function JournalItem({ journal, openJournal, friends }) {
  if (!journal) return null
  const emojis = nullToList(journal.emojis).map(getIconComponent)
  return (
    <Card
      onClick={() => openJournal(journal)}
      style={{
        margin: '35px',
        padding: '35px',
      }}
    >
      <div
        style={{
          borderBottom: '1px solid black',
          display: 'flex',
          flexWrap: 'wrap',
          height: '30px',
          overflow: 'hidden',
          paddingBottom: '5px',
        }}
      >
        <div
          style={{
            width: '50%',
          }}
        >
          {journal.weather}
          <DateComponent
            startTime={journal.startTime}
            endTime={journal.endTime}
          />
        </div>

        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          {emojis}
        </div>
      </div>

      <div
        style={{
          background: '#DDDDDD',
          position: 'relative',
          top: '30px',
          display: 'flex',
          flexWrap: 'noWrap',
          height: '60px',
        }}
      >
        <div
          style={{
            background: '#CDCDCD',
            minWidth: '50%',
            width: '70%',
            height: '38px',
            fontSize: '20px',
            marginTop: 'auto',
            overflow: 'hidden',
          }}
        >
          <Typography variant="h4">{journal.title}</Typography>
        </div>

        <div
          style={{
            marginTop: 'auto',
            minWidth: '5vw',
          }}
        ></div>

        <div
          style={{
            marginLeft: 'auto',
            marginTop: 'auto',
            // height: '25px',
            overflow: 'hidden',
          }}
        >
          {getHashtags(journal.hashtags)}
        </div>
      </div>

      {/* 제목 아래 */}
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            width: '80%',
          }}
        >
          <div
            style={{
              background: '#BCBCBC',
              position: 'relative',
              top: '55px',
              width: '90%',
              height: '120px',
              overflow: 'hidden',
            }}
          >
            {journal.desc}
          </div>

          <div
            style={{
              background: '#CCCCCC',
              position: 'relative',
              top: '85px',
              width: '90%',
              height: '70px',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '160px',
              }}
            >
              {getMetaphors(journal.metaphors)}
            </div>

            <div>
              <div
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    marginLeft: 'auto',
                  }}
                >
                  {getFriends(friends)}
                </div>
                <div
                  style={{
                    marginTop: 'auto',
                    marginLeft: 'auto',
                  }}
                >
                  {journal.distance} km
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginLeft: 'auto',
            background: '#555555',
            position: 'relative',
            top: '55px',
            height: '220px',
            width: '30%',
          }}
        >
          <StaticMap
            route={journal.route}
            zoom={15}
            width={'100%'}
            height={'300px'}
          />
        </div>
      </div>

      <div
        style={{
          height: '65px',
        }}
      ></div>

      {/* <div
        style={{
          background: "#CCCCCC",
          position: "relative",
          float: "left",
        }}
      >
        map
      </div> */}
    </Card>
  )
}
