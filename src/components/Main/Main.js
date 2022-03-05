import React, { useState } from 'react'
import { donators } from '../../shared/projectData';
import { HelpForm } from '../Form/HelpForm';
import { Slider } from '../Slider/Slider';
import styles from './Main.module.css';

export const Main = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="wrapper">
      <div className={styles.main}>
        <div className={styles.left_component}>
          <div className={styles.block} onClick={() => setShowForm(true)}>
            I need Help
          </div>
          <ul className={styles.text}>
            <li>Psychological help</li>
            <li>Legal assistance</li>
            <li>Financial help</li>
          </ul>
        </div>
        <div className={styles.right_component}>
          <div className={styles.block} onClick={() => setShowForm(true)}>
            I want to Help
          </div>
          <ul className={styles.text}>
            <li>Financial help</li>
            <li>Volunteering</li>
            <li>Accomodation</li>
          </ul>
        </div>
      </div>

      <div className={styles.donators}>
        <h2 className={styles.text_thk}>
          Special thanks to:
        </h2>
        <Slider />
      </div>

      {
        showForm && (
          <HelpForm setShowForm={setShowForm} />
        )
      }

    </div>
  )
}
