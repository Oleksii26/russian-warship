import axios from "axios";
import { useEffect, useState } from "react";
import css from './App.module.css'

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

  return (<div className={css.heroes}>
    <div className={css.anim}>
      <h4 className={css.header}>Russian warship, go fuck yourself! Русский военный корабль, пошел на ...й! Російський воєнний корабель, іди на ...й! </h4>
    </div>
    <div className={css.container}>
      <p className={css.gsy}>Генеральний штаб ЗС України інформує:</p>
      <h3>Загальні бойові втрати російського окупанта</h3>
      <p><span className={css.span}>станом на {state.date}</span> ({state.day}-й день війни)</p>
      <div className={css.table}>
        <div className={css.td}>
          <img width={60} alt='123' src='https://russianwarship.rip/images/icons/icon-people.svg' />
          <div>
            <h4>{stats.personnel_units}(+{increase.personnel_units})</h4>
            <p>особовий склад</p></div>
        </div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-tank.svg' />
          <div>
            <h4>{stats.tanks}(+{increase.tanks})</h4>
            <p>танки</p></div>
        </div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-bbm.svg' />
          <div>
            <h4>{stats.armoured_fighting_vehicles}(+{increase.armoured_fighting_vehicles})</h4>
            <p>ББМ</p></div></div>
        <div className={css.td}>
          <img width={60} alt='123' src='https://russianwarship.rip/images/icons/icon-art.svg' />
          <div>
          <h4>{stats.artillery_systems}(+{increase.artillery_systems})</h4>
          <p>артилерійські системи</p></div></div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-rszv.svg' />
          <div>
          <h4>{stats.mlrs}(+{increase.mlrs})</h4>
          <p>РСЗВ</p></div></div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-ppo.svg' />
          <div>
          <h4>{stats.aa_warfare_systems}(+{increase.aa_warfare_systems})</h4>
          <p>засоби ППО</p></div></div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-plane.svg' />
          <div>
          <h4>{stats.planes}(+{increase.planes})</h4>
          <p>літаки</p></div></div>
        <div className={css.td}>
          <img className={css.hel} width={70} alt='123' src='https://russianwarship.rip/images/icons/icon-helicopter.svg' />
          <div>
          <h4>{stats.helicopters}(+{increase.helicopters})</h4>
          <p>гелікоптери</p></div></div>
        <div className={css.td}>
          <img width={60} alt='123' src='https://russianwarship.rip/images/icons/icon-auto.svg' />
          <div>
          <h4>{stats.vehicles_fuel_tanks}(+{increase.vehicles_fuel_tanks})</h4>
          <p>автомобільна техніка, цистерни</p></div></div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-ship.svg' />
          <div>
          <h4>{stats.warships_cutters}(+{increase.warships_cutters})</h4>
          <p>кораблі</p></div></div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-bpla.svg' />
          <div>
          <h4>{stats.uav_systems}(+{increase.uav_systems})</h4>
          <p>БПЛА</p></div></div>
        <div className={css.td}>
          <img width={70} alt='123' src='https://russianwarship.rip/images/icons/icon-special.svg' />
          <div>
          <h4>{stats.special_military_equip}(+{increase.special_military_equip})</h4>
          <p>спец.техніка</p></div></div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-trk.svg' />
          <div>
          <h4>{stats.atgm_srbm_systems}(+{increase.atgm_srbm_systems})</h4>
          <p>установки ОТРК/ТРК</p></div></div>
        <div className={css.td}>
          <img width={80} alt='123' src='https://russianwarship.rip/images/icons/icon-rocket.svg' />
          <div>
          <h4>{stats.cruise_missiles}(+{increase.cruise_missiles})</h4>
          <p>крилаті ракети</p></div></div>
      </div>
    </div>
  </div>
  )
}

export default App;
