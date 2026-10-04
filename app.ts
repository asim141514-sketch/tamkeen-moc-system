<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>نظام إدارة بلاغات وزارة التجارة - تمكين الدولية</title>
  <link href="https://googleapis.com" rel="stylesheet">
  <style>
    :root { --navy: #0b2a5b; --slate-bg: #f8fafc; --text-main: #1e293b; }
    body { font-family: 'Tajawal', sans-serif; background-color: var(--slate-bg); margin: 0; padding: 0; color: var(--text-main); display: flex; min-height: 100vh; }
    
    /* صفحة تسجيل الدخول */
    .login-screen { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0f172a; display: flex; align-items: center; justify-content: center; z-index: 9999; }
    .login-box { background: white; padding: 40px; border-radius: 12px; width: 100%; max-width: 400px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); text-align: center; }
    
    /* الشريط الجانبي الكحلي */
    aside { width: 260px; background: var(--navy); color: white; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 4px 0 10px rgba(0,0,0,0.1); shrink-0; }
    .sidebar-header { padding: 24px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 12px; }
    .logo-box { background: white; color: var(--navy); padding: 6px 12px; border-radius: 6px; font-weight: 850; font-size: 14px; border: 2px solid #eab308; }
    .nav-links { padding: 16px 8px; display: flex; flex-direction: column; gap: 4px; }
    .nav-btn { display: flex; align-items: center; gap: 12px; padding: 14px 16px; color: #cbd5e1; text-decoration: none; border-radius: 8px; font-weight: 500; cursor: pointer; transition: 0.2s; }
    .nav-btn:hover, .nav-btn.active { background: rgba(255,255,255,0.1); color: white; font-weight: 700; }
    
    /* المحتوى الرئيسي */
    .main-container { flex: 1; display: flex; flex-direction: column; min-width: 0; }
    header { background: white; height: 70px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; padding: 0 32px; }
    .content-area { padding: 32px; flex: 1; overflow-y: auto; }
    
    .app-screen { display: none; }
    .app-screen.active { display: block; }
    
    /* التصاميم والبطاقات */
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 32px; }
    .card { background: white; padding: 24px; border-radius: 12px; border-top: 5px solid var(--navy); box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .card.open { border-top-color: #3b82f6; } .card.overdue { border-top-color: #ef4444; }
    .metric { font-size: 36px; font-weight: 850; color: var(--navy); margin-top: 8px; }
    
    .table-container, .form-container { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px; }
    table { width: 100%; border-collapse: collapse; text-align: right; font-size: 14px; }
    th { background: #f1f5f9; padding: 14px; font-weight: 700; color: #475569; border-bottom: 2px solid #e2e8f0; }
    td { padding: 16px; border-bottom: 1px solid #f1f5f9; }
    .badge { background: #fef3c7; color: #d97706; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; }
    
    .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
    .form-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
    label { font-size: 13px; font-weight: 700; color: #475569; }
    input, select, textarea { padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 8px; font-family: 'Tajawal', sans-serif; font-size: 14px; outline: none; }
    .btn-submit { background: var(--navy); color: white; border: none; padding: 12px 24px; font-weight: 700; border-radius: 8px; cursor: pointer; transition: 0.2s; width: fit-content; }
    .btn-submit:hover { background: #081e42; }
  </style>
</head>
<body>

  <!-- 🔐 شاشة تسجيل الدخول المفتوحة تلقائياً -->
  <div id="login-page" class="login-screen">
    <div class="login-box">
      <div style="background: var(--navy); color: white; padding: 6px 12px; border-radius: 6px; font-weight: 850; font-size: 18px; border: 2px solid #eab308; display:inline-block; margin-bottom:20px;">
        TAMKEEN <span style="color: #eab308;">★</span> الدولية
      </div>
      <h3 style="margin: 0 0 20px 0; color: #1e293b;">تسجيل الدخول للنظام المركزي للبلاغات</h3>
      <div class="form-group" style="text-align: right;">
        <label>اسم المستخدم</label>
        <input type="text" id="username" value="admin">
      </div>
      <div class="form-group" style="text-align: right;">
        <label>كلمة المرور</label>
        <input type="password" id="password" value="•••••">
      </div>
      <button class="btn-submit" style="width: 100%; margin-top: 10px;" onclick="login()">دخول للنظام 🚀</button>
    </div>
  </div>

  <!-- 🏢 الشريط الجانبي بعد الدخول -->
  <aside>
    <div class="sidebar-header">
      <div class="logo-box">TAMKEEN</div>
      <div>
        <h2 style="margin:0; font-size:14px; font-weight:700;">تمكين الدولية</h2>
        <span style="font-size:11px; opacity:0.7;">بوابة وزارة التجارة</span>
      </div>
    </div>
    <div class="nav-links">
      <div class="nav-btn active" onclick="switchScreen('dashboard')">📊 لوحة التحكم والتحليل</div>
      <div class="nav-btn" onclick="switchScreen('new-complaint')">➕ تسجيل بلاغ جديد</div>
      <div class="nav-btn" onclick="switchScreen('complaints-list')">📋 سجل البلاغات الشامل</div>
      <div class="nav-btn" onclick="switchScreen('reports')">📈 تقارير الامتثال الإحصائية</div>
    </div>
    <div style="padding: 16px; font-size: 11px; opacity: 0.6; border-top: 1px solid rgba(255,255,255,0.1);">مؤشر المتابعة الحركي SLA</div>
  </aside>

  <!-- المحتوى الرئيسي للموقع -->
  <div class="main-container">
    <header>
      <h2 id="page-title" style="margin:0; font-size:18px; color: var(--navy);">لوحة التحكم العامة</h2>
      <div style="font-size:13px; color:#64748b; font-weight: 700;">المستخدم الحركي: مأمون عاصم</div>
    </header>
    
    <div class="content-area">
      
      <!-- شاشة لوحة التحكم -->
      <div id="screen-dashboard" class="app-screen active">
        <div class="grid">
          <div class="card"><div style="font-size:12px; color:#64748b; font-weight:700;">إجمالي البلاغات</div><div class="metric">142</div></div>
          <div class="card open"><div style="font-size:12px; color:#64748b; font-weight:700;">قيد المعالجة النشطة</div><div class="metric" style="color:#2563eb;">24</div></div>
          <div class="card overdue"><div style="font-size:12px; color:#64748b; font-weight:700;">تجاوزت الـ 3 ساعات</div><div class="metric" style="color:#dc2626;">4</div></div>
        </div>
        <div class="table-container">
          <h3 style="margin-top:0; color:var(--navy);">⚠️ الحالات الحرجة الحالية (مؤشر SLA وزارة التجارة)</h3>
          <table>
            <thead>
              <tr><th>الرقم الداخلي</th><th>رقم الوزارة</th><th>القسم المسؤول</th><th>اسم العميل</th><th>العد التنازلي</th></tr>
            </thead>
            <tbody>
              <tr><td style="font-weight:700; color:var(--navy);">TC-2026-00124</td><td>MOC-984120</td><td>قسم الصيانة والدعم</td><td>عبدالله القحطاني</td><td><span class="badge">متبقي 22 دقيقة ⏳</span></td></tr>
              <tr><td style="font-weight:700; color:var(--navy);">TC-2026-00125</td><td>MOC-984331</td><td>الشحن والتوصيل</td><td>سارة الشمري</td><td><span class="badge" style="background:#fee2e2; color:#dc2626;">متأخر (-14 دقيقة) 🚨</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- شاشة تسجيل بلاغ جديد -->
      <div id="screen-new-complaint" class="app-screen">
        <div class="form-container">
          <h3 style="margin-top:0; color:var(--navy); border-bottom:1px solid #e2e8f0; padding-bottom:12px;">➕ تسجيل بلاغ جديد وارد من المنصة</h3>
          <div style="display:flex; flex-direction:column; gap:16px; margin-top:16px;">
            <div class="form-row">
              <div class="form-group"><label>رقم بلاغ الوزارة الأصلي *</label><input type="text" placeholder="مثال: 4921043"></div>
              <div class="form-group"><label>الأولوية والخطورة</label><select><option>متوسطة</option><option>عالية</option><option>عاجلة جداً</option></select></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label>اسم المستهلك (العميل) *</label><input type="text" placeholder="الاسم الكامل"></div>
              <div class="form-group"><label>رقم الجوال الذكي *</label><input type="text" placeholder="05xxxxxxxx"></div>
              <div class="form-group"><label>توجيه الشكوى للقسم المختص *</label><select><option>قسم الصيانة (أعطال الأجهزة والضمان)</option><option>المبيعات والأونلاين (الاسترجاع والفواتير)</option></select></div>
            </div>
            <div class="form-group"><label>نص المخالفة التفصيلي الصريح *</label><textarea rows="4" placeholder="اكتب تفاصيل الشكوى للبدء باحتساب المهملة فوراً..."></textarea></div>
            <button class="btn-submit" onclick="alert('تم حفظ بيانات البلاغ وتفعيله داخل نظام تمكين بنجاح! 🚀')">حفظ البلاغ وتفعيل العداد 🚀</button>
          </div>
        </div>
      </div>

      <!-- سجل البلاغات -->
      <div id="screen-complaints-list" class="app-screen">
        <div class="table-container">
          <h3 style="margin-top:0; color:var(--navy); margin-bottom:16px;">📋 السجل الموحد لبلاغات الأجهزة المنزلية</h3>
          <table>
            <thead>
              <tr><th>الرقم الداخلي</th><th>رقم الوزارة</th><th>القسم المسؤول</th><th>العميل</th><th>حالة البلاغ</th></tr>
            </thead>
            <tbody>
