export default {
  apdex: { name: 'viserChart.apdex', dw: '' },
  requestCount: { name: 'viserChart.requestNumber', dw: 'viserChart.times' },
  avgTime: { name: 'viserChart.averageResponseTime', dw: 'ms' },
  errorCount: { name: 'viserChart.errorNumber', dw: 'viserChart.times' },
  errorRate: { name: 'viserChart.errorRate', dw: '%' },
  respTime: { name: 'viserChart.responseTime', dw: 'ms' },
  health: { name: 'viserChart.healthy' },
  slow: { name: 'appOverview.slow' },
  verySlow: { name: 'appOverview.verySlow' },
  stall: { name: 'appOverview.stalled' },
  error: { name: 'callChain.error' }
}
