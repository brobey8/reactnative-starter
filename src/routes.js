import React from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux';
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="login" title="Login"/>
      <Scene key="repopage" component={RepoPage} title="Repo page"/>
      <Scene key="userpage" component={UserPage}/>
    </Scene>
);

export default scenes