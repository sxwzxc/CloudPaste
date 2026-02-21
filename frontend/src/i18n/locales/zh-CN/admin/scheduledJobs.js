export default {
  scheduledJobs: {
    // 页面标题
    title: "定时任务管理",
    subtitle: "管理系统定时任务的执行计划和配置",

    // 工具栏
    toolbar: {
      createJob: "新建任务",
      refresh: "刷新",
      filter: "筛选",
      search: "搜索任务ID...",
      filterAll: "全部",
      filterEnabled: "已启用",
      filterDisabled: "已禁用",
    },

    // 任务状态
    status: {
      enabled: "已启用",
      disabled: "已禁用",
      running: "运行中",
      unknownType: "未知类型",
      success: "成功",
      failure: "失败",
      skipped: "跳过",
    },

    // Handler类型
    handlerType: {
      title: "任务类型",
      select: "选择任务类型",
      selectPlaceholder: "请选择任务类型...",
      category: {
        maintenance: "维护",
        business: "业务",
      },
    },

    // 警告信息
    warnings: {
      handlerNotFound: "任务处理器不存在",
      handlerNotFoundHint: "该任务类型的处理器已被移除，任务将无法执行。建议删除此任务或联系管理员。",
    },

    // 执行状态
    runStatus: {
      success: "成功",
      failure: "失败",
      skipped: "跳过",
    },

    // 任务卡片
    card: {
      interval: "执行间隔",
      lastRun: "上次执行",
      nextRun: "下次执行",
      lastRunResult: "最近执行",
      successRate: "成功率",
      never: "从未执行",
      notScheduled: "未计划",
      ago: "前",
      later: "后",
      viewHistory: "查看历史",
      runNow: "立即执行",
      more: "更多",
    },

    // 平台触发器（Cloudflare/Docker）倒计时
    ticker: {
      title: "平台触发器倒计时",
      subtitle: "这是外部定时器（Cloudflare Cron / Docker 定时器）的下一次触发时间，用于驱动后台扫描执行到期任务。",
      refresh: "刷新",
      runtime: "运行环境",
      cron: "触发规则（cron）",
      next: "下次触发",
      last: "上次触发",
      dueNow: "即将触发",
      waiting: "等待触发",
      noNext: "暂无数据",
      loadFailed: "获取触发器状态失败",
    },

    // 操作按钮
    actions: {
      enable: "启用",
      disable: "禁用",
      edit: "编辑",
      delete: "删除",
      viewDetail: "查看详情",
      runNow: "立即执行",
      viewHistory: "执行历史",
    },

    // 表单
    form: {
      createTitle: "创建定时任务",
      editTitle: "编辑定时任务",
      createDescription: "配置并创建新的定时任务",
      editDescription: "修改现有定时任务的配置",
      name: "任务名称",
      namePlaceholder: "用于在列表和时间线中展示的名称",
      nameHint: "可选，未填写时将使用任务类型名称",
      description: "任务描述",
      descriptionPlaceholder: "简要描述此作业的用途，例如：每天清理过期上传会话",
      descriptionHint: "可选，用于说明任务的作用和注意事项",
      scheduleType: "调度类型",
      scheduleTypeInterval: "固定间隔",
      scheduleTypeCron: "Cron 表达式",
      scheduleTypeOneTime: "只执行一次",
      intervalSec: "执行间隔",
      intervalSecPlaceholder: "输入秒数",
      intervalUnit: "时间单位",
      intervalValue: "间隔值",
      intervalHint: "最小间隔: 60秒",
      cronExample: "例如：0 2 * * * 表示每天凌晨 2 点执行",
      enabled: "启用状态",
      enabledLabel: "创建后立即启用",
      config: "配置参数 (JSON)",
      configPlaceholder: '{\n  "key": "value"\n}',
      configHint: "任务特定的配置参数，必须是有效的JSON格式",
      validateJson: "验证JSON",
      useTemplate: "使用模板",
      cancel: "取消",
      create: "创建任务",
      save: "保存修改",
      backToList: "返回列表",
      // 步骤标题
      step1Title: "选择类型",
      step2Title: "配置参数",
      step3Title: "执行计划",
      // 配置模式
      modeForm: "表单",
      modeJson: "JSON",
      configParams: "配置参数",
      noConfigParams: "此任务类型无需配置参数",
      // 导航按钮
      prevStep: "上一步",
      nextStep: "下一步",
      summary: "任务摘要",
      reviewTitle: "确认信息",
      editInfo: "编辑",
    },

    // 时间单位
    timeUnit: {
      seconds: "秒",
      minutes: "分钟",
      hours: "小时",
      days: "天",
    },

    // 详情（当前使用的最小子集）
    detail: {
      title: "任务详情",
      handlerType: "任务类型",
      status: "状态",
      runCount: "执行次数",
      actions: "操作",
      lastRun: "上次执行",
      nextRun: "下次执行",
      configParams: "配置参数",
      recentRuns: "最近执行记录",
      noRuns: "暂无执行记录",
      notScheduled: "未安排",
      totalSessions: "表总数：{count}",
    },

    // 表单页面错误提示
    errors: {
      jobNotFound: "定时任务不存在",
      loadFailed: "加载定时任务失败",
      jobNotFoundHint: "请检查任务 ID 是否正确，或返回列表重新选择",
    },

    // 消息提示
    loadFailed: "加载任务列表失败",
    loadDetailFailed: "加载任务详情失败",
    createSuccess: "创建任务成功",
    createFailed: "创建任务失败",
    updateSuccess: "更新任务成功",
    updateFailed: "更新任务失败",
    deleteSuccess: "删除任务成功",
    deleteFailed: "删除任务失败",
    toggleSuccess: "任务状态已切换为 {status}",
    toggleFailed: "切换任务状态失败",
    loadRunsFailed: "加载执行历史失败",
    loadAnalyticsFailed: "加载统计数据失败",
    runNowSuccess: "任务已触发执行",
    runNowFailed: "触发任务执行失败",
    loadHandlerTypesFailed: "加载任务类型列表失败",
    loadHandlerTypeFailed: "加载任务类型详情失败",

    // 确认对话框
    deleteConfirmTitle: "确认删除",
    deleteConfirmMessage: "确定要删除此定时任务吗？此操作不可撤销。",

    // 验证消息
    validation: {
      configInvalidJson: "配置参数必须是有效的JSON格式",
    },

    // 空状态
    empty: {
      title: "暂无定时任务",
      description: '点击上方"新建任务"按钮创建第一个定时任务',
    },

    // 今日日程
    today: {
      sectionTitle: "今日日程",
      pending: "待执行",
      completed: "已完成",
      running: "运行中",
      noPendingJobs: "今日无待执行任务",
      noCompletedJobs: "今日暂无已完成任务",
    },

    // 统计与热力图
    stats: {
      sectionTitle: "统计与热力图",
      hourlyActivityTitle: "24小时执行活动",
      hourlyActivitySubtitle: "最近24小时",
      hourlyTooltip: "{hour}:00 · {count}次",
      legendNone: "无",
      legendRange1: "1-3",
      legendRange2: "4-7",
      legendRange3: "8-12",
      legendRange4: ">12",
      totalJobs: "总任务",
      enabledJobs: "已启用",
      pendingJobs: "等待触发",
      runningJobs: "运行中",
      nextTickCountdown: "预计下次触发时间",
    },

    // 同步任务配置（同步任务表单和路径选择器使用）
    syncTask: {
      // 路径对标题
      pairNumber: "路径对 {n}",
      collapsePair: "收起路径对",
      expandPair: "展开路径对",

      // 源/目标路径
      sourcePath: "源路径",
      targetPath: "目标路径",
      sourcePathHint: "可以是文件或文件夹路径",
      targetPathHint: "可以是文件夹路径（自动拼接源文件名），也可手动重命名文件路径",
      quickInputPlaceholder: "输入路径后按回车...",
      copyPath: "复制路径",
      collapse: "收起",
      expand: "展开",
      clearPath: "清除",

      // 路径对操作
      addPathPair: "添加路径对",
      advancedOptions: "高级选项",

      // 同步选项
      skipExisting: "跳过已存在文件",
      skipExistingHint: "启用后仅复制目标位置不存在的文件（增量同步）",
      maxConcurrency: "复制并发数",
      concurrencyHint: "Workers 环境建议使用 1",

      // 路径树选择器
      goToRoot: "返回根目录",
      goUp: "返回上级",
      refresh: "刷新",
      loading: "加载中...",
      retry: "点击重试",
      emptyDirectory: "空目录",
      emptyDirectoryHint: "当前目录下没有可选内容",
      enterFolder: "进入文件夹",
    },
  },
};
