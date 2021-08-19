import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

// layouts
import DashboardLayout from 'layouts/DashboardLayout';

// components
import Guard from 'components/Guard';
import LoadingScreen from 'components/LoadingScreen';

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => (
      <Redirect to={localStorage.getItem('token') ? '/user' : '/login'} />
    ),
  },
  {
    exact: true,
    //guard: Guard.Guest,
    path: '/login',
    component: lazy(() => import('pages/Login')),
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('components/NotFound')),
  },
  {
    //guard: Guard.Auth,
    path: '/',
    layout: DashboardLayout,
    routes: [
      // 대시보드
      {
        exact: true,
        path: '/dashboard',
        component: lazy(() => import('pages/Dashboard')),
      },
      // 나의 계정정보
      {
        exact: true,
        path: '/my-info',
        component: lazy(() => import('pages/MyInfo')),
      },
      {
        exact: true,
        path: '/my-info/edit',
        component: lazy(() => import('pages/MyInfo/Edit')),
      },
      // 회원관리
      {
        exact: true,
        path: '/user',
        component: lazy(() => import('pages/User/List')),
      },
      {
        exact: true,
        path: '/user/:_id',
        component: lazy(() => import('pages/User/Details')),
      },
      // VP 관리
      {
        exact: true,
        path: '/vp',
        component: lazy(() => import('pages/VP/List')),
      },
      {
        exact: true,
        path: '/vp/:_id',
        component: lazy(() => import('pages/VP/VPDetails')),
      },
      {
        exact: true,
        path: '/vp/:_id/edit',
        component: lazy(() => import('pages/VP/VPEdit')),
      },
      {
        exact: true,
        path: '/vp/request/:_id',
        component: lazy(() => import('pages/VP/RequestDetails')),
      },
      // 운영진 관리
      {
        exact: true,
        path: '/admin',
        component: lazy(() => import('pages/Admin/List')),
      },
      {
        exact: true,
        path: '/admin/register',
        component: lazy(() => import('pages/Admin/Register')),
      },
      {
        exact: true,
        path: '/admin/:_id',
        component: lazy(() => import('pages/Admin/Details')),
      },
      {
        exact: true,
        path: '/admin/:_id/edit',
        component: lazy(() => import('pages/Admin/Edit')),
      },

      // 이벤트 관리
      {
        exact: true,
        path: '/event',
        component: lazy(() => import('pages/Event/List')),
      },
      {
        exact: true,
        path: '/event/register',
        component: lazy(() => import('pages/Event/Register')),
      },
      {
        exact: true,
        path: '/event/:_id',
        component: lazy(() => import('pages/Event/Details')),
      },
      {
        exact: true,
        path: '/event/:_id/edit',
        component: lazy(() => import('pages/Event/Edit')),
      },

      // 아티스트 관리
      {
        exact: true,
        path: '/artist',
        component: lazy(() => import('pages/ArtistManagement/List')),
      },
      {
        exact: true,
        path: '/artist/register',
        component: lazy(() => import('pages/ArtistManagement/Artist/Register')),
      },
      {
        exact: true,
        path: '/artist/:_id',
        component: lazy(() =>
          import('pages/ArtistManagement/Artist/ArtistDetails')
        ),
      },
      {
        exact: true,
        path: '/artist/:_id/edit',
        component: lazy(() => import('pages/ArtistManagement/Artist/Edit')),
      },
      {
        exact: true,
        path: '/group/register',
        component: lazy(() => import('pages/ArtistManagement/Group/Register')),
      },
      {
        exact: true,
        path: '/group/:_id',
        component: lazy(() =>
          import('pages/ArtistManagement/Group/GroupDetails')
        ),
      },

      {
        exact: true,
        path: '/group/:_id/edit',
        component: lazy(() => import('pages/ArtistManagement/Group/Edit')),
      },

      // 메타데이터 관리
      {
        exact: true,
        path: '/metadata',
        component: lazy(() => import('pages/Metadata/List')),
      },
      {
        exact: true,
        path: '/metadata/register',
        component: lazy(() => import('pages/Metadata/Register')),
      },
      {
        exact: true,
        path: '/metadata/accessory/:_id',
        component: lazy(() => import('pages/Metadata/Accessory/Details')),
      },
      {
        exact: true,
        path: '/metadata/accessory/:_id/edit',
        component: lazy(() => import('pages/Metadata/Accessory/Edit')),
      },
      {
        exact: true,
        path: '/metadata/concept/:_id',
        component: lazy(() => import('pages/Metadata/Concept/Details')),
      },
      {
        exact: true,
        path: '/metadata/concept/:_id/edit',
        component: lazy(() => import('pages/Metadata/Concept/Edit')),
      },
      {
        exact: true,
        path: '/metadata/hair-color/:_id',
        component: lazy(() => import('pages/Metadata/HairColor/Details')),
      },
      {
        exact: true,
        path: '/metadata/hair-color/:_id/edit',
        component: lazy(() => import('pages/Metadata/HairColor/Edit')),
      },

      // 팝업 관리
      {
        exact: true,
        path: '/popup',
        component: lazy(() => import('pages/Popup/List')),
      },
      {
        exact: true,
        path: '/popup/register',
        component: lazy(() => import('pages/Popup/Register')),
      },
      {
        exact: true,
        path: '/popup/:_id',
        component: lazy(() => import('pages/Popup/Details')),
      },
      {
        exact: true,
        path: '/popup/:_id/edit',
        component: lazy(() => import('pages/Popup/Edit')),
      },

      // 방침 게시 관리
      {
        exact: true,
        path: '/policy',
        component: lazy(() => import('pages/Policy/List')),
      },
      {
        exact: true,
        path: '/policy/register',
        component: lazy(() => import('pages/Policy/Register')),
      },
      {
        exact: true,
        path: '/policy/:_id',
        component: lazy(() => import('pages/Policy/Details')),
      },

      // 공지사항
      {
        exact: true,
        path: '/notice',
        component: lazy(() => import('pages/Notice/List')),
      },
      {
        exact: true,
        path: '/notice/register',
        component: lazy(() => import('pages/Notice/Register')),
      },
      {
        exact: true,
        path: '/notice/:_id',
        component: lazy(() => import('pages/Notice/Details')),
      },
      {
        exact: true,
        path: '/notice/:_id/edit',
        component: lazy(() => import('pages/Notice/Edit')),
      },

      // FAQ
      {
        exact: true,
        path: '/faq',
        component: lazy(() => import('pages/FAQ/List')),
      },
      {
        exact: true,
        path: '/faq/register',
        component: lazy(() => import('pages/FAQ/Register')),
      },
      {
        exact: true,
        path: '/faq/:_id',
        component: lazy(() => import('pages/FAQ/Details')),
      },
      {
        exact: true,
        path: '/faq/:_id/edit',
        component: lazy(() => import('pages/FAQ/Edit')),
      },

      // Q&A
      {
        exact: true,
        path: '/qna',
        component: lazy(() => import('pages/QNA/List')),
      },
      {
        exact: true,
        path: '/qna/:_id',
        component: lazy(() => import('pages/QNA/Details')),
      },

      ///////////////////////  통계 관리   ////////////////////////
      // Basic //
      {
        exact: true,
        path: '/statistics/user',
        component: lazy(() => import('pages/Statistics/Basic/User')),
      },
      {
        exact: true,
        path: '/statistics/vp',
        component: lazy(() => import('pages/Statistics/Basic/VP')),
      },
      // Activity //
      {
        exact: true,
        path: '/statistics/activity/content',
        component: lazy(() => import('pages/Statistics/Activity/UserContent')),
      },
      {
        exact: true,
        path: '/statistics/activity/search',
        component: lazy(() => import('pages/Statistics/Activity/UserSearch')),
      },
      {
        exact: true,
        path: '/statistics/activity/vp-content',
        component: lazy(() => import('pages/Statistics/Activity/VPContent')),
      },
      // UserDistribution //
      {
        exact: true,
        path: '/statistics/user-distribution',
        component: lazy(() => import('pages/Statistics/UserDistribution')),
      },

      // UserCumulative
      {
        exact: true,
        path: '/statistics/user-cumulative',
        component: lazy(() => import('pages/Statistics/UserCumulative')),
      },
      // ContentCumulative
      {
        exact: true,
        path: '/statistics/content-cumulative',
        component: lazy(() => import('pages/Statistics/ContentCumulative')),
      },
      // ConnectionStatistics
      {
        exact: true,
        path: '/statistics/connection',
        component: lazy(() => import('pages/Statistics/Connection')),
      },

      // redirect & default fallback
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
];

const renderRoutes = (routes) => {
  return (
    routes && (
      <Suspense fallback={<LoadingScreen noOpacity />}>
        <Switch>
          {routes.map((route, i) => {
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;
            const Component = route.component;

            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <Guard>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component {...props} />
                      )}
                    </Layout>
                  </Guard>
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    )
  );
};

const Routes = () => {
  return renderRoutes(routesConfig);
};

export default Routes;
