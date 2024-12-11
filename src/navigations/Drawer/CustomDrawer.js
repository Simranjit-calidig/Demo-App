import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import NAVIGATION from '@navigations/navigation';

function CustomDrawer(props) {
  const navigation = useNavigation();
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={({focused, color}) => (
          <Text style={styles.labelStyles}>{'AI Chat'}</Text>
        )}
        onPress={pro => {
          console.log('item', props);
          navigation.navigate(NAVIGATION.SCREEN.CHAT, {});
          setTimeout(() => {
            props?.navigation.closeDrawer();
          }, 300);
        }}
      />
    </DrawerContentScrollView>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  labelStyles: {
    fontSize: 20,
    fontWeight: '600',
  },
}));

export default CustomDrawer;
