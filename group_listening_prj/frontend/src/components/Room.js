import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


export default function Room(props) {
    const initialState = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false
    }
    const [roomData, setRoomData] = useState(initialState) 
    const { roomCode } = useParams()
  
  
    useEffect(() => {
      fetch("/api/get-room" + "?code=" + roomCode)
        .then(res => res.json())
        .then(data => {
          setRoomData({
            ...roomData, 
            votesToSlip: data.votes_to_skip,
            guestCanPause: data.guest_can_pause,
            isHost: data.is_host,
          })
        })
    },[roomCode,setRoomData])
    
    return (
      <div>
        <h3>{roomCode}</h3>
        <p>Votes: {roomData.votesToSkip}</p>  
        <p>Guest: {roomData.guestCanPause.toString()}</p>
        <p>Host: {roomData.isHost.toString()}</p>  
      </div>
    )
  }