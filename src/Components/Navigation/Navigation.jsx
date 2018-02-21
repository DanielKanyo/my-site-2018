import React, { Component } from 'react';
/** material ui */
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionLoyalty from 'material-ui/svg-icons/action/loyalty';
import CommunicationForum from 'material-ui/svg-icons/communication/forum';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FontIcon from 'material-ui/FontIcon';
import { Card, CardHeader } from 'material-ui/Card';
import ProfileImg from '../../Images/danielkanyo5.jpg';
/** style */
import './Navigation.css';

const styles = {
  margin: 0,
  left: 15,
  top: 10,
  right: 'auto',
  position: 'fixed',
  zIndex: 2,
  width: 68,
  height: 68,
  padding: 16,
  menuStyle: {
    width: 34,
    height: 34,
    color: '#f2f2f2'
  },
  menuIconStyle: {
    marginRight: 28,
    marginLeft: 24,
    fontSize: '24px'
  },
  flatButtonStyle: {
    textAlign: 'left',
    color: '#f2f2f2',
    textTransform: 'capitalize',
    height: '45px'
  },
  closeIconStyle: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  cardStyle: {
    background: 'none',
    boxShadow: 'none',
    height: '90px',
    borderRadius: '0px',
    position: 'relative'
  },
  cardHeaderStyle: {
    position: 'absolute',
    bottom: 0
  }
};

class Navigation extends Component {

  handleChange = (value, event) => {
    this.props.handleChangeProp(value);
  };

  handleChangeIndex = (index) => {
    this.props.handleChangeIndexProp(index);
  };

  handleToggle = () => {
    this.props.handleToggleProp();
  }

  handleClose = () => {
    this.props.handleCloseProp();
  }

  handleReqChanged = () => {
    this.props.handleCloseProp();
  }

  render() {
    return (
      <div className="Navigation">
        <IconButton iconStyle={styles.menuStyle} className="menu-icon" style={styles} onClick={this.handleToggle}>
          <NavigationMenu />
        </IconButton>

        <Drawer
          docked={false}
          className="my-drawer"
          open={this.props.openProp}
          onRequestChange={this.handleReqChanged}
        >

          <div className="menu-profile">
            <IconButton iconStyle={styles.closeIconStyle} className="close-icon" onClick={this.handleToggle}>
              <NavigationClose />
            </IconButton>
            <Card style={styles.cardStyle}>
              <CardHeader
                style={styles.cardHeaderStyle}
                title="Daniel Kanyo"
                subtitle="Full-stack developer"
                avatar={ProfileImg}
              />
            </Card>
          </div>

          <div className="menu-item-container">
            <FlatButton
              className="menu-btn"
              fullWidth={true}
              style={styles.flatButtonStyle}
              onClick={() => { this.handleClose(); this.handleChangeIndex(0) }}
              label="Home"
              secondary={true}
              icon={<ActionHome style={styles.menuIconStyle} />}
            />
            <FlatButton
              className="menu-btn"
              fullWidth={true}
              style={styles.flatButtonStyle}
              onClick={() => { this.handleClose(); this.handleChangeIndex(1) }}
              label="About Me"
              secondary={true}
              icon={<SocialPerson style={styles.menuIconStyle} />}
            />
            <FlatButton
              className="menu-btn"
              fullWidth={true}
              style={styles.flatButtonStyle}
              onClick={() => { this.handleClose(); this.handleChangeIndex(2) }}
              label="Skills"
              secondary={true}
              icon={<ToggleStar style={styles.menuIconStyle} />}
            />
            <FlatButton
              className="menu-btn"
              fullWidth={true}
              style={styles.flatButtonStyle}
              onClick={() => { this.handleClose(); this.handleChangeIndex(3) }}
              label="Opinions"
              secondary={true}
              icon={<ActionLoyalty style={styles.menuIconStyle} />}
            />
            <FlatButton
              className="menu-btn"
              fullWidth={true}
              style={styles.flatButtonStyle}
              onClick={() => { this.handleClose(); this.handleChangeIndex(4) }}
              label="Contact"
              secondary={true}
              icon={<CommunicationForum style={styles.menuIconStyle} />}
            />
          </div>

          <hr />

          <div className="menu-item-social">
            <FlatButton
              className="menu-btn-social"
              fullWidth={true}
              style={styles.flatButtonStyle}
              href="https://www.instagram.com/daniel_kanyo/"
              target="_blank"
              label="Instagram"
              secondary={true}
              icon={<FontIcon className={"fa fa-instagram"} style={styles.menuIconStyle} />}
            />
            <FlatButton
              className="menu-btn-social"
              fullWidth={true}
              style={styles.flatButtonStyle}
              href="https://www.facebook.com/kanyo.daniel"
              target="_blank"
              label="Facebook"
              secondary={true}
              icon={<FontIcon className={"fa fa-facebook-square"} style={styles.menuIconStyle} />}
            />
            <FlatButton
              className="menu-btn-social"
              fullWidth={true}
              style={styles.flatButtonStyle}
              href="https://github.com/DanielKanyo"
              target="_blank"
              label="GitHub"
              secondary={true}
              icon={<FontIcon className={"fa fa-github"} style={styles.menuIconStyle} />}
            />
          </div>

        </Drawer>
      </div>
    );
  }
}

export default Navigation;
