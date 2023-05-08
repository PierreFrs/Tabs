import React from 'react'
import './Tabs.scss'

const Tabs = () => {
  return (
    <section className='tabs-section'>
        <div className="container">

            <div className="tabs-heading">
                <h2>More About Us</h2>
                <p>Click the button to learn more</p>
            </div>

            <div className="tabs">
                <div className="tabs-title">
                    <button className='tab'>Who We Are</button>
                    <button className='tab'>What We Do</button>
                    <button className='tab'>Get In Touch</button>
                </div>
                <div className="tabs-content">
                    <article className='content'>
                        <h4>Who We Are...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat sapiente doloribus quasi quisquam doloremque voluptates, pariatur iure ex voluptatum eos omnis reprehenderit neque libero nemo consequuntur debitis ipsum atque.</p>
                        <h4>What We Do...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat sapiente doloribus quasi quisquam doloremque voluptates, pariatur iure ex voluptatum eos omnis reprehenderit neque libero nemo consequuntur debitis ipsum atque.</p>
                        <h4>Get In Touch...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat sapiente doloribus quasi quisquam doloremque voluptates, pariatur iure ex voluptatum eos omnis reprehenderit neque libero nemo consequuntur debitis ipsum atque.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tabs