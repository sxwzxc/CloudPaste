export default {
  scheduledJobs: {
    // Page title
    title: "Scheduled Jobs Management",
    subtitle: "Manage system scheduled tasks execution plans and configurations",

    // Toolbar
    toolbar: {
      createJob: "Create Job",
      refresh: "Refresh",
      filter: "Filter",
      search: "Search task ID...",
      filterAll: "All",
      filterEnabled: "Enabled",
      filterDisabled: "Disabled",
    },

    // Job status
    status: {
      enabled: "Enabled",
      disabled: "Disabled",
      running: "Running",
      unknownType: "Unknown Type",
      success: "Success",
      failure: "Failure",
      skipped: "Skipped",
    },

    // Handler type
    handlerType: {
      title: "Task Type",
      select: "Select Task Type",
      selectPlaceholder: "Select a task type...",
      category: {
        maintenance: "Maintenance",
        business: "Business",
      },
    },

    // Warnings
    warnings: {
      handlerNotFound: "Handler Not Found",
      handlerNotFoundHint: "The handler for this task type has been removed. The task will not execute. Consider deleting this task or contact administrator.",
    },

    // Run status
    runStatus: {
      success: "Success",
      failure: "Failure",
      skipped: "Skipped",
    },

    // Job card
    card: {
      interval: "Interval",
      lastRun: "Last Run",
      nextRun: "Next Run",
      lastRunResult: "Recent Run",
      successRate: "Success Rate",
      never: "Never",
      notScheduled: "Not Scheduled",
      ago: "ago",
      later: "later",
      viewHistory: "View History",
      runNow: "Run Now",
      more: "More",
    },

    // Platform scheduler ticker (Cloudflare/Docker)
    ticker: {
      title: "Platform Trigger Countdown",
      subtitle: "This is the external scheduler (Cloudflare Cron / Docker timer) that triggers backend scanning to run due jobs.",
      refresh: "Refresh",
      runtime: "Runtime",
      cron: "Trigger rule (cron)",
      next: "Next trigger",
      last: "Last trigger",
      dueNow: "Due soon",
      waiting: "Waiting for trigger",
      noNext: "No data",
      loadFailed: "Failed to load trigger status",
    },

    // Actions
    actions: {
      enable: "Enable",
      disable: "Disable",
      edit: "Edit",
      delete: "Delete",
      viewDetail: "View Detail",
      runNow: "Run Now",
      viewHistory: "Execution History",
    },

    // Form
    form: {
      createTitle: "Create Scheduled Job",
      editTitle: "Edit Scheduled Job",
      createDescription: "Configure and create a new scheduled job",
      editDescription: "Modify the configuration of an existing scheduled job",
      name: "Job Name",
      namePlaceholder: "Display name for lists and timeline",
      nameHint: "Optional, will use task type name if not provided",
      description: "Description",
      descriptionPlaceholder: "Brief description of this job's purpose, e.g.: Daily cleanup of expired upload sessions",
      descriptionHint: "Optional, used to explain the job's purpose and notes",
      scheduleType: "Schedule Type",
      scheduleTypeInterval: "Fixed Interval",
      scheduleTypeCron: "Cron Expression",
      scheduleTypeOneTime: "Run Once",
      intervalSec: "Execution Interval",
      intervalSecPlaceholder: "Enter seconds",
      intervalUnit: "Time Unit",
      intervalValue: "Interval Value",
      intervalHint: "Minimum interval: 60 seconds",
      cronExample: "Example: 0 2 * * * means run every day at 2:00 AM",
      enabled: "Enable Status",
      enabledLabel: "Enable immediately after creation",
      config: "Config Parameters (JSON)",
      configPlaceholder: '{\n  "key": "value"\n}',
      configHint: "Task-specific configuration parameters, must be valid JSON format",
      validateJson: "Validate JSON",
      useTemplate: "Use Template",
      cancel: "Cancel",
      create: "Create Job",
      save: "Save Changes",
      backToList: "Back to List",
      // Step titles
      step1Title: "Select Type",
      step2Title: "Configure",
      step3Title: "Schedule",
      // Config modes
      modeForm: "Form",
      modeJson: "JSON",
      configParams: "Config Parameters",
      noConfigParams: "This task type requires no configuration",
      // Navigation buttons
      prevStep: "Previous",
      nextStep: "Next",
      summary: "Summary",
      reviewTitle: "Review Information",
      editInfo: "Edit",
    },

    // Time units
    timeUnit: {
      seconds: "Seconds",
      minutes: "Minutes",
      hours: "Hours",
      days: "Days",
    },

    // Detail (currently used subset)
    detail: {
      title: "Job Details",
      handlerType: "Task Type",
      status: "Status",
      runCount: "Run Count",
      actions: "Actions",
      lastRun: "Last Run",
      nextRun: "Next Run",
      configParams: "Config Parameters",
      recentRuns: "Recent Runs",
      noRuns: "No execution records",
      notScheduled: "Not Scheduled",
      totalSessions: "Total tables: {count}",
    },

    // Errors for form page
    errors: {
      jobNotFound: "Scheduled job not found",
      loadFailed: "Failed to load scheduled job",
      jobNotFoundHint:
        "Please check if the task ID is correct, or go back to the list and select again.",
    },

    // Messages
    loadFailed: "Failed to load job list",
    loadDetailFailed: "Failed to load job details",
    createSuccess: "Job created successfully",
    createFailed: "Failed to create job",
    updateSuccess: "Job updated successfully",
    updateFailed: "Failed to update job",
    deleteSuccess: "Job deleted successfully",
    deleteFailed: "Failed to delete job",
    toggleSuccess: "Job status changed to {status}",
    toggleFailed: "Failed to toggle job status",
    loadRunsFailed: "Failed to load execution history",
    loadAnalyticsFailed: "Failed to load analytics data",
    runNowSuccess: "Job execution triggered",
    runNowFailed: "Failed to trigger job execution",
    loadHandlerTypesFailed: "Failed to load handler types",
    loadHandlerTypeFailed: "Failed to load handler type details",

    // Confirm dialogs
    deleteConfirmTitle: "Confirm Delete",
    deleteConfirmMessage: "Are you sure you want to delete this scheduled job? This action cannot be undone.",

    // Validation messages
    validation: {
      configInvalidJson: "Config parameters must be valid JSON format",
    },

    // Empty state
    empty: {
      title: "No Scheduled Jobs",
      description: 'Click the "Create Job" button above to create your first scheduled job',
    },

    // Today's schedule
    today: {
      sectionTitle: "Today's Schedule",
      pending: "Pending",
      completed: "Completed",
      running: "Running",
      noPendingJobs: "No pending jobs today",
      noCompletedJobs: "No completed jobs today",
    },

    // Stats & heatmap
    stats: {
      sectionTitle: "Statistics & Heatmap",
      hourlyActivityTitle: "Last 24h Activity",
      hourlyActivitySubtitle: "Last 24 hours",
      hourlyTooltip: "{hour}:00 · {count} runs",
      legendNone: "None",
      legendRange1: "1-3",
      legendRange2: "4-7",
      legendRange3: "8-12",
      legendRange4: ">12",
      totalJobs: "Total Jobs",
      enabledJobs: "Enabled",
      pendingJobs: "Pending trigger",
      runningJobs: "Running",
      nextTickCountdown: "Estimated next trigger",
    },

    // Sync task configuration (used by sync task form and path selector)
    syncTask: {
      // Path pair header
      pairNumber: "Path Pair {n}",
      collapsePair: "Collapse pair",
      expandPair: "Expand pair",

      // Source/target paths
      sourcePath: "Source Path",
      targetPath: "Target Path",
      sourcePathHint: "Can be a file or folder path",
      targetPathHint: "Can be a folder path (auto-append source filename) or a full file path",
      quickInputPlaceholder: "Enter path and press Enter...",
      copyPath: "Copy Path",
      collapse: "Collapse",
      expand: "Expand",
      clearPath: "Clear",

      // Path pair operations
      addPathPair: "Add Path Pair",
      advancedOptions: "Advanced Options",

      // Sync options
      skipExisting: "Skip existing files",
      skipExistingHint:
        "When enabled, only copy files that don't exist at target (incremental sync)",
      maxConcurrency: "Copy Concurrency",
      concurrencyHint: "Recommended: 1 for Workers environment",

      // Path tree selector
      goToRoot: "Go to Root",
      goUp: "Go Up",
      refresh: "Refresh",
      loading: "Loading...",
      retry: "Click to retry",
      emptyDirectory: "Empty Directory",
      emptyDirectoryHint: "No items in current directory",
      enterFolder: "Enter Folder",
    },
  },
};
