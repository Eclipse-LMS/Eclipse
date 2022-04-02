import {React, useState, useEffect} from 'react';
import Cookies from "universal-cookie";
import { useParams } from 'react-router';

function DashboardScreen(props) {
  let {room} = useParams();
  const cookies = new Cookies();
  const sessionToken = cookies.get('sessionToken')
  var url;
  if(sessionToken)
    url = `http://localhost:5010/vidcon?room=${room}&token=${sessionToken}`;
  else
    url = `http://localhost:5010/vidcon?room=${room}`;
  return (
    <div style={{height:'100vh',margin:'0',padding:'0',overflow:'hidden'}}>
    <iframe src = {url} title="Vidcon" height="100%" width="100%" allow="camera;microphone"></iframe>
    </div>
  )
}

export default DashboardScreen;