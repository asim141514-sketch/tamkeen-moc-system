// ==========================================
// 1. ENGINE: MOC SLA 3-HOUR WORKING TIME CALCULATOR
// ==========================================
export interface Schedule {
  workDays: number[]; // 0=Sunday .. 6=Saturday -> [6,0,1,2,3,4]
  startMinute: number; // 480 = 08:00 AM
  endMinute: number; // 1020 = 05:00 PM
  slaMinutes: number; // 180 Minutes (3 Hours)
}

export function isWorkDay(date: Date, workDays: number[], holidays: Set<string>): boolean {
  const day = date.getUTCDay();
  const dateStr = date.toISOString().split('T')[0];
  return workDays.includes(day) && !holidays.has(dateStr);
}

export function calculateSlaDueTime(receivedAt: Date, schedule: Schedule, holidays: Set<string>): Date {
  let cursor = new Date(receivedAt.getTime());
  let remaining = schedule.slaMinutes;

  while (remaining > 0) {
    const currentHour = cursor.getUTCHours() + 3; // Riyadh Standard Time Offset
    const currentMinute = cursor.getUTCMinutes();
    const minuteOfDay = currentHour * 60 + currentMinute;

    if (isWorkDay(cursor, schedule.workDays, holidays) && minuteOfDay >= schedule.startMinute && minuteOfDay < schedule.endMinute) {
      const availableMinutes = schedule.endMinute - minuteOfDay;
      const minutesToUse = Math.min(availableMinutes, remaining);
      cursor.setTime(cursor.getTime() + minutesToUse * 60 * 1000);
      remaining -= minutesToUse;
    } else {
      cursor.setTime(cursor.getTime() + 60 * 1000); // Advance operational cursor ticks
    }
  }
  return cursor;
}

// ==========================================
// 2. INTERFACE: LIVE DASHBOARD STATE COMPONENT
// ==========================================
export function renderDashboardUI(stats: { total: number; open: number; overdue: number }) {
  return `
    <div style="font-family: 'Tajawal', sans-serif; direction: rtl; padding: 24px; background: #f8fafc; min-height: 100vh;">
      <!-- Main Application Header -->
      <header style="background: #0b2a5b; color: white; padding: 20px; rounded-bottom: 12px; margin-bottom: 24px; border-radius: 8px;">
        <h1 style="margin: 0; font-size: 24px;">نظام إدارة بلاغات وزارة التجارة - شركة تمكين الدولية</h1>
        <p style="margin: 4px 0 0 0; font-size: 13px; color: #cbd5e1;">متابعة حية للالتزام ومؤشرات الكفاءة والسرعة التشغيلية</p>
      </header>

      <!-- Grid Metric Analytics Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="background: white; padding: 20px; border-radius: 8px; border-top: 4px solid #0b2a5b; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="font-size: 12px; color: #64748b; font-weight: bold;">إجمالي البلاغات الواردة</div>
          <div style="font-size: 32px; font-weight: 800; color: #0b2a5b; margin-top: 8px;">${stats.total}</div>
        </div>
        <div style="background: white; padding: 20px; border-radius: 8px; border-top: 4px solid #3b82f6; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="font-size: 12px; color: #64748b; font-weight: bold;">البلاغات قيد المعالجة الحالية</div>
          <div style="font-size: 32px; font-weight: 800; color: #2563eb; margin-top: 8px;">${stats.open}</div>
        </div>
        <div style="background: white; padding: 20px; border-radius: 8px; border-top: 4px solid #ef4444; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="font-size: 12px; color: #64748b; font-weight: bold;">بحرجة متأخرة (تجاوزت الـ 3 ساعات)</div>
          <div style="font-size: 32px; font-weight: 800; color: #dc2626; margin-top: 8px;">${stats.overdue}</div>
        </div>
      </div>

      <!-- Live Dynamic Assignment Tracking Table -->
      <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">📋 قائمة البلاغات العاجلة الحالية</h3>
        <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 14px; margin-top: 12px;">
          <thead>
            <tr style="background: #f1f5f9; color: #475569;">
              <th style="padding: 10px;">الرقم الداخلي</th>
              <th style="padding: 10px;">رقم الوزارة</th>
              <th style="padding: 10px;">القسم المسؤول</th>
              <th style="padding: 10px;">المستهلك (العميل)</th>
              <th style="padding: 10px;">العد التنازلي للمهلة</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px; font-weight: bold; color: #0b2a5b;">TC-2026-00124</td>
              <td style="padding: 12px; color: #475569;">MOC-984120</td>
              <td style="padding: 12px;">قسم الصيانة (أجهزة منزلية)</td>
              <td style="padding: 12px;">عبدالله القحطاني</td>
              <td style="padding: 12px;"><span style="background: #fef3c7; color: #d97706; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">متبقي 22 دقيقة ⏳</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
