
// import React from "react";
// import { hot } from 'react-hot-loader/root';

// class App extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h1>
//           Hello {name}
//         </h1>
//       </>
//     );
//   }
// }

// export default hot(App);

// import logo from './logo.svg';
import React from 'react';

import './App.css';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import dataSet from "./data.json"
import { hot } from 'react-hot-loader/root';
import g1 from "./g1.png"
import g2 from "./g2.png"
import g3 from "./g3.png"
import g4 from "./g4.png"
import g5 from "./g5.png"
import g6 from "./g6.png"

// import BG1 from "./bg1.png"

function App() {

  // const bg1 = new Image()
  // bg1.src = BG1

  const navRef = useRef(null)
  const [down, setDown] = useState(false)
  const [data, setData] = useState()
  const [dataI, setDataI] = useState([
    ["g1", g1],
    ["g2", g2],
    ["g3", g3],
    ["g4", g4],
    ["g5", g5],
    ["g6", g6],
  ])
  const [selectGus, setSelectGus] = useState(dataSet.gusi[0])

  // const myObject = {
  //   "g1": "значение1",
  //   "g2": "значение2",
  //   "g3": "значение3",
  //   "g4": "значение4",
  //   "g5": "значение5",
  //   "g6": "значение6",
  // };
  // const selectedValue = myObject["g3"];
  // // или
  // // const selectedValue = myObject.g3;
  // console.log(selectedValue);

  useEffect(() => {
    // console.log(selectGus)
    // setData()
    // setData(selectGus.img)

    const i = selectGus.img
    // console.log(i)

    // dataI["g2"]
    const selectedValue = dataI.filter(item => item[0] === i);
    // const selectedValue = ;

    console.log(selectedValue[0][1])

  }, [dataSet, selectGus])

  window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
      setDown(true)

      if (navRef.current) {
        navRef.current.style.top = "0"
        console.log(navRef.current.style.top)
      }

      // console.log('Колесо вниз');
      // console.log(down);
    } else {
      if (navRef.current) {
        navRef.current.style.top = "82vh"
        console.log(navRef.current.style.top)
      }
    }
  });




  return (
    <>

      <div className='containter'>
        {/* <div className='p-ab'> */}

        <nav className="sticky" ref={navRef}>

          <div className="flex-center">
            <h1>мамины гуси {down}</h1>
            {/* {down && (<h1>123</h1>)} */}
          </div>

          <ul className=''>
            <li><a onClick={() => setSelectGus(dataSet.gusi[0])}>гусь_1</a></li>
            <li><a onClick={() => setSelectGus(dataSet.gusi[1])}>гусь_2</a></li>
            <li><a onClick={() => setSelectGus(dataSet.gusi[2])}>гусь_3</a></li>
            <li><a onClick={() => setSelectGus(dataSet.gusi[3])}>гусь_4</a></li>
            <li><a onClick={() => setSelectGus(dataSet.gusi[4])}>гусь_5</a></li>
            <li><a onClick={() => setSelectGus(dataSet.gusi[5])}>гусь_6</a></li>
          </ul>
        </nav>


        <section className='s1'>
          <div className="gus1">
          </div>
          {/* <h1>Section One</h1> */}
        </section>




        <section className='s2'>
          <div className="section2">

            <div className="block block1">
              <div className="box">
                <h2>Умения Гусь {selectGus.id}</h2>
                <div className='col'>
                  <h4>Скорость: {selectGus.speed}</h4>
                  <h4>Полет: {selectGus.flight}</h4>
                  <h4>Сила: {selectGus.strength}</h4>
                  <h4>Атака: {selectGus.attack}</h4>
                  <h4>Оборона: {selectGus.defense}</h4>
                  <h4>Громкость: {selectGus.volume}</h4>
                </div>

              </div>
            </div>

            <div className="block block2">
              <div className="box box2">
                {/* <div className="imgGus">1</div> */}
                <img className='imgGus' src={dataI.filter(item => item[0] === selectGus.img)[0][1]} alt="" />
                {/* <img className='imgGus' src={g6}  alt="" /> */}
              </div>
            </div>

            <div className="block block3">
              <div className="box"></div>
            </div>

          </div>
        </section>

        {/* <img className='imgGus' src={selectGus.img} alt="" /> */}


      </div>
    </>


  );
}

export default hot(App);

