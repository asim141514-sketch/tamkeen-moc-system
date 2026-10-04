<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>نظام إدارة بلاغات وزارة التجارة - تمكين الدولية</title>
  <link href="https://googleapis.com" rel="stylesheet">
  <style>
    body { font-family: 'Tajawal', sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    header { background: #0b2a5b; color: white; padding: 24px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-bottom: 32px; }
    .card { background: white; padding: 24px; border-radius: 12px; border-top: 5px solid #0b2a5b; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .card.open { border-top-color: #3b82f6; }
    .card.overdue { border-top-color: #ef4444; }
    .metric { font-size: 36px; font-weight: 850; color: #0b2a5b; margin-top: 8px; }
    .table-container { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    table { width: 100%; border-collapse: collapse; text-align: right; }
    th { background: #f1f5f9; padding: 12px; font-weight: 700; color: #475569; }
    td { padding: 16px; border-bottom: 1px solid #f1f5f9; }
    .badge { background: #fef3c7; color: #d97706; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; border: 1px solid #fde68a; }
  </style>
</head>
<body>
  <header>
    <h1 style="margin: 0; font-size: 28px;">نظام إدارة بلاغات وزارة التجارة المركزي</h1>
    <p style="margin: 6px 0 0 0; opacity: 0.8; font-size: 14px;">شركة تمكين الدولية للأجهزة المنزلية - لوحة التحكم والمتابعة الحية للأقسام</p>
  </header>

  <div class="grid">
    <div class="card">
      <div style="font-size: 13px; color: #64748b; font-weight: 700;">إجمالي البلاغات الواردة من المنصة</div>
      <div class="metric">142</div>
    </div>
    <div class="card open">
      <div style="font-size: 13px; color: #64748b; font-weight: 700;">البلاغات قيد المعالجة النشطة</div>
      <div class="metric" style="color: #2563eb;">24</div>
    </div>
    <div class="card overdue">
      <div style="font-size: 13px; color: #64748b; font-weight: 700;">بلاغات تجاوزت المهلة (متأخرة)</div>
      <div class="metric" style="color: #dc2626;">4</div>
    </div>
  </div>

  <div class="table-container">
    <h3 style="margin-top: 0; margin-bottom: 16px; font-size: 18px; color: #0b2a5b;">⚠️ البلاغات الحرجة الحالية (مؤشر SLA 3 ساعات)</h3>
    <table>
      <thead>
        <tr>
          <th>الرقم الداخلي</th>
          <th>رقم بلاغ الوزارة</th>
          <th>القسم المسؤول</th>
          <th>اسم العميل</th>
          <th>العد التنازلي النظامي</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight: 700; color: #0b2a5b;">TC-2026-00124</td>
          <td>MOC-984120</td>
          <td>قسم الصيانة والدعم الفني</td>
          <td>عبدالله القحطاني</td>
          <td><span class="badge">متبقي 22 دقيقة ⏳</span></td>
        </tr>
        <tr>
          <td style="font-weight: 700; color: #0b2a5b;">TC-2026-00125</td>
          <td>MOC-984331</td>
          <td>قسم الشحن والتوصيل</td>
          <td>سارة الشمري</td>
          <td><span class="badge" style="background:#fee2e2; color:#dc2626; border-color:#fca5a5;">متأخر (-14 دقيقة) 🚨</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
