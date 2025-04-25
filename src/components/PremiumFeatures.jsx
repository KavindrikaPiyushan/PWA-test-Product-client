import React from 'react'
import { Link } from 'react-router-dom';

export default function PremiumFeatures() {
  return (
    <div style={{color:"red"}}>
      PremiumFeatures
      <Link to='/' style={{paddingTop:'20px', display:'block'}}>Back</Link>
    </div>
  )
}
