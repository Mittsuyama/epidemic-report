export default {
  'GET /api/message/list': {
    status: 200,
    data: {
      readList: [
        {
          title:
            '哈工大 i 聘直播：聚英才 著神箭 —— 航天科工四院哈工大云端宣讲会通知',
          time: '2020-03-19',
          id: '0',
        },
        {
          title: '转发中国铁路局哈尔滨集团有限公司哈尔滨站通告',
          time: '2020-03-18',
          id: '1',
        },
      ],
      unreadList: [
        {
          title: '关于收看"全国大学生同上一堂疫情防控思政大课"的通知',
          time: '2020-03-08',
          id: '2',
        },
        {
          title:
            '关于和黑龙江省连通、移动、电信运营商为我校学生提供优惠流量包的通知',
          time: '2020-03-10',
          id: '3',
        },
        {
          title: '重要通知：25 日中午，你我都是华为云平台测试员！',
          time: '2020-02-24',
          id: '4',
        },
      ],
    },
  },
  'GET /api/message/detail/0': {
    status: 200,
    data: {
      title:
        '哈工大 i 聘直播：聚英才 著神箭 —— 航天科工四院哈工大云端宣讲会通知',
      time: '2020-03-19',
      content:
        '宣讲会时间：3月20日15:00\n' +
        '宣讲会链接会在20日14:00在就业网公布，并发至各学院，请及时关注。\n' +
        '湖北省用人单位、航天科工集团京外二级科研院所，待遇好、平台高。',
    },
  },
  'GET /api/message/detail/1': {
    status: 200,
    data: {
      title: '转发中国铁路局哈尔滨集团有限公司哈尔滨站通告',
      time: '2020-03-18',
      content:
        '各位旅客：\n' +
        '    鉴于疫情防控期间各地学校开学时间延迟的实际情况，为妥善做好学生寒假返程工作，现决定将2020年寒假学生票发售截止时间从原规定的3月31日延长至5月31日。\n' +
        '    望广大旅客周知。\n' +
        '                 中国铁路哈尔滨集团有限公司哈尔滨站\n' +
        '                        2020年3与17日',
    },
  },
  'GET /api/message/detail/2': {
    status: 200,
    data: {
      title: '关于收看"全国大学生同上一堂疫情防控思政大课"的通知',
      time: '2020-03-08',
      content:
        '全体哈工大学生：\n' +
        '学校于 2020 年 3 月 9 日14:30—16:00 ，统一组织全体学生在线学习“全国大学生同上一堂疫情防控思政大课”。\n' +
        '为此， 3 月 9 日下午的本科、研究生教学时间调整如下： \n' +
        '    5-6 节调整为12：40-14：25\n' +
        '    7-8 节调整为16：15-18：00\n' +
        '请同学们悉知。\n' +
        '\n' +
        '               哈尔滨工业大学教学管理中心',
    },
  },
  'GET /api/message/detail/3': {
    status: 200,
    data: {
      title:
        '关于和黑龙江省连通、移动、电信运营商为我校学生提供优惠流量包的通知',
      time: '2020-03-10',
      content:
        '为深入贯彻落实教育部办公厅、工业和信息化部办公厅联合印发《关于中小学延期开学期间“停课不停学”有关工作安排的通知》、工信部《关于进一步做好新冠肺炎疫情防控期问宽带网络助教助学工作的通知》要求，助力省内高校网上教育教学工作平稳有序开展，黑龙江省教育厅与省内三大通信运营商协商，决定为省内高校在读学生在疫情防控期间提供流量优惠服务，具体优惠内容通知如下：\n' +
        '一、优惠范围：\n' +
        '    此次流量优惠服务由黑龙江省联通、黑龙江省移动及黑龙江省电信三家运营商提供，对省内高校在校学生手机号（仅限黑龙江省内号段）提供免费流量或优惠流量套餐服务，手机号须为学生本人身份证注册，且每人仅限申请一个。\n' +
        '二、优惠政策及对象\n' +
        '    1.免费流量\n' +
        '    20G免费流量。面向我校家庭经济困难学生中的建档立卡家庭学生、家庭所在地为湖北的学生、学生本人或直属亲属罹患新冠状病毒肺炎的学生，且手机号为黑龙江省内号段且为学生本人身份证注册。\n' +
        '    2.优惠流量包\n' +
        '    9.9元10G（相当于市场价2折）。面向校内开展线上授课的学生，且手机号为黑龙江省内号段且为学生本人身份证注册。可根据自身流量需求办理网课优惠流量包，可重复订购，有效期至4月30日。\n' +
        '三、申请办理方式\n' +
        '    1.免费流量\n' +
        '    符合条件学生，请在疫情防控系统点击“流量优惠服务申请”模块，并如实填写。学生信息由学校核实后统一报送黑龙江省教育厅，并由省教育厅统一转至对应运营商后统一处理，受助学生无需个人办理。\n' +
        '    2.优惠流量包\n' +
        '    符合条件学生，请在疫情防控系统点击“流量优惠登记”模块，并如实填写。预申请优惠流量套餐的学生信息，由学校统计核实后报送黑龙江省教育厅，并由省教育厅统一转发至各运营公司备案。备案后，学生可通过对应运营商提供的办理方式由学生个人办理。\n' +
        '    优惠流量省内运营商办理方式如下：\n' +
        '    （1）联通公司用户办理渠道：预登记用户拨打10010进行办理，或到营业厅直接办理。\n' +
        '    （2）移动公司用户办理渠道：预登记用户打开“中国移动" APP，或关注“黑龙江移动"微信服务号，进入 “网课专属流量包"页面。预登记用户也可到营业厅直接办理。\n' +
        '    （3）电信公司用户办理渠道：预登记用户可拨打10000号订购，或可在营业前台办理。\n' +
        '    申请时间为3月11日6:00-20:00，望同学们悉知。\n' +
        '\n' +
        '             哈尔滨工业大学学生工作部（处）/团委',
    },
  },
  'GET /api/message/detail/4': {
    status: 200,
    data: {
      title: '重要通知：25 日中午，你我都是华为云平台测试员！',
      time: '2020-02-24',
      content:
        '今天上课第一天，公共平台上课有没有感觉卡顿？\n' +
        '好消息来了！学校与华为云共同开发建立了“华为云自主直播平台”，并且与华为云达成了专项协议，保障我校带宽，最大程度降低网络卡顿。\n' +
        '为确保平台的流畅使用，邀请各位同学2月25日12:30-12:45集中登录平台测试（会有技术团队在线在后台监测）\n' +
        '为了更流畅的课堂，请各位同学动动自己的小手，测试起来！\n' +
        '参加方式：“哈工大学工部”“HIT联小络”微信公众号最新推送“重要通知：25日中午，你我都是华为云平台测试员！”，手机扫码观看我校疫情防控期间专门制作的宣传视频（以下任一通道皆可）。\n' +
        '衷心感谢同学们的大力支持！',
    },
  },
};
