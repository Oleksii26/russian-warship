import axios from "axios";
import { useEffect, useState } from "react";
import css from './App.module.css'
import image from './img/gny.png'
import image1 from './img/gny1.png'

const getData = async () => {
  const { data } = await axios.get('https://russianwarship.rip/api/v1/statistics/latest')
  return data
}

const App = () => {
  const [state, setStae] = useState([])

  useEffect(() => {
    getData().then(data => setStae(data.data))
  }, [])

  const { increase = 0, stats = 0 } = state
  console.log(state)
  console.log('state')

  return (<div className={css.heroes}>
    <div className={css.anim}>
      <h4 className={css.header}>Russian warship, go fuck yourself! Русский военный корабль, пошел на ...й! Російський воєнний корабель, іди на ...й!</h4>
    </div>
    <div className={css.container}>
      <p className={css.gsy}>Генеральний штаб ЗС України інформує</p>
      <h3>Загальні бойові втрати російського окупанта</h3>
      <p><span className={css.span}>станом на {state.date}</span> ({state.day}-й день війни)</p>
      <div className={css.table}>
        <div className={css.td}>
          <h4>{stats.personnel_units}(+{increase.personnel_units})</h4>
          <p>особового складу</p></div>
        <div className={css.td}>
          <h4>{stats.tanks}(+{increase.tanks})</h4>
          <p>танків</p></div>
        <div className={css.td}>
          <h4>{stats.armoured_fighting_vehicles}(+{increase.armoured_fighting_vehicles})</h4>
          <p>БМП</p></div>
        <div className={css.td}>
          <h4>{stats.artillery_systems}(+{increase.artillery_systems})</h4>
          <p>артилерійських систем</p></div>
        <div className={css.td}>
          <h4>{stats.mlrs}(+{increase.mlrs})</h4>
          <p>РСЗВ</p></div>
        <div className={css.td}>
          <h4>{stats.aa_warfare_systems}(+{increase.aa_warfare_systems})</h4>
          <p>засоби ППО</p></div>
        <div className={css.td}>
          <h4>{stats.planes}(+{increase.planes})</h4>
          <p>літаків</p></div>
        <div className={css.td}>
          <h4>{stats.helicopters}(+{increase.helicopters})</h4>
          <p>РСЗВ</p></div>
        <div className={css.td}>
          <h4>{stats.vehicles_fuel_tanks}(+{increase.vehicles_fuel_tanks})</h4>
          <p>засоби ППО</p></div>
        <div className={css.td}>
          <h4>{stats.warships_cutters}(+{increase.warships_cutters})</h4>
          <p>кораблів</p></div>
        <div className={css.td}>
          <h4>{stats.uav_systems}(+{increase.uav_systems})</h4>
          <p>РСЗВ</p></div>
        <div className={css.td}>
          <h4>{stats.special_military_equip}(+{increase.special_military_equip})</h4>
          <p>спец.техніка</p></div>
        <div className={css.td}>
          <h4>{stats.atgm_srbm_systems}(+{increase.atgm_srbm_systems})</h4>
          <p>установок ОТРК/ТРК</p></div>
        <div className={css.td}>
          <h4>{stats.cruise_missiles}(+{increase.cruise_missiles})</h4>
          <p>крилаті ракети</p></div>
        <img className={css.put} width={165} height={185} src={image} alt='123' />
        <img className={css.put1} width={150} src={image1} alt='123' />
      </div>
    </div>
  </div>
  )
}

export default App;
