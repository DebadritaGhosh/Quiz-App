import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import {
  Users as UsersIcon,
  Award as AwardIcon,
  Clipboard as ClipboardIcon,
  PieChart as PieChartIcon,
  BarChart as StatisticsIcon,
} from 'react-feather';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import Logo from 'components/Logo';
import NavItem from './NavItem';

const navConfig = [
  {
    subheader: '',
    items: [
      {
        title: '대시보드',
        icon: PieChartIcon,
        href: '/dashboard',
      },
    ],
  },
  {
    subheader: '',
    items: [
      {
        title: '사용자 관리',
        icon: UsersIcon,
        items: [
          {
            title: '회원관리',
            href: '/user',
          },
          {
            title: 'VP 관리',
            href: '/vp',
          },
          {
            title: '운영진 관리',
            href: '/admin',
          },
        ],
      },
    ],
  },
  {
    subheader: '',
    items: [
      {
        title: '서비스 관리',
        icon: AwardIcon,
        items: [
          {
            title: '이벤트 관리',
            href: '/event',
          },
          {
            title: '아티스트 관리',
            href: '/artist',
          },
          {
            title: '메타데이터 관리',
            href: '/metadata',
          },
        ],
      },
    ],
  },
  {
    subheader: '',
    items: [
      {
        title: '시스템 관리',
        icon: SystemUpdateAltIcon,
        items: [
          {
            title: '팝업 관리',
            href: '/popup',
          },
          {
            title: '방침 게시 관리',
            href: '/policy',
          },
        ],
      },
    ],
  },
  {
    subheader: '',
    items: [
      {
        title: '고객센터',
        icon: ClipboardIcon,
        items: [
          {
            title: '공지사항',
            href: '/notice',
          },
          {
            title: 'FAQ',
            href: '/faq',
          },
          {
            title: 'Q&A',
            href: '/qna',
          },
        ],
      },
    ],
  },
  {
    subheader: '',
    items: [
      {
        title: '통계 관리',
        icon: StatisticsIcon,
        items: [
          {
            title: '사용자 통계',
            href: '/statistics',
            items: [
              {
                title: '일반유저',
                href: '/statistics/user',
              },
              {
                title: 'VP',
                href: '/statistics/vp',
              },
            ],
          },
          {
            title: '활동',
            href: '/notice',
            items: [
              {
                title: '사용자 활동 - 콘텐츠',
                href: '/statistics/activity/content',
              },
              {
                title: '사용자 활동 - 검색',
                href: '/statistics/activity/search',
              },
              {
                title: 'VP 활동 - 콘텐츠',
                href: '/statistics/activity/vp-content',
              },
            ],
          },
          {
            title: '국가별 사용자 분포',
            href: '/statistics/user-distribution',
          },
          {
            title: 'VP/일반유저 누적 사용자수',
            href: '/statistics/user-cumulative',
          },
          {
            title: '콘텐츠 수 – 일반유저 가입수',
            href: '/statistics/content-cumulative',
          },
          {
            title: '접속 통계',
            href: '/statistics/connection',
          },
        ],
      },
    ],
  },
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}));

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {config.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: config.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
