import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from '@navigations/BottomTabs';
import NAVIGATION from '@navigations/navigation';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={NAVIGATION.DRAWER} component={BottomTabs} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
