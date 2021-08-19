const AdminAuthorityList = {
  USER: {
    UserManage: '회원 관리',
    VpManage: 'VP 관리',
    AdminManage: '운영진 관리',
  },
  SERVICE: {
    EventManage: '이벤트 관리',
    ArtistManage: '아티스트 관리',
    MetadataManage: '메타데이터 관리',
  },
  SYSTEM: {
    PopupManage: '팝업 관리',
    PolicyManage: '방침 게시 관리',
  },
  CustomerCenter: {
    NoticeboardManage: '공지사항',
    FAQManage: 'FAQ',
    QNAManage: 'Q&A',
  },
  STATISTICS: {
    StatisticsManage: '통계',
  },
};

const createObject = (menu, subMenu) => {
  return { menu, subMenu };
};

export const createAdminAuthData = (adminDetails) => {
  const data = [];
  let tempString = [];

  // USER
  if (adminDetails.userManage)
    tempString.push(AdminAuthorityList.USER.UserManage);
  if (adminDetails.vpManage) tempString.push(AdminAuthorityList.USER.VpManage);
  if (adminDetails.adminManage)
    tempString.push(AdminAuthorityList.USER.AdminManage);
  data.push(createObject('사용자 관리', tempString.join(', ')));

  // SERVICE
  tempString = [];
  if (adminDetails.eventManage)
    tempString.push(AdminAuthorityList.SERVICE.EventManage);
  if (adminDetails.artistManage)
    tempString.push(AdminAuthorityList.SERVICE.ArtistManage);
  if (adminDetails.metadataManage)
    tempString.push(AdminAuthorityList.SERVICE.MetadataManage);
  data.push(createObject('서비스 관리', tempString.join(', ')));

  // SYSTEM
  tempString = [];
  if (adminDetails.popupManage)
    tempString.push(AdminAuthorityList.SYSTEM.PopupManage);
  if (adminDetails.policyManage)
    tempString.push(AdminAuthorityList.SYSTEM.PolicyManage);
  data.push(createObject('시스템 관리', tempString.join(', ')));

  // CustomerCenter
  tempString = [];
  if (adminDetails.noticeboardManage)
    tempString.push(AdminAuthorityList.CustomerCenter.NoticeboardManage);
  if (adminDetails.faqManage)
    tempString.push(AdminAuthorityList.CustomerCenter.FAQManage);
  if (adminDetails.qnaManage)
    tempString.push(AdminAuthorityList.CustomerCenter.QNAManage);
  data.push(createObject('고객센터', tempString.join(', ')));

  // Statistics
  tempString = [];
  if (adminDetails.statisticsManage)
    tempString.push(AdminAuthorityList.STATISTICS.StatisticsManage);
  data.push(createObject('통계', tempString.join(', ')));

  return data;
};

export const menuOptions = [
  { value: 'user', label: '사용자 관리' },
  { value: 'service', label: '서비스 관리' },
  { value: 'system', label: '시스템 관리' },
  { value: 'customerCenter', label: '고객센터' },
  { value: 'statistics', label: '통계' },
];

export const rows = [
  // User
  [
    { value: 'userManage', label: AdminAuthorityList.USER.UserManage },
    { value: 'vpManage', label: AdminAuthorityList.USER.VpManage },
    { value: 'adminManage', label: AdminAuthorityList.USER.AdminManage },
  ],

  //Service
  [
    { value: 'eventManage', label: AdminAuthorityList.SERVICE.EventManage },
    { value: 'artistManage', label: AdminAuthorityList.SERVICE.ArtistManage },
    {
      value: 'metadataManage',
      label: AdminAuthorityList.SERVICE.MetadataManage,
    },
  ],

  // System
  [
    { value: 'popupManage', label: AdminAuthorityList.SYSTEM.PopupManage },
    { value: 'policyManage', label: AdminAuthorityList.SYSTEM.PolicyManage },
  ],

  // CustomerCenter
  [
    {
      value: 'noticeboardManage',
      label: AdminAuthorityList.CustomerCenter.NoticeboardManage,
    },
    { value: 'faqManage', label: AdminAuthorityList.CustomerCenter.FAQManage },
    { value: 'qnaManage', label: AdminAuthorityList.CustomerCenter.QNAManage },
  ],

  // Statistics
  [
    {
      value: 'statisticsManage',
      label: AdminAuthorityList.STATISTICS.StatisticsManage,
    },
  ],
];
