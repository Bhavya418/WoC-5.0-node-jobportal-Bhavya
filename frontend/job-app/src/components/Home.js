import React from 'react'
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero data={true} title="A Simple Application Manager for finding jobs" dataUser="This is a application where a applicant can find jobs in the sector which he is master in."/>
      <Hero data={false} title ="A Simple Application Manager for finding employees" dataUser="This is a application where a applicant can find employees in the sector which you want in."/>
    </div>
  )
}

export default Home
