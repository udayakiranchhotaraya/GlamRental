import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import StatCard from './StatCard';
import dressApiService from '../apiServices/dress.apiServices';
import userApiService from '../apiServices/user.apiServices';
import { overviewCardsContent } from '../constants';

const Overview = () => {
  const [ numberOfDresses, setNumberOfDresses ] = useState(0);
  const [ numberOfUsers, setNumberOfUsers ] = useState(0);
  const [ numberOfOrders, setNumberOfOrders ] = useState(0);

  async function getNumberOfDresses() {
      const res = await dressApiService.dressCount();
      // console.log(res);
      if (res.status) {
        setNumberOfDresses(res.data);
      }
  }

  async function getNumberOfEndUsers () {
    const res = await userApiService.getNumberOfEndUsers();
    // console.log(res);
    if (res.status) {
      setNumberOfUsers(res.data);
    }
  }

  async function getNumberOfOrders () {
    const res = await userApiService.getNumberOfOrders();
    // console.log(res);
    if (res.status) {
      setNumberOfOrders(res.data);
    }
  }

  useEffect(() => {
    // setInterval(() => {
      getNumberOfDresses();
      getNumberOfEndUsers();
      getNumberOfOrders();
    // }, 3000);
  }, []);

  if (!numberOfDresses || !numberOfUsers || !numberOfOrders) return;

  return (
    <>
      <div className='flex justify-evenly p-2'>
        <StatCard href={`/allProducts`} stat={numberOfDresses} title={numberOfDresses === 1 ? "Dress" : "Dresses"} icon={`https://img.icons8.com/ios-glyphs/90/modelled-dress.png`}/>
        <StatCard stat={numberOfUsers} title={numberOfUsers === 1 ? "User" : "Users"} icon={`https://img.icons8.com/ios-filled/100/user.png`}/>
        <StatCard href={`/allOrders`} stat={numberOfOrders} title={numberOfOrders === 1 ? "Order" : "Orders"} icon={`https://img.icons8.com/ios-filled/100/product.png`}/>
      </div>
    </>
  )
}

export default Overview