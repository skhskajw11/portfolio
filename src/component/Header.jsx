import { useState } from 'react';
import '../styles/style.css';
import '../styles/tailwindcss.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('home'); 


  const tabs = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skill' },
    { name: 'Project', id: 'projects' },
    { name: 'Archiving', id: 'archiving' },
  ];


  const handleTabClick = (e, tabId) => {
    e.preventDefault(); 
    setActiveTab(tabId); 
    const targetElement = document.getElementById(tabId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <header className="headerObj">
        <h1 className="logo">PortFoilo</h1>
        <nav>
          <ul className="nav-links">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={(e) => handleTabClick(e, tab.id)}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header