import { Button, Modal, Typography } from '@material-ui/core'
import { MetaphorContainer, StaticMap } from './'

import { Link } from 'react-router-dom'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    position: 'absolute',
    width: '75%',
    maxHeight: '75vh',
    overflowY: 'scroll',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '15px',
    position: 'relative',
    top: '-5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  half: {
    display: 'inline-block',
    width: '50%',
    paddingBottom: '10px',
  },
  label: {
    display: 'inline-block',
    fontSize: '15px',
    fontWeight: 'bold',
    padding: '5px',
    paddingLeft: '0',
  },
  button: {
    width: '100%',
    textAlign: 'center',
    // border: "solid 1px black",
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#FF85AC',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '10px',
  },
}))

export default function JournalModal(props) {
  const classes = useStyles()
  var open = props.open
  var distance = props.distance
  var time = props.time
  var amount = props.amount
  var route = props.route
  var closeModal = props.closeModal

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <div id="modal-title" className={classes.title}>
            <Typography
              style={{
                display: 'inline-block',
                justifyContent: 'flex-start',
                position: 'relative',
                left: '30px',
                flex: 1,
              }}
              variant="h5"
            >
              Today's Ride
            </Typography>

            <Button
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'relative',
                left: '5px',
              }}
              size="small"
              onClick={closeModal}
            >
              <img
                alt="close button"
                src={process.env.PUBLIC_URL + '/images/close.png'}
              />
            </Button>
          </div>

          <MetaphorContainer amount={amount} />

          <hr />

          <div id="modal-description">
            <div className={classes.half}>
              <div className={classes.label}>Time</div> {time}
            </div>
            <div className={classes.half}>
              <div className={classes.label}>Distance</div> {distance}
            </div>
            <br />

            <div>
              <div className={classes.label}>Route</div>
              <StaticMap
                route={route}
                zoom={15}
                width={'100%'}
                height={'300px'}
              />
            </div>

            <Button className={classes.button} onClick={props.handleJournal}>
              Journal Ride
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
