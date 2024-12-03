import {
  ChatIcon,
  HomeActiveIcon,
  HomeIcon,
  SearchActiveIcon,
  SearchIcon,
  AddHoobahooIcon,
  ChatActiveIcon,
} from "@assets/SVGs/Tab";
import NAVIGATION from "@navigations/navigation";

export const tabHelper = (isDark) => {
  const TABS = [
    {
      title: "Feed",
      Icon: { active: <HomeActiveIcon isDark={isDark} />, inActive: <HomeIcon isDark={isDark} /> },
      route: "",
    },
    {
      title: "Search",
      Icon: {
        active: <SearchActiveIcon isDark={isDark} />,
        inActive: <SearchIcon isDark={isDark} />,
      },
      route: "",
    },
    {
      title: "Add",
      Icon: {
        active: <AddHoobahooIcon isDark={isDark} />,
        inActive: <AddHoobahooIcon isDark={isDark} />,
      },
      route: NAVIGATION.ROUTES.ROUTE_HOOOBHAOO,
    },
    {
      title: "Chat",
      Icon: { active: <ChatActiveIcon isDark={isDark} />, inActive: <ChatIcon isDark={isDark} /> },
      // route: NAVIGATION.ROUTES.ROUTE_CHAT,
      route: NAVIGATION.CHAT.MESSAGE_SCREEN,
    },
    {
      title: "Profile",
      Icon: { active: <></>, inActive: <></> },
      route: NAVIGATION.PROFILE.PROFILE_SCREEN,
    },
  ];
  return TABS;
};
