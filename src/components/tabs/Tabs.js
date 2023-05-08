import React from 'react'
import './Tabs.scss'

const Tabs = () => {
  return (
    <section className='tabs-section --100vh --flex-center'>
        <div className="container">
            <div className="tabs-heading --text-center">
                <h2 className='--line --p'>More About Us</h2>
                <p className='--text-sm'>Click the button to learn more</p>
            </div>
            <div className="tabs --flex-start --bg-light">
                <div className="tabs-title">
                    <button className='tab active-tab'>Who We Are</button>
                    <button className='tab'>What We Do</button>
                    <button className='tab'>Get In Touch</button>
                </div>
                <div className="tabs-content">
                    <article className='content active-content'>
                    <h4>Who We Are...</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat sapiente doloribus quasi quisquam doloremque voluptates, pariatur iure ex voluptatum eos omnis reprehenderit neque libero nemo consequuntur debitis ipsum atque.</p>
                    <article className='content'>
                        <h4>What We Do...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat sapiente doloribus quasi quisquam doloremque voluptates, pariatur iure ex voluptatum eos omnis reprehenderit neque libero nemo consequuntur debitis ipsum atque.</p>
                    </article>
                    <article className='content'>
                        <h4>Get In Touch...</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat sapiente doloribus quasi quisquam doloremque voluptates, pariatur iure ex voluptatum eos omnis reprehenderit neque libero nemo consequuntur debitis ipsum atque.</p>
                    </article>
                        
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tabs