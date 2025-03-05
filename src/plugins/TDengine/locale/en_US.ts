const en_US = {
  preview: 'Preview',
  query: {
    title: 'Query',
    execute: 'Execute',
    project: 'Project',
    project_msg: 'Please select project',
    project_tip: `
      <1>Project is the resource management unit of Log Service and the main boundary for multi-user isolation and access control. For more information, see<1>
      <2>Project</2>
    `,
    logstore: 'Logstore',
    logstore_msg: 'Please select logstore',
    logstore_tip: `
      <1>Logstore is the unit for collecting, storing, and querying log data in Log Service. For more information, see<1>
      <2>Logstore</2>
    `,
    range: 'Range',
    power_sql: 'SQL enhance',
    query: 'SQL',
    query_msg: 'Please input SQL',
    query_tip1: 'TDengine query syntax reference',
    query_tip2: 'Document',
    sqlTemplates: 'SQL Templates',
    sqlTemplates_tip: 'The following SQL query conditions are for reference only. When using them in practice, you need to replace the $variable with the actual value',
    mode: {
      timeSeries: 'Time series',
      raw: 'Raw logs',
    },
    advancedSettings: {
      title: 'Advanced settings',
      metricKey_tip:
        'This field can be used to specify which fields will be used as metricName. By default, numerical fields will be used as metricName. For example, the query result is used_percent:96 host:host01, used_percent will be used as metricName, and the value is 96',
      tags_placeholder: 'Press Enter to input multiple',
      labelKey_tip:
        'This field can be used to specify which fields will be used as labelName. By default, non-numeric fields will be used as labelName. For example, the query result is used_percent:96 host:host01, host will be the name of the label, and host01 will be the value of the label.',
      timeKey_tip: 'Specify which field is the time field and use it as the x-axis coordinate for drawing the curve',
      timeFormat_tip: 'The format of the time, which will convert the time to a timestamp according to this format',
    },
    schema: 'Schema',
    table: 'Table',
    stable: 'Stable',
  },
  trigger: {
    title: 'Trigger',
    value_msg: 'Please input expression value',
  },
};
export default en_US;
