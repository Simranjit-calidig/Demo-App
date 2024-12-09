import {
  House,
  ShoppingCart,
  UserRound,
  ClipboardList,
} from 'lucide-react-native';
import {AiChatIcon} from '@assets/SVGs';
import NAVIGATION from '@navigations/navigation';

const inActiveColor = '#36363d';
const activeColor = 'orange';

export const tabHelper = isDark => {
  const TABS = [
    {
      title: 'Home',
      Icon: {
        active: <House color={activeColor} />,
        inActive: <House color={inActiveColor} />,
      },
      route: NAVIGATION.SCREEN.HOME,
    },
    {
      title: 'Product',
      Icon: {
        active: <ClipboardList color={activeColor} />,
        inActive: <ClipboardList color={inActiveColor} />,
      },
      route: NAVIGATION.SCREEN.PRODUCT,
    },
    // {
    //   title: 'Cart',
    //   route: NAVIGATION.SCREEN.CART,
    //   Icon: {
    //     active: <ShoppingCart color={activeColor} />,
    //     inActive: <ShoppingCart color={inActiveColor} />,
    //   },
    // },
    {
      title: 'AI Chat',
      route: NAVIGATION.SCREEN.CHAT,
      Icon: {
        active: <AiChatIcon color={activeColor} />,
        inActive: <AiChatIcon color={inActiveColor} />,
      },
    },
    {
      title: 'Profile',
      route: NAVIGATION.SCREEN.PROFILE,
      Icon: {
        active: <UserRound color={activeColor} />,
        inActive: <UserRound color={inActiveColor} />,
      },
    },
  ];
  return TABS;
};
