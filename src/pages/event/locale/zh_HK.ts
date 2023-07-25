const zh_HK = {
  title: '活躍告警',
  search_placeholder: '模糊搜尋規則和標籤 (多個關鍵詞請用空格分隔)',
  hours: {
    '6': '最近 6 小時',
    '12': '最近 12 小時',
    '24': '最近 1 天',
    '48': '最近 2 天',
    '72': '最近 3 天',
    '168': '最近 7 天',
    '336': '最近 14 天',
    '720': '最近 30 天',
    '1440': '最近 60 天',
    '2160': '最近 90 天',
  },
  severity: '告警級別',
  eventType: '事件類別',
  rule_name: '規則標題 & 事件標籤',
  trigger_time: '觸發時間',
  shield: '遮蔽',
  prod: '監控型別',
  aggregate_rule: '聚合規則',
  aggregate_rule_name: '規則名稱',
  public: '公開',
  isPublic: '是否公開',
  status: '是否认领',
  status_1: '已认领',
  status_0: '未认领',
  batch_btn: '批量操作',
  batch_claim: '批量认领',
  batch_unclaim: '批量取消认领',
  claim: '认领',
  unclaim: '取消认领',

  delete_confirm: {
    title: '刪除告警事件',
    content: '通常只有在確定監控資料永遠不再上報的情況下（比如調整了監控資料標籤，或者機器下線）才刪除告警事件，因為相關告警事件永遠無法自動恢復了，你確定要這麼做嗎？',
  },
  detail: {
    title: '告警詳情',
    card_title: '告警事件詳情',
    buisness_not_exist: '該業務組已刪除或無檢視許可權',
    rule_name: '規則標題',
    group_name: '業務組',
    rule_note: '規則備註',
    cate: '資料來源型別',
    datasource_id: '資料來源',
    severity: '告警級別',
    is_recovered: '事件狀態',
    tags: '事件標籤',
    target_note: '物件備註',
    trigger_time: '觸發時間',
    trigger_value: '觸發時值',
    recover_time: '恢復時間',
    rule_algo: '告警方式',
    rule_algo_anomaly: '智慧告警',
    rule_algo_threshold: '閾值告警',
    prom_eval_interval: '執行頻率',
    prom_for_duration: '持續時長',
    notify_channels: '通知渠道',
    notify_groups_obj: '告警接收組',
    callbacks: '回撥地址',
    runbook_url: '預案連結',
    detail_url: '詳情連結',
    host: {
      trigger: '觸發',
    },
  },
};

export default zh_HK;
