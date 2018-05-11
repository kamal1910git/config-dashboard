import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import SvgIcon from 'react-icons-kit';
import classNames from 'classnames';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

export default class LeftNav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/"><SvgIcon size={20} icon={ic_aspect_ratio}/> Dashboard</a>
        <a id="about" className="menu-item" href="/"><SvgIcon size={20} icon={ic_business}/> Reports</a>
        <a id="contact" className="menu-item" href="/"><SvgIcon size={20} icon={ic_business}/> Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

